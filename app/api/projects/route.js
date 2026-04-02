// app/api/projects/route.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const projects = await prisma.project.findMany({
    include: {
      technologies: {
        include: {
          technology: true
        }
      }
    },
    orderBy: {
      year: 'desc'
    }
  })

  return Response.json(projects)
}