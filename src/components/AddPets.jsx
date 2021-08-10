import React, { useState } from 'react'
import uuid from 'react-uuid'
import { useHistory } from 'react-router-dom'

import {
    FormControl,
    FormLabel,
    FormHelperText,
    HStack,
    Radio,
    RadioGroup,
    Flex,
    Heading,
    VStack,
    Text,
    Input,
    Button,
    omitThemingProps,
} from "@chakra-ui/react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload'

const AddPets = ({ mascota }) => {

    const history = useHistory()
    let fileUrl = []

    const [data, setData] = useState({
        id: "",
        imageUrl: "",
        imageAlt: "",
        name: "",
        breed: ""
    })

    const { id, imageUrl, imageAlt, name, breed, categoria } = data

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        fileUpload(file).then(response => {
            document.getElementById('imageUrl').value = response;
            fileUrl = response
            console.log(response);
        }).catch(error => {
            console.log(error.message);
        })
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const agregarProducto = async () => {


        try {
            const resultado = await axios.post(`https://app-api-geek.herokuapp.com/${categoria}`, {
                id: `${categoria} - ${uuid()}`,
                imageUrl: fileUrl,
                imageAlt: `${categoria}-Image`,
                name,
                breed
            });

            if (resultado.status === 201) {
                Swal.fire(
                    'Producto Creado',
                    'El producto se creo correctamente',
                    'success'
                )
                history.push('/')
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }

    }




    return (
        <Flex direction="column" mt="2" alignItems="center">
            <Heading mt="5" mb="5">
                Adopta una adorable mascota
            </Heading>
            <Text mb="5" textStyle="h3">Agregar mascotas</Text>
            <VStack
                spacing={4}
                align="center">

                <FormControl id="first-name" isRequired>
                    <FormLabel>Imagen</FormLabel>
                    <Input
                        id="fileSelector"
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}

                    />

                    <Input
                        type="button"
                        className="btn border-bottom shadow-sm"
                        onClick={handlePictureClick}
                        value="Picture"
                    />

                </FormControl>
                <Input
                    placeholder="breed"
                    name="imageUrl"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={handleInputChange} />


                <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        placeholder="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl id="first-name" isRequired>
                    <FormLabel>Breed</FormLabel>
                    <Input
                        placeholder="breed"
                        name="breed"
                        value={breed}
                        onChange={handleInputChange} />
                </FormControl>

                <FormControl as="fieldset" alignItems="center">
                    <FormLabel as="legend">Categoria</FormLabel>
                    <RadioGroup defaultValue="Itachi">
                        <HStack spacing="24px">
                            <Radio
                                name="categoria"
                                value="dogs"
                                onChange={handleInputChange}
                            >
                                Dogs
                            </Radio>
                            <Radio
                                name="categoria"
                                value="cats"
                                onChange={handleInputChange}
                            >
                                Cats
                            </Radio>
                        </HStack>
                    </RadioGroup>

                    <Button
                        colorScheme="blue"
                        onClick={() => agregarProducto()}>
                        Enviar</Button>
                </FormControl>

            </VStack>
        </Flex>
    )
}

export default AddPets
