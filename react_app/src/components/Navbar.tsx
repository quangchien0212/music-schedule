import React from 'react'

type Props = {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sticky w-screen top-0'>
      </nav>
    </header>
  )
}

export default Navbar
