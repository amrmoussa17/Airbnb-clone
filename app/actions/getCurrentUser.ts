import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { prisma } from "@/app/libs/db"

export async function getSession() {
  return getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()

    if (!session?.user?.email) {
      return null
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })
    if (!currentUser) {
      return null
    }
    const safeUser = {
      ...currentUser,
      emailVerified: currentUser.emailVerified?.toISOString() || null,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    }
    return safeUser
  } catch (error) {
    return null
  }
}
