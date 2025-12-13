import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Clock, CheckCircle2, Quote, Briefcase, GraduationCap, Target, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const caseStudies = [
  {
    id: "karthik",
    name: "Karthik S.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    beforeRole: "Senior Software Engineer",
    beforeCompany: "Mid-size Startup",
    beforeSalary: "$145K",
    afterRole: "Staff Engineer",
    afterCompany: "Google",
    afterSalary: "$420K",
    increase: "+$275K",
    timeline: "10 weeks",
    background: "Karthik had been a Senior Software Engineer at a well-funded startup in the Bay Area for 4 years. He was a strong coder with solid system design intuition, but had failed Google's interview loop 3 times over 2 years.",
    challenge: "His main challenges were: 1) System design interviews felt unstructured - he'd ramble and lose the interviewer. 2) Behavioral stories were weak - he couldn't articulate his leadership impact. 3) Confidence was shattered after 3 rejections.",
    approach: [
      "Rebuilt his system design framework from scratch using my '5-Box Method' that keeps answers structured and time-boxed",
      "Created a personal 'Story Bank' of 12 leadership scenarios mapped to Google's hiring rubric",
      "Ran 6 mock interviews with detailed feedback, focusing on pacing and depth calibration",
      "Worked on mindset coaching to rebuild confidence and approach the 4th attempt with fresh energy"
    ],
    result: "Karthik crushed his 4th Google loop. He received a Staff Engineer offer at $420K total comp - a $275K increase from his startup salary. He negotiated an additional $50K signing bonus using my negotiation scripts.",
    quote: "Rupesh's system design framework completely changed how I think about these interviews. After 3 failures, I went into my 4th attempt feeling like a different engineer. The structured approach gave me confidence I never had before.",
    keyMetrics: [
      { label: "Salary Increase", value: "+$275K" },
      { label: "Timeline", value: "10 weeks" },
      { label: "Previous Attempts", value: "3 failures" },
      { label: "Mock Sessions", value: "6 sessions" }
    ]
  },
  {
    id: "priya",
    name: "Priya M.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
    beforeRole: "Engineering Manager",
    beforeCompany: "Oracle",
    beforeSalary: "$180K",
    afterRole: "Director of Engineering",
    afterCompany: "Meta",
    afterSalary: "$520K",
    increase: "+$340K",
    timeline: "8 weeks",
    background: "Priya was an Engineering Manager at Oracle with 12 years of experience. She managed a team of 15 engineers and had delivered multiple critical projects. She wanted to break into FAANG at the Director level but felt stuck at Oracle.",
    challenge: "Her challenges were: 1) Executive presence was lacking - she came across as too technical and not strategic enough. 2) Her leadership stories focused on 'what she did' not 'how she influenced'. 3) She hadn't interviewed in 8 years and felt rusty.",
    approach: [
      "Coached on 'strategic storytelling' - framing every answer around business impact, not just technical execution",
      "Developed her unique leadership philosophy and helped her articulate it clearly",
      "Practiced VP-level conversations about org design, team building, and cross-functional influence",
      "Ran 4 executive mock interviews with focus on poise, presence, and strategic thinking"
    ],
    result: "Priya received Director of Engineering offers from Meta and Amazon. She chose Meta at $520K total comp - nearly 3x her Oracle salary. She's now leading a 40-person org building next-gen AR/VR products.",
    quote: "I had the skills but couldn't sell myself at the executive level. Rupesh helped me find my voice as a leader. The way he coached me to tell my story - focusing on influence and business impact - was transformative.",
    keyMetrics: [
      { label: "Salary Increase", value: "+$340K" },
      { label: "Timeline", value: "8 weeks" },
      { label: "Team Size Growth", value: "15 → 40" },
      { label: "Offers Received", value: "2 (Meta, Amazon)" }
    ]
  },
  {
    id: "raj",
    name: "Raj T.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    beforeRole: "Tech Lead",
    beforeCompany: "Infosys (India)",
    beforeSalary: "$35K",
    afterRole: "Senior SDE",
    afterCompany: "Amazon",
    afterSalary: "$285K",
    increase: "+$250K",
    timeline: "12 weeks",
    background: "Raj was a Tech Lead at Infosys in Bangalore with 7 years of experience. He was highly skilled but earning only $35K/year in India. His dream was to relocate to the US and work at a FAANG company.",
    challenge: "His challenges were unique: 1) Visa sponsorship concerns - he needed to stand out as exceptional. 2) Amazon LP (Leadership Principles) stories were unfamiliar territory. 3) System design at FAANG scale was different from his Indian IT services experience. 4) Salary negotiation - he'd never earned more than $40K.",
    approach: [
      "Deep-dive on Amazon's 16 Leadership Principles with customized stories for each",
      "Rebuilt system design thinking for Amazon-scale (millions of users, distributed systems)",
      "Created a visa sponsorship narrative that positioned him as a 'must-have' candidate",
      "Extensive negotiation coaching - how to think in terms of 'market rate' not 'current salary'"
    ],
    result: "Raj received an Amazon Senior SDE offer with L5 designation at $245K base + $40K additional after negotiation using my scripts. He relocated to Seattle and now earns $285K - an 8x increase from his India salary.",
    quote: "Coming from India, I had no idea how to approach US interviews or negotiate US salaries. Rupesh understood my background and coached me specifically for this transition. The negotiation alone added $40K to my offer.",
    keyMetrics: [
      { label: "Salary Increase", value: "+$250K (8x)" },
      { label: "Timeline", value: "12 weeks" },
      { label: "Negotiation Bump", value: "+$40K" },
      { label: "LP Stories Created", value: "16 stories" }
    ]
  },
  {
    id: "mike",
    name: "Mike C.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    beforeRole: "Principal Engineer",
    beforeCompany: "Microsoft",
    beforeSalary: "$380K",
    afterRole: "VP of Engineering",
    afterCompany: "Series C Startup",
    afterSalary: "$650K + $2M equity",
    increase: "+$270K + equity",
    timeline: "6 weeks",
    background: "Mike was a Principal Engineer at Microsoft with 18 years of experience. He was a technical leader respected by everyone but had never held a people-management title. He wanted to make the jump to VP of Engineering at a high-growth startup.",
    challenge: "The IC-to-executive jump is one of the hardest: 1) He had no direct management experience to point to. 2) Startups wanted someone who had 'done it before'. 3) Executive interviews focus on org building, not coding. 4) He needed to reframe his entire identity from 'doer' to 'leader of leaders'.",
    approach: [
      "Developed his 'technical leadership' brand - how technical excellence translates to org leadership",
      "Created frameworks for talking about org design, hiring, and culture without direct experience",
      "Coached on executive communication - board-level updates, cross-functional alignment",
      "Prepared for startup-specific questions around scaling engineering from 20 to 200 people"
    ],
    result: "Mike landed VP of Engineering at a Series C startup ($500M valuation). His package: $650K base + $2M+ in equity. He now leads 50 engineers and reports directly to the CEO. The equity could be worth $10M+ at exit.",
    quote: "I was a lifelong IC who had never managed anyone. Rupesh helped me see that my technical leadership experience was actually the perfect foundation for an executive role. The frameworks he gave me for org design conversations were invaluable.",
    keyMetrics: [
      { label: "Cash Increase", value: "+$270K" },
      { label: "Equity Package", value: "$2M+" },
      { label: "Timeline", value: "6 weeks" },
      { label: "Team Size", value: "50 engineers" }
    ]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="block text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
              Real Transformations, Real Results
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              These aren't testimonials - they're complete case studies. Dive deep into how each client 
              overcame their unique challenges and achieved life-changing career outcomes.
            </p>
          </motion.div>

          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="relative"
                data-testid={`case-study-${study.id}`}
              >
                <div className="absolute left-0 top-0 text-8xl font-bold text-[#1E3A5F]/20 font-display -ml-4 -mt-8">
                  0{idx + 1}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <div className="p-6 rounded-2xl bg-[#0F2341]/50 border border-[#1E3A5F]/50">
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={study.photo}
                            alt={study.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-green-500/50"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-white">{study.name}</h3>
                            <p className="text-slate-400 text-sm">{study.timeline} coaching</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="p-3 rounded-lg bg-[#0A1628]/50">
                            <div className="text-xs text-slate-500 uppercase mb-1">Before</div>
                            <div className="text-white font-medium text-sm">{study.beforeRole}</div>
                            <div className="text-slate-400 text-xs">{study.beforeCompany}</div>
                            <div className="text-slate-500 text-sm mt-1">{study.beforeSalary}</div>
                          </div>
                          <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                            <div className="text-xs text-green-400 uppercase mb-1">After</div>
                            <div className="text-white font-medium text-sm">{study.afterRole}</div>
                            <div className="text-green-400 text-xs">{study.afterCompany}</div>
                            <div className="text-green-400 font-bold text-sm mt-1">{study.afterSalary}</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
                          <div className="text-3xl font-bold text-green-400">{study.increase}</div>
                          <div className="text-sm text-slate-400">Total Increase</div>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {study.keyMetrics.map((metric, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-lg bg-[#0F2341]/30 border border-[#1E3A5F]/30 text-center">
                            <div className="text-lg font-bold text-white">{metric.value}</div>
                            <div className="text-xs text-slate-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-3">
                        <Briefcase className="w-5 h-5" />
                        <h4 className="font-semibold uppercase text-sm tracking-wider">Background</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{study.background}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-red-400 mb-3">
                        <Target className="w-5 h-5" />
                        <h4 className="font-semibold uppercase text-sm tracking-wider">The Challenge</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-blue-400 mb-3">
                        <GraduationCap className="w-5 h-5" />
                        <h4 className="font-semibold uppercase text-sm tracking-wider">Our Approach</h4>
                      </div>
                      <ul className="space-y-3">
                        {study.approach.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-green-400 mb-3">
                        <TrendingUp className="w-5 h-5" />
                        <h4 className="font-semibold uppercase text-sm tracking-wider">The Result</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{study.result}</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 border border-[#D4AF37]/20">
                      <Quote className="w-8 h-8 text-[#D4AF37] mb-3" />
                      <blockquote className="text-lg text-white italic leading-relaxed">
                        "{study.quote}"
                      </blockquote>
                      <div className="mt-4 flex items-center gap-3">
                        <img src={study.photo} alt={study.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="text-white font-medium">{study.name}</div>
                          <div className="text-sm text-slate-400">{study.afterRole} at {study.afterCompany}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {idx < caseStudies.length - 1 && (
                  <div className="mt-16 border-t border-[#1E3A5F]/30" />
                )}
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-2">Your Story Could Be Next</h3>
              <p className="text-slate-400 mb-6">
                Every client started where you are now. Let's discuss how I can help you achieve 
                your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold"
                  asChild
                  data-testid="button-case-studies-cta"
                >
                  <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Strategy Call
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#1E3A5F] text-white hover:bg-[#0F2341]"
                  asChild
                >
                  <Link href="/pricing">
                    View Coaching Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
