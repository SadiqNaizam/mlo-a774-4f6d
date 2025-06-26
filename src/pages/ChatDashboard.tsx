import React, { useState } from 'react';

// Layout and UI Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import ChatList from '@/components/ChatList';
import ChatWindow from '@/components/ChatWindow';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

const ChatDashboard: React.FC = () => {
  console.log('ChatDashboard loaded');

  // State to manage which chat is currently selected.
  // Initialize with '1' to select the first mock chat by default.
  const [selectedChatId, setSelectedChatId] = useState<string | null>('1');

  // Handler to update the selected chat when a user clicks on an item in the ChatList.
  const handleSelectChat = (id: string) => {
    console.log(`Switched to chat ID: ${id}`);
    setSelectedChatId(id);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950">
      <AppHeader />

      <main className="flex-grow overflow-hidden">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full w-full"
        >
          {/* Left Panel: Chat List */}
          <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
            <div className="flex h-full items-center justify-center p-0 border-r dark:border-gray-800">
               <ChatList 
                selectedChatId={selectedChatId}
                onSelectChat={handleSelectChat}
              />
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right Panel: Chat Window */}
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-0">
              <ChatWindow />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>

      {/* AppFooter is commented out to provide a more conventional full-screen chat UI */}
      {/* <AppFooter /> */}
    </div>
  );
};

export default ChatDashboard;