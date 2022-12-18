import '@/css/global.scss'
import '@/css/main_template.scss'

import Footer from '@/componants/Footer.tsx'
import Header from '@/componants/Header.tsx'

export default function Root( props ) {
  return (
    <>
      <Header />
      <main id="ct-main" >
        { 
          props.children 
        }
      </main>
      <Footer/>
    </>
  );
}