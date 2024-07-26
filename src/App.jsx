import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { auth } from './firebase';
import { loginUser } from './redux/auth/authSlice';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const PsychologistsPage = lazy(() =>
  import('./pages/Psychologists/PsychologistsPage')
);
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) return;
      dispatch(loginUser(authUser));
    }, []);
  });

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
