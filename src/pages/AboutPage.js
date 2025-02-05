import React,{useEffect} from 'react';
// import ImageTop from '../assets/laptopman.png';
import ImageBottom from '../assets/magnifying.png';

const AboutPage = () => {

  useEffect(() => {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });  
  }, []);

  return(
    // <div className='flex flex-col items-center justify-center text-right lg:flex-row-reverse lg:items-start'>
    <div>
      <div className="relative">
        <img src={ImageBottom} alt="AI" className="w-auto lg:object-cover lg:object-[20%_35%] lg:w-full lg:h-[392px] lg:object-cover" />
      </div>
      <section className="p-8 max-w-6xl mx-auto text-right">
        <h1 className="text-4xl lg:text-5xl font-black pb-6 gradient-text-2">אודות הקרן</h1>
        <p className="mb-4">
          אלמוגו קפיטל קרן גידור היא קרן גידור בעלת מודל מסחר ייחודי שפותח ונבדק ע"י מומחי קרנות גידור במשך שנים.
          מנהלי הקרן משקיעים את כספם האישי בקרן, מתוך אמונה במודל ובאסטרטגיית ההשקעה.
        </p>
        <h2 className="text-2xl font-black mb-4 text-main-color">החזון שלנו</h2>
        <p className="mb-4">
          להיות גורם אמין, הגון ומקצועי, המייצר ערך משמעותי ללקוחותינו ע"י ביצוע השקעות לטווח בינוני-ארוך, המבוססות על מודל סטטיסטי ומחקר מעמיק.
        </p>
        <h2 className="text-2xl font-black mb-4 text-main-color">המטרה שלנו</h2>
        <p className="mb-4">
          השאת תשואה גבוהה, בסיכונים נמוכים ביחס לתשואה המקובלת. הקרן משקיעה בניירות ערך סחירים בארה"ב לטווח בינוני-ארוך.
        </p>
        {/* <div className="mt-8 mb-6">
          <img src={ImageBottom} alt="Fund performance chart" className="w-full h-auto" />
        </div> */}
        <h2 className="text-2xl font-black mb-4 text-main-color">הצוות</h2>
        <p className="mb-4">
          יוצאי מקצועיות ומנהלי תיקים בארץ ובחו"ל של אגפים של המוסדים הגדולים בישראל שרצו להקים קרן גידור עצמאית לטובת הלקוחות ובני המשפחה.
          מנהלי הקרן משקיעים את כספם האישי בקרן, מתוך אמונה במודל ובאסטרטגיית ההשקעה.
        </p>
      </section>
    </div>
);
};

export default AboutPage;
