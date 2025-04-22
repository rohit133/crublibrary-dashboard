import axios from "axios";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { MailIcon, RefreshCw } from 'lucide-react';
import { useAuth } from "@/contexts/AuthContext";
import { Progress } from '@/components/ui/progress';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";


export const CreditStatusCard = () => {
    const { user, refreshUserData, loading } = useAuth();
    if (!user) {
        return null;
    }

    const totalCredits = user.creditsUsed + user.credits;
    const percentUsed = totalCredits > 0 ? (user.creditsUsed / totalCredits) * 100 : 0;
    const canRecharge = !user.recharged;



    const handleRechargeRequest = async () => {
        if (!user) return;
        try {
            // Call our backend API instead of using CrudLibrary directly
            const response = await axios.post("/api/credits/recharge", {
                userId: user.id
            });
            
            if (response.data.success) {
                toast.success("Recharge request sent successfully. Please wait for 2 min.");
                
                // Simulate email sending
                setTimeout(() => {
                    refreshUserData();
                    toast.success(response.data.message);    
                },20000)
                
                // Optionally, you can refresh user data here
                // await refreshUserData(); // Refresh user data after recharge
            } else {
                toast.error(response.data.message || "Failed to recharge credits");
            }
        } catch (error: any) {
            console.error('Recharge error:', error);
            const errorMessage = error?.response?.data?.message || error?.message || 'An error occurred while processing your recharge request';
            toast.error(errorMessage);
        }
    };

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="text-xl">API Credits</CardTitle>
                <div className="flex items-center justify-between">
                <CardDescription>Monitor your API usage and remaining credits</CardDescription>
                <Button variant="ghost" size="sm" onClick={refreshUserData}> <RefreshCw className="h-4 w-4 mr-2" />Refresh</Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {/* Hero */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">
                                    {user.creditsUsed} used
                                </span>
                                <span className="text-sm font-medium">
                                    {user.credits} credits remaining
                                </span>
                            </div>
                            <Progress value={percentUsed}  />
                        </div>

                        {/* Body */}
                        <div className="p-4 rounded-md border">
                            <h4 className="font-medium mb-2">Need More Credits?</h4>
                            <p className="text-sm mb-4">
                                Send an email to <span className="font-medium">hirings@formpilot.org</span> with the subject "Please recharge my credits"
                            </p>
                            {canRecharge ? (
                                <Button variant="outline" size="sm" className="flex items-center gap-2 text-white-700 hover:text-gray-800 hover:bg-gray-100" onClick={handleRechargeRequest}>
                                    <MailIcon className="h-4 w-4" />
                                    <span>Simulate Email Request</span>
                                </Button>
                            ) : (
                                <div className="text-sm text-red-600 p-2 bg-red-50 rounded-md">You've already recharged once. No additional recharges are available.</div>
                            )}
                        </div>
                    </>
                )}
            </CardContent>
            <CardFooter>
                <p className="text-sm">
                    Each API request consumes 1 credit from your account.
                </p>
            </CardFooter>
        </Card>
    );
};
