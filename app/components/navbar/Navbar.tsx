"use client"
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm py-4 border-b-[1px]">
      <Container>
        <div
          className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
        "
        >
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
