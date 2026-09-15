import { useState, useEffect } from 'react';
import { Heart, Eye, Sparkles } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const [visitorCount, setVisitorCount] = useState(18924);

  useEffect(() => {
    // Visitor counter persistence with small gentle increment
    const stored = localStorage.getItem('melli_visitor_count');
    let count = stored ? parseInt(stored, 10) : 18924;
    count += 1;
    setVisitorCount(count);
    localStorage.setItem('melli_visitor_count', count.toString());
  }, []);

  return (
    <footer
      id="blog-main-footer"
      className="mt-16 border-t pt-10 pb-12 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor: isDark ? '#191527' : '#ffffff',
        borderColor: isDark ? '#362b4c' : '#fce7f3',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Decorative Brand & Slogan */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">⛵</span>
            <span
              className="text-2xl font-bold tracking-tight text-pink-600 dark:text-pink-400"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              better and better
            </span>
            <span className="text-xl">🌸</span>
          </div>
          <p
            className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            ━ Một chiếc thuyền nhỏ lênh đênh ngược gió ━
          </p>
        </div>

        {/* Social Icons: Facebook, WordPress, Wattpad */}
        <div className="flex items-center justify-center gap-4">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 shadow-2xs group"
            style={{
              backgroundColor: isDark ? '#261f3d' : '#fdf2f8',
              borderColor: isDark ? '#463760' : '#fbcfe8',
              color: '#1877F2',
            }}
            title="Facebook Mellifluous"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* WordPress */}
          <a
            href="https://wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 shadow-2xs group"
            style={{
              backgroundColor: isDark ? '#261f3d' : '#fdf2f8',
              borderColor: isDark ? '#463760' : '#fbcfe8',
              color: '#0073AA',
            }}
            title="WordPress Trang Chính Mellifluous"
            aria-label="WordPress"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.1-1.8l3.6-9.9 3.7 9.8a8.1 8.1 0 0 1-2.2.3zm6.3-5.2l-2.4-7c.6-.03 1.2-.1 1.2-.1.4 0 .4-.6 0-.6h-3.4c-.4 0-.4.6 0 .6 0 0 .5.07 1.1.1l-1.6 4.8-2.6-7.3c.6-.03 1.2-.1 1.2-.1.4 0 .4-.6 0-.6H7c-.4 0-.4.6 0 .6 0 0 .6.07 1.2.1l3.5 9.7-3.4-9.7c.6-.03 1.2-.1 1.2-.1.4 0 .4-.6 0-.6H4.8c-.4 0-.4.6 0 .6 0 0 .6.07 1.1.1L3.9 11A8.2 8.2 0 0 1 12 3.8a8.1 8.1 0 0 1 5.9 2.5l-1.9 5.5a8.2 8.2 0 0 1 2.3 3.4z" />
            </svg>
          </a>

          {/* Wattpad */}
          <a
            href="https://wattpad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110 shadow-2xs group"
            style={{
              backgroundColor: isDark ? '#261f3d' : '#fdf2f8',
              borderColor: isDark ? '#463760' : '#fbcfe8',
              color: '#FF6122',
            }}
            title="Wattpad Mellifluous"
            aria-label="Wattpad"
          >
            <span className="font-extrabold text-base font-sans tracking-tight">
              W
            </span>
          </a>
        </div>

        {/* Bộ Đếm Người Truy Cập (Visitor Counter) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-2xs text-xs font-semibold"
          style={{
            backgroundColor: isDark ? '#261f3d' : '#fff5f7',
            borderColor: isDark ? '#463760' : '#fbcfe8',
            color: isDark ? '#f9a8d4' : '#be185d',
          }}
        >
          <Eye className="w-3.5 h-3.5 text-pink-500" />
          <span>Lượt ghé thăm ngôi nhà nhỏ:</span>
          <strong className="text-sm font-bold text-pink-600 dark:text-pink-300">
            {visitorCount.toLocaleString()}
          </strong>
          <span className="text-[10px] text-slate-400">lượt</span>
        </div>

        {/* Copyright Notice */}
        <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-dashed" style={{ borderColor: isDark ? '#362b4c' : '#fce7f3' }}>
          <p>
            Copyright &#169; 2026 <strong>better and better</strong>. Chuyển ngữ phi lợi nhuận bởi <strong>Mellifluous</strong>.
          </p>
          <p className="text-[11px] text-slate-400">
            Theme thiết kế phong cách illustration huyền ảo • Tone hoa anh đào mùa hè mát mẻ • Tối ưu Blogger (Blogspot)
          </p>
        </div>

      </div>
    </footer>
  );
}
