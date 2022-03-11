import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import React, { useState } from 'react'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';
import confeti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/';

interface Props {
  pokemon: Pokemon
}

const PokemonNamePage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setisInFavorites] = useState(localFavorites.existPokemonInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites)

    if(!isInFavorites) {
        confeti({
          zIndex: 999,
          particleCount: 460,
          spread: 160,
          angle: -90,
          origin: {
            x: 0.9,
            y: 0.1,
          }
        })
    }
  }

  return (
    <Layout title={pokemon.name} >
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '0px 8px' }}>
            <Card.Header css={{ direction: 'row', justifyContent: 'flex-start', gap: 2 }}>
              <Text h1 size={36} transform='capitalize'>{pokemon.name}</Text>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width={'100%'}
                height={196}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card >
            <Card.Header css={{ direction: 'row', justifyContent: 'end', gap: 2 }}>
              <Button
                color={'success'}
                ghost={ !isInFavorites }
                size="sm"
                onClick={onToggleFavorite}
              >
                { isInFavorites ? 'Favorito' : 'Agregar a Favotitos' }
                
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={24}>Sprites:</Text>
              <Container direction='row' display='inline-flex' justify='center' alignItems='center' 
              alignContent='center' gap={2} >
                <Image src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                />
                <Image src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                />
                <Image src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                />
                <Image src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const res = await fetch(`${pokeApi}/pokemon?limit=151`)
  const data:PokemonListResponse = await res.json()
  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonNames.map(name => ({ 
      params: { name } // {id : id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  //console.log(ctx)
  const { params } = ctx
  const { name } = params as { name: string }

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    },
  }
}

export default PokemonNamePage