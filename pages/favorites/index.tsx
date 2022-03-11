import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import {NoFavorites} from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons) 
  }, [])
  

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />) 
          : (
            <FavoritePokemons pokemons={favoritePokemons}/>
          )
      }
      
    </Layout>
  )
}

export default FavoritesPage