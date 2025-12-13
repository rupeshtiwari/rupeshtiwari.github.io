import { motion } from "framer-motion";
import { MessageCircle, Calendar, GraduationCap, BookOpen } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href="https://www.fullstackmaster.net"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.3, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-[#0A1628] rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
        data-testid="floating-courses"
        title="Explore Courses"
      >
        <GraduationCap className="w-6 h-6" />
      </motion.a>

      <motion.a
        href="https://blog.rupeshtiwari.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
        data-testid="floating-blog"
        title="Read Free Articles"
      >
        <BookOpen className="w-6 h-6" />
      </motion.a>

      <motion.a
        href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.7, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
        data-testid="floating-book"
        title="Book Discovery Call"
      >
        <Calendar className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href="https://calendar.google.com/calendar/appointments/AcZssZ2dMNXqXzYcl2NKLpclDV9w0p4-9cp4UvTHii0=?gv=true"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.9, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
        data-testid="floating-whatsapp"
        title="WhatsApp Me"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
