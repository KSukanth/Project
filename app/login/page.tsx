import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { createServerSupabase } from "@/lib/supabase/server";
import { Shield, ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login | Auth Assessment",
  description: "Login to your account and access your dashboard",
};

export default async function LoginPage() {
  try {
    const supabase = createServerSupabase();
    
    // Fetch session safely
    const { data: { session }, error } = await supabase.auth.getSession();

    // If user is already logged in, redirect to dashboard
    if (session?.user) {
      redirect("/dashboard");
    }

    if (error) {
      console.error("Supabase session error:", error.message);
    }
  } catch (error) {
    console.error("Unexpected error fetching session:", error);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl opacity-70"></div>
        
        <div className="w-full max-w-md relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl -z-10"></div>
          
          <div className="bg-card border rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-col items-center space-y-2 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
              <p className="text-sm text-muted-foreground text-center max-w-xs">
                Enter your credentials to access your account and continue your secure journey
              </p>
            </div>
            
            <LoginForm />

            <div className="mt-8 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-muted-foreground">
                    Need help?
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 text-center text-sm">
                <Link 
                  href="/register" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Don&apos;t have an account? Sign Up
                </Link>
                <Link 
                  href="/reset-password" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-foreground transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
