import { Outlet } from 'react-router-dom';
import { Link, Container, Navigation } from './SharedLayout.styled';

import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/">HOME</Link>
        <Link to="/catalog">OFFERS</Link>
        <Link to="/favorites">FAVORITE</Link>
      </Navigation>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;
