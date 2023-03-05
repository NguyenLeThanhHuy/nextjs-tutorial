import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';

export const HomePage = ({ data }) => {
   return (
      <div className={styles.homebody}>
         {data &&
            data.map((item) => (
               <Link
                  className={styles.card}
                  key={item.id}
                  href={`/events/${item.id}`}
                  passHref
               >
                  <div className={styles.image}>
                     <Image
                        priority
                        width={200}
                        height={100}
                        alt={item.title}
                        src={item.image}
                        className={styles.image}
                     />
                  </div>
                  <div className={styles.content}>
                     <h2>{item.title}</h2>
                     <p>{item.description}</p>
                  </div>
               </Link>
            ))}
      </div>
   );
};
