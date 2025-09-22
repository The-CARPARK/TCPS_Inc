import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriptionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertEmailSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getEmailSubscription(validatedData.email);
      if (existingSubscription) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter." 
        });
      }

      const subscription = await storage.createEmailSubscription(validatedData);
      
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter!",
        subscription: { 
          email: subscription.email,
          subscribedAt: subscription.subscribedAt 
        }
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          message: "Please provide a valid email address." 
        });
      }
      
      res.status(500).json({ 
        message: "An error occurred while subscribing. Please try again." 
      });
    }
  });

  // Get all subscriptions (for admin purposes)
  app.get("/api/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllEmailSubscriptions();
      res.json({ subscriptions });
    } catch (error) {
      res.status(500).json({ 
        message: "An error occurred while fetching subscriptions." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
