import { Sparkles, Ship, Heart, ShieldAlert, Feather } from 'lucide-react';

interface HomeIntroProps {
  isDark: boolean;
}

export function HomeIntro({ isDark }: HomeIntroProps) {
  return (
    <section
      id="home-introduction-section"
      className="relative rounded-3xl p-6 sm:p-9 border transition-all duration-300 shadow-md overflow-hidden mb-8"
      style={{
        backgroundColor: isDark ? '#201b33' : '#ffffff',
        borderColor: isDark ? '#43375c' : '#fbcfe8',
        boxShadow: isDark
          ? '0 12px 30px -8px rgba(0, 0, 0, 0.5)'
          : '0 12px 30px -8px rgba(244, 114, 182, 0.15)',
      }}
    >
      {/* Decorative Summer Glow & Cherry Blossom Background Elements */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-60"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #db2777 0%, transparent 70%)'
            : 'radial-gradient(circle, #fbcfe8 0%, #fef08a 100%)',
        }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-40"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #38bdf8 0%, transparent 70%)'
            : 'radial-gradient(circle, #bae6fd 0%, #bbf7d0 100%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Words & Content requested by User */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Tag & Sub-badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs border"
            style={{
              backgroundColor: isDark ? '#362947' : '#fdf2f8',
              borderColor: isDark ? '#553d70' : '#fce7f3',
              color: isDark ? '#f9a8d4' : '#db2777',
            }}
          >
            <span className="text-sm">🌸</span>
            <span>Trang phụ của Mellifluous</span>
            <span className="w-1 h-1 rounded-full bg-pink-400"></span>
            <span className="text-amber-500 dark:text-amber-300 font-semibold">Concept Mùa Hè Thanh Xuân</span>
          </div>

          {/* Main Title: Xin chào, tớ là Mellifluous */}
          <div>
            <h1
              id="intro-main-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Xin chào, tớ là <span className="text-pink-600 dark:text-pink-400">Mellifluous</span>
            </h1>
            
            {/* Subtitle: ━ Một chiếc thuyền nhỏ lênh đênh ngược gió */}
            <div
              id="intro-subtitle"
              className="text-lg sm:text-xl font-semibold mt-1.5 flex items-center gap-2 text-rose-500 dark:text-pink-300"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              <span>━ Một chiếc thuyền nhỏ lênh đênh ngược gió</span>
              <Ship className="w-4 h-4 inline-block text-sky-500 animate-bounce" />
            </div>
          </div>

          {/* Main Description */}
          <p
            id="intro-description-text"
            className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Đây là trang phụ của tớ, đăng linh ta linh tinh. Đăng truyện song song với trang chính, cập nhật muộn và không thường xuyên, phòng ngừa trang chính bị khóa
          </p>

          {/* Italic Note */}
          <div
            id="intro-italic-notice"
            className="p-4 rounded-2xl border-l-4 border shadow-2xs space-y-1 transition-colors"
            style={{
              backgroundColor: isDark ? '#28203b' : '#fff7fa',
              borderColor: isDark ? '#4d3963' : '#fce7f3',
              borderLeftColor: '#f472b6',
            }}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-pink-700 dark:text-pink-300 uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-pink-500" />
              <span>Lưu ý quan trọng từ nhà dịch</span>
            </div>
            <p
              className="italic text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              "Truyện trong nhà được chuyển ngữ dưới sự cho phép của tác giả với mục đích phi lợi nhuận, sẽ có mật khẩu để đảm bảo công sức của tác giả lẫn dịch giả."
            </p>
          </div>

          {/* Aesthetic tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 font-medium">
              🌸 Hoa anh đào
            </span>
            <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 font-medium">
              ☀️ Nắng hè học đường
            </span>
            <span className="px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 font-medium">
              ⛵ Thuyền nhỏ ngược gió
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-medium">
              🌿 Thanh xuân êm đềm
            </span>
          </div>
        </div>

        {/* Right Column: Illustration of Blooming Cherry Blossom Tree & Little Boat */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <div
            className="relative w-full max-w-[280px] p-5 rounded-2xl border text-center transition-transform hover:scale-102"
            style={{
              backgroundColor: isDark ? '#27203d' : '#fffdfa',
              borderColor: isDark ? '#463760' : '#fed7aa',
              boxShadow: '0 8px 20px -4px rgba(0,0,0,0.08)',
            }}
          >
            {/* Washi tape decoration at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-pink-200/80 dark:bg-pink-800/80 rounded-xs -rotate-2 border border-pink-300/60 shadow-xs pointer-events-none" />

            {/* Custom Aesthetic SVG: Cherry Blossom Tree, Summer Sky & Tiny Paper Boat */}
            <div className="relative mx-auto my-2 w-44 h-44 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm">
                {/* Summer Sky Gradient Circle */}
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? '#312e81' : '#bae6fd'} />
                    <stop offset="60%" stopColor={isDark ? '#4c1d95' : '#fce7f3'} />
                    <stop offset="100%" stopColor={isDark ? '#831843' : '#fef08a'} />
                  </linearGradient>
                  <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#78350f" />
                    <stop offset="100%" stopColor="#451a03" />
                  </linearGradient>
                  <radialGradient id="sunGrad">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Sky Circle */}
                <circle cx="100" cy="100" r="88" fill="url(#skyGrad)" opacity={isDark ? "0.9" : "0.75"} />

                {/* Gentle Summer Sunshine Halo */}
                <circle cx="145" cy="55" r="28" fill="url(#sunGrad)" opacity="0.8" />

                {/* Water Waves for the boat */}
                <path
                  d="M15,145 Q50,135 100,145 T185,145 L185,190 L15,190 Z"
                  fill={isDark ? '#1e1b4b' : '#7dd3fc'}
                  opacity="0.8"
                />
                <path
                  d="M10,158 Q60,150 110,160 T190,158 L190,190 L10,190 Z"
                  fill={isDark ? '#0f172a' : '#38bdf8'}
                  opacity="0.9"
                />

                {/* The Little Paper Boat (Chiếc thuyền nhỏ lênh đênh ngược gió) */}
                <g transform="translate(48, 140) scale(0.65)">
                  {/* Boat hull */}
                  <polygon points="10,25 70,25 58,40 22,40" fill="#ffffff" stroke="#f472b6" strokeWidth="2" />
                  {/* Sail */}
                  <polygon points="40,5 40,25 65,25" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                  <polygon points="38,2 38,25 18,25" fill="#fef08a" stroke="#f59e0b" strokeWidth="1.5" />
                  {/* Little Pink Flag */}
                  <polygon points="40,2 48,5 40,8" fill="#ec4899" />
                </g>

                {/* Cherry Blossom Tree Trunk (Cây hoa anh đào) */}
                <path
                  d="M128,155 C125,120 135,100 120,85 C112,75 105,70 98,68 C94,67 96,62 101,62 C108,63 118,70 126,78 C135,88 142,108 140,155 Z"
                  fill="url(#trunkGrad)"
                />
                <path
                  d="M125,98 C138,90 148,82 155,75"
                  stroke="#592506"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M118,85 C108,78 95,72 82,74"
                  stroke="#592506"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Cherry Blossom Foliage Cloud (Tán hoa anh đào hồng rực) */}
                <circle cx="120" cy="55" r="30" fill="#f472b6" opacity="0.85" />
                <circle cx="95" cy="62" r="24" fill="#f9a8d4" opacity="0.9" />
                <circle cx="145" cy="62" r="22" fill="#fbcfe8" opacity="0.9" />
                <circle cx="115" cy="40" r="20" fill="#fdf2f8" opacity="0.95" />
                <circle cx="132" cy="72" r="18" fill="#fda4af" opacity="0.8" />
                <circle cx="80" cy="68" r="16" fill="#f472b6" opacity="0.8" />

                {/* Floating sakura petals in the air */}
                <ellipse cx="65" cy="85" rx="4" ry="7" fill="#fbcfe8" transform="rotate(25 65 85)" />
                <ellipse cx="78" cy="105" rx="3.5" ry="6" fill="#f472b6" transform="rotate(-30 78 105)" />
                <ellipse cx="98" cy="120" rx="3" ry="5.5" fill="#fda4af" transform="rotate(40 98 120)" />
                <ellipse cx="142" cy="110" rx="4" ry="6.5" fill="#fbcfe8" transform="rotate(-15 142 110)" />
                <ellipse cx="158" cy="95" rx="3.5" ry="5" fill="#f472b6" transform="rotate(50 158 95)" />
              </svg>
            </div>

            <div
              className="text-xs font-bold text-pink-600 dark:text-pink-300"
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem' }}
            >
              better and better
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Tán hoa anh đào • Gió mùa hè 2026
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
