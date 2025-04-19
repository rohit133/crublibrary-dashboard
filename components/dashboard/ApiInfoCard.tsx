import React, { use, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Clipboard, Check, Eye, EyeOff } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"

export const ApiInfoCard = () => {
    const { user } = useAuth();
    const [apiKeyCopied, setApiKeyCopied] = useState(false);
    const [apiUrlCopied, setApiUrlCopied] = useState(false);
    const [showApiKey, setShowApiKey] = useState(false);

    if (!user) {
        return null;
    }

    const handleCopyApiKey = () => {
        navigator.clipboard.writeText(user.apiKey);
        setApiKeyCopied(true);
        toast.success('API key copied to clipboard');
        setTimeout(() => setApiKeyCopied(false), 2000);
    }

    const handleCopyApiUrl = () => {
        navigator.clipboard.writeText(user.apiUrl);
        setApiUrlCopied(true);
        toast.success('API URL copied to clipboard');
        setTimeout(() => setApiUrlCopied(false), 2000);
    }

    return (
        <Card className="shadow-md card-gradient">
            <CardHeader>
                <CardTitle className="text-xl"> Your API Credentials </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* API URL */}
                <div>
                    <div className="flex item-center justify-between mb-2">
                        <label className="block text-sm font-medium"> API URL</label>
                        <Button variant="ghost" size="sm" onClick={handleCopyApiUrl} className="h-8 px-2">
                            {apiUrlCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                        </Button>
                    </div>
                    <div className="p-3 rounded-md border border-gray-200 font-mono text-sm break-all">
                        {user.apiUrl}
                    </div>
                </div>

                {/* API KEY */}
                <div>
                    <div className="flex item-center justify-between mb-2">
                        <label className="block text-sm font-medium"> API KEY</label>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setShowApiKey(!showApiKey)} className="h-8 px-2">
                                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleCopyApiKey} className="h-8 px-2">
                                {apiKeyCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                    <div className="p-3 rounded-md border border-gray-200 font-mono text-sm break-all">
                        {showApiKey ? user.apiKey : '••••••••••••••••••••••••••••••'}
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-sm">
                    Keep your API key secure and don't share it publicly.
                </p>
            </CardFooter>
        </Card>
    );
};

