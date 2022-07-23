import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './features/Header';
import { LoginPage } from './features/Login';
import { Sidebar } from './features/Sidebar';
import { GamesRoutes } from './features/Games/routes';
import { Footer } from './features/Footer';

export const AppRouter = () => {
  return (
    <div className="page">
      <Sidebar />
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<GamesRoutes />} />
          {true ? (
            <Route path="/*" element={<Navigate to="/news-feed" replace />} />
          ) : (
            <Route path="/auth/login" element={<LoginPage />} />
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
