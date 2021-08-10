import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
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
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useForm } from '../hooks/useForm'

const EditPets = (props) => {

    const imageUrlRef = useRef('');
    const nameRef = useRef('');
    const breedRef = useRef('');


    const history = useHistory()
    const [mascotas, setMascotas] = useState([])
    const [values, handleInputChange, reset] = useForm(mascotas)

    const { id, imageUrl, imageAlt, name, breed, categoria } = values

    

    useEffect(() => {
      mascotaInfo()
        .then(img => setMascotas(img))
    }, [])

  
    const mascotaInfo = async () => {
      const url = `https://app-api-geek.herokuapp.com/${props.match.params.name}/${props.match.params.id}`
      const resp = await axios.get(url)
      const data = await resp.data
      console.log("Editar",data)
      return data
    }

    const editarProducto = async e => {
        
        const nuevoImg = imageUrlRef.current.value,
            nuevoName = nameRef.current.value,
            nuevoBreed = breedRef.current.value

        const editarMascota = {
            id,
            imageUrl:nuevoImg, 
            imageAlt, 
            name:nuevoName, 
            breed:nuevoBreed, 
            categoria
        }

        
        try {
            const url = `https://app-api-geek.herokuapp.com/${props.match.params.name}/${props.match.params.id}`;
            const resultado = await axios.put(url, editarMascota);

            if (resultado.status === 200) {
                Swal.fire(
                    'Producto Editado',
                    'El producto se editó correctamente',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }
      
        history.push('/');

    }


    return (
        <Flex direction="column" mt="2" alignItems="center">
            <Heading mt="5" mb="5">
                Adopta una adorable mascota
            </Heading>
            <Text mb="5" textStyle="h3">Editar mascotas</Text>
            <VStack
                spacing={4}
                align="center">

                <FormControl id="" isRequired>
                    <FormLabel>Imagen</FormLabel>
                    <Input
                        name="imageUrl"
                        ref={imageUrlRef}
                        defaultValue={mascotas.imageUrl}
                        onChange={handleInputChange}
                    />

                </FormControl>

                <FormControl id="" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        name="name"
                        ref={nameRef}
                        defaultValue={mascotas.name}
                        onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl id="" isRequired>
                    <FormLabel>Breed</FormLabel>
                    <Input
                        name="breed"
                        ref={breedRef}
                        defaultValue={mascotas.breed}
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
                                defaultChecked={(categoria === 'dogs')} 
                            >
                                Dogs
                            </Radio>
                            <Radio
                                name="categoria"
                                value="cats"
                                
                                defaultChecked={(categoria === 'cats')} 
                                onChange={handleInputChange}
                            >
                                Cats
                            </Radio>
                        </HStack>
                    </RadioGroup>
                    <Button 
                    colorScheme="blue"
                    onClick={editarProducto}
                  >
                        Enviar</Button>
                </FormControl>

            </VStack>
        </Flex>
    )
}

export default EditPets
