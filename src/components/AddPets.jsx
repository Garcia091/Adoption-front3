import React from 'react'
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
} from "@chakra-ui/react"

const AddPets = () => {
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
                    <Input placeholder="Imagen" />
                </FormControl>

                <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="name" />
                </FormControl>

                <FormControl id="first-name" isRequired>
                    <FormLabel>Breed</FormLabel>
                    <Input placeholder="breed" />
                </FormControl>

                <FormControl as="fieldset" alignItems="center">
                    <FormLabel as="legend">Categoria</FormLabel>
                    <RadioGroup defaultValue="Itachi">
                        <HStack spacing="24px">
                            <Radio value="dogs">Dogs</Radio>
                            <Radio value="cats">Cats</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormHelperText>Select only </FormHelperText>
                </FormControl>
            </VStack>
        </Flex>
    )
}

export default AddPets
