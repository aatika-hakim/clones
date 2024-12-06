"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, NewspaperIcon, Users2Icon, GraduationCapIcon, BriefcaseIcon, GamepadIcon, BellIcon, MessageSquareIcon, HomeIcon } from 'lucide-react'
import { useAuth } from './auth-provider'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  const { user, logout } = useAuth()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <LinkedinIcon className="h-8 w-8 text-blue-600" />
        </Link>
        {user ? (
          <>
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/feed" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <Link href="/my-network" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
                <Users2Icon className="h-5 w-5" />
                My Network
              </Link>
              <Link href="/jobs" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
                <BriefcaseIcon className="h-5 w-5" />
                Jobs
              </Link>
              <Link href="/messaging" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
                <MessageSquareIcon className="h-5 w-5" />
                Messaging
              </Link>
              <Link href="/notifications" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
                <BellIcon className="h-5 w-5" />
                Notifications
              </Link>
            </div>
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">View profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        ) : (
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/articles" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
              <NewspaperIcon className="h-5 w-5" />
              Articles
            </Link>
            <Link href="/people" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
              <Users2Icon className="h-5 w-5" />
              People
            </Link>
            <Link href="/learning" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
              <GraduationCapIcon className="h-5 w-5" />
              Learning
            </Link>
            <Link href="/jobs" className="flex flex-col items-center text-sm text-gray-500 hover:text-black">
              <BriefcaseIcon className="h-5 w-5" />
              Jobs
            </Link>
            <div className="ml-4 flex items-center space-x-2">
              <Link href="/join">
                <Button variant="ghost">Join now</Button>
              </Link>
              <Link href="/signin">
                <Button variant="outline">Sign in</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

