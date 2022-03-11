import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: '78vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text h1 size={24} >No hay Pokémons favoritos</Text>
        <Image 
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
          alt='No favoritos'
          width={250}
          height={250}
          css={{
            opacity: '0.1'
          }}
        />
      </Container> 
  )
}
