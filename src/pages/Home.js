import React, { useRef, useState ,useEffect} from 'react';
// import HomeTopImg from '../assets/bk5.png'
import HomeMiddleImg from '../assets/bk5.png'
// import HomeBottomImg from '../assets/bk2.png'
import Back1 from '../assets/bkandlogo5.png'
import AboutSVG from '../assets/aboutTheStock.svg';
import VisionSVG from '../assets/vision.svg';
// import TeamSVG from '../assets/team.svg';
import TargetSVG from '../assets/target.svg';
import BackSvg from '../assets/backsvg.svg';
import '../assets/wave.css'
import { Assessment, FavoriteBorder, TrendingUp } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// import backgroundSvg from '../assets/background.svg';

// Custom Alert component
// const Alert = ({ children }) => (
//   <div className="bg-yellow-100 border-r-4 border-yellow-500 text-yellow-700 p-4" role="alert">
//     {children}
//   </div>
// );

const Hero = () => {
  
  useEffect(() => {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });  
  }, []);

  return(
      <section className="relative h-80 lg:h-auto">
        <div className='hidden lg:block animated-svg-style' style={{backgroundImage: `url(${BackSvg})`}}></div>
        <img src={Back1} alt="Stock market charts" className="w-full h-full object-cover" />  
        {/* <div className='hidden lg:block'>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
        </div>  */}
      </section>
    );
};

const data = [
  {
    svg: AboutSVG,
    title: 'אודות המודל',
    description: 'מתמחים בהשקעה בחוזים עתידיים וניירות ערך סחירים בארה"ב לטווח קצר-בינוני-ארוך.'
  },
  {
    svg: VisionSVG,
    title: 'הפיתוחים שלנו',
    description: 'פיתחנו עשרות רובוטים מוצלחים שמתאימים למגוון רחב של סוגי השקעה מסולידי ושמרי ועד לאגרסיבי יותר.'
  },
  {
    svg: TargetSVG,
    title: 'אסטרטגיות המסחר שלנו',
    description: 'אסטרטגיות המסחר שלנו מאפשרת להשיג תשואות גבוהות, בתנודתיות ובסיכון נמוכים ביחס להשקעות המקובלות.'
  },
  // {
  //   svg: TeamSVG,
  //   title: 'הצוות - יש להשלים נתונים אמיתיים',
  //   description: 'יוצאי מקצועיות ומנהלי תיקים בארץ ובחו"ל של אגפים של המוסדים הגדולים בישראל שרצו להקים קרן גידור עצמאית לטובת הלקוחות ובני המשפחה. מנהלי הקרן משקיעים את כספם האישי בקרן, מתוך אמונה במודל ובאסטרטגיית ההשקעה.'
  // }
];

