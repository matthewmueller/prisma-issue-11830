import { PrismaClient, Prisma } from "@prisma/client"
import { ObjectId } from "mongodb"
const prisma = new PrismaClient()

async function main() {
  // const categories = await prisma.category.findMany()
  const categories = await prisma.category.findRaw({
    filter: {
      name: "Fashion",
    },
    // filter: {
    //   _id: { $eq: new ObjectId("61e20bbd7fef3b66f439373c") },
    // } as any,
  })
  console.log(categories)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
