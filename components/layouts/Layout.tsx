import Head from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../ui';

interface Props {
  title?: string;
}

 //solo se renderiza en el frontend
 const origin = (typeof window === 'undefined' ? '' : window.location.origin)

export const Layout:FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name='author' content='Ricardo Jaramillo' />
            <meta name='description' content={`Información sobre el pokémon ${title}`} />
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la página de ${title}`} />
            <meta property="og:image" content={`${origin}/open-graph/banner.png`} />
        </Head>

        <NavBar/>

        <main style={{
          padding: '0px 20px'
        }}>
          {children}
        </main>
    </>
  )
}
