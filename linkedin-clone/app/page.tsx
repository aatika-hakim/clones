import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Welcome to your professional community
                </h1>
                <div className="space-y-4">
                  <Button
                    className="w-full justify-start gap-2 text-lg"
                    variant="outline"
                    size="lg"
                  >
                    <Image
                      src="/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                    Continue with Google
                  </Button>
                  <Button
                    className="w-full justify-start text-lg"
                    variant="outline"
                    size="lg"
                  >
                    Sign in with email
                  </Button>
                  <div className="text-sm text-gray-500">
                    By clicking Continue, you agree to LinkedIn's{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      User Agreement
                    </Link>
                    ,{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    , and{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      Cookie Policy
                    </Link>
                    .
                  </div>
                  <div className="text-sm">
                    New to LinkedIn?{" "}
                    <Link href="/join" className="text-blue-600 hover:underline">
                      Join now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/placeholder.svg"
                  alt="Professional working"
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-t bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Explore collaborative articles
            </h2>
            <p className="mt-4 text-gray-500">
              We're unlocking community knowledge in a new way. Experts add insights
              directly into each article, started with the help of AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "Marketing",
                "Public Administration",
                "Healthcare",
                "Engineering",
                "IT Services",
                "Sustainability",
                "Business Administration",
                "Telecommunications",
                "HR Management",
              ].map((topic) => (
                <Link
                  key={topic}
                  href={`/topics/${topic.toLowerCase().replace(" ", "-")}`}
                  className="rounded-full border bg-white px-4 py-2 text-sm hover:bg-gray-50"
                >
                  {topic}
                </Link>
              ))}
              <Link
                href="/topics"
                className="rounded-full border bg-white px-4 py-2 text-sm text-blue-600 hover:bg-gray-50"
              >
                Show all
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

