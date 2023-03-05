import { FooterPage } from '@/components/footer/footer';
import { HeaderPage } from '@/components/header/header';
import MainLayout from '@/components/layouts/main-layout';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
   return (
      <>
         <MainLayout>
            <Component {...pageProps} />
         </MainLayout>
      </>
   );
}
