import React from 'react';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const EventsComponent = ({ data }) => {
   return (
      <div className={styles.eventsPage}>
         {/* <div> */}
         {data &&
            data.map((item) => (
               <Link
                  className={styles.card}
                  key={item.id}
                  href={`/events/${item.id}`}
                  passHref
               >
                  <Image
                     width={200}
                     height={100}
                     alt={item.id}
                     src={item.image}
                  />
                  <h2>{item.title}</h2>
               </Link>
            ))}
         {/* </div> */}
      </div>
   );
};
