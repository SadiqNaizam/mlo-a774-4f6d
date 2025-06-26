import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, User, LogOut } from 'lucide-react';

const AppHeader: React.FC = () => {
  console.log('AppHeader loaded');

  // A real implementation would get user info from context or a hook
  const userInitials = 'WA'; 

  const handleLogout = () => {
    // In a real app, this would clear auth tokens and redirect
    console.log('User initiated logout');
    // Example: navigate('/login');
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/chat-dashboard" className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">WhatsApp Lite</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="@user" />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">WhatsApp User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;