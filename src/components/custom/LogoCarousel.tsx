"use client"

import { LogoCarousel, type Logo } from "@/components/logo-carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Home() {
  const columnCount = 5;

  const logos: Logo[] = [
    { name: "Html", id: 1, img: "/images/stackicon/html.svg" },
    { name: "css", id: 2, img: "/images/stackicon/css.png" },
    { name: "js", id: 3, img: "/images/stackicon/js.png" },
    { name: "react", id: 4, img: "/images/stackicon/react.png" },
    { name: "tailwind", id: 5, img: "/images/stackicon/tailwind.png" },
    { name: "nextjs", id: 6, img: "/images/stackicon/next.js.svg" },
    { name: "MySQL", id: 7, img: "/images/stackicon/mysql.svg" },
    { name: "mongodb", id: 8, img: "/images/stackicon/mongodb.svg" },
    { name: "linux", id: 9, img: "/images/stackicon/linux.svg" }
  ]

  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-4xl font-bold text-white mb-8">
        Mon Tech Stack
      </h1>
      <Card className="bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl">
        <CardHeader>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8">
          <div className="flex justify-center">
            <LogoCarousel logos={logos} columnCount={columnCount} />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

