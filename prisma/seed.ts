import { PrismaClient } from '@prisma/client'
import{ faker }from '@faker-js/faker'

//this to communacate with prisma 
const prisma = new PrismaClient()

async function main() {
  await prisma.todo.createMany({
    data: Array.from({ length: 25 }, () => ({
      title: faker.lorem.words({max:5 , min:2}), 
      body: faker.lorem.words({min:1,max:10}), 
      completed: false,
      createAt: new Date(),
      user_id: '1',
    })),
  });
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })