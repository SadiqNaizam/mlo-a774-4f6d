import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Define the structure for a single chat object
export interface Chat {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
}

// Define the props for the ChatList component
interface ChatListProps {
  chats: Chat[];
  selectedChatId?: string | null;
  onSelectChat: (id: string) => void;
}

// Mock data for demonstration purposes
const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Alice',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    lastMessage: 'Hey, how are you?',
    timestamp: '10:30 AM',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Bob',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    lastMessage: 'See you tomorrow!',
    timestamp: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Charlie',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    lastMessage: 'Sounds good, thanks!',
    timestamp: '9:15 AM',
    unreadCount: 0,
  },
  {
    id: '4',
    name: 'Diana',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    lastMessage: 'Can you send me the file?',
    timestamp: '8:50 AM',
    unreadCount: 5,
  },
  {
    id: '5',
    name: 'Project Group',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
    lastMessage: 'Bob: Let’s meet at 3 PM.',
    timestamp: '7:00 AM',
    unreadCount: 1,
  },
];

const ChatList: React.FC<Partial<ChatListProps>> = ({
  chats = mockChats, // Use mock data as default
  selectedChatId,
  onSelectChat,
}) => {
  console.log('ChatList loaded');

  const handleChatClick = (id: string) => {
    if (onSelectChat) {
      onSelectChat(id);
    }
  };
  
  // A fallback in case onSelectChat is not provided in a storybook-like environment
  const handleDummyClick = (id: string) => {
    console.log(`Selected chat: ${id}`);
  };

  return (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col gap-1 p-2">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat ? handleChatClick(chat.id) : handleDummyClick(chat.id)}
            className={cn(
              "flex items-center gap-4 p-3 rounded-lg text-left w-full transition-colors",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              selectedChatId === chat.id ? "bg-gray-200 dark:bg-gray-700" : "bg-transparent"
            )}
          >
            <Avatar>
              <AvatarImage src={chat.avatarUrl} alt={chat.name} />
              <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {chat.lastMessage}
              </p>
            </div>
            <div className="flex flex-col items-end text-xs text-gray-400 space-y-1">
              <span>{chat.timestamp}</span>
              {chat.unreadCount > 0 && (
                <Badge className="w-5 h-5 flex items-center justify-center p-0 bg-green-500 text-white">
                  {chat.unreadCount}
                </Badge>
              )}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatList;