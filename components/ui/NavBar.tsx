import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link';
import React from 'react'

export const NavBar = () => {

  const { theme } = useTheme();
  //console.log(theme);

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '8px',
      backgroundColor: theme?.colors.accents1.value,
    }}>
      <NextLink href={'/'} passHref>
        <Link>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}>
            {/*
          <Text style={{
          margin: '0 auto',
          padding: '20px 50px'}}>Favoritos</Text>

          <Text style={{
          margin: '0 auto',
          padding: '20px 50px'}}>Favoritos</Text>

          <Text style={{
          margin: '0 auto',
          padding: '20px 50px'}}>Favoritos</Text>

          <Text style={{
          margin: '0 auto',
          padding: '20px 50px'}}>Favoritos</Text>
          */}
            <Image
              src={'/logo-pokemon.png'}
              alt='Logo Pokémon'
              width={'130px'}
              height={'50px'} />
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
              alt='Logo Pokémon'
              width={'80px'}
              height={'80px'} />
          </div>
        </Link>
      </NextLink>


      <Spacer css={{ flex: 1 }} />

      <NextLink href={'/favorites'} passHref>
        <Link>
          <Text h2 style={{
            padding: '20px',
            fontSize: '18px'
      }   }>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
