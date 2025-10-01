"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Number with 3D effect */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none select-none">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-peach-400 to-peach-600 drop-shadow-[0_8px_0_rgba(251,207,232,0.3)]">
              4
            </span>
            <span className="inline-block relative">
              {/* Dessert illustration in the middle zero */}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-pink-300 drop-shadow-[0_8px_0_rgba(216,180,254,0.3)]">
                0
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative animate-float">
                  <img
                    src="/cute-korean-dessert-bingsu-illustration.jpg"
                    alt="Lost dessert"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-sage-400 to-sage-600 drop-shadow-[0_8px_0_rgba(187,247,208,0.3)]">
              4
            </span>
          </h1>
        </div>

        {/* Error message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Oops! This dessert doesn't exist
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Looks like this page melted away. Don't worry, we have plenty of other sweet treats waiting for you!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-peach-500 hover:bg-peach-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 hover:border-peach-400 hover:bg-peach-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/menu">
              <Search className="mr-2 h-5 w-5" />
              Browse Menu
            </Link>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-40">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach-300 to-peach-400 blur-xl animate-pulse" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 blur-xl animate-pulse delay-75" />
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage-300 to-sage-400 blur-xl animate-pulse delay-150" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  )
}
