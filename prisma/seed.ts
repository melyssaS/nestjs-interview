import { PrismaClient, Role } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: 'admin@test.com',
            password: await hash('test', 10),
            role: Role.ADMIN
        },
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })