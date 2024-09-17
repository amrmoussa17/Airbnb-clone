"use client"
import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "./Avatar"
import MenuItem from "./MenuItem"
import useRegisterModal from "@/app/hooks/useRegisterModal"

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const registerModal = useRegisterModal()
  return (
    <div className="relative">
      <div className="flex items-center gap-3 ">
        <div
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
            <Avatar />
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
            <MenuItem label="Login" onClick={() => {}} />
            <MenuItem label="SignUp" onClick={registerModal.onOpen} />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
