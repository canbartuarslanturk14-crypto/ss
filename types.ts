export type Series = {
  id: string;
  title: string;
  tagline: string;
  posterUrl: string;
  backdropUrl: string;
  rating: number;
  releaseYear: number;
  seasonsCount: number;
  genres: string[];
  weeklyRank?: number;
  isUserStory?: boolean;
  description?: string;
};

export type WatchProgress = {
  episodeId: string;
  seriesId: string;
  positionMillis: number;
  durationMillis: number;
  updatedAt: number;
};
