import React from 'react';
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  /**
   * The text content of the message.
   */
  message: string;
  /**
   * The timestamp to display for the message (e.g., "10:30 AM").
   */
  timestamp: string;
  /**
   * The variant determines the styling and alignment of the message bubble.
   * 'sent': An outgoing message, typically aligned to the right.
   * 'received': An incoming message, typically aligned to the left.
   */
  variant: 'sent' | 'received';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, timestamp, variant }) => {
  console.log('ChatMessage loaded');

  const isSent = variant === 'sent';

  return (
    <div
      className={cn(
        "flex w-full mb-2",
        isSent ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex flex-col rounded-lg p-3 max-w-[80%] shadow-sm",
          isSent
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
        )}
      >
        <p className="text-sm break-words">{message}</p>
        <span
          className={cn(
            "text-xs self-end mt-1",
            isSent ? "text-blue-200" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;