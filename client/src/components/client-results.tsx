import { motion } from "framer-motion";
import { TrendingUp, Building2, DollarSign, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const clientResults = [
  {
    name: "Karthik S.",
    beforeRole: "Senior Software Engineer",
    beforeCompany: "Mid-size Startup",
    beforeSalary: "$145K",
    afterRole: "Staff Engineer",
    afterCompany: "Google",
    afterSalary: "$420K",
    increase: "+$275K",
    timeline: "10 weeks",
    story: "Karthik came to me after 3 rejections from Google. We rebuilt his system design approach and STAR stories. He got the offer on his 4th attempt.",
  },
  {
    name: "Priya M.",
    beforeRole: "Engineering Manager",
    beforeCompany: "Oracle",
    beforeSalary: "$180K",
    afterRole: "Director of Engineering",
    afterCompany: "Meta",
    afterSalary: "$520K",
    increase: "+$340K",
    timeline: "8 weeks",
    story: "Priya had the skills but struggled with executive presence. After our coaching on leadership narratives, she crushed her Meta loop.",
  },
  {
    name: "Raj T.",
    beforeRole: "Tech Lead",
    beforeCompany: "Infosys (India)",
    beforeSalary: "$35K",
    afterRole: "Senior SDE",
    afterCompany: "Amazon",
    afterSalary: "$285K",
    increase: "+$250K",
    timeline: "12 weeks",
    story: "Raj relocated from India to the US. We worked on his LP stories and system design. He negotiated his offer up by $40K using my scripts.",
  },
  {
    name: "Mike C.",
    beforeRole: "Principal Engineer",
    beforeCompany: "Microsoft",
    beforeSalary: "$380K",
    afterRole: "VP of Engineering",
    afterCompany: "Series C Startup",
    afterSalary: "$650K + equity",
    increase: "+$270K+",
    timeline: "6 weeks",
    story: "Mike wanted to move from IC to executive. We focused on org design and exec communication. His equity package alone was worth $2M+.",
  },
];

const companyLogos = [
  { name: "Google", bg: "bg-white" },
  { name: "Amazon", bg: "bg-[#FF9900]" },
  { name: "Meta", bg: "bg-[#0668E1]" },
  { name: "Microsoft", bg: "bg-[#00A4EF]" },
  { name: "Apple", bg: "bg-white" },
  { name: "Netflix", bg: "bg-[#E50914]" },
];

function AnimatedStat({ end, suffix, prefix, label, Icon }: { 
  end: number; 
  suffix?: string; 
  prefix?: string; 
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const { ref, displayValue } = useCounterAnimation({
    end,
    duration: 2000,
    prefix: prefix || "",
    suffix: suffix || "",
  });

  return (
    <div ref={ref} className="p-6 rounded-xl bg-[#0F2341]/50 border border-[#1E3A5F]/50 text-center">
      <Icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
      <div className="text-2xl md:text-3xl font-bold text-white">{displayValue}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function AnimatedStatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      <AnimatedStat end={20} suffix="+" label="Years in Tech" Icon={TrendingUp} />
      <AnimatedStat end={285} prefix="$" suffix="K+" label="Average Salary Increase" Icon={DollarSign} />
      <AnimatedStat end={92} suffix="%" label="Success Rate" Icon={TrendingUp} />
      <AnimatedStat end={50} suffix="+" label="Clients Coached" Icon={Building2} />
    </motion.div>
  );
}

export default function ClientResults() {
  return (
    <section id="results" className="py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Proven Results</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4 text-white">
            Real Clients. Real Offers. Real Numbers.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            These aren't made-up case studies. These are real people who trusted me with their careers 
            and achieved life-changing outcomes.
          </p>
        </motion.div>

        {/* Stats Bar with Animated Counters */}
        <AnimatedStatsBar />

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-center text-slate-400 text-sm mb-6">Where my clients work now:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {companyLogos.map((company, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 rounded-lg bg-[#0F2341]/50 border border-[#1E3A5F]/30 flex items-center gap-2"
              >
                <div className={`w-3 h-3 rounded-full ${company.bg}`} />
                <span className="text-white font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Client Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {clientResults.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0F2341]/50 border border-[#1E3A5F]/50 hover:border-green-500/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{client.name}</h3>
                  <p className="text-slate-400 text-sm">Coaching timeline: {client.timeline}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-lg">
                  {client.increase}
                </span>
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-[#0A1628]/50">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Before</div>
                  <div className="text-white font-medium">{client.beforeRole}</div>
                  <div className="text-slate-400 text-sm">{client.beforeCompany}</div>
                  <div className="text-slate-500 mt-1">{client.beforeSalary}/year</div>
                </div>
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="text-xs text-green-400 uppercase tracking-wider mb-2">After</div>
                  <div className="text-white font-medium">{client.afterRole}</div>
                  <div className="text-green-400 text-sm">{client.afterCompany}</div>
                  <div className="text-green-400 font-bold mt-1">{client.afterSalary}/year</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm italic">"{client.story}"</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium">Your story could be next</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold"
              asChild
              data-testid="button-results-cta"
            >
              <a href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true" target="_blank" rel="noopener noreferrer">
                Start Your Transformation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
