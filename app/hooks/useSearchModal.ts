import { create } from "zustand"

interface SearchModalInterface {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useSearchModal = create<SearchModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useSearchModal
