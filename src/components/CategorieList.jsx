import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Box, Wrap, Image, Text, WrapItem } from "@chakra-ui/react";

const CategorieList = ({ tipo }) => {
  const [mascotas, setMascotas] = useState([])

  useEffect(() => {
    mascotaInfo(tipo)
      .then(img => setMascotas(img))
  }, [tipo])

  const mascotaInfo = async (categoria) => {
    const url = `https://app-api-geek.herokuapp.com/${categoria}`
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  }


  return (
    <Wrap spacing="40px" justify="center">
      {
        mascotas.map(mascota => {
          return (
            <WrapItem key={mascota.id}>
            
              <Link to="">
                <Box maxW="sm" rounded="lg" overflow="hidden">
                  <Image
                    height={400}
                    width={250}
                    src={mascota.imageUrl}
                    alt={mascota.name}
                    opacity={0.6}
                    _hover={{
                      opacity: "1",
                    }}
                  />
                  <Text color="brand.white" textStyle="h5" mt={-50} ml={5}>
                    {mascota.name}
                  </Text>
                  <Text color="brand.white" textStyle="h6" ml={5}>
                    {mascota.breed}
                  </Text>
                </Box>
              </Link>
            </WrapItem>
          )
        })
      }

    </Wrap>
  )
}

export default CategorieList
