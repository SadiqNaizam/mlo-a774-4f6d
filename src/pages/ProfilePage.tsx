import React, { useState } from 'react';

// Custom Layout Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

// Shadcn UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfilePage = () => {
  console.log('ProfilePage loaded');

  // Placeholder state for form fields to make the component interactive
  const [displayName, setDisplayName] = useState('WhatsApp User');
  const [email] = useState('user@example.com'); // Typically read-only

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving changes:', { displayName });
    // In a real application, this would trigger an API call to update the user profile.
    // A toast notification could be shown on success/error.
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <AppHeader />
      
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>Manage your account settings and set your public display name.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveChanges} className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-24 w-24">
                    {/* Placeholder image from an online service */}
                    <AvatarImage src="https://i.pravatar.cc/150?u=whatsappliteuser" alt="User Avatar" />
                    <AvatarFallback>WU</AvatarFallback>
                  </Avatar>
                  <Button type="button" variant="outline">Change Picture</Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your display name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  disabled // Email is usually not changeable from the profile page
                  readOnly
                  className="cursor-not-allowed"
                />
              </div>

              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <AppFooter />
    </div>
  );
};

export default ProfilePage;