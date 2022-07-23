import { Navigate, Route, Routes } from 'react-router-dom';
import { NewsFeed } from '../pages/NewsFeed';
import { Trending } from '../pages/Trending/Trending';
import { Platforms } from '../pages/Platforms/Platforms';
import { Genres } from '../pages/Genres/Genres';
import { Settings } from '../pages/Settings/Settings';
import { Analitics } from '../pages/Analitics/Analitics';

export const GamesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/analitics" element={<Analitics />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/news-feed" replace />} />
      </Routes>
    </div>
  );
};
