import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async (nameOrId:string) => {

  try {
    const res = await fetch(`${pokeApi}/pokemon/${nameOrId}`)
    const data: Pokemon = await res.json()
    
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
  } catch (error) {
    return null;
  }
}