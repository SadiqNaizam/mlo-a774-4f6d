import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

interface MessageInputBarProps {
  onSendMessage: (message: string) => void;
}

const MessageInputBar: React.FC<MessageInputBarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  console.log('MessageInputBar loaded');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      console.log('Sending message:', trimmedMessage);
      onSendMessage(trimmedMessage);
      setMessage(''); // Reset input after sending
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send message on Enter key press, but allow new lines with Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="p-4 border-t bg-white sticky bottom-0">
      <form onSubmit={handleSendMessage} className="flex items-start gap-3">
        <Textarea
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="flex-1 resize-none bg-gray-100 border-gray-300 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-blue-500"
        />
        <Button
          type="submit"
          disabled={!message.trim()}
          size="icon"
          aria-label="Send Message"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default MessageInputBar;