import { SinglePages } from '@/components/events/singlePages';
const EventPage = ({ data }) => {
   return <SinglePages data={data} />;
};
export default EventPage;

export async function getStaticPaths() {
   const { allEvents } = await import('/data/data.json');
   // const allEvents = data;
   // console.log(data);
   const allPaths = allEvents.map((item) => {
      return {
         // params này được truyền ra context
         params: {
            cat: item.city,
            id: item.id.toString(),
         },
      };
   });
   return {
      paths: allPaths,
      fallback: false,
   };
}

export async function getStaticProps(context) {
   const { allEvents } = await import('/data/data.json');
   const id = context.params.id;

   const data = allEvents.find((item) => {
      return item.id === id;
   });
   return {
      props: {
         data,
      },
   };
}
