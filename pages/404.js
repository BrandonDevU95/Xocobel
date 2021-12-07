import BasicLayout from '../layouts/Basic';

export default function NotFound() {
   return (
      <BasicLayout>
         <section style={{ minHeight: '50vh' }}>
            <div
               className="container d-flex justify-content-center align-items-center"
               style={{ minHeight: '50vh' }}
            >
               <h1 className="text-center">Pagina no encontrada</h1>
            </div>
         </section>
      </BasicLayout>
   );
}
