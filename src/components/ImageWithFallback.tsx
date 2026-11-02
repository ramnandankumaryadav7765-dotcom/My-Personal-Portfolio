import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Bot,
  User,
  ShieldCheck,
  Send,
  Sparkles,
  BarChart3,
  Video,
  Play,
} from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  placeholderTitle?: string;
  placeholderCategory?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  style,
  loading = 'lazy',
  placeholderTitle,
  placeholderCategory,
}) => {
  const [hasError, setHasError] = useState(false);

  // Custom UI mockups for project frames
  const renderProjectMockup = () => {
    // 1. SmartDesk Customer Portal
    if (src.includes('customer-portal')) {
      return (
        <div className="w-full h-full bg-[#11131A] p-4 flex flex-col justify-between text-left select-none font-sans">
          <div className="flex items-center justify-between border-b border-[#222634] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-white tracking-wide">
                SmartDesk Portal
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Live on Render
            </span>
          </div>
          <div className="my-2 space-y-2">
            <div className="bg-[#181B26] p-2.5 rounded-lg border border-[#252A3B]">
              <div className="flex items-center justify-between text-[11px] mb-1 text-[#9CA3AF]">
                <span>Ticket #1042</span>
                <span className="text-amber-400 font-mono">In Progress</span>
              </div>
              <p className="text-xs text-[#E5E7EB] font-medium truncate">
                Order delivery inquiry for #8921
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-[#9CA3AF] border-t border-[#222634] pt-2">
            <span>Customer: Ramnandan K.</span>
            <span className="font-mono text-[#D7E2EA]/60">smartdesk.onrender.com</span>
          </div>
        </div>
      );
    }

    // 2. SmartDesk Admin Dashboard
    if (src.includes('admin-dashboard')) {
      return (
        <div className="w-full h-full bg-[#11131A] p-4 flex flex-col justify-between text-left select-none font-sans">
          <div className="flex items-center justify-between border-b border-[#222634] pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white tracking-wide">
                Admin Control Room
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#9CA3AF]">MongoDB Connected</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="bg-[#181B26] p-2.5 rounded-lg border border-[#252A3B]">
              <span className="text-[10px] text-[#9CA3AF] uppercase block">Open Tickets</span>
              <span className="text-base font-bold text-white font-mono">14</span>
            </div>
            <div className="bg-[#181B26] p-2.5 rounded-lg border border-[#252A3B]">
              <span className="text-[10px] text-[#9CA3AF] uppercase block">AI Assisted</span>
              <span className="text-base font-bold text-emerald-400 font-mono">92%</span>
            </div>
          </div>
          <div className="bg-[#181B26] p-2 rounded-lg border border-[#252A3B] flex items-center justify-between text-[10px]">
            <span className="text-[#E5E7EB]">Gemini AI Assistant</span>
            <span className="text-emerald-400 font-mono">● Active</span>
          </div>
        </div>
      );
    }

    // 3. SmartDesk AI Assistant (Tall right column)
    if (src.includes('ai-assistant')) {
      return (
        <div className="w-full h-full bg-[#11131A] p-5 flex flex-col justify-between text-left select-none font-sans">
          <div className="flex items-center justify-between border-b border-[#222634] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">
                  Gemini Support Agent
                </span>
                <span className="text-[10px] text-[#9CA3AF] flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Account Context Aware
                </span>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          <div className="space-y-3 my-4 flex-1 flex flex-col justify-center">
            <div className="flex items-start gap-2 max-w-[85%] self-end">
              <div className="bg-[#1E2333] p-3 rounded-2xl rounded-tr-none text-xs text-[#E5E7EB] border border-[#2E364E]">
                Where is my order #8921?
              </div>
              <div className="w-6 h-6 rounded-full bg-[#2E364E] flex items-center justify-center text-[10px] text-white">
                <User className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex items-start gap-2 max-w-[90%]">
              <div className="w-6 h-6 rounded-full bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-[10px] text-purple-300">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-[#161924] p-3 rounded-2xl rounded-tl-none text-xs text-[#D1D5DB] border border-[#252A3C] leading-relaxed">
                Hi! I checked your account order records. <strong className="text-white">Order #8921</strong> was dispatched via Express Delivery and is estimated to arrive tomorrow by 4:00 PM.
              </div>
            </div>
          </div>

          <div className="border-t border-[#222634] pt-3 flex items-center gap-2">
            <div className="flex-1 bg-[#181B26] border border-[#252A3B] rounded-full px-3 py-1.5 text-xs text-[#9CA3AF] flex items-center justify-between">
              <span>Ask Gemini assistant...</span>
              <Send className="w-3.5 h-3.5 text-[#9CA3AF]" />
            </div>
          </div>
        </div>
      );
    }

    // 4. GitHub Profile Analyzer
    if (src.includes('github-profile-analyzer')) {
      return (
        <div className="w-full h-full bg-[#11131A] p-4 flex flex-col justify-between text-left select-none font-sans">
          <div className="flex items-center justify-between border-b border-[#222634] pb-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-semibold text-white">GitHub Analyzer</span>
            </div>
            <span className="text-[10px] font-mono text-sky-400">REST API</span>
          </div>
          <div className="my-2 space-y-1.5">
            <div className="bg-[#181B26] p-2 rounded border border-[#252A3B] text-[11px] text-[#D1D5DB]">
              Repository Metrics &amp; Commit Velocity
            </div>
            <div className="bg-[#181B26] p-2 rounded border border-[#252A3B] text-[11px] text-emerald-400 font-mono">
              AI Insights: High Consistency in C++ &amp; Web Stack
            </div>
          </div>
          <span className="text-[10px] text-[#9CA3AF] font-mono">github.com/ramnandankumaryadav7765-dotcom</span>
        </div>
      );
    }

    // 5. Happy Coder
    if (src.includes('happy-coder')) {
      return (
        <div className="w-full h-full bg-[#11131A] p-4 flex flex-col justify-between text-left select-none font-sans">
          <div className="flex items-center justify-between border-b border-[#222634] pb-2">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-semibold text-white">Happy Coder</span>
            </div>
            <span className="text-[10px] font-mono text-rose-400">DSA in Hinglish</span>
          </div>
          <div className="my-2 bg-[#181B26] p-3 rounded-lg border border-[#252A3B] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300">
              <Play className="w-4 h-4 ml-0.5 fill-current" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">Visual DSA &amp; LeetCode Breakdown</p>
              <p className="text-[10px] text-[#9CA3AF]">Storytelling &amp; Video Editing</p>
            </div>
          </div>
          <span className="text-[10px] text-[#9CA3AF] font-mono">@codeinmotion1</span>
        </div>
      );
    }

    // Default neutral placeholder
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#15171C] border border-[#232730] p-6 text-center select-none ${className}`}
        style={style}
      >
        <div className="w-12 h-12 rounded-full bg-[#1E222A] flex items-center justify-center text-[#646973] mb-3">
          <ImageIcon className="w-6 h-6" />
        </div>
        <p className="text-xs uppercase tracking-widest text-[#7B8694] font-medium mb-1">
          {placeholderCategory || 'Placeholder Frame'}
        </p>
        <p className="text-sm text-[#BBCCD7] font-medium max-w-xs line-clamp-2">
          {placeholderTitle || alt}
        </p>
        <span className="text-[10px] text-[#4A5160] font-mono mt-2 break-all max-w-[200px]">
          {src}
        </span>
      </div>
    );
  };

  if (hasError) {
    return (
      <div className={`w-full h-full ${className}`} style={style}>
        {renderProjectMockup()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
      style={style}
    />
  );
};

export default ImageWithFallback;
