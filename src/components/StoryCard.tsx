import React from 'react';
import { BookOpen, Star, Eye, Calendar, Sparkles, Heart } from 'lucide-react';
import { Story } from '../types';

interface StoryCardProps {
  key?: string;
  story: Story;
  onSelect: (story: Story) => void;
  isDark: boolean;
}

export function StoryCard({ story, onSelect, isDark }: StoryCardProps) {
  return (
    <article
      id={`story-card-${story.id}`}
      onClick={() => onSelect(story)}
      className="group rounded-2xl border transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 cursor-pointer hover:shadow-lg relative overflow-hidden"
      style={{
        backgroundColor: isDark ? '#201b33' : '#ffffff',
        borderColor: isDark ? '#3f3357' : '#fce7f3',
      }}
    >
      {/* Cover Image */}
      <div className="relative w-full sm:w-36 h-52 sm:h-48 rounded-xl overflow-hidden shrink-0 shadow-xs border border-pink-100 dark:border-pink-900/40">
        <img
          src={story.coverUrl}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Status Badge */}
        <span
          className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md shadow-xs ${
            story.status === 'completed'
              ? 'bg-emerald-500/90 text-white'
              : 'bg-sky-500/90 text-white'
          }`}
        >
          {story.status === 'completed' ? '🌸 Đã hoàn thành' : '🌿 Đang tiến hành'}
        </span>

        {/* Hot / Recommended ribbon */}
        {story.isHot && (
          <span className="absolute bottom-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-rose-500/90 text-white shadow-xs">
            HOT 🔥
          </span>
        )}
      </div>

      {/* Content Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Genre Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {story.genres.map((genre) => (
              <span
                key={genre}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-100 dark:border-pink-900/40"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {story.title}
          </h3>

          {/* Original Title & Author */}
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            {story.originalTitle && (
              <span className="italic opacity-85">Gốc: {story.originalTitle}</span>
            )}
            <span>Tác giả: <strong>{story.author}</strong></span>
            <span>Chuyển ngữ: <strong className="text-pink-500">Mellifluous</strong></span>
          </div>

          {/* Synopsis Excerpt */}
          <p
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-3 leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {story.description}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-4 pt-3 border-t border-dashed flex items-center justify-between text-xs text-slate-400" style={{ borderColor: isDark ? '#392e4e' : '#fce7f3' }}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-300">
              <BookOpen className="w-3.5 h-3.5 text-pink-500" />
              {story.chapters.length} chương
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-amber-500" />
              {story.views.toLocaleString()} lượt đọc
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-500" />
              {story.updatedDate}
            </span>
          </div>

          <span className="font-semibold text-pink-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
            Xem chương &rarr;
          </span>
        </div>
      </div>
    </article>
  );
}
