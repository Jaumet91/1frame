import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './features/Header';
import { Sidebar } from './features/Sidebar';
import { GamesRoutes } from './features/Games/routes';
import { Footer } from './features/Footer';
import { AuthRoutes } from './features/Auth/routes/AuthRoutes';

export const AppRouter = () => {
  return (
    <div className="page page_login">
      <Sidebar />
      <div className="page__wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/*" element={<GamesRoutes />} />
            {false ? (
              <Route path="/*" element={<Navigate to="/news-feed" replace />} />
            ) : (
              <Route path="/auth/*" element={<AuthRoutes />} />
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};