const AboutSection = () => (
  <section className="p-6 pt-2 max-w-6xl mx-auto text-right">
    <h1 className="text-4xl lg:text-5xl font-black pb-6 gradient-text-2">
    מסחר אלגוריתמי המבוסס על מודל ייחודי
    </h1>
    {data.map((item, index) => (
        <div key={index} className='headingParagrapghStyle' style={{marginBottom:'15px'}}>
          <div className='svgStyle lg:w-[59px] lg:h-[59px]' style={{backgroundImage: `url(${item.svg})`}}></div>
          <div className='text-after-svg'>
            <h2 className="text-2xl font-black mb-2 text-main-color">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}    
  </section>
);

const StrategySection = () => (
  <section className="p-8 max-w-6xl mx-auto bg-gray-100 text-right">
    <h1 className="text-4xl lg:text-5xl font-black pb-6 gradient-text-2">אסטרטגיית המסחר שלנו</h1>
    <h2 className="text-2xl font-black pb-2 text-main-color">
    הקדמה
    </h2>
    <p className="mb-4">
    אסטרטגיות המסחר שלנו מאפשרת להשיג תשואות גבוהות, בתנודתיות ובסיכון נמוכים ביחס להשקעות המקובלות. 
    </p>    

    <h1 className="text-2xl font-black pb-2 text-main-color">מסחר אלגוריתמי זה העתיד</h1>
    <p className="mb-4">כבר היום ברוב בורסות העולם יותר מ-80% מכלל הפעולות ועסקאות מבוצעות על ידי רובוטי מסחר. אופן המסחר כל הזמן משתכלל ונהיה מהיר ומתוחכם יותר. כבר היום לסוחרים מסורתיים קשה מאוד להתחרות עם ביצועים של רובוטים.
</p>
<h1 className="text-2xl font-black pb-2 text-main-color">מהירות ויעילות</h1>
<p className="mb-4">מסחר אלגוריתמי מאפשר ביצוע מהיר יותר של עסקאות ופעולות מכיוון שהביצוע הינו אוטומטי על סמך כללים מוגדרים מראש. הרובוט מחשב סיכונים ומבצע פעולות הרבה יותר מהר מאדם, כי ניתוח שוק מתרחש באופן רציף בתדירות קבועה.
</p>
<h1 className="text-2xl font-black pb-2 text-main-color">נטרול רגשות מהחלטות במסחר</h1>
<p className="mb-4">לרובוט אין רגשות ואינו מהסס בקבלת החלטות, משחרר את הסוחר מעבודה אנליטית ומעומס רגשי. החלטות רגשיות יכולות לעתים קרובות להוביל לתוצאות מסחר גרועות.
</p>
 <h1 className="text-2xl font-black pb-2 text-main-color">בדיקה לאחור בזמן פיתוח</h1>
 <p className="mb-4">מערכות מסחר של אלגו ניתנות לבדיקה לאחור באמצעות נתונים היסטוריים. זה מאפשר לחדד את האסטרטגיה, לזהות פגמים פוטנציאליים לפני הפעלתם במסחר בזמן אמת ולהעריך את הביצועים של האסטרטגיה ויחס סיכוי מול סיכון. 
</p>
<h1 className="text-2xl font-black pb-2 text-main-color">תשואה עודפת</h1>
<p className="mb-4">מסחרת אלגוריתמי מאפשר להשיג תשואה עודפת ביחס למסחר ידני מכיוון שרובוט מסוגל לעבוד סביב השעון ללא מנוחה ושעות שינה ולא יפספס אף עסקה אטרקטיבית.
</p>
  </section>
);

const WhySection = () => (
  <section className="p-6 pt-2 pb-2 max-w-6xl mx-auto text-right">
    <h2 className="text-4xl lg:text-5xl font-black pb-0 gradient-text-2 lg:h-[1.1em]">למה להשקיע עם AlgoVibe?</h2>    
  </section>
); 

const IconsSection = () => (
  <section className="p-8 px-6 pr-0 max-w-6xl mx-auto text-center">
    <div className="flex justify-between">
      <div className="text-center max-w-64 w-[33%] lg:w-auto">
        <TrendingUp fontSize="inherit" className="text-main-color mb-4"  style={{fontSize:'105px'}}/>
        <p className="text-lg font-bold">מודל שמתאים לשינויים בשוק</p>
        <p>המודל מגיב לשינויים בשוק בצורה טובה (דוגמת משבר הקורונה)</p>
      </div>
      <div className="text-center max-w-64 w-[33%] lg:w-auto">
        <Assessment fontSize="inherit" className="text-main-color mb-4"  style={{fontSize:'105px'}}/>
        <p className="text-lg font-bold">ביצועים מוכחים</p>
        <p>מודל שמתאים לניהול סיכונים ועובדת על השוק ב-5 שנים האחרונות</p>
      </div>
      <div className="text-center max-w-64 w-[33%] lg:w-auto">
        <FavoriteBorder fontSize="inherit" className="text-main-color mb-4" style={{fontSize:'105px'}}/>
        <p className="text-lg font-bold">ניהול תיק אישי</p>
        <p>המודל מותאם אישית לצרכי הלקוח</p>
      </div>
    </div>
  </section>
);

const WhyForm = () => {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);  
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_solomonh', 'template_qualifiedlead', form.current, {
        publicKey: 'z-eRN9erqlQNhoN1C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setIsError(false);
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsError(true);
        },
      );
  };

  if (isSubmitted) {
    return (
      <form className='my-10' style={{direction:'rtl'}}>
        <div className="text-center background-main-color px-4 round-lg">
          <h2 className="text-2xl font-bold mb-4">תודה רבה!</h2>
          <p>הודעתך נשלחה בהצלחה. ניצור עמך קשר בהקדם.</p>
        </div>
      </form>
    );
  }

  return (
    isError ? (
    <form className='my-10' style={{direction:'rtl'}}>
      <div className="text-center background-main-color px-4 round-lg">
        <h2 className="text-2xl font-bold mb-4">תקלה בשליחת המייל !</h2>
        <p>אנו מתנצלים על התקלה, אנא צור עימנו קשר בטלפון או נסה מאוחר יותר.</p>
      </div>
    </form>) : (
    <form ref={form} onSubmit={sendEmail} className='mb-10' >
      <h2 className="text-2xl font-bold mb-4 text-center">על מנת לצפות בתשואות הקרן דרך האתר, יש להיות מוגדר כמשקיע כשיר</h2>
      <div className="flex flex-row-reverse space-x-reverse space-x-4">
        <input type='hidden' name='to_me' value='Solomon'/>
        <input type="text" placeholder="שם" name="lead_name" className="flex-1 p-2 border rounded text-right" />
        <input type="tel" placeholder="טלפון" name="lead_phone" className="flex-1 p-2 border rounded text-right" />
        <input type="email" placeholder="אימייל" name="lead_email" className="flex-1 p-2 border rounded text-right" />
      </div>
      <div className="space-y-2" style={{direction: 'ltr'}}>
        <label className="flex flex-row-reverse mb-4">
          <input type="checkbox" style={{margin: "6px",width:"15px",marginRight:"0px"}} name="lead_agree" />
          <span className="mr-2">אני מצהיר שאני משקיע מוסדי או כשיר</span>
        </label>
      </div>
      <div className='flex justify-center w-full'>
        <button type="submit" className="text-bgmain-color text-white px-8 py-2 rounded w-4xl hover:button-hover">אישור והעברה לתשואות</button>
      </div>
    </form>)
  );
};

