"use client";
import React from "react";
import { CopyButton } from "@/components/ui/copyButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";

export const UsageGuideCard = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Library Usage Guide</CardTitle>
        <CardDescription>
          Follow these steps to use the CRUD Library in your projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="install">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="install" className="font-medium">Installation</TabsTrigger>
            <TabsTrigger value="config" className="font-medium">Configuration</TabsTrigger>
            <TabsTrigger value="usage" className="font-medium">Usage</TabsTrigger>
          </TabsList>

          {/* Installation Guide Tab section */}
          <TabsContent value="install" className="pt-4 pb-2">
            <div className="space-y-4">
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm">
                  Install the library using npm, yarn, or pnpm:
                </p>
                <CopyButton text="npm install rohit-formpilot-crud" />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  {`npm install rohit-formpilot-crud`}
                </code>
              </pre>
            </div>
          </TabsContent>

          {/* Configuration Guide Tab section */}
          <TabsContent value="config" className="pt-4 pb-2">
            <div className="space-y-4">
              {/* .env config */}
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm">
                  Configure your environment variables in a .env file:
                </p>
                <CopyButton
                  text={`CRUD_API_URL=http://your-api-url.com\nCRUD_API_KEY=your-api-key`}
                />
              </div>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                  <code className="font-mono text-sm">
                    <div>CRUD_API_URL=http://your-api-url.com</div>
                    <div>CRUD_API_KEY=your-api-key</div>
                  </code>
                </pre>
              </div>

              {/* initialize file */}
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm">
                  Then initialize the library in your application:
                </p>
                <CopyButton
                  text={`import CrudLibrary from 'your-name-crud';\nconst crudLib = new CrudLibrary(\n   process.env.CRUD_API_KEY,\n   process.env.CRUD_API_URL\n);`}
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  <div>{`import { createCrudLibrary } from "rohit-formpilot-crud";`}</div>
                  <div>const crudLib = createCrudLibrary(</div>
                  <div>&nbsp;&nbsp;process.env.CRUD_API_KEY,</div>
                  <div>&nbsp;&nbsp;process.env.CRUD_API_URL</div>
                  <div>);</div>
                </code>
              </pre>
            </div>
          </TabsContent>

          {/* Usage Guide Tab section */}
          <TabsContent value="usage" className="pt-4 pb-2">
            <div className="space-y-4">
              <h3 className="text-base font-bold">
                Use the library methods for CRUD operations:
              </h3>
              {/* POST */}
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm font-bold">POST</p>
                <CopyButton
                  text={`const response1 = await crudLib.create({\n   value: 0.5,\n   txHash: "32424"\n});`}
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  <div>const response1 = await crudLib.create(&#123; </div>
                  <div>&nbsp;&nbsp;value: 0.5, </div>
                  <div>&nbsp;&nbsp;txHash: &quot;32424&quot; </div>
                  <div>&#125;);</div>
                </code>
              </pre>

              {/* Get */}
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm font-bold">GET</p>
                <CopyButton
                  text={`const response2 = await crudLib.get("32872")`}
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  const response2 = await crudLib.get(&quot;32872&quot;)
                </code>
              </pre>

              {/* PATCH */}
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm font-bold">PATCH</p>
                <CopyButton
                  text={`const response3 = await crudLib.update("32872", { value: 0.9 });`}
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  const response3 = await crudLib.update(&quot;32872&quot;,
                  &#123; value: 0.9 &#125;);
                </code>
              </pre>

              {/* DELETE */}
              <div className="flex item-center justify-between mb-2">
                <p className="text-sm font-bold">DELETE</p>
                <CopyButton
                  text={`const response5 = await crudLib.delete("32872");`}
                />
              </div>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
                  const response5 = await crudLib.delete(&quot;32872&quot;);
                </code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
