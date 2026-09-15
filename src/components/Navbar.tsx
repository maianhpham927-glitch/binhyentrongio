import { useState } from 'react';
import { Search, Moon, Sun, Flower2, Code2, Menu, X, BookHeart, Sparkles } from 'lucide-react';
import { ActiveTab, Story } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isDark: boolean;
  toggleTheme: () => void;
  petalsEnabled: boolean;
  togglePetals: () => void;
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

export function Navbar({
  activeTab,
  setActiveTab,
  isDark,
  toggleTheme,
  petalsEnabled,
  togglePetals,
  stories,
  onSelectStory,
}: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchResults = searchQuery.trim()
    ? stories.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.genres.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="blog-navbar"
        className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-300 shadow-xs"
        style={{
          backgroundColor: isDark ? 'rgba(23, 20, 36, 0.88)' : 'rgba(255, 255, 255, 0.86)',
          borderColor: isDark ? '#382f4c' : '#fce7f3',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand / Title: better and better */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group transition-transform hover:scale-102"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-xs bg-linear-to-tr from-pink-400 via-rose-300 to-amber-200 text-white font-bold text-lg">
              🌸
            </div>
            <div>
              <span
                className="block text-xl sm:text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: isDark ? '#f472b6' : '#db2777',
                }}
              >
                better and better
              </span>
              <span
                className="block text-xs font-semibold tracking-wider uppercase opacity-75"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: isDark ? '#d8b4fe' : '#9d174d',
                }}
              >
                Mellifluous Blog • Mùa Hè Ngôn Tình
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {[
              { id: 'home', label: 'Trang chủ' },
              { id: 'completed', label: 'Truyện đã hoàn' },
              { id: 'ongoing', label: 'Chưa hoàn thành' },
              { id: 'passwords', label: 'Password' },
              { id: 'other', label: 'Một số mục khác' },
            ].map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id as ActiveTab)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-pink-900/60 text-pink-200 border border-pink-700/50 shadow-xs'
                        : 'bg-pink-100 text-pink-800 border border-pink-200 shadow-xs'
                      : isDark
                      ? 'text-slate-300 hover:text-pink-300 hover:bg-slate-800/60'
                      : 'text-slate-700 hover:text-pink-600 hover:bg-pink-50/70'
                  }`}
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {item.label}
                </button>
              );
            })}

            {/* View Blogger Theme Code Button */}
            <button
              id="nav-link-blogger-theme"
              onClick={() => handleNavClick('blogger-theme')}
              className="ml-1 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 bg-linear-to-r from-amber-400/20 via-pink-400/20 to-sky-400/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 hover:scale-105 transition-transform"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Mã Theme Blogger
            </button>
          </nav>

          {/* Action buttons (Search, Sakura Petals, Dark/Light mode) */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <button
              id="search-toggle-btn"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full transition-colors cursor-pointer border hover:border-pink-300 dark:hover:border-pink-600"
              style={{
                backgroundColor: isDark ? '#27223b' : '#fdf2f8',
                borderColor: isDark ? '#3d3455' : '#fce7f3',
                color: isDark ? '#f9a8d4' : '#db2777',
              }}
              title="Tìm kiếm trong blog"
              aria-label="Tìm kiếm truyện"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Falling Cherry Blossoms Toggle */}
            <button
              id="sakura-toggle-btn"
              onClick={togglePetals}
              className={`p-2 rounded-full transition-all cursor-pointer border ${
                petalsEnabled
                  ? 'border-pink-300 bg-pink-50 text-pink-600 dark:border-pink-600 dark:bg-pink-950/60 dark:text-pink-300 animate-pulse'
                  : 'border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 opacity-60'
              }`}
              title={petalsEnabled ? 'Tắt hoa anh đào rơi' : 'Bật hoa anh đào rơi'}
              aria-label="Cánh hoa anh đào rơi"
            >
              <Flower2 className="w-4 h-4" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all cursor-pointer border hover:rotate-12"
              style={{
                backgroundColor: isDark ? '#27223b' : '#fef9c3',
                borderColor: isDark ? '#4338ca' : '#fde047',
                color: isDark ? '#e0e7ff' : '#a16207',
              }}
              title={isDark ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Huyền Ảo Tối'}
              aria-label="Chuyển đổi sáng tối"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full md:hidden transition-colors border"
              style={{
                backgroundColor: isDark ? '#27223b' : '#fdf2f8',
                borderColor: isDark ? '#3d3455' : '#fce7f3',
                color: isDark ? '#f472b6' : '#db2777',
              }}
              aria-label="Menu di động"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t px-4 py-4 space-y-2 shadow-lg animate-in fade-in duration-200"
            style={{
              backgroundColor: isDark ? '#1a162b' : '#ffffff',
              borderColor: isDark ? '#382f4c' : '#fce7f3',
            }}
          >
            {[
              { id: 'home', label: '🌸 Trang chủ' },
              { id: 'completed', label: '📖 Truyện đã hoàn thành' },
              { id: 'ongoing', label: '🌿 Truyện chưa hoàn thành' },
              { id: 'passwords', label: '🔑 Password & Mật khẩu' },
              { id: 'other', label: '💌 Một số mục khác' },
              { id: 'blogger-theme', label: '💻 Xem & Tải Mã Theme Blogger' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as ActiveTab)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-between ${
                  activeTab === item.id
                    ? isDark
                      ? 'bg-pink-950/70 text-pink-300 font-bold'
                      : 'bg-pink-100 text-pink-800 font-bold'
                    : isDark
                    ? 'text-slate-300 hover:bg-slate-800/60'
                    : 'text-slate-700 hover:bg-pink-50'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <Sparkles className="w-4 h-4 text-pink-500" />}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Real-time Blog Search Modal */}
      {searchOpen && (
        <div
          id="search-modal-backdrop"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs"
          onClick={() => setSearchOpen(false)}
        >
          <div
            id="search-modal-container"
            className="w-full max-w-xl rounded-2xl p-5 shadow-2xl border transition-all"
            style={{
              backgroundColor: isDark ? '#1e1a30' : '#ffffff',
              borderColor: isDark ? '#4a3f68' : '#fbcfe8',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: isDark ? '#382f4c' : '#fce7f3' }}>
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-pink-500" />
                <h3
                  className="font-bold text-base"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isDark ? '#f472b6' : '#db2777',
                  }}
                >
                  Tìm kiếm trong blog
                </h3>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-pink-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3 relative">
              <input
                type="text"
                autoFocus
                placeholder="Nhập tên truyện, tác giả hoặc thể loại (thanh xuân, học đường...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 focus:ring-pink-400 transition-all"
                style={{
                  backgroundColor: isDark ? '#27223b' : '#fff5f7',
                  borderColor: isDark ? '#4a3f68' : '#fbcfe8',
                  color: isDark ? '#f1f5f9' : '#334155',
                }}
              />
            </div>

            {/* Results */}
            <div className="mt-4 max-h-72 overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-6 text-sm text-slate-400 italic">
                  Gõ từ khóa để tìm các bộ truyện ngôn tình mùa hè của Mellifluous...
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-6 text-sm text-slate-400">
                  Không tìm thấy truyện nào phù hợp với từ khóa "{searchQuery}"
                </div>
              ) : (
                searchResults.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => {
                      onSelectStory(story);
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-colors hover:bg-pink-50 dark:hover:bg-pink-950/40 border border-transparent hover:border-pink-200 dark:hover:border-pink-800"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={story.coverUrl}
                        alt={story.title}
                        className="w-12 h-16 object-cover rounded-md shadow-xs"
                      />
                      <div>
                        <h4
                          className="font-bold text-sm text-slate-900 dark:text-slate-100 line-clamp-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {story.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Tác giả: {story.author} • {story.chapters.length} chương
                        </p>
                        <div className="flex gap-1 mt-1">
                          {story.genres.slice(0, 2).map((g) => (
                            <span
                              key={g}
                              className="text-[10px] px-1.5 py-0.5 rounded-sm bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500 text-white shrink-0">
                      Đọc ngay
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
