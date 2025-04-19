import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { MailIcon } from 'lucide-react';
import CrudLibrary from '@/lib/CrudLibrary';
import { useAuth } from "@/contexts/AuthContext";
import { Progress } from '@/components/ui/progress';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"

export const CreditStatusCard = () => {
    const { user, refreshUserData } = useAuth();
    if (!user) {
        return null;
    }

    const totalCredits = user.creditsUsed + user.creditsRemaining;
    const percentUsed = totalCredits > 0 ? (user.creditsUsed / totalCredits) * 100 : 0;

    const handleRechargeRequest = async () => {
        if (!user) return;
        try {
            const library = new CrudLibrary(user.apiKey, user.apiUrl);
            const response = await library.requestCreditRecharge();
            toast.success(response.message);
            refreshUserData();
        } catch (error: any) {
            console.error('Recharge error:', error);
            toast.error(error?.message || 'An error occurred while processing your recharge request');
        }
    };

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="text-xl">API Credits</CardTitle>
                <CardDescription>Monitor your API usage and remaining credits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* Hero */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                            {user.creditsRemaining} credits remaining
                        </span>
                        <span className="text-sm text-gray-500">
                            {user.creditsUsed} used
                        </span>
                    </div>
                    <Progress value={percentUsed} className="h-2" />
                </div>

                {/* Body */}
                <div className="p-4 rounded-md border">
                    <h4 className="font-medium mb-2">Need More Credits?</h4>
                    <p className="text-sm mb-4">
                        Send an email to <span className="font-medium">hirings@formpilot.org</span> with the subject "Please recharge my credits"
                    </p>
                    {user.canRecharge ? (
                        <Button variant="outline" size="sm" className="flex items-center gap-2  text-white-700 hover:text-gray-800 hover:bg-gray-100" onClick={handleRechargeRequest}>
                            <MailIcon className="h-4 w-4" />
                            <span>Simulate Email Request</span>
                        </Button>
                    ) : (
                        <div className="text-sm text-red-600 p-2 bg-red-50 rounded-md">You've already recharged once. No additional recharges are available.</div>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-sm">
                    Each API request consumes 1 credit from your account.
                </p>
            </CardFooter>
        </Card>
    )
}