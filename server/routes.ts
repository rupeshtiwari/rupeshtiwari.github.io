import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function sendWelcomeEmail(email: string, source: string) {
  const isLeadMagnet = source === "lead_magnet" || source === "exit_popup";
  
  const subject = isLeadMagnet 
    ? "Your FAANG Interview Blueprint is Ready!" 
    : "Welcome to Weekly Interview Tips!";
  
  const htmlContent = isLeadMagnet ? `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #C9A227;">Your Free Guide is Ready!</h1>
      <p>Hi there,</p>
      <p>Thank you for downloading <strong>The FAANG Interview Blueprint</strong>. This 42-page guide contains the exact framework I used to crack interviews at Google, Microsoft, and AWS.</p>
      
      <p><strong>What's Inside:</strong></p>
      <ul>
        <li>The 5 behavioral questions every FAANG interviewer asks</li>
        <li>System design template that works for any company</li>
        <li>My personal 12-week preparation timeline</li>
        <li>Salary negotiation scripts that added $50K+ to client offers</li>
      </ul>
      
      <p style="margin: 30px 0;">
        <a href="https://www.rupeshtiwari.com/faang-interview-blueprint.html" 
           style="background: linear-gradient(to right, #C9A227, #D4AF37); color: #0A1628; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
          Read Your Free Guide
        </a>
      </p>
      
      <p>Ready to accelerate your preparation? Book a free discovery call with me:</p>
      <p><a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" style="color: #C9A227;">Book Free Call</a></p>
      
      <p>Best,<br>Rupesh Tiwari<br>AWS Senior CSM | Executive Interview Coach</p>
      
      <hr style="border: 1px solid #eee; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">You're receiving this because you signed up at rupeshtiwari.com</p>
    </div>
  ` : `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #C9A227;">Welcome to Weekly Interview Tips!</h1>
      <p>Hi there,</p>
      <p>You're now subscribed to my weekly newsletter where I share actionable tips on:</p>
      <ul>
        <li>System design interview strategies</li>
        <li>Behavioral question frameworks</li>
        <li>Career growth insights</li>
        <li>Salary negotiation tactics</li>
      </ul>
      
      <p>While you wait for your first tip, check out my free resources:</p>
      <ul>
        <li><a href="https://blog.rupeshtiwari.com" style="color: #C9A227;">Free Blog Articles</a></li>
        <li><a href="https://www.youtube.com/@FullStackMaster" style="color: #C9A227;">YouTube Videos</a></li>
      </ul>
      
      <p>Best,<br>Rupesh Tiwari<br>AWS Senior CSM | Executive Interview Coach</p>
      
      <hr style="border: 1px solid #eee; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">You're receiving this because you signed up at rupeshtiwari.com</p>
    </div>
  `;

  if (!resend) {
    console.log(`Email sending disabled (RESEND_API_KEY not set). Would send to ${email} for source: ${source}`);
    return;
  }

  try {
    await resend.emails.send({
      from: "Rupesh Tiwari <onboarding@resend.dev>",
      to: email,
      subject: subject,
      html: htmlContent,
    });
    console.log(`Email sent to ${email} for source: ${source}`);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

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
      
      await sendWelcomeEmail(parsed.data.email, parsed.data.source);
      
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
