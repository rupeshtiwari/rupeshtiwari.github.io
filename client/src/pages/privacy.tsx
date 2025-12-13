import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-slate-400 hover:text-white" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C9A227] flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#0A1628]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-white" data-testid="text-privacy-title">
              Privacy Policy
            </h1>
          </div>

          <p className="text-slate-400 mb-8">
            Last updated: December 13, 2025
          </p>

          <div className="space-y-8 text-slate-300">
            <section className="p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F]">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-bold text-white">Information We Collect</h2>
              </div>
              <p className="leading-relaxed">
                When you visit rupeshtiwari.com or use our coaching services, we may collect information you provide directly, such as your name, email address, and phone number when you book a consultation or subscribe to our newsletter. We also collect standard web analytics data to improve your experience.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F]">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 leading-relaxed">
                <li>To provide and improve our coaching services</li>
                <li>To respond to your inquiries and schedule consultations</li>
                <li>To send you relevant updates about courses and resources (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F]">
              <h2 className="text-xl font-bold text-white mb-4">Data Protection</h2>
              <p className="leading-relaxed mb-4">
                We take your privacy seriously. Your personal information is stored securely and is never sold to third parties. We use industry-standard security measures to protect your data.
              </p>
              <p className="leading-relaxed">
                All coaching sessions are 100% confidential. We offer NDAs for clients who require additional privacy protections for their career discussions.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F]">
              <h2 className="text-xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="leading-relaxed">
                Our website may use third-party services such as Google Analytics, Google Calendar for bookings, and payment processors. These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F]">
              <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. You can also opt out of marketing communications by clicking the unsubscribe link in any email or contacting us directly.
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-[#0F2341]/80 border border-[#1E3A5F]">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us at{" "}
                <a href="mailto:rupesh@fullstackmaster.net" className="text-[#D4AF37] hover:underline" data-testid="link-contact-email">
                  rupesh@fullstackmaster.net
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
