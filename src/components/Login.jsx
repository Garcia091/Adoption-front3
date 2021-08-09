import { Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
    return (
        <Flex direction="column" mt="2" alignItems="center">
            <Heading mt="5" mb="5">
                Inicio de sesión
            </Heading>
            <VStack  
                spacing={5}
                align="center" >
            <FormControl id="first-name" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
            </FormControl>

            <FormControl id="first-name" isRequired>
                <FormLabel>password</FormLabel>
                <Input type="password" />
            </FormControl>
            <Button colorScheme="purple">Ingresar</Button>
            </VStack>
            

        </Flex>
    )
}

export default Login
