import type { NextPage } from 'next'
import { ReactNode } from 'react'

interface IndexProps {
  children: ReactNode
}

const Index: NextPage<IndexProps> = ({}) => {
  return (
    <div>
      This repo is bootstraped with NextJS, Typescript, TailwindCss and Prisma
      (SQLite)
    </div>
  )
}

export default Index
