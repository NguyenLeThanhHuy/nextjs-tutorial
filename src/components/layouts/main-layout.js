import React from 'react';
import { FooterPage } from '../footer/footer';
import { HeaderPage } from '../header/header';
import styles from '@/styles/Home.module.scss';

const MainLayout = ({ children }) => {
   return (
      <>
         <HeaderPage />
         <main className={styles.main}>{children}</main>
         <FooterPage />
      </>
   );
};

export default MainLayout;
