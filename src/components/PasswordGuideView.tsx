import { KeyRound, ShieldCheck, AlertCircle, HelpCircle, Sparkles, BookOpen } from 'lucide-react';
import { PASSWORD_GUIDES } from '../data/mockNovels';

interface PasswordGuideViewProps {
  isDark: boolean;
  onBackToHome: () => void;
}

export function PasswordGuideView({ isDark, onBackToHome }: PasswordGuideViewProps) {
  return (
    <div id="password-guide-view" className="space-y-6 animate-in fade-in duration-300">
      
      {/* Title Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm relative overflow-hidden"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center text-xl shadow-xs">
            🔑
          </div>
          <div>
            <h1
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mục Lục &amp; Hướng Dẫn Giải Password
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Chìa khóa mở các chương bảo mật chống trang web reup tự động của nhà Mellifluous
            </p>
          </div>
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 mt-4"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {PASSWORD_GUIDES[0].description}
        </p>

        {/* General rules */}
        <div className="mt-5 space-y-2.5">
          <h3 className="font-bold text-sm text-pink-600 dark:text-pink-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Quy ước chung khi gõ mật khẩu:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {PASSWORD_GUIDES[0].rules?.map((rule, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5"
                style={{
                  backgroundColor: isDark ? '#27203b' : '#fff9fb',
                  borderColor: isDark ? '#44375b' : '#fbcfe8',
                  color: isDark ? '#f1f5f9' : '#475569',
                }}
              >
                <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/60 dark:text-pink-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clues for each ongoing book */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <h2
          className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>📜</span> Gợi Ý Mật Khẩu Chi Tiết Từng Bộ Truyện
        </h2>

        <div className="space-y-4">
          {PASSWORD_GUIDES[1].storiesWithPass?.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border transition-all"
              style={{
                backgroundColor: isDark ? '#27203b' : '#fffdf9',
                borderColor: isDark ? '#43375c' : '#fed7aa',
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3
                  className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <BookOpen className="w-4 h-4 text-pink-500" />
                  {item.title}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {item.lockedChapters}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900/50 mt-2">
                <span className="text-xs font-bold text-pink-700 dark:text-pink-300 block mb-0.5">
                  Gợi ý câu hỏi giải pass:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic" style={{ fontFamily: "'Lora', serif" }}>
                  {item.hintFormula}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
