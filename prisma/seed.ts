import { PrismaClient } from '@prisma/client'
import{ faker }from '@faker-js/faker'
import { title } from 'process';
//this to communacate with prisma 
const prisma = new PrismaClient()

async function main() {
  await prisma.todo.createMany({
    data: Array.from({ length: 25 }, () => ({
      title: faker.lorem.words({max:5 , min:2}), // يمكنك إلغاء التعليق إذا كنت تريد إضافة اسم ثابت
      body: faker.lorem.words({min:1,max:10}), // يمكنك استخدام صورة عشوائية
      completed: false,
      createAt: new Date(),
      user_id: '1', // يمكنك استخدام صورة عشوائية
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