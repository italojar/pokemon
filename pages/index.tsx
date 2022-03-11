import { Card, Grid, Row, Text } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  console.log(pokemons)

  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />          
          ))
        }
      </Grid.Container>
    </Layout>  
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${pokeApi}/pokemon?limit=151`)
  const data: PokemonListResponse = await res.json()  
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
  }))
  
  return {
    props: {
      pokemons
    },
  }
}

export default HomePage
