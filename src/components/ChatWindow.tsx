import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from '@/components/ui/separator';
import ChatMessage from '@/components/ChatMessage';
import MessageInputBar from '@/components/MessageInputBar';

// Define the types for our data structures
interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  status: 'online' | 'offline';
}

interface Message {
  id: string;
  text: string;
  timestamp: string;
  type: 'sent' | 'received';
}

// Mock data for initial display
const mockContact: Contact = {
  id: 'user-2',
  name: 'Alex Doe',
  avatarUrl: 'https://i.pravatar.cc/150?u=alex_doe',
  status: 'online',
};

const mockMessages: Message[] = [
  { id: 'msg-1', text: "Hey! Are you available for the project review meeting tomorrow?", timestamp: "10:00 AM", type: 'received' },
  { id: 'msg-2', text: "Hi! Yes, I am. What time is it scheduled for?", timestamp: "10:01 AM", type: 'sent' },
  { id: 'msg-3', text: "It's at 2 PM. I've sent you the calendar invite.", timestamp: "10:02 AM", type: 'received' },
  { id: 'msg-4', text: "Perfect, got it. I'll be there.", timestamp: "10:03 AM", type: 'sent' },
];

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  console.log('ChatWindow loaded');

  // Effect to scroll to the bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = (messageText: string) => {
    if (messageText.trim() === '') return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text: messageText,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: 'sent',
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    console.log(`New message sent: "${messageText}"`);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
      {/* Chat Header */}
      <div className="flex items-center p-3 border-b border-gray-200 dark:border-gray-700">
        <Avatar className="h-10 w-10">
          <AvatarImage src={mockContact.avatarUrl} alt={mockContact.name} />
          <AvatarFallback>{mockContact.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{mockContact.name}</p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            {mockContact.status === 'online' && (
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            )}
            {mockContact.status}
          </div>
        </div>
      </div>

      <Separator />

      {/* Message Area */}
      <div className="flex-grow overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="p-4 space-y-4">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.text}
                timestamp={msg.timestamp}
                type={msg.type}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      
      <Separator />

      {/* Message Input Bar */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <MessageInputBar onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;