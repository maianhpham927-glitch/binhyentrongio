import React, { useState, useEffect, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Lock, KeyRound, CheckCircle2, Settings, BookOpen, Heart, Sparkles, RefreshCw } from 'lucide-react';
import { Story, Chapter } from '../types';

interface ChapterReaderProps {
  story: Story;
  chapter: Chapter;
  onBackToStory: () => void;
  onSelectChapter: (chap: Chapter) => void;
  isDark: boolean;
}

export function ChapterReader({
  story,
  chapter,
  onBackToStory,
  onSelectChapter,
  isDark,
}: ChapterReaderProps) {
  const [unlockedChapters, setUnlockedChapters] = useState<string[]>([]);
  const [passwordInput, setPasswordInput] = useState('');
  const [passError, setPassError] = useState('');
  const [fontSize, setFontSize] = useState<number>(18);
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans' | 'display'>('serif');
  const [paperTheme, setPaperTheme] = useState<'cream' | 'white' | 'mint' | 'night'>('cream');
  const [showSettings, setShowSettings] = useState(false);

  const isCurrentLocked = chapter.isLocked && !unlockedChapters.includes(chapter.id);

  // Find prev and next chapters
  const currentIndex = story.chapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? story.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < story.chapters.length - 1 ? story.chapters[currentIndex + 1] : null;

  const handleUnlock = (e: FormEvent) => {
    e.preventDefault();
    const cleanInput = passwordInput.trim().toLowerCase();
    const expected = (chapter.password || '').toLowerCase();

    if (cleanInput === expected) {
      setUnlockedChapters([...unlockedChapters, chapter.id]);
      setPassError('');
      setPasswordInput('');
    } else {
      setPassError('Mật khẩu chưa đúng! Bạn hãy kiểm tra lại kỹ xem có bị nhảy dấu tiếng Việt không nhé.');
    }
  };

  // Paper background styles
  const getPaperStyle = () => {
    if (isDark || paperTheme === 'night') {
      return {
        bg: '#1b172a',
        text: '#f1f5f9',
        border: '#3c3253',
      };
    }
    switch (paperTheme) {
      case 'cream':
        return {
          bg: '#fbf7ee',
          text: '#3b3036',
          border: '#eedec9',
        };
      case 'mint':
        return {
          bg: '#f0fdf4',
          text: '#22382b',
          border: '#bbf7d0',
        };
      case 'white':
      default:
        return {
          bg: '#ffffff',
          text: '#334155',
          border: '#fce7f3',
        };
    }
  };

  const paperStyle = getPaperStyle();

  return (
    <div id="chapter-reader-view" className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Top Bar Navigation & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fce7f3' }}>
        <button
          onClick={onBackToStory}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-pink-600 dark:text-pink-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Về mục lục: {story.title}
        </button>

        {/* Reader Customizer Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 cursor-pointer hover:scale-103 transition-transform"
          >
            <Settings className="w-3.5 h-3.5" /> Chỉnh cỡ chữ &amp; nền đọc
          </button>
        </div>
      </div>

      {/* Reader Settings Drawer/Panel */}
      {showSettings && (
        <div
          className="p-4 rounded-2xl border shadow-sm space-y-3 animate-in slide-in-from-top-2 duration-200 text-xs"
          style={{
            backgroundColor: isDark ? '#231d38' : '#fff5f7',
            borderColor: isDark ? '#473a62' : '#fbcfe8',
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Font Family */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-300">Font chữ:</span>
              {(['serif', 'sans', 'display'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFontFamily(f)}
                  className={`px-2.5 py-1 rounded-md border font-semibold ${
                    fontFamily === f
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  {f === 'serif' ? 'Serif Lora' : f === 'sans' ? 'Nunito Dịu Mắt' : 'Playfair Cổ Điển'}
                </button>
              ))}
            </div>

            {/* Font Size */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-300">Cỡ chữ:</span>
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border font-bold"
              >
                A-
              </button>
              <span className="font-semibold text-pink-600">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(26, fontSize + 2))}
                className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border font-bold"
              >
                A+
              </button>
            </div>

            {/* Paper Theme */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-300">Nền giấy:</span>
              {[
                { id: 'cream', name: 'Kem vàng', bg: '#fbf7ee' },
                { id: 'white', name: 'Trắng tinh', bg: '#ffffff' },
                { id: 'mint', name: 'Xanh mint', bg: '#f0fdf4' },
                { id: 'night', name: 'Đêm sao', bg: '#1b172a' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPaperTheme(p.id as any)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    paperTheme === p.id ? 'ring-2 ring-pink-500 scale-110' : ''
                  }`}
                  style={{ backgroundColor: p.bg }}
                  title={p.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Chapter Content Container */}
      <article
        className="rounded-3xl p-6 sm:p-12 border shadow-md transition-all duration-300 relative"
        style={{
          backgroundColor: paperStyle.bg,
          borderColor: paperStyle.border,
          color: paperStyle.text,
        }}
      >
        {/* Story Title & Chapter Title Header */}
        <div className="text-center pb-8 mb-8 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#f3d6c6' }}>
          <span className="text-xs uppercase tracking-widest text-pink-600 dark:text-pink-400 font-bold">
            {story.title}
          </span>
          <h1
            className="text-2xl sm:text-3xl font-bold mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {chapter.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
            <span>Ngày đăng: {chapter.releaseDate}</span>
            <span>•</span>
            <span>Chuyển ngữ: {story.translator}</span>
            <span>•</span>
            <span>Độ dài: {chapter.wordCount} chữ</span>
          </div>
        </div>

        {/* LOCKED CHAPTER INTERACTION BOX */}
        {isCurrentLocked ? (
          <div
            id="chapter-locked-prompt"
            className="my-8 p-6 sm:p-10 rounded-2xl border-2 border-dashed text-center max-w-lg mx-auto space-y-4"
            style={{
              backgroundColor: isDark ? '#261f3d' : '#fff9fa',
              borderColor: '#f472b6',
            }}
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-pink-100 dark:bg-pink-900/60 text-pink-600 flex items-center justify-center shadow-xs">
              <Lock className="w-7 h-7" />
            </div>

            <h3
              className="text-xl font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chương Này Đang Được Khóa Mật Khẩu
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Để bảo vệ công sức của dịch giả và bản quyền tác giả phi lợi nhuận, vui lòng nhập mật mã mở rương.
            </p>

            {/* Hint Box */}
            <div className="p-3.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900/60 text-left">
              <span className="text-xs font-bold text-pink-700 dark:text-pink-300 block mb-1 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5" /> Gợi ý giải pass:
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 italic font-medium">
                {chapter.passwordHint || 'Xem trong mục Password của blog để tìm câu trả lời.'}
              </p>
            </div>

            {/* Password Form */}
            <form onSubmit={handleUnlock} className="space-y-2 pt-2">
              <input
                type="text"
                placeholder="Nhập mật khẩu (ví dụ: caykemduahau)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border text-sm text-center font-medium focus:ring-2 focus:ring-pink-400 outline-hidden"
                style={{
                  backgroundColor: isDark ? '#1a162b' : '#ffffff',
                  borderColor: '#fbcfe8',
                  color: isDark ? '#ffffff' : '#1e293b',
                }}
              />
              {passError && (
                <p className="text-xs text-rose-500 font-semibold">{passError}</p>
              )}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-bold text-sm bg-pink-500 hover:bg-pink-600 text-white shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Mở khóa đọc chương
              </button>
            </form>
          </div>
        ) : (
          /* UNLOCKED FULL CHAPTER TEXT */
          <div
            id="chapter-content-body"
            className="leading-relaxed whitespace-pre-line space-y-4"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: 1.85,
              fontFamily:
                fontFamily === 'serif'
                  ? "'Lora', Georgia, serif"
                  : fontFamily === 'display'
                  ? "'Playfair Display', Georgia, serif"
                  : "'Nunito', system-ui, sans-serif",
            }}
          >
            {chapter.content}
          </div>
        )}

        {/* Post-Reading End Ornament */}
        <div className="text-center pt-10 mt-10 border-t border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#f3d6c6' }}>
          <span className="text-2xl">🌸 ⛵ 🌸</span>
          <p className="text-xs italic text-slate-400 mt-2" style={{ fontFamily: "'Lora', serif" }}>
            "Cảm ơn bạn đã đồng hành cùng better and better trong từng con chữ mùa hạ!"
          </p>
        </div>
      </article>

      {/* Chapter Bottom Navigation (Prev / Next) */}
      <div className="flex items-center justify-between gap-3 pt-2">
        {prevChapter ? (
          <button
            onClick={() => onSelectChapter(prevChapter)}
            className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border border-pink-200 dark:border-pink-800 bg-white dark:bg-slate-900 text-pink-700 dark:text-pink-300 hover:bg-pink-50 transition-all cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Chương trước
          </button>
        ) : (
          <div />
        )}

        {nextChapter && (
          <button
            onClick={() => onSelectChapter(nextChapter)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-pink-500 hover:bg-pink-600 text-white transition-all cursor-pointer flex items-center gap-2 shadow-xs ml-auto"
          >
            Chương sau <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
