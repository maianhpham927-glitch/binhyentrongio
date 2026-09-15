import { FileText, Heart, Shield, Music, Mail, Sparkles } from 'lucide-react';
import { STATIC_PAGES } from '../data/mockNovels';

interface OtherNotesViewProps {
  isDark: boolean;
}

export function OtherNotesView({ isDark }: OtherNotesViewProps) {
  return (
    <div id="other-notes-view" className="space-y-6 animate-in fade-in duration-300">
      
      {/* Title Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 flex items-center justify-center text-xl shadow-xs">
            🎐
          </div>
          <div>
            <h1
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Một Số Mục Khác &amp; Tản Văn Mùa Hè
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Góc lưu bút, nội quy nhà và những dòng suy tư dưới bóng hoa anh đào
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Note Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Nội quy nhà */}
        <div
          className="rounded-3xl p-6 border shadow-sm relative overflow-hidden"
          style={{
            backgroundColor: isDark ? '#241e39' : '#fffdfa',
            borderColor: isDark ? '#45375f' : '#fed7aa',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-amber-500" />
            <h2
              className="font-bold text-lg text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nội Quy Nhà Mellifluous
            </h2>
          </div>

          <div
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-2 p-4 rounded-xl border"
            style={{
              fontFamily: "'Lora', serif",
              backgroundColor: isDark ? '#1d182e' : '#fffaf2',
              borderColor: isDark ? '#3d3055' : '#fcecd9',
            }}
          >
            {STATIC_PAGES[1].content}
          </div>
        </div>

        {/* Card 2: Lời chào và giới thiệu */}
        <div
          className="rounded-3xl p-6 border shadow-sm relative overflow-hidden"
          style={{
            backgroundColor: isDark ? '#241e39' : '#fffdfa',
            borderColor: isDark ? '#45375f' : '#fbcfe8',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500" />
            <h2
              className="font-bold text-lg text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Gửi Người Ghé Chơi Mùa Hè
            </h2>
          </div>

          <div
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-2 p-4 rounded-xl border"
            style={{
              fontFamily: "'Lora', serif",
              backgroundColor: isDark ? '#1d182e' : '#fff7fa',
              borderColor: isDark ? '#3d3055' : '#fce7f3',
            }}
          >
            {STATIC_PAGES[0].content}
          </div>
        </div>

      </div>

      {/* Card 3: Hòm thư gửi gắm & Đề cử truyện */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm text-center"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <span className="text-3xl mb-2 inline-block">💌</span>
        <h3
          className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hòm Thư Đề Cử Truyện &amp; Góp Ý Bản Dịch
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-4" style={{ fontFamily: "'Lora', serif" }}>
          Nếu bạn có một bộ truyện ngôn tình thanh xuân học đường nào thật ưng ý muốn gợi ý cho Mellifluous đào hố, hãy gửi tin nhắn qua Wattpad hoặc Facebook nhà nhé!
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-pink-500" /> Mellifluous luôn đọc từng lời nhắn của các bạn
        </div>
      </div>

    </div>
  );
}
