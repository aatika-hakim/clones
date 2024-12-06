"use client"

import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ThumbsUp, MessageSquare, Share2, Send } from 'lucide-react'
import { useAuth } from "@/components/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Feed() {
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src="/placeholder.svg" alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold text-center mt-4">{user.name}</h2>
                  <p className="text-sm text-gray-500 text-center">{user.email}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Connections: <span className="font-bold">500+</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Views of your post: <span className="font-bold">300</span>
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Start a post" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">Photo</Button>
                  <Button variant="ghost">Video</Button>
                  <Button variant="ghost">Event</Button>
                  <Button variant="ghost">Write article</Button>
                </CardFooter>
              </Card>
              {[1, 2, 3].map((post) => (
                <Card key={post} className="mb-6">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">John Doe</h3>
                        <p className="text-sm text-gray-500">Software Engineer at Tech Co.</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>Just finished an exciting project using React and Next.js! 🚀 #webdevelopment #reactjs #nextjs</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <h3 className="font-bold">LinkedIn News</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Top companies hiring now</li>
                    <li>• The future of remote work</li>
                    <li>• Tech industry layoffs continue</li>
                    <li>• New AI breakthroughs</li>
                    <li>• Sustainability in business</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

