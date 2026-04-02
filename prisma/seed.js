import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Web Profile CobraDev",
        slug: "web-profile-cobradev",
        year: 2026,
        image: "/project/P_2026_CobraDev.png",
        excerpt: "Website company profile CobraDev...",
        description: "Penjelasan lengkap CobraDev...",
        githubUrl: "https://github.com/...",
      },
      {
        title: "Xaviala",
        slug: "xaviala",
        year: 2026,
        image: "/project/P_2026_Xaviala.png",
        excerpt: "Platform Xaviala...",
        description: "Penjelasan lengkap Xaviala...",
      }
    ]
  })
}

main()