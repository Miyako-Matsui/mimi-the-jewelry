import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Items from './Items'
import Item from './Item'
import Menu from './Menu'
import Title from './Title'

import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <div>
      {' '}
      <Menu />
      <Title />
      <CartProvider>
        <Routes>
          <Route index path="/" element={<Items />} />
          <Route path="items/:id" element={<Item />} />
        </Routes>{' '}
      </CartProvider>
    </div>
  )
}

export default App
