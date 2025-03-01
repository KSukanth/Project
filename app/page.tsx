import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, UserPlus, LogIn, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-semibold">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="text-lg sm:text-xl">Auth Assessment</span>
          </div>
          <nav className="flex gap-2 sm:gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hover:text-primary text-sm sm:text-base px-2 sm:px-4">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base px-2 sm:px-4">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
          
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-16 relative">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 w-fit mb-2">
                <span>Next.js Authentication</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Secure Authentication for Modern Applications
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground md:text-xl max-w-[600px]">
                A complete authentication solution with JWT tokens, secure cookies, and protected routes for your Next.js projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto gap-2 shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-6">
                    <UserPlus className="h-4 w-4" />
                    Create Account
                  </Button>
                </Link>
                <Link href="/login" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 hover:bg-primary/5 transition-colors duration-300 px-4 sm:px-6">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-background bg-primary/80`} style={{ opacity: 1 - (i * 0.15) }}></div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium">1,000+</span> developers trust our authentication
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <div className="relative h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-10 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
                <div className="absolute inset-20 rounded-full bg-gradient-to-r from-primary/60 to-secondary/60 blur-xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
                <div className="absolute inset-32 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-background" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container py-12 sm:py-16 md:py-24 relative px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Complete Authentication Solution
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground md:text-lg max-w-[800px] mx-auto">
              Everything you need to implement secure, production-ready authentication in your Next.js applications.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
                title: "Secure Authentication",
                description: "JWT-based authentication with secure HTTP-only cookies and refresh token rotation for maximum security."
              },
              {
                icon: <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>,
                title: "Protected Routes",
                description: "Client and server-side route protection with middleware for comprehensive access control across your application."
              },
              {
                icon: <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>,
                title: "User Management",
                description: "Complete user flows including registration, login, logout, password reset, and account management features."
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3 sm:gap-4 text-center p-4 sm:p-6 rounded-xl border bg-card hover:shadow-md transition-all duration-300">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="container py-12 sm:py-16 md:py-24 bg-muted/50 rounded-2xl sm:rounded-3xl my-6 sm:my-8 mx-4 sm:mx-6 lg:mx-8">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to implement secure authentication?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground md:text-lg">
                Get started with our comprehensive authentication solution today and secure your Next.js application in minutes.
              </p>
              <ul className="space-y-2">
                {[
                  "JWT-based authentication",
                  "Secure HTTP-only cookies",
                  "Refresh token rotation",
                  "Protected routes",
                  "User management"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/register" className="w-full sm:w-auto inline-block">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <div className="relative w-full max-w-[300px] sm:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10"></div>
                <div className="bg-card p-4 sm:p-8 rounded-xl border shadow-lg">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-semibold">Sign Up</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Create an account to get started</p>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 sm:h-10 w-full rounded-md bg-muted/70"></div>
                      <div className="h-8 sm:h-10 w-full rounded-md bg-muted/70"></div>
                      <div className="h-8 sm:h-10 w-full rounded-md bg-muted/70"></div>
                      <div className="h-8 sm:h-10 w-1/2 rounded-md bg-primary/80 mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 sm:py-8 md:py-12 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2 font-semibold">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-sm sm:text-base">Auth Assessment</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Auth Assessment. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 items-center">
            <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
