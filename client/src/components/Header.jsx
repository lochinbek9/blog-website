import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import {Link, useLocation} from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
    const path = useLocation().pathname;
  return (
         <Navbar className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <Link to="/">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">LODE-X'</span>
                BLOG
            </Link>
            <form className="flex gap-2">
                <TextInput type="text" placeholder="Search..." rightIcon={AiOutlineSearch} className="hidden lg:inline"/>
            </form>
                <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                    <AiOutlineSearch/>
                </Button>
                <div className="flex gap-2 md:order-2">
                    <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                        <FaMoon/>
                    </Button>
                    <Link to="/sign-in">
                        <Button pill> Sign In</Button>
                    </Link>
                    <NavbarToggle/>
                </div>
        
            <NavbarCollapse>
                        <NavbarLink active={path === "/"} as={"div"}>
                            <Link to="/">
                                Home
                            </Link>
                        </NavbarLink>
                        <NavbarLink active={path === "/about"} as={"div"}>
                            <Link to="/about">
                               About
                            </Link>
                        </NavbarLink>
                        <NavbarLink>
                            <Link to="/projects" active={path === "projects"} as={"div"}>
                              Projects
                            </Link>
                        </NavbarLink>
                    </NavbarCollapse>
         </Navbar>
  )
}

export default Header