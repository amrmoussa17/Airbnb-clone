"use client"

import { IconType } from "react-icons"

interface ListingCategoryProps {
  icon: IconType
  label: string
  description: string
}
const ListingCategory = ({
  icon: Icon,
  label,
  description,
}: ListingCategoryProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <Icon size={40} className="text-neutral" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-neutral-500 font-light">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default ListingCategory
