import Image from "next/image"
import React from "react"

interface AvatarProps {
  src?: string | null | undefined
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className="rounded-full "
      src={src || "/images/placeholder.jpg"}
      alt="placeholder"
      width={30}
      height={30}
    />
  )
}

export default Avatar
