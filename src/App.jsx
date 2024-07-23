import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const PsychologistsPage = lazy(() =>
  import('./pages/Psychologists/PsychologistsPage')
);
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="//" replace />} />
      </Route>
    </Routes>
  );
};
