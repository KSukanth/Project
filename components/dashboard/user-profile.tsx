import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@supabase/supabase-js";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarClock, Mail, Shield, User as UserIcon } from "lucide-react";

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  // Get initials from email for avatar
  const getInitials = (email: string | undefined) => {
    if (!email) return "U";
    return email.charAt(0).toUpperCase();
  };

  // Format date with better readability
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "Not available";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="h-16 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      <CardHeader className="relative pb-2">
        <div className="absolute -top-10 left-6 rounded-full border-4 border-background">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
              {getInitials(user.email)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="pt-6 pl-24">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{user.email?.split('@')[0] || "User"}</CardTitle>
              <CardDescription className="flex items-center gap-1.5 mt-1">
                <Mail className="h-3.5 w-3.5" />
                {user.email}
              </CardDescription>
            </div>
            <Badge variant="outline" className="bg-primary/5 text-primary">
              Active Account
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 pt-4">
        <Separator />
        
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <UserIcon className="h-4 w-4 text-primary" />
              User ID
            </div>
            <p className="text-sm font-mono bg-muted/50 p-2 rounded-md overflow-x-auto">
              {user.id}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              Authentication
            </div>
            <div className="flex flex-wrap gap-2">
              {user.app_metadata?.provider && (
                <Badge variant="secondary" className="text-xs">
                  {user.app_metadata.provider}
                </Badge>
              )}
              {user.email_confirmed_at && (
                <Badge variant="secondary" className="text-xs">
                  Email verified
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CalendarClock className="h-4 w-4 text-primary" />
              Last Sign In
            </div>
            <p className="text-sm">
              {formatDate(user.last_sign_in_at)}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <CalendarClock className="h-4 w-4 text-primary" />
              Account Created
            </div>
            <p className="text-sm">
              {formatDate(user.created_at)}
            </p>
          </div>
        </div>
        
        <div className="rounded-lg bg-muted/30 p-4 mt-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <p className="text-sm font-medium">Account Status</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Your account is active and in good standing. You have full access to all features and services.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
