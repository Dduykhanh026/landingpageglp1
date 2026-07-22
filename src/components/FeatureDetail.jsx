import { Squircle } from '@squircle-js/react';
import React from 'react';
import MockupPhone from './ui/MockupPhone';
import { Sparkles } from 'lucide-react';
import mockup1 from '../assets/mockup1_FeatureDetail.png';
import mockup2_First_Feature from '../assets/mockup2_First_Feature.png';
import mockup2_Second_Feature from '../assets/mockup2_Second_Feature.png';
import mockup3 from '../assets/mockup3_FeatureDetail.png';
const DetailSection = ({
  title,
  description,
  imageOnRight,
  children
}) => {
  return <div className="py-20 border-b border-gray-100 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`lg:flex lg:items-center lg:gap-16 ${imageOnRight ? '' : 'lg:flex-row-reverse'}`}>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h3 className="text-3xl lg:text-title1 font-bold text-gray-900 mb-4 sm:mb-6">{title}</h3>
            <p className="text-lg lg:text-title3 text-gray-600 leading-relaxed mb-6 sm:mb-8">{description}</p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>;
};
const FeatureDetail = () => {
  const [isFirstImage, setIsFirstImage] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage(prev => !prev);
    }, 2500); // 2.5s to allow smooth fade
    return () => clearInterval(interval);
  }, []);

  return <section className=" ">
      {/* 13. Muscle & Hair Tracking */}
      <DetailSection title="Lose weight, not your muscle and hair." description="Losing weight fast can affect your muscle mass and hair thickness. Log your body composition and hair health to catch any negative side effects early and stay on top of your GLP-1 journey." imageOnRight={true}>
        <img src={mockup1} alt="Muscle and Hair Tracker" loading="lazy" decoding="async" className="w-full max-w-xs h-auto drop-shadow-2xl object-contain mx-auto" />
      </DetailSection>

      {/* 14. Shot Tracking */}
      <DetailSection title="Never guess when you took your last dose." description="Log your GLP-1 medication, dose amount, injection site, and time. View a complete history of your shots to ensure consistency and avoid double-dosing." imageOnRight={false}>
        <div className="relative w-full max-w-xs mx-auto">
          <img 
            src={mockup2_First_Feature} 
            alt="Shot Tracking 1" 
            loading="lazy" decoding="async"
            className={`w-full h-auto drop-shadow-2xl object-contain transition-opacity duration-1000 ease-in-out ${isFirstImage ? 'opacity-100' : 'opacity-0'}`} 
          />
          <img 
            src={mockup2_Second_Feature} 
            alt="Shot Tracking 2" 
            loading="lazy" decoding="async"
            className={`w-full h-auto drop-shadow-2xl object-contain absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${isFirstImage ? 'opacity-0' : 'opacity-100'}`} 
          />
        </div>
      </DetailSection>

      {/* 15. Side Effects Tracker */}
      <DetailSection title="Understand your side effects." description="Log nausea, fatigue, constipation, and appetite changes. See if your symptoms correlate with shot days or dose increases." imageOnRight={true}>
        <img src={mockup3} alt="Side Effects Tracker" loading="lazy" decoding="async" className="w-full max-w-xs h-auto drop-shadow-2xl object-contain mx-auto" />
      </DetailSection>


      {/* 17. Muscle Protection Score */}
      <DetailSection title="Protect your muscle mass." description="Losing weight fast can mean losing muscle. Our Muscle Retention Score combines your protein intake, resistance training logs, and weight loss rate to ensure you're losing fat, not muscle." imageOnRight={true}>
         <Squircle className="bg-app-progress p-6 sm:p-10 text-white shadow-2xl max-w-sm w-full text-center hover:-translate-y-1 active:scale-[0.98] transition-transform duration-300" cornerRadius={32} cornerSmoothing={1}>
            <h4 className="text-lg sm:text-title3 font-medium mb-2">Muscle Retention Score</h4>
            <div className="text-6xl sm:text-display1 font-extrabold mb-4">92</div>
            <Squircle className="text-sm sm:text-base text-white font-medium bg-app-fiber py-2 px-4 inline-block" cornerRadius={100} cornerSmoothing={1}>Excellent Consistency</Squircle>
         </Squircle>
      </DetailSection>



    </section>;
};
export default FeatureDetail;