import ResetForm from '../components/Auth/ResetForm/ResetForm';
import BasicLayout from '../layouts/Basic';

export default function reset() {
   return (
      <BasicLayout className="reset">
         <section className="reset-section py-4">
            <div className="reset-section_container container">
               <ResetForm />
            </div>
         </section>
      </BasicLayout>
   );
}
