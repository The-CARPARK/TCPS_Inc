import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Download, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { EmailSubscription } from "@shared/schema";

interface SubscriptionsResponse {
  subscriptions: EmailSubscription[];
}

export default function AdminSignups() {
  const [copiedEmails, setCopiedEmails] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Admin - Email Signups";
  }, []);

  const { data, isLoading, error } = useQuery<SubscriptionsResponse>({
    queryKey: ['/api/subscriptions'],
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Email copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const copyAllEmails = async () => {
    if (!data?.subscriptions) return;
    
    const emailList = data.subscriptions.map(sub => sub.email).join(', ');
    await copyToClipboard(emailList);
    
    toast({
      title: "All emails copied!",
      description: `${data.subscriptions.length} email addresses copied to clipboard`,
    });
  };

  const downloadCSV = () => {
    if (!data?.subscriptions) return;
    
    const csvContent = [
      ['Email', 'Subscribed At'],
      ...data.subscriptions.map(sub => [
        sub.email,
        new Date(sub.subscribedAt).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tcps-signups-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: "CSV file download has begun",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading signups...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading signups</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  const subscriptions = data?.subscriptions || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Email Signups</h1>
            <p className="text-gray-400">
              {subscriptions.length} {subscriptions.length === 1 ? 'person' : 'people'} signed up for The Car Park Society newsletter
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={copyAllEmails}
              disabled={subscriptions.length === 0}
              className="bg-red-600 hover:bg-red-700"
              data-testid="button-copy-all"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy All Emails
            </Button>
            
            <Button 
              onClick={downloadCSV}
              disabled={subscriptions.length === 0}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
              data-testid="button-download-csv"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CSV
            </Button>
          </div>
        </div>

        {/* Quick Instructions */}
        <Card className="bg-gray-900 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Mail className="w-5 h-5 mr-2" />
              How to Forward to connect@thecarparksociety.xyz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-300 space-y-2">
              <p>1. Click "Copy All Emails" to copy all addresses to your clipboard</p>
              <p>2. Open your email client (Gmail, Outlook, etc.)</p>
              <p>3. Create a new email to <strong>connect@thecarparksociety.xyz</strong></p>
              <p>4. Paste the copied emails into the BCC field</p>
              <p>5. Send your newsletter or updates!</p>
            </div>
          </CardContent>
        </Card>

        {/* Signups List */}
        {subscriptions.length === 0 ? (
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="text-center py-8">
              <p className="text-gray-400 text-lg">No signups yet</p>
              <p className="text-gray-500 mt-2">People who sign up for the newsletter will appear here.</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">All Signups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {subscriptions.map((subscription, index) => (
                  <div 
                    key={subscription.id}
                    className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
                    data-testid={`signup-row-${index}`}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-white" data-testid={`email-${index}`}>
                        {subscription.email}
                      </p>
                      <p className="text-sm text-gray-400" data-testid={`date-${index}`}>
                        Signed up: {new Date(subscription.subscribedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    
                    <Button
                      onClick={() => copyToClipboard(subscription.email)}
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-white"
                      data-testid={`copy-button-${index}`}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}