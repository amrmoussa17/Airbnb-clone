import axios from "axios"
import { useRouter } from "next/navigation"
import { SafeUser } from "../types"
import useLoginModal from "./useLoginModel"
import toast from "react-hot-toast"

interface Props {
  listingId: string
  currentUser?: SafeUser | null
}

const useFavorite = ({ listingId, currentUser }: Props) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const list = currentUser?.favoriteIds || []
  const hasFavorited = list.includes(listingId)

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!currentUser) {
      return loginModal.onOpen()
    }
    try {
      let request
      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${listingId}`)
      } else {
        request = () => axios.post(`/api/favorites/${listingId}`)
      }
      await request()
      router.refresh()
      toast.success("Success")
    } catch (error) {
      toast.error("something went wrong")
    }
  }
  return {
    hasFavorited,
    toggleFavorite,
  }
}
export default useFavorite
