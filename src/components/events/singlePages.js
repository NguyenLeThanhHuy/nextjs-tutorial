import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { useRouter } from 'next/router';

export const SinglePages = ({ data }) => {
   // Two way binding
   const [input, setInput] = useState('');
   const [message, setMessage] = useState('');

   // const emailInput = useRef();
   // Được sử dụng để chuyển đường dẫn URL, và có thể lấy value trên URL từ property query
   const router = useRouter();

   const onHandleSubmit = async (e) => {
      e.preventDefault();
      const eventID = router?.query.id;
      const dataRequest = {
         email: input,
         eventID: eventID,
      };

      const regex =
         /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
      // Validator email = match()
      if (!input.match(regex)) {
         setMessage('Vui lòng nhập email đúng định dạng');
      }
      try {
         // POST fetch request
         // body emailValue and the eventID

         const response = await fetch('/api/emailRegister', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(dataRequest),
         });
         if (!response.ok) throw new Error(`Error: ${response.status}`);
         const data2 = await response.json();

         setMessage(data2.message);
         setInput('');
      } catch (error) {
         console.log('ERROR', error);
      }
   };
   return (
      <div className={styles.eventSingle}>
         <Link key={data.id} href={`/events/${data.city}/${data.id}`} passHref>
            <Image
               priority
               src={data.image}
               alt={data.title}
               width={439}
               height={279}
            />

            <h2>{data.title}</h2>
            <p>{data.description}</p>
         </Link>
         <form onSubmit={onHandleSubmit} className={styles.emailRegister}>
            <label>Get Registered For This Event: </label>
            <input
               onChange={(e) => {
                  setInput(e.target.value);
               }}
               // ref={emailInput}
               value={input}
               type="text"
               name="email"
               id="email"
               placeholder="Vui lòng nhập email"
            />
            <button type="submit">Submit</button>
         </form>
         <p>{message}</p>
      </div>
   );
};
