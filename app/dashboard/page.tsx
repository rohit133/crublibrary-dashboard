"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import MainLayout from "@/components/layout/MainLayout";

// add them
import { ApiInfoCard } from "@/components/dashboard/ApiInfoCard";
import { UsageGuideCard } from "@/components/dashboard/UsageGuideCard";
import { CreditStatusCard } from "@/components/dashboard/CreditStatusCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/");
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </MainLayout>
    );
  }

  if (!user) return null;

  return (
    <MainLayout>
      {/* Hero */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {user.name}
        </h1>
        <p className="">
          Manage your API credentials and monitor your usage
        </p>
      </div>

      {/* Body */}
      <Tabs defaultValue="credits" className="space-y-6">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="credits" className="font-semibold">Credits</TabsTrigger>
          <TabsTrigger value="api" className="font-semibold">API Credentials</TabsTrigger>
          <TabsTrigger value="docs" className="font-semibold">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="credits" className="space-y-6">
          <CreditStatusCard />
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <ApiInfoCard />
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <UsageGuideCard />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}
