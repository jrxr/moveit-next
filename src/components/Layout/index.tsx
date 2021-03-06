import Link from 'next/link';
import { getSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Container, ContainerAside, Button, Overlay } from './styles';
import { ReactComponent as Home } from '../../../public/icons/home.svg';
import { ReactComponent as Leaderboard } from '../../../public/icons/leaderboard.svg';
import { ReactComponent as UserProfile } from '../../../public/icons/profileuser.svg';
import { ReactComponent as Logo } from '../../../public/assets/logo_min.svg';
import { ReactComponent as Menu } from '../../../public/icons/menu.svg';

const Layout = ({ children }) => {
  const isMobile = window.matchMedia('(max-width: 1220px)').matches;
  const isSmall = window.matchMedia('(max-width: 850px)').matches;
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState(!isMobile);

  return (
    <Container active={isMenuOpened}>
      <ContainerAside
        style={{ transform: `translateX(${isMenuOpened ? '0%' : '-100%'})` }}
      >
        <Logo />
        <nav>
          <ul>
            <li className={router.pathname === '/challenges' ? 'active' : ''}>
              <Link href="/challenges">
                <a>
                  <Home />
                </a>
              </Link>
            </li>
            <li className={router.pathname === '/leaderboard' ? 'active' : ''}>
              <Link href="/leaderboard">
                <a>
                  <Leaderboard />
                </a>
              </Link>
            </li>
            <li className={router.pathname === '/profile' ? 'active' : ''}>
              <Link href="/profile">
                <a>
                  <UserProfile />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => signOut()}>Sair</button>
      </ContainerAside>
      <Button
        active={isMenuOpened}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
      >
        <Menu />
      </Button>
      <Overlay
        style={{
          transform: `translateX(${isMenuOpened && isSmall ? '0%' : '-100%'})`
        }}
      />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;

export const getServerSideProps: GetServerSideProps = async ctx => {
  var obj;
  const session = await getSession(ctx);
  if (session) {
    await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/challenges?id=${session.userId}`
    )
      .then(res => res.json())
      .then(data => (obj = data));
  }
  if (!session) {
    var obj = null;
  }

  return {
    props: {
      sessions: session,
      user: obj
    }
  };
};
