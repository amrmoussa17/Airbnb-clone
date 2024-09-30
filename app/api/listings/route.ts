import { NextResponse } from "next/server"
import { prisma } from "@/app/libs/db"
import getCurrentUser from "@/app/actions/getCurrentUser"

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()
  if (!currentUser) {
    return NextResponse.error()
  }

  const body = await request.json()

  const {
    category,
    location,
    imgSrc,
    roomCount,
    bathroomCount,
    guestCount,
    title,
    description,
    price,
  } = body

  const listing = await prisma.listing.create({
    data: {
      category,
      locationValue: location.value,
      imageSrc: imgSrc,
      roomCount,
      bathroomCount,
      guestCount,
      title,
      description,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  })
  return NextResponse.json(listing)
}
