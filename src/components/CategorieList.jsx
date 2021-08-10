import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Box, Wrap, Image, Text, WrapItem, fadeConfig } from "@chakra-ui/react";
import axios from 'axios';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import AddPets from './AddPets';

const CategorieList = ({ tipo }) => {

  const history = useHistory()
  const [mascotas, setMascotas] = useState([])

  useEffect(() => {
    mascotaInfo(tipo)
      .then(img => setMascotas(img))
  }, [tipo])

  const mascotaInfo = async (categoria) => {
    const url = `https://app-api-geek.herokuapp.com/${categoria}`
    const resp = await axios.get(url)
    const data = await resp.data
    console.log(data)
    return data
  }

  const eliminarProducto = id => {
    console.log('eliminando', id);

    // TODO: Eliminar los registros
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "Un Platillo eliminado no se puede recuperar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar'

    }).then(async (result) => {
      if (result.value) {
        try {

          const url = `https://app-api-geek.herokuapp.com/${tipo}/${id}`;
          const resultado = await axios.delete(url);
          if (resultado.status === 200) {
            Swal.fire(
              'Eliminado!',
              'El Producto se ha eliminado',
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
    })
  }


  const handleDelete = (id) => {
    eliminarProducto(id)
  }

  const handleEdit = (mascota) => {
    console.log(mascota)
    history.push('/edit')
  }



  return (
    <Wrap spacing="40px" justify="center">
      {
        mascotas.map(mascota => {
          return (
            <WrapItem key={mascota.id}>

              <Link to="" >
               
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
              <Box maxW="sm" rounded="lg" overflow="hidden" alignItems="center" mb="0">
                
                <DeleteIcon w={6} h={6} color="red.500"
                  onClick={() => handleDelete(mascota.id)}
                  
                />

                <Link
                  to={`/edit/${tipo}/${mascota.id}`}
                  className="btn btn-success mr-2"
                ><EditIcon  w={6} h={6} color="green.500"/></Link>

              </Box>
            </WrapItem>
          )
        })
      }

    </Wrap>
  )
}

export default CategorieList
