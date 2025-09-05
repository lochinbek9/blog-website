import {
    Avatar, Button, Dropdown, DropdownDivider, DropdownHeader,
    DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink,
    NavbarToggle, TextInput
  } from "flowbite-react";
  import { Link, useLocation } from "react-router-dom";
  import { AiOutlineSearch } from "react-icons/ai";
  import { FaMoon } from "react-icons/fa";
  import { useSelector, useDispatch } from "react-redux";
  import { toggleTheme } from "../redux/theme/themeSlice";
  import { useCallback } from "react";
  
  function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
  
    const handleToggleTheme = useCallback(() => {
      dispatch(toggleTheme());
      console.log("theme toggled");
    }, [dispatch]);
  
    return (
      <Navbar className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold">
        <Link to="/">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            LODE-X'
          </span>
          BLOG
        </Link>
  
        <form className="flex gap-2">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
  
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
  
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={handleToggleTheme} // ✅ faqat klikda dispatch
          >
            <FaMoon />
          </Button>
  
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" rounded img={currentUser.profilePicture} />}
            >
              <DropdownHeader>
                <span className="block text-sm font-medium truncate">@{currentUser.username}</span>
                <span className="block text-sm font-medium">@{currentUser.email}</span>
              </DropdownHeader>
              <Link to="/dashboard?tab=profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <DropdownDivider />
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button outline>Sign In</Button>
            </Link>
          )}
  
          <NavbarToggle />
        </div>
  
        <NavbarCollapse>
          <NavbarLink as={Link} to="/" active={path === "/"}>Home</NavbarLink>
          <NavbarLink as={Link} to="/about" active={path === "/about"}>About</NavbarLink>
          <NavbarLink as={Link} to="/projects" active={path.startsWith("/projects")}>Projects</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    );
  }
  
  export default Header;
  