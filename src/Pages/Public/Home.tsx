import { useRef } from 'react';
import Hero from '../../Components/Hero';
import SubHero from '../../Components/SubHero';
import Bio from '../../Components/Bio';
import Tips from '../../Components/Tips';
import ProductsSlider from '../../Components/ProductsSlider';
import SumComments from '../../Components/SumComments';
import SeoTags from '../../utils/lib/Helmet';
// import ContactForm from '../../Components/ContactForm';
import LandingEvent from '../../Components/LandingEvent';
import AparatCarousel from '../../Components/UI/AparatCarousel';
import { aparatHomeItems } from '../../Items/aparatItems';
import ConsultingForm from '../../Components/CousultingForm';

const Home = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const handleGoToForm = () => {
    formRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <>
      <SeoTags
        titleTemplate={`صفحه اصلی`}
        description="صفحه ی اصلی سایت صابر زارعی"
        Url={window.location.href}
      />
      <main>
        <LandingEvent />
        <div className="flex flex-col gap-3 p-2 px-4">
          <Hero />
          <SubHero />
          <Bio />
          <Tips onClick={handleGoToForm} />
          <ProductsSlider
            header="جدید ترین دوره ها"
            theme="white"
            type="course"
            apiUrl=""
            id="newest"
            inCoursePage={false}
          />
          <ProductsSlider
            header="جدیدترین کتاب ها"
            theme="white"
            type="book"
            apiUrl=""
            id="last-books"
            inCoursePage={false}
          />
          <AparatCarousel items={aparatHomeItems} />
          <ProductsSlider
            header="جدیدترین مقالات"
            theme="white"
            type="article"
            apiUrl=""
            id="last-articles"
            inCoursePage={false}
          />
          <SumComments type="home" />
          <div ref={formRef}></div>
          <ConsultingForm />
          {/* <div className="subHero:w-full w-2/3 mx-auto h-[450px] p-2 overflow-hidden rounded-xl shadow">
              <iframe
                src="https://myrasad.com/l/akademizarei/consulting-homepage?embed=1" 
                className="h-full w-full"
                allowFullScreen
                title="aparat-video"
              />
          </div> */}
          {/* <ContactForm type="home" /> */}
        </div>
      </main>
    </>
  );
};

export default Home;
