"use client"
import { User } from "@prisma/client"
import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import Categories from "./Categories"

interface NavbarProps {
  currentUser?: User | null
}
const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-white shadow-sm py-4 border-b-[1px] z-10">
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
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
      <Categories />
    </nav>
  )
}

export default Navbar
