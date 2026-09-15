import { useState } from 'react';
import { Copy, Check, Download, Code2, Sparkles, BookOpen, AlertCircle, ExternalLink } from 'lucide-react';
import { BLOGGER_THEME_XML } from '../data/bloggerThemeXml';

interface BloggerThemeViewProps {
  isDark: boolean;
}

export function BloggerThemeView({ isDark }: BloggerThemeViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(BLOGGER_THEME_XML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadXml = () => {
    const blob = new Blob([BLOGGER_THEME_XML], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'better-and-better-mellifluous-theme.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="blogger-theme-view" className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm relative overflow-hidden"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center shadow-xs">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 mb-1">
                <Sparkles className="w-3 h-3" /> Blogger Theme XML Hoàn Chỉnh
              </div>
              <h1
                className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mã Nguồn Chủ Đề Blogger (.XML)
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Được lập trình chuẩn thẻ Blogger v3 XML, tương thích 100% nền tảng Blogspot
              </p>
            </div>
          </div>

          {/* Actions: Copy & Download */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleCopyCode}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-pink-500 hover:bg-pink-600 text-white shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Đã sao chép mã!' : 'Sao chép toàn bộ XML'}
            </button>

            <button
              onClick={handleDownloadXml}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border border-pink-300 dark:border-pink-700 bg-white dark:bg-slate-800 text-pink-700 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-slate-700 shadow-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Tải file .xml
            </button>
          </div>
        </div>

        {/* Feature Highlights Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fce7f3' }}>
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <span className="text-emerald-500 font-bold">✓</span> Tách bạch Trang chủ, Bài đăng, Trang tĩnh
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <span className="text-emerald-500 font-bold">✓</span> Tích hợp sẵn Script hoa anh đào rơi &amp; Sáng/Tối
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <span className="text-emerald-500 font-bold">✓</span> Dropdown chọn truyện &amp; Lá thư bay lồng ghép
          </div>
        </div>
      </div>

      {/* Guide on How to Apply to Blogger */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm space-y-4"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <h3
          className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>📖</span> Hướng Dẫn Cài Đặt Vào Blogger (Blogspot)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-1">
          {[
            {
              step: '1',
              title: 'Tải File Theme',
              desc: 'Bấm nút "Tải file .xml" ở trên để lưu file theme về máy tính của bạn.',
            },
            {
              step: '2',
              title: 'Vào Blogger Admin',
              desc: 'Truy cập blogger.com, vào trang quản trị blog của bạn và nhấp vào mục "Chủ đề" (Theme).',
            },
            {
              step: '3',
              title: 'Chọn Khôi Phục',
              desc: 'Nhấp vào mũi tên cạnh nút "Tùy chỉnh" -> chọn "Khôi phục" (Restore) -> "Tải lên" (Upload).',
            },
            {
              step: '4',
              title: 'Hoàn Tất & Tận Hưởng',
              desc: 'Chọn file .xml vừa tải về. Blogger sẽ áp dụng toàn bộ giao diện hoa anh đào mùa hè ngay lập tức!',
            },
          ].map((s) => (
            <div
              key={s.step}
              className="p-4 rounded-2xl border flex flex-col justify-between"
              style={{
                backgroundColor: isDark ? '#261f3c' : '#fffcf7',
                borderColor: isDark ? '#43375f' : '#fae8dc',
              }}
            >
              <div>
                <span className="w-6 h-6 rounded-full bg-pink-500 text-white font-bold text-xs flex items-center justify-center mb-2 shadow-2xs">
                  {s.step}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Preview Box with Syntax Scroll */}
      <div
        className="rounded-3xl border shadow-md overflow-hidden"
        style={{
          backgroundColor: isDark ? '#161324' : '#1e1b2e',
          borderColor: isDark ? '#3d3255' : '#2d2744',
        }}
      >
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 font-mono text-slate-300 font-semibold">
              better-and-better-blogger-theme.xml
            </span>
          </div>

          <button
            onClick={handleCopyCode}
            className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-semibold cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Đã sao chép' : 'Sao chép'}
          </button>
        </div>

        {/* Code Content */}
        <pre className="p-5 font-mono text-xs sm:text-[13px] text-pink-200/90 overflow-x-auto max-h-[500px] leading-relaxed scrollbar-thin">
          <code>{BLOGGER_THEME_XML}</code>
        </pre>
      </div>

    </div>
  );
}
