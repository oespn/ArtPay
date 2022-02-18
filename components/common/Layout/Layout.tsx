import Image from 'next/image'
import { AiFillPropertySafety } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoChatbubblesSharp } from 'react-icons/io5'

import DropDownMenu from '../../Dashboard/DropDownMenu'



const Layout = ({children} : { children: React.ReactNode }) => {
  // TODO: Hide header when in a Modal workflow i.e. NewQuote or ReviewUpdate where the only actions are those on the modal form
  // TODO: Implement dropdown menu and sideslider menu
  // TODO: Wallet signout transition to -> main screen for wallet connect
  
  //const isClient = 0;

  return (
    <main className="bg-gray-100 min-h-screen md:min-h-90vh container md:border md:border-gray-200 md:shadow-lg md:max-w-sm md:max-h-150 overflow-y-auto mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
      <header className="border-b-2 border-gray-300 bg-white text-darky">
      </header>

      {children}
    </main>
  )
}

export default Layout
