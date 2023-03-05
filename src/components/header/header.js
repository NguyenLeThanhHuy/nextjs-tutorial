import Link from 'next/link';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';

export const HeaderPage = () => {
   return (
      <header className={styles.header}>
         <div>
            <div className={styles.topNav}>
               <Image
                  src="/images/favi.png"
                  alt="logo"
                  width={150}
                  height={50}
               />
               <nav>
                  <ul>
                     <li>
                        <Link href="/" passHref>
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link href="/events" passHref>
                           Events
                        </Link>
                     </li>
                     <li>
                        <Link href="/about-us" passHref>
                           About
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <p className={styles.title}>Sed ut perspiciatis unde omnis</p>
         </div>
      </header>
   );
};
