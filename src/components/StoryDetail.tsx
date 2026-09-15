import React, { useState, type FormEvent } from 'react';
import { ArrowLeft, BookOpen, Heart, Share2, Lock, Unlock, Eye, Star, Clock, Send, MessageCircle } from 'lucide-react';
import { Story, Chapter, CommentItem } from '../types';

interface StoryDetailProps {
  story: Story;
  onBack: () => void;
  onSelectChapter: (chapter: Chapter) => void;
  isDark: boolean;
}

export function StoryDetail({
  story,
  onBack,
  onSelectChapter,
  isDark,
}: StoryDetailProps) {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'cmt-1',
      author: 'Hạ Nhật An Yên',
      avatar: '🌸',
      date: 'Hôm qua lúc 21:15',
      content: 'Truyện ngọt lịm tim luôn á! Giọng văn chuyển ngữ của Mellifluous mượt mà dịu dàng cực kỳ, đọc mà muốn quay lại năm mười bảy tuổi ghê!',
      likes: 24,
    },
    {
      id: 'cmt-2',
      author: 'Lạc Hy',
      avatar: '🍨',
      date: '2 ngày trước',
      content: 'Pass dễ thương lắm nha mọi người, đọc kỹ văn án là đoán ra liền không cần phải hỏi đâu nà. Cảm ơn nhà dịch nhiều!',
      likes: 18,
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const item: CommentItem = {
      id: `cmt-${Date.now()}`,
      author: authorName.trim() || 'Bạn Đọc Dễ Thương',
      avatar: '💌',
      date: 'Vừa xong',
      content: newComment.trim(),
      likes: 1,
    };
    setComments([item, ...comments]);
    setNewComment('');
  };

  return (
    <div id="story-detail-view" className="space-y-8 animate-in fade-in duration-300">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Quay lại danh sách truyện
      </button>

      {/* Book Banner Card */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm relative overflow-hidden"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          {/* Book Cover */}
          <div className="w-full sm:w-52 h-72 rounded-2xl overflow-hidden shrink-0 shadow-md border border-pink-200 dark:border-pink-900/50 relative">
            <img
              src={story.coverUrl}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <span
              className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-xs ${
                story.status === 'completed'
                  ? 'bg-emerald-500/90 text-white'
                  : 'bg-sky-500/90 text-white'
              }`}
            >
              {story.status === 'completed' ? '🌸 Đã hoàn' : '🌿 Đang ra'}
            </span>
          </div>

          {/* Book Metadata */}
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {story.genres.map((g) => (
                <span
                  key={g}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-900/40"
                >
                  {g}
                </span>
              ))}
            </div>

            <h1
              className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {story.title}
            </h1>

            {story.originalTitle && (
              <p className="text-sm italic text-slate-500 dark:text-slate-400">
                Tên gốc: {story.originalTitle}
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="text-slate-400 block text-xs">Tác giả:</span>
                <strong>{story.author}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Chuyển ngữ:</span>
                <strong className="text-pink-600 dark:text-pink-400">{story.translator}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Tình trạng:</span>
                <strong>{story.status === 'completed' ? 'Hoàn thành' : 'Đang cập nhật'}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Số chương:</span>
                <strong>{story.chapters.length} chương</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Lượt đọc:</span>
                <strong>{story.views.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Đánh giá:</span>
                <strong className="text-amber-500">★ {story.rating} / 5.0</strong>
              </div>
            </div>

            {/* CTA Button: Start reading */}
            <div className="pt-4 flex flex-wrap gap-3">
              {story.chapters.length > 0 && (
                <button
                  onClick={() => onSelectChapter(story.chapters[0])}
                  className="px-6 py-2.5 rounded-full font-bold text-sm bg-linear-to-r from-pink-500 to-rose-400 text-white shadow-md hover:scale-105 transition-transform cursor-pointer flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" /> Đọc từ đầu (Chương 1)
                </button>
              )}
              {story.chapters.length > 1 && (
                <button
                  onClick={() => onSelectChapter(story.chapters[story.chapters.length - 1])}
                  className="px-5 py-2.5 rounded-full font-semibold text-sm border border-pink-300 dark:border-pink-800 text-pink-700 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/40 transition-colors cursor-pointer"
                >
                  Chương mới nhất
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Synopsis / Văn Án */}
        <div className="mt-8 pt-6 border-t border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fbcfe8' }}>
          <h3
            className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span>📜</span> Văn Án Tác Phẩm
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line p-5 rounded-2xl border"
            style={{
              fontFamily: "'Lora', serif",
              backgroundColor: isDark ? '#261f3d' : '#fffdfa',
              borderColor: isDark ? '#473a62' : '#f6e5d8',
            }}
          >
            {story.description}
          </p>
        </div>
      </div>

      {/* Chapter List (Mục lục chương) */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fbcfe8' }}>
          <h3
            className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span>📖</span> Danh Sách Các Chương
          </h3>
          <span className="text-xs text-slate-400">
            Tổng cộng: {story.chapters.length} chương
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {story.chapters.map((chap) => (
            <div
              key={chap.id}
              onClick={() => onSelectChapter(chap)}
              className="p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group hover:border-pink-400 hover:shadow-xs"
              style={{
                backgroundColor: isDark ? '#261f3d' : '#fffdfa',
                borderColor: isDark ? '#3f3255' : '#fce7f3',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    chap.isLocked
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300'
                  }`}
                >
                  {chap.isLocked ? <Lock className="w-3.5 h-3.5" /> : chap.chapterNum}
                </div>
                <div>
                  <h4
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-1"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {chap.title}
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {chap.releaseDate} • {chap.wordCount} chữ
                  </span>
                </div>
              </div>

              {chap.isLocked ? (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Khóa pass
                </span>
              ) : (
                <span className="text-xs font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Đọc &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Discussion & Comments Box (Bình luận truyện) */}
      <div
        className="rounded-3xl p-6 sm:p-8 border shadow-sm"
        style={{
          backgroundColor: isDark ? '#201b33' : '#ffffff',
          borderColor: isDark ? '#43375c' : '#fce7f3',
        }}
      >
        <h3
          className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <MessageCircle className="w-5 h-5 text-pink-500" /> Bình Luận Cùng Độc Giả
        </h3>

        {/* Comment Form */}
        <form onSubmit={handleAddComment} className="mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Tên của bạn (hoặc để trống sẽ là Bạn Đọc Dễ Thương)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm outline-hidden focus:ring-2 focus:ring-pink-400"
              style={{
                backgroundColor: isDark ? '#261f3d' : '#fff8fa',
                borderColor: isDark ? '#43375c' : '#fbcfe8',
                color: isDark ? '#f1f5f9' : '#334155',
              }}
            />
          </div>
          <textarea
            rows={3}
            placeholder="Chia sẻ cảm nhận của bạn về chương truyện hoặc gửi lời động viên tới Mellifluous..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3.5 rounded-xl border text-xs sm:text-sm outline-hidden focus:ring-2 focus:ring-pink-400"
            style={{
              backgroundColor: isDark ? '#261f3d' : '#fff8fa',
              borderColor: isDark ? '#43375c' : '#fbcfe8',
              color: isDark ? '#f1f5f9' : '#334155',
            }}
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-full font-bold text-xs sm:text-sm bg-pink-500 text-white hover:bg-pink-600 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" /> Gửi bình luận
          </button>
        </form>

        {/* List of comments */}
        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-2xl border"
              style={{
                backgroundColor: isDark ? '#261f3d' : '#fffbf7',
                borderColor: isDark ? '#3d3255' : '#fce7f3',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{c.avatar}</span>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      {c.author}
                    </h5>
                    <span className="text-[10px] text-slate-400">{c.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-rose-500">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>{c.likes}</span>
                </div>
              </div>
              <p
                className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {c.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
