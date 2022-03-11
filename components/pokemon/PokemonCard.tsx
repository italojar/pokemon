import { Card, Grid, Row, Text } from '@nextui-org/react'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => { // ({ pokemon: {id, img, name} })

    const router = useRouter();

    const clickPokemon = () => {
        router.push(`/name/${pokemon.name}`)
    }

    return (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
            <Card 
                hoverable
                clickable
                onClick={clickPokemon}
            >
                <Card.Body css={{ p: 2 }}>
                    <Card.Image
                        src={pokemon.img}
                        width='100%'
                        height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{pokemon.name}</Text>
                        <Text>#{pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
