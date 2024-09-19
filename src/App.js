
import Header from './components/Header/Header';
import Home from './components/page/Home';
import CompanyBrands from './components/BrandsCompany/CompanyBrands'
import Permotions from './components/Promotion/Permotions';
import Predicts from './components/Predict/Predicts';
import Track from './components/TrackGraph/Track';
import Information from './components/Info/Information';
import FertilityLab from './components/Fertility/FertilityLab';
import Testimonials from './components/Testimonial/Testimonials';
import Faq from './components/FAQ/Faq';
import Footers from './components/Footer/Footers';


function App() {
  return (
    <div>
      <div className="dummy-header" />
      <Header />
      <Home />
      <CompanyBrands />
      <Permotions />
      <Predicts />
      <Track />
     <Information/>
     <FertilityLab/>
    <Testimonials/>
     <Faq/>
      <Footers/>
    </div>
  );
}

export default App;
