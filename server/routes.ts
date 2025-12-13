import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const parsed = insertLeadSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      const existingLead = await storage.getLeadByEmail(parsed.data.email);
      if (existingLead) {
        return res.json({ success: true, message: "Already subscribed" });
      }

      const lead = await storage.createLead(parsed.data);
      return res.json({ success: true, lead: { id: lead.id, email: lead.email } });
    } catch (error) {
      console.error("Error creating lead:", error);
      return res.status(500).json({ error: "Failed to save email" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      return res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      return res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  return httpServer;
}
