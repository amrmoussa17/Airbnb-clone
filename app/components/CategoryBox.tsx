"useClient"
import { useRouter, useSearchParams } from "next/navigation"
import { IconType } from "react-icons"
import qs from "query-string"

interface CategoryBoxProps {
  label: string
  icon: IconType
  selected?: boolean
}
const CategoryBox = ({ label, selected, icon: Icon }: CategoryBoxProps) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }
    if (params?.get("category") === label) {
      delete updatedQuery.category
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    )
    router.push(url)
  }
  return (
    <div
      onClick={handleClick}
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition 
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="text-md font-medium">{label}</div>
    </div>
  )
}

export default CategoryBox
