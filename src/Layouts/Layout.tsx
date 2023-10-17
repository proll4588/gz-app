import { Outlet } from 'react-router-dom';

// Тут будут обёртки всех глобальных контекство
export const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
