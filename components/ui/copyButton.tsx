import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check, Clipboard } from "lucide-react";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-8 px-2"
    >
      {isCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
    </Button>
  );
};