import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';

export const CatEvents = ({ data, pageName }) => {
   //    console.log(data);
   return (
      <div className={styles.catEvents}>
         <h1>Event in {pageName.toUpperCase()}</h1>
         <div className={styles.content}>
            {data &&
               data.map((item) => (
                  <Link
                     className={styles.card}
                     key={item.id}
                     href={`/events/${item.city}/${item.id}`}
                     passHref
                  >
                     <Image
                        src={item.image}
                        alt={item.title}
                        width={439}
                        height={279}
                     />

                     <h2>{item.title}</h2>
                     <p>{item.description}</p>
                  </Link>
               ))}
         </div>
      </div>
   );
};
