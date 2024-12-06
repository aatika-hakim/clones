"use client"

import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Profile() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/signin')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <Card className="mb-6">
            <CardHeader className="relative">
              <div className="h-32 bg-gray-200"></div>
              <Avatar className="absolute bottom-0 left-4 transform translate-y-1/2 h-24 w-24 border-4 border-white">
                <AvatarImage src="/placeholder.svg" alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="pt-16">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-gray-500">Software Engineer at Tech Co.</p>
                  <p className="text-sm text-gray-500 mt-1">San Francisco Bay Area</p>
                </div>
                <Button>Edit profile</Button>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">About</h2>
                <p className="mt-2 text-gray-600">
                  Passionate software engineer with 5+ years of experience in web development.
                  Specialized in React, Node.js, and cloud technologies.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <h2 className="text-lg font-semibold">Experience</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Senior Software Engineer</h3>
                  <p className="text-sm text-gray-500">Tech Co. • Full-time</p>
                  <p className="text-sm text-gray-500">Jan 2020 - Present • 3 yrs 5 mos</p>
                  <p className="mt-2 text-gray-600">
                    Leading development of scalable web applications using React and Node.js.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Software Engineer</h3>
                  <p className="text-sm text-gray-500">Previous Co. • Full-time</p>
                  <p className="text-sm text-gray-500">Jun 2017 - Dec 2019 • 2 yrs 7 mos</p>
                  <p className="mt-2 text-gray-600">
                    Developed and maintained various web applications and services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Education</h2>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="font-semibold">University of Technology</h3>
                <p className="text-sm text-gray-500">Bachelor's degree, Computer Science</p>
                <p className="text-sm text-gray-500">2013 - 2017</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

