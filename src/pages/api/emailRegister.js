import path from 'path';
import fs from 'fs';

function buildPath() {
   return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
   const jsonData = fs.readFileSync(filePath);
   return JSON.parse(jsonData);
}

export default function handler(req, res) {
   const { method } = req;

   // Access our data
   const filePath = buildPath();
   const { events_categories, allEvents } = extractData(filePath);

   if (!allEvents) {
      return res.status(404).json({
         message: 'Events not fount data',
      });
   }
   if (method === 'POST') {
      const { email, eventID } = req.body;

      if (!email || !email.includes('@')) {
         res.status(422).json({
            message: 'Invalid email address',
         });
         return;
      }

      const newAllEvents = allEvents.map((ev) => {
         if (ev.id === eventID) {
            if (ev.emails_registered.includes(email)) {
               res.status(409).json({
                  message: 'This email has already been registered',
               });
               return ev;
            }
            return {
               ...ev,
               emails_registered: [...ev.emails_registered, email],
            };
         }
         return ev;
      });

      fs.writeFileSync(
         filePath,
         JSON.stringify({
            events_categories,
            allEvents: newAllEvents,
         }),
      );
      // we add our code here
      res.status(200).json({
         message: `You has been registered successfully with the email: ${email} , ${eventID}`,
      });
   }

   if (method === 'GET') {
      // we add our code here
   }
}
