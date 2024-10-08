"use client"
import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "./Avatar"
import MenuItem from "./MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModel"
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"
import useRentModal from "@/app/hooks/useRentModal"
import { useRouter } from "next/navigation"

interface UserMenuProps {
  currentUser?: User | null
}
const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const rentModal = useRentModal()

  const onRent = () => {
    if (!currentUser) {
      return loginModal.onOpen()
    }
    rentModal.onOpen()
  }
  return (
    <div className="relative">
      <div className="flex items-center gap-3 ">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
                absolute
                top-12
                right-0
                w-[40vw]
                md:w-3/4
                rounded-xl
                bg-white
                overflow-hidden
                text-sm                    
            "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem label="Airbnb my home" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="SignUp" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
