import { PrismaClient, Prisma } from "@prisma/client"
import { ObjectId } from "mongodb"
const prisma = new PrismaClient()

async function main() {
  // const categories = await prisma.category.findMany()
  const categories = await prisma.category.findRaw({
    filter: {
      name: "Fashion",
    },

    // One of the below should work, probably the _id since this is a raw
    // query that maps to the underlying _id:

    // filter: {
    //   _id: { $eq: new ObjectId("61e20bbd7fef3b66f439373b") },
    // } as any,

    // filter: {
    //   _id: { $eq: "61e20bbd7fef3b66f439373b" },
    // } as any,

    // filter: {
    //   id: { $eq: new ObjectId("61e20bbd7fef3b66f439373b") },
    // } as any,

    // filter: {
    //   id: { $eq: "61e20bbd7fef3b66f439373b" },
    // } as any,
  })
  console.log(categories)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
