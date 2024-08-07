import React from 'react'
import Hero from '../components/Hero'
import { customFetch } from '../utils'
import { FeaturedProducts } from '../components'

const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data

  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
