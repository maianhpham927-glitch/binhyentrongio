import React, { useState, type ChangeEvent } from 'react';
import { Pin, ChevronDown, Clock, BookOpen, Music, Volume2, VolumeX, Sparkles, Heart, ExternalLink, Tag } from 'lucide-react';
import { Announcement, Story } from '../types';

interface SidebarProps {
  announcements: Announcement[];
  stories: Story[];
  onSelectStory: (story: Story) => void;
  onSelectChapter?: (story: Story, chapterNum: number) => void;
  isDark: boolean;
}

export function Sidebar({
  announcements,
  stories,
  onSelectStory,
  onSelectChapter,
  isDark,
}: SidebarProps) {
  const [selectedStoryId, setSelectedStoryId] = useState<string>('');
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Flatten latest chapters from all stories
  const recentChapters = stories
    .flatMap((story) =>
      story.chapters.map((chap) => ({
        story,
        chapter: chap,
      }))
    )
    .sort((a, b) => b.chapter.chapterNum - a.chapter.chapterNum)
    .slice(0, 6);

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sId = e.target.value;
    setSelectedStoryId(sId);
    if (!sId) return;
    const targetStory = stories.find((s) => s.id === sId);
    if (targetStory) {
      onSelectStory(targetStory);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <aside id="blog-right-sidebar" className="space-y-6">
      
      {/* 1. BẢNG TIN THÔNG BÁO CHÍNH (Đoạn văn thông báo các thông báo chính) */}
      <div
        id="sidebar-announcement-widget"
        className="rounded-2xl p-5 border transition-all duration-300 shadow-xs relative"
        style={{
          backgroundColor: isDark ? '#221d35' : '#ffffff',
          borderColor: isDark ? '#43375d' : '#fce7f3',
        }}
      >
        {/* Cute Push Pin Decoration */}
        <div className="absolute -top-3 left-6 flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-rose-400 text-white flex items-center justify-center shadow-xs text-xs font-bold -rotate-12 border border-white">
            📌
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-pink-100 text-pink-700 dark:bg-pink-900/60 dark:text-pink-300">
            Ghim Bảng Tin
          </span>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fbcfe8' }}>
            <h3
              className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Thông Báo Nhà Mellifluous
            </h3>
          </div>

          {announcements.map((item) => (
            <div key={item.id} className="mb-3.5 last:mb-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-bold text-xs text-pink-600 dark:text-pink-400">
                  {item.title}
                </span>
                <span className="text-[10px] text-slate-400 shrink-0">{item.date}</span>
              </div>
              <p
                className="text-xs leading-relaxed text-slate-600 dark:text-slate-300"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. DANH MỤC ĐỔ XUỐNG ĐỂ CHỌN CÁC TÁC PHẨM TRUYỆN (với mũi tên đổ xuống trang trí) */}
      <div
        id="sidebar-story-dropdown-widget"
        className="rounded-2xl p-5 border transition-all duration-300 shadow-xs"
        style={{
          backgroundColor: isDark ? '#221d35' : '#ffffff',
          borderColor: isDark ? '#43375d' : '#fce7f3',
        }}
      >
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fbcfe8' }}>
          <div className="flex items-center gap-2">
            <span className="text-base">📚</span>
            <h3
              className="text-base font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tác Phẩm Truyện
            </h3>
          </div>
          <span className="text-[11px] font-semibold text-pink-500 bg-pink-50 dark:bg-pink-950/60 px-2 py-0.5 rounded-full">
            {stories.length} bộ
          </span>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          Chọn tác phẩm ngôn tình bạn muốn thưởng thức dưới danh mục đổ xuống:
        </p>

        {/* Custom Dropdown Container with Animated Arrow */}
        <div className="relative">
          <select
            id="sidebar-story-select"
            value={selectedStoryId}
            onChange={handleDropdownChange}
            className="w-full appearance-none px-3.5 py-2.5 pr-10 rounded-xl text-xs sm:text-sm font-medium border cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-pink-400 transition-all shadow-2xs"
            style={{
              backgroundColor: isDark ? '#2a2440' : '#fff5f7',
              borderColor: isDark ? '#4c3e66' : '#fbcfe8',
              color: isDark ? '#f3e8f1' : '#4a3b45',
            }}
          >
            <option value="">-- Nhấp để chọn tác phẩm truyện --</option>
            {stories.map((story) => (
              <option key={story.id} value={story.id}>
                {story.status === 'completed' ? '🌸 [Full]' : '🌿 [Đang ra]'}{' '}
                {story.title}
              </option>
            ))}
          </select>

          {/* Decorative Down Arrow Icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-pink-500 animate-pulse">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Story Quick Tags */}
        <div className="mt-3 pt-2.5 border-t border-dashed flex flex-wrap gap-1.5 text-[11px]" style={{ borderColor: isDark ? '#3d3255' : '#fce7f3' }}>
          <span className="text-slate-400 text-[10px] w-full mb-0.5">Thẻ gợi ý:</span>
          {['#ThanhXuân', '#VườnTrường', '#NgọtSủng', '#GươngVỡLạiLành', '#HọcThần'].map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-pink-500 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 3. THÔNG BÁO CÁC CHƯƠNG TRUYỆN/BÀI VIẾT MỚI NHẤT CẬP NHẬT THEO THỜI GIAN */}
      <div
        id="sidebar-recent-chapters-widget"
        className="rounded-2xl p-5 border transition-all duration-300 shadow-xs"
        style={{
          backgroundColor: isDark ? '#221d35' : '#ffffff',
          borderColor: isDark ? '#43375d' : '#fce7f3',
        }}
      >
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fbcfe8' }}>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-pink-500" />
            <h3
              className="text-base font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chương Mới Cập Nhật
            </h3>
          </div>
          <span className="text-[10px] text-slate-400">Theo thời gian</span>
        </div>

        <div className="space-y-3">
          {recentChapters.map(({ story, chapter }, idx) => (
            <div
              key={`${story.id}-${chapter.id}`}
              onClick={() => {
                onSelectStory(story);
                if (onSelectChapter) {
                  onSelectChapter(story, chapter.chapterNum);
                }
              }}
              className="group p-2.5 rounded-xl transition-all cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-950/40 border border-transparent hover:border-pink-200 dark:hover:border-pink-800"
            >
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 line-clamp-1">
                  {story.title}
                </span>
                {idx === 0 && (
                  <span className="px-1.5 py-0.2 rounded-xs bg-rose-500 text-white text-[9px] font-bold uppercase shrink-0">
                    Mới
                  </span>
                )}
              </div>

              <h4
                className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-1"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {chapter.title}
              </h4>

              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                <span>{chapter.releaseDate}</span>
                <span>{chapter.isLocked ? '🔒 Có mật khẩu' : '📖 Đọc tự do'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SUMMER LOFI ACOUSTIC MUSIC PLAYER WIDGET */}
      <div
        id="sidebar-summer-music-player"
        className="rounded-2xl p-4.5 border transition-all duration-300 shadow-xs relative overflow-hidden"
        style={{
          backgroundColor: isDark ? '#231d38' : '#fffdfa',
          borderColor: isDark ? '#463760' : '#fed7aa',
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Music className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span
              className="text-xs font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Giai Điệu Mùa Hè
            </span>
          </div>
          <span className="text-[10px] text-amber-600 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-1.5 py-0.5 rounded-full font-medium">
            Lofi Piano
          </span>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
            <span className="line-clamp-1">Gió Mùa Hạ &amp; Ve Sầu Sân Trường (Piano)</span>
            <button
              onClick={() => setIsPlayingMusic(!isPlayingMusic)}
              className="p-1.5 rounded-full bg-pink-500 text-white hover:scale-105 transition-transform cursor-pointer shadow-xs shrink-0"
              title={isPlayingMusic ? 'Tạm dừng' : 'Phát nhạc'}
            >
              {isPlayingMusic ? '⏸' : '▶'}
            </button>
          </div>

          {/* Equalizer / Waves visualization */}
          <div className="flex items-center gap-1 mt-2.5 h-3">
            {[40, 75, 100, 60, 90, 45, 80, 50, 70, 95].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full transition-all duration-300 ${
                  isPlayingMusic ? 'bg-pink-400' : 'bg-slate-300 dark:bg-slate-700'
                }`}
                style={{
                  height: isPlayingMusic ? `${Math.max(20, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '20%',
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2">
            <span>{isPlayingMusic ? 'Đang phát du dương...' : 'Bấm ▶ để hòa cùng tiếng ve'}</span>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="hover:text-pink-500 cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MINI PROFILE MELLIFLUOUS */}
      <div
        id="sidebar-profile-card"
        className="rounded-2xl p-5 border text-center transition-all duration-300 shadow-xs"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fbcfe8',
        }}
      >
        <div className="relative w-16 h-16 mx-auto mb-3">
          <div className="w-full h-full rounded-full bg-linear-to-tr from-pink-400 via-rose-300 to-amber-200 p-0.5 shadow-md flex items-center justify-center text-2xl">
            ⛵
          </div>
          <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] text-white font-bold" title="Đang online">
            ✓
          </span>
        </div>

        <h4
          className="font-bold text-base text-slate-900 dark:text-slate-100"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mellifluous
        </h4>
        <p className="text-xs text-pink-600 dark:text-pink-400 font-semibold mb-2">
          Một chiếc thuyền nhỏ lênh đênh ngược gió
        </p>

        <p
          className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 italic px-2 mb-3"
          style={{ fontFamily: "'Lora', serif" }}
        >
          "Gửi vào gió hạ một đóa hoa anh đào, gửi vào tim người một thời niên thiếu..."
        </p>

        <div className="flex justify-center gap-2 pt-2 border-t border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fce7f3' }}>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            🌸 <strong>6</strong> Tác phẩm • <strong>18.9K</strong> Độc giả
          </span>
        </div>
      </div>

    </aside>
  );
}
