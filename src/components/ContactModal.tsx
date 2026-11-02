import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Send,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';

// Custom Lucide-styled LeetCode SVG icon
const LeetCodeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8l-4.5 4.5a2.12 2.12 0 0 1-3 0L5 9" />
    <path d="M9 16.5l3.5 3.5a2.12 2.12 0 0 0 3 0L20 15.5" />
    <path d="M7.5 13.5l9-9" />
  </svg>
);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramnandan-kumar-028a04388/',
    icon: Linkedin,
    color: 'hover:border-blue-500/50 hover:text-blue-400',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ramnandankumaryadav7765-dotcom',
    icon: Github,
    color: 'hover:border-purple-500/50 hover:text-purple-400',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Ramnandan_Kumar/',
    icon: LeetCodeIcon,
    color: 'hover:border-amber-500/50 hover:text-amber-400',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/codeinmotion1/',
    icon: Instagram,
    color: 'hover:border-rose-500/50 hover:text-rose-400',
  },
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const email = 'ramnandankumaryadav7765@gmail.com';
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || 'Inquiry from Portfolio');
    const encodedBody = encodeURIComponent(message || 'Hi Ramnandan,');
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleOpenGmail = () => {
    const encodedSubject = encodeURIComponent(subject || 'Inquiry from Portfolio');
    const encodedBody = encodeURIComponent(message || 'Hi Ramnandan,');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#0F1118] border-2 border-[#2A2F3E] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl z-10 text-left select-none overflow-hidden"
          >
            {/* Header: Title & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-[#232736] mb-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D7E2EA]/60 block mb-1">
                  Get in Touch
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-kanit">
                  Contact Ramnandan
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#181B26] border border-[#2D3345] flex items-center justify-center text-[#D7E2EA]/80 hover:text-white hover:bg-[#202534] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Direct Email Box */}
            <div className="bg-[#141722] border border-[#252A3B] rounded-2xl p-4 sm:p-5 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9CA3AF] block mb-2">
                Primary Email Address
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-white truncate font-medium">
                    {email}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E2230] border border-[#2F364B] text-xs text-[#D7E2EA] hover:text-white hover:bg-[#282E42] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* Open in Gmail Web Button */}
                  <button
                    onClick={handleOpenGmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-300 hover:bg-emerald-900/80 transition-colors"
                    title="Open in Gmail"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Gmail</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Email Message Form */}
            <form onSubmit={handleSendEmail} className="space-y-3 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Subject (e.g. Project Inquiry, Internship, Collaboration)"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#141722] border border-[#252A3B] focus:border-[#D7E2EA]/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#6B7280] outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#141722] border border-[#252A3B] focus:border-[#D7E2EA]/50 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#6B7280] outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow:
                    '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                  outline: '2px solid #FFFFFF',
                  outlineOffset: '-3px',
                }}
              >
                <Send className="w-4 h-4" />
                <span>Send via Email Client</span>
              </button>
            </form>

            {/* Social Media Row with Names Below Logos */}
            <div className="pt-4 border-t border-[#232736]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9CA3AF] block mb-3 text-center">
                Connect Across Platforms
              </span>
              <div className="grid grid-cols-4 gap-2">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-[#141722]/60 border border-[#252A3B] hover:bg-[#1A1E2C] transition-all duration-200 group"
                    >
                      <div
                        className={`w-9 h-9 rounded-full bg-[#1A1D2A] border border-[#2F354A] flex items-center justify-center text-[#D7E2EA]/80 group-hover:scale-110 transition-all ${social.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#D7E2EA]/70 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
