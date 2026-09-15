export interface Chapter {
  id: string;
  storyId: string;
  chapterNum: number;
  title: string;
  isLocked: boolean;
  passwordHint?: string;
  password?: string;
  content: string;
  releaseDate: string;
  wordCount: number;
}

export interface Story {
  id: string;
  title: string;
  originalTitle?: string;
  author: string;
  translator: string;
  status: 'completed' | 'ongoing'; // 'completed' = Truyện đã hoàn thành, 'ongoing' = Truyện chưa hoàn thành
  genres: string[];
  coverUrl: string;
  description: string;
  rating: number;
  views: number;
  updatedDate: string;
  isHot?: boolean;
  isRecommended?: boolean;
  chapters: Chapter[];
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
  isPinned: boolean;
  tag?: string;
}

export interface CommentItem {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  chapterTitle?: string;
}

export type ActiveTab = 'home' | 'completed' | 'ongoing' | 'passwords' | 'other' | 'blogger-theme' | 'about';