const InvestmentForm = () =>  {
   
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_solomonh', 'template_qualifiedlead', form.current, {
        publicKey: 'z-eRN9erqlQNhoN1C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setIsError(false);
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsError(true);
        },
      );
  };

  if (isSubmitted) {
    return (
      <form className='my-10' style={{direction:'rtl'}}>
        <div className="text-center background-main-color px-4 round-lg">
          <h2 className="text-2xl font-bold mb-4">תודה רבה!</h2>
          <p>הודעתך נשלחה בהצלחה. ניצור עמך קשר בהקדם.</p>
        </div>
      </form>
    );
  }

  return (
    isError ? (
    <form className='my-10' style={{direction:'rtl'}}>
      <div className="text-center background-main-color px-4 round-lg">
        <h2 className="text-2xl font-bold mb-4">תקלה בשליחת המייל !</h2>
        <p>אנו מתנצלים על התקלה, אנא צור עימנו קשר בטלפון או נסה מאוחר יותר.</p>
      </div>
    </form>) : (
    <form className="mb-8" ref={form} onSubmit={sendEmail}>
      <h2 className="text-2xl font-bold mb-4 text-center">מעוניינים לשמוע עוד? נשמח ליצור עמכם קשר</h2>
      <div className="flex flex-row-reverse space-x-reverse space-x-4 mb-4">
        <input type='hidden' name='to_me' value='Solomon'/>
        <input type="hidden" name="lead_agree" value='not recieved fron the lead yet'/>
        <input type="text" placeholder="שם" name="lead_name" className="flex-1 p-2 border rounded text-right" />
        <input type="tel" placeholder="טלפון" name="lead_phone" className="flex-1 p-2 border rounded text-right" />
        <input type="email" placeholder="אימייל" name="lead_email" className="flex-1 p-2 border rounded text-right" />
      </div>
      <div className='flex justify-center w-full'>
        <button type="submit" className="text-bgmain-color text-white px-8 py-2 rounded w-4xl">אישור</button>
      </div>
    </form>)
  );
};

const SecondImage = () => (
  <div className="relative h-96">
    <img src={HomeMiddleImg} alt="Investment strategy visualization" className="w-full h-full object-cover" />
  </div>
);

