import { CatEvents } from '@/components/events/catEvents';
const EventCatPage = ({ data, pageName }) => {
   //  console.log(props);
   return <CatEvents data={data} pageName={pageName} />;
};
export default EventCatPage;

// []: là link động, trình duyệt sẽ tự động hiển thị pages

// Tổng hợp tất cả Paths
export async function getStaticPaths() {
   const { events_categories } = await import('/data/data.json');
   const allPaths = events_categories.map((item) => {
      return {
         // cat là bắt buộc trùng với tên đã được defined ở web động
         params: {
            cat: item.id.toString(),
         },
      };
   });
   // paths là mảng gòm tất cả Id
   // Nếu không truyền allPaths thì sẽ không hiển thị được trang, giống như kiểu route
   return {
      paths: allPaths,
      // fallback là false thì nếu sai đường dẫn sẽ chuyển sang 404
      fallback: false,
   };
}

// Lấy đang data theo path đang đứng
// context chứa path của page đang đứng , get Path
export async function getStaticProps(context) {
   // id của event
   const id = context.params.cat;
   const { allEvents } = await import('/data/data.json');
   // lấy ra dữ liệu của trang đang đứng
   const data = allEvents.filter((item) => item.city === id);
   // console.log(data);
   return {
      props: {
         data,
         pageName: id,
      },
   };
}
