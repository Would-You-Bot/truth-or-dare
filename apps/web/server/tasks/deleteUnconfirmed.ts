import { prisma } from '../../helpers/prisma'

export async function deleteUnconfirmedUsers() {
  const time = 15 // minutes
  const olderThan = new Date(Date.now() - time * 60 * 1000)

  try {
    await prisma.waitlistWeb.deleteMany({
      where: {
        isVerified: false,
        createdAt: {
          lt: olderThan
        }
      }
    })
  } catch (error) {
    throw new Error(
      `Error deleting unconfirmed users: ${JSON.stringify(error, null, 2)}`
    )
  }
}
