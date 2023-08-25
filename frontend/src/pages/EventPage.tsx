import { FC } from 'react';
import Header from '../components/common/Header.tsx';
import Footer from '../components/common/Footer.tsx';
import KickStarter from '../components/event/KickStarter.tsx';
import Events from '../components/event/Events.tsx';
import MVP from '../components/event/MVP.tsx';


const FaqsPage: FC = () => {
  return (
    <>
        <Header />
        <KickStarter />
        <Events />
        <MVP />
        <Footer />
    </>
  );
};

export default FaqsPage;