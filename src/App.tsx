import { useState, useEffect } from 'react';
import { CherryBlossomCanvas } from './components/CherryBlossomCanvas';
import { Navbar } from './components/Navbar';
import { HomeIntro } from './components/HomeIntro';
import { LetterNavigation } from './components/LetterNavigation';
import { Sidebar } from './components/Sidebar';
import { StoryCard } from './components/StoryCard';
import { StoryDetail } from './components/StoryDetail';
import { ChapterReader } from './components/ChapterReader';
import { PasswordGuideView } from './components/PasswordGuideView';
import { OtherNotesView } from './components/OtherNotesView';
import { BloggerThemeView } from './components/BloggerThemeView';
import { Footer } from './components/Footer';
import { MOCK_STORIES, INITIAL_ANNOUNCEMENTS } from './data/mockNovels';
import { ActiveTab, Story, Chapter } from './types';
import { BookOpen, Sparkles, Filter, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('melli_theme') === 'dark';
  });
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('melli_petals');
    return saved !== null ? saved === 'true' : true;
  });

  const [stories, setStories] = useState<Story[]>(MOCK_STORIES);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // Sync theme to root class & localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('melli_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('melli_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const togglePetals = () => {
    setPetalsEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('melli_petals', next.toString());
      return next;
    });
  };

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSidebarSelectChapter = (story: Story, chapterNum: number) => {
    setSelectedStory(story);
    const targetChap = story.chapters.find((c) => c.chapterNum === chapterNum) || story.chapters[0];
    setSelectedChapter(targetChap);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStory = () => {
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedStory(null);
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter stories depending on tab
  const getFilteredStories = () => {
    if (activeTab === 'completed') {
      return stories.filter((s) => s.status === 'completed');
    }
    if (activeTab === 'ongoing') {
      return stories.filter((s) => s.status === 'ongoing');
    }
    return stories;
  };

  const displayedStories = getFilteredStories();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-pink-200 selection:text-pink-900 ${
        isDark ? 'dark bg-[#14111f] text-[#f1e8f2]' : 'bg-[#fffafb] text-[#4a3b45]'
      }`}
    >
      {/* Background Cherry Blossom Petals Simulation */}
      <CherryBlossomCanvas enabled={petalsEnabled} isDark={isDark} />

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedStory(null);
          setSelectedChapter(null);
        }}
        isDark={isDark}
        toggleTheme={toggleTheme}
        petalsEnabled={petalsEnabled}
        togglePetals={togglePetals}
        stories={stories}
        onSelectStory={handleSelectStory}
      />

      {/* Main Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* CASE 1: READING A SPECIFIC CHAPTER */}
        {selectedStory && selectedChapter ? (
          <ChapterReader
            story={selectedStory}
            chapter={selectedChapter}
            onBackToStory={handleBackToStory}
            onSelectChapter={handleSelectChapter}
            isDark={isDark}
          />
        ) : selectedStory ? (
          /* CASE 2: VIEWING STORY DETAIL / SYNOPSIS & CHAPTERS */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <StoryDetail
                story={selectedStory}
                onBack={handleBackToList}
                onSelectChapter={handleSelectChapter}
                isDark={isDark}
              />
            </div>
            <div className="lg:col-span-4">
              <Sidebar
                announcements={INITIAL_ANNOUNCEMENTS}
                stories={stories}
                onSelectStory={handleSelectStory}
                onSelectChapter={handleSidebarSelectChapter}
                isDark={isDark}
              />
            </div>
          </div>
        ) : activeTab === 'passwords' ? (
          /* CASE 3: PASSWORD SECTION */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <PasswordGuideView
                isDark={isDark}
                onBackToHome={() => setActiveTab('home')}
              />
            </div>
            <div className="lg:col-span-4">
              <Sidebar
                announcements={INITIAL_ANNOUNCEMENTS}
                stories={stories}
                onSelectStory={handleSelectStory}
                onSelectChapter={handleSidebarSelectChapter}
                isDark={isDark}
              />
            </div>
          </div>
        ) : activeTab === 'other' ? (
          /* CASE 4: OTHER NOTES SECTION */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <OtherNotesView isDark={isDark} />
            </div>
            <div className="lg:col-span-4">
              <Sidebar
                announcements={INITIAL_ANNOUNCEMENTS}
                stories={stories}
                onSelectStory={handleSelectStory}
                onSelectChapter={handleSidebarSelectChapter}
                isDark={isDark}
              />
            </div>
          </div>
        ) : activeTab === 'blogger-theme' ? (
          /* CASE 5: FULL BLOGGER XML THEME VIEW & DOWNLOAD */
          <div className="max-w-5xl mx-auto">
            <BloggerThemeView isDark={isDark} />
          </div>
        ) : (
          /* CASE 6: HOMEPAGE OR FILTERED NOVELS (COMPLETED / ONGOING) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-8">
              
              {/* Introduction Box (shown on homepage as requested) */}
              {activeTab === 'home' && <HomeIntro isDark={isDark} />}

              {/* Tilted Love Letters Navigation */}
              <LetterNavigation
                activeTab={activeTab}
                setActiveTab={(tab) => {
                  setActiveTab(tab);
                  setSelectedStory(null);
                  setSelectedChapter(null);
                }}
                isDark={isDark}
              />

              {/* Story List Section */}
              <section id="novels-list-section" className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-dashed" style={{ borderColor: isDark ? '#3d3255' : '#fce7f3' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌸</span>
                    <div>
                      <h2
                        className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {activeTab === 'completed'
                          ? 'Tuyển Tập Truyện Đã Hoàn Thành'
                          : activeTab === 'ongoing'
                          ? 'Các Bộ Truyện Đang Chuyển Ngữ'
                          : 'Tác Phẩm Ngôn Tình Nổi Bật'}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {displayedStories.length} tác phẩm mang phong vị mùa hè trong trẻo
                      </p>
                    </div>
                  </div>

                  {/* Tab Reset indicator if in sub-tab */}
                  {activeTab !== 'home' && (
                    <button
                      onClick={() => setActiveTab('home')}
                      className="text-xs font-semibold text-pink-600 dark:text-pink-400 hover:underline cursor-pointer"
                    >
                      &larr; Xem tất cả truyện
                    </button>
                  )}
                </div>

                {/* Grid of Story Cards */}
                <div className="space-y-4 pt-2">
                  {displayedStories.map((story) => (
                    <StoryCard
                      key={story.id}
                      story={story}
                      onSelect={handleSelectStory}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <Sidebar
                announcements={INITIAL_ANNOUNCEMENTS}
                stories={stories}
                onSelectStory={handleSelectStory}
                onSelectChapter={handleSidebarSelectChapter}
                isDark={isDark}
              />
            </div>
          </div>
        )}

      </main>

      {/* Main Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}
