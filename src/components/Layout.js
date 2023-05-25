import React from 'react'
import Temp from './Temp'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