// const InvestmentOptions = () => (
//   <section className="p-8 max-w-6xl mx-auto bg-gray-100 text-right"  style={{direction: 'rtl'}}>
//     <h2 className="text-2xl font-black mb-4 text-main-color">אנא בחר אחת מהאפשרויות הבאות:</h2>
//     <div className="space-y-2 pb-6" style={{direction: 'ltr'}}>
//       <label className="flex flex-row-reverse items-center">
//         <input type="checkbox" className="ml-2" />
//         <span className="mr-2">השקעה בדמי ניהול מופחתים וללא דמי הצלחה לתקופה מוגבלת</span>
//       </label>
//       <label className="flex flex-row-reverse items-center">
//         <input type="checkbox" className="ml-2" />
//         <span className="mr-2">גובה ההשקעה בכל אחת מהאופציות האחרות, למעט ש״ח 1,214,317 או עבודה הנכונה לאחר לי שהוא המשפחתי
//         שאלף או משהוא עומד על ש״ח 1,821,475</span>
//       </label>
//       <label className="flex flex-row-reverse items-center">
//         <input type="checkbox" className="ml-2" />
//         <span className="mr-2">השקעה בדמי ניהול מופחתים וללא דמי הצלחה לתקופה מוגבלת בכל אחד מהאופציות האחרות עולה
//         על ש״ח 5,059,653 או משהוא שאלף או משהוא המשפחתי שהוא לאחר עבודה הנכונה לאחר לי על ש״ח 807,158</span>
//       </label>
//       <label className="flex flex-row-reverse items-center">
//         <input type="checkbox" className="ml-2" />
//         <span className="mr-2">תנאי המומלץ כיום, בעל עמלה גבוהה של 50-80 מיליון ש״ח בעמלות מלאה של משקיעים כשירים</span>
//       </label>
//       <label className="flex flex-row-reverse items-center">
//         <input type="checkbox" className="ml-2" />
//         <span className="mr-2">אני משקיע מוסדי</span>
//       </label>
//     </div>
//     <div className='flex justify-center w-full'>
//       <button type="submit" className="text-bgmain-color text-white px-8 py-2 rounded w-4xl">אישור והעבר לתשואות</button>
//     </div>
//     {/* <button className="mt-4 text-bgmain-color text-white px-4 py-2 rounded w-full">אישור והעבר לתשואות</button> */}
//   </section>
// );

// const ThirdImage = () => (
//   <div>
//     <img src={HomeBottomImg} alt="Fund performance chart" className="flat-image h-full" />
//   </div>
// );

// const QualifiedInvestorNote = () => (
//   <div className="p-8 max-w-6xl mx-auto text-center">
//     <p className="text-xl font-bold">על מנת לצפות בתשואות הקרן דרך האתר, יש להיות מוגדר כמשקיע כשיר</p>
//   </div>
// );

const relatedTags = [
  { title: " אלגו טריידינג " },
  { title: " קרן גידור " },
  { title: " מסחר אלקטרוני " },
  { title: " אלגוריתמי " },
  { title: " שוק ההון " },
  { title: " רובוט מסחר" },
  { title: " תשואות גבוהות " },
  { title: " בוט אלגו " },
  { title: " מרוויח השקעות " },
  { title: " ניירות ערך " },
  { title: " שוק אמריקאי " },
  { title: " חוזים עתידיים" },
  { title: " ETF" },
  { title: " תעודת סל" }
];


const SearchText = () => (
  <div className="p-8 max-w-6xl mx-auto text-center flex flex-row flex-wrap justify-center">
    {relatedTags.map((item, index) => (
      <span key={index} className="text-md font-bold bk-gray-200 ml-1 mr-1 rounded-lg px-2 py-0 bg-gray-300 text-main-color mt-2 hover:scale-110 transition-transform duration-300">
        <a key={index}
          href={`https://www.google.com/search?q=${encodeURIComponent(item.title)}`}
          target="_blank"
          rel="noopener noreferrer">{item.title}</a>
      </span>    
    ))}
  </div>
);


const Home = () => (
  <div className="font-assistant text-gray-800" dir="rtl">   
    <Hero />
    <AboutSection />
    <InvestmentForm />
    <SecondImage />
    <StrategySection />
    <WhySection />
    <IconsSection />
    <WhyForm />
    <SearchText/>
    {/* <ThirdImage /> */}
    {/* <WhySection /> */}
    {/* <IconsSection /> */}
    {/* <WhyForm />  */}
    {/* <InvestmentOptions /> */}
    {/* <QualifiedInvestorNote /> */}
    {/* <Alert>
      <p className="text-gray-600 text-sm">
        השקעות בשוק ההון כרוכות בסיכון. האמור לעיל אינו מהווה המלצה להשקעה או ייעוץ השקעות המותאם לצרכיו האישיים והמיוחדים של כל אדם. אין לראות באמור לעיל משום הבטחת תשואה כלשהי או רווח בעתיד. אלמוגו קפיטל בע"מ הינה חברה לניהול תיקים בעלת רישיון מטעם רשות ני"ע. ט.ל.ח.
      </p>
    </Alert> */}
  </div>
);

export default Home;