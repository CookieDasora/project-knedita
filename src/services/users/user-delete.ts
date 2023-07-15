import prisma from '../../db'

async function userDeleteService (userId: string): Promise<Object | Error> {
  const user = await prisma.user.findFirst({ where: { id: userId } })

  if (user === null) {
    return new Error('User not found')
  }

  if (user.id !== userId) {
    return new Error('Forbidden')
  }

  await prisma.post.deleteMany({
    where: {
      authorId: user.id
    }
  })

  await prisma.user.deleteMany({
    where: {
      id: userId
    }
  })

  return {}
}

export default userDeleteService