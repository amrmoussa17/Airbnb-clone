import useSearchModal from "@/app/hooks/useSearchModal"
import React from "react"
import { BiSearch } from "react-icons/bi"

const Search = () => {
  const searchModal = useSearchModal()
  return (
    <div
      onClick={searchModal.onOpen}
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
    "
    >
      <div
        className="
            flex
            justify-between
            items-center
        "
      >
        <div
          className="
            text-sm
            font-semibold
            px-6
            "
        >
          Anywhere
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            flex-1
            border-x-[1px]
            "
        >
          Any week
        </div>
        <div
          className="
            text-sm
            pl-6
            pr-2
         text-gray-600
           flex
           items-center
           gap-3
            "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div className="bg-rose-500 rounded-full text-white p-2">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
