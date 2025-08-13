import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import {Link} from "react-router-dom"

function Header() {
  return (
         <Navbar className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <Link to="/">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">LODE-X'</span>
                BLOG
            </Link>
         </Navbar>
  )
}

export default Header