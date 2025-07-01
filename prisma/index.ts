import { PrismaClient } from '@prisma/client'
import{ faker }from '@faker-js/faker'
import { title } from 'process';
//this to communacate with prisma 
const prisma = new PrismaClient()

async function main() {
  await prisma.todo.createMany({
    data: Array.from({ length: 25 }, () => ({
      title: faker.lorem.text(), // يمكنك إلغاء التعليق إذا كنت تريد إضافة اسم ثابت
      body: faker.lorem.paragraph(), // يمكنك استخدام صورة عشوائية
      
      // createAt: faker.date.recent(), // توليد تاريخ حديث
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