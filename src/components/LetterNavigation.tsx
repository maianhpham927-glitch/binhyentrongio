import { Mail, CheckCircle2, Clock, KeyRound, Sparkles, Paperclip, Heart } from 'lucide-react';
import { ActiveTab } from '../types';

interface LetterNavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isDark: boolean;
}

export function LetterNavigation({ activeTab, setActiveTab, isDark }: LetterNavigationProps) {
  const letters = [
    {
      id: 'completed' as ActiveTab,
      labelNum: 'Thư số 01',
      title: 'Truyện đã hoàn thành',
      subtitle: 'Những câu chuyện trọn vẹn',
      desc: 'Tuyển tập các tác phẩm đã đi đến hồi kết ngọt ngào. Đọc liền mạch không phải đợi chương!',
      icon: CheckCircle2,
      stamp: '🌸',
      stampColor: '#f472b6',
      badge: 'Đã hoàn thành',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
      tiltClass: '-rotate-2.5 sm:-rotate-3 hover:rotate-0',
      paperBg: isDark ? '#241f38' : '#fffcf7',
      tapeColor: 'bg-pink-300/80 dark:bg-pink-800/70',
      sealColor: 'from-rose-500 to-pink-600',
    },
    {
      id: 'ongoing' as ActiveTab,
      labelNum: 'Thư số 02',
      title: 'Truyện chưa hoàn thành',
      subtitle: 'Đang đong đầy từng chương',
      desc: 'Những bộ truyện thanh xuân đang trong quá trình chuyển ngữ, cập nhật mỗi tuần.',
      icon: Clock,
      stamp: '💌',
      stampColor: '#38bdf8',
      badge: 'Đang ra',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300',
      tiltClass: 'rotate-2 sm:rotate-2.5 hover:rotate-0',
      paperBg: isDark ? '#26213c' : '#fafffc',
      tapeColor: 'bg-sky-300/80 dark:bg-sky-800/70',
      sealColor: 'from-sky-500 to-cyan-600',
    },
    {
      id: 'passwords' as ActiveTab,
      labelNum: 'Thư số 03',
      title: 'Password',
      subtitle: 'Chìa khóa mở rương bí mật',
      desc: 'Hướng dẫn giải mật khẩu chống reup cho các chương truyện được bảo mật của nhà.',
      icon: KeyRound,
      stamp: '🔑',
      stampColor: '#eab308',
      badge: 'Mật mã',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
      tiltClass: '-rotate-1.5 sm:-rotate-2 hover:rotate-0',
      paperBg: isDark ? '#27203b' : '#fffbf2',
      tapeColor: 'bg-amber-300/80 dark:bg-amber-800/70',
      sealColor: 'from-amber-500 to-yellow-600',
    },
    {
      id: 'other' as ActiveTab,
      labelNum: 'Thư số 04',
      title: 'Một số mục khác',
      subtitle: 'Góc tâm tình mùa hè',
      desc: 'Nội quy nhà Mellifluous, hòm thư chia sẻ tâm sự, danh sách playlist thanh xuân.',
      icon: Sparkles,
      stamp: '🎐',
      stampColor: '#a855f7',
      badge: 'Tản văn & Note',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
      tiltClass: 'rotate-2 sm:rotate-3 hover:rotate-0',
      paperBg: isDark ? '#28213e' : '#fcfaff',
      tapeColor: 'bg-purple-300/80 dark:bg-purple-800/70',
      sealColor: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="letter-navigation-section" className="mb-10">
      {/* Title Header for Letters */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">💌</span>
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Các Mục Chuyển Hướng Gửi Bạn
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Lá thư tình bay bay &amp; Tờ giấy ghi chú lồng ghép nghiêng nghiêng
            </p>
          </div>
        </div>
      </div>

      {/* Grid with Tilted / Overlapping Letters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 pb-4">
        {letters.map((letter) => {
          const isSelected = activeTab === letter.id;
          const Icon = letter.icon;

          return (
            <div
              key={letter.id}
              id={`letter-nav-${letter.id}`}
              onClick={() => {
                setActiveTab(letter.id);
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className={`relative cursor-pointer rounded-2xl p-5 border transition-all duration-300 transform shadow-sm group flex flex-col justify-between min-h-[220px] ${
                letter.tiltClass
              } ${
                isSelected
                  ? 'ring-2 ring-pink-400 scale-103 shadow-lg z-20'
                  : 'hover:scale-103 hover:shadow-lg hover:z-20'
              }`}
              style={{
                backgroundColor: letter.paperBg,
                borderColor: isSelected
                  ? '#f472b6'
                  : isDark
                  ? '#4a3d64'
                  : '#f1e2ce',
              }}
            >
              {/* Washi Tape / Paperclip decoration at the top edge */}
              <div
                className={`absolute -top-3 left-8 w-20 h-5.5 ${letter.tapeColor} rounded-xs shadow-2xs rotate-1 pointer-events-none border border-black/5 flex items-center justify-center`}
              >
                <div className="w-full border-t border-dashed border-white/50" />
              </div>

              {/* Paperclip on right side */}
              <div className="absolute -top-2 right-6 text-slate-400 dark:text-slate-500 pointer-events-none">
                <Paperclip className="w-4 h-4 rotate-45" />
              </div>

              {/* Top part of letter: Postal Stamp & Handwritten Number */}
              <div>
                <div className="flex items-start justify-between">
                  <span
                    className="text-sm font-semibold tracking-wide text-pink-600 dark:text-pink-400"
                    style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem' }}
                  >
                    {letter.labelNum}
                  </span>

                  {/* Postal Stamp with serrated edges illusion */}
                  <div
                    className="w-9 h-11 border-2 border-dashed rounded-xs flex flex-col items-center justify-center p-0.5 shadow-2xs rotate-6 group-hover:rotate-0 transition-transform"
                    style={{
                      borderColor: letter.stampColor,
                      backgroundColor: isDark ? '#1a162b' : '#ffffff',
                    }}
                  >
                    <span className="text-base">{letter.stamp}</span>
                    <span className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter">
                      POST
                    </span>
                  </div>
                </div>

                {/* Main Title on Letter */}
                <h3
                  className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {letter.title}
                </h3>

                <div
                  className="text-xs font-medium text-pink-500/80 dark:text-pink-300 mb-2 italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {letter.subtitle}
                </div>

                {/* Short excerpt description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {letter.desc}
                </p>
              </div>

              {/* Bottom part of letter: Wax seal stamp & Read status button */}
              <div className="mt-4 pt-3 border-t border-dashed flex items-center justify-between" style={{ borderColor: isDark ? '#3d3255' : '#f0dcd2' }}>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${letter.badgeColor}`}>
                  {letter.badge}
                </span>

                {/* Wax Seal Embellishment */}
                <div
                  className={`w-7 h-7 rounded-full bg-linear-to-tr ${letter.sealColor} text-white flex items-center justify-center shadow-xs border border-white/40 group-hover:scale-110 transition-transform`}
                  title="Con dấu sáp niêm phong thư"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
