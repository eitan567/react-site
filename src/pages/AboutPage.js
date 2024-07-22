import React from 'react';
import ImageTop from '../assets/bk2.png';
import ImageBottom from '../assets/bk3.png';

const AboutPage = () => (
    <div>
      <div className="relative h-full">
        <img src={ImageTop} alt="AI" className="w-full h-auto" />
      </div>
      <section className="p-8 max-w-6xl mx-auto text-right">
        <h1 className="text-6xl font-black pb-6 gradient-text-2">אודות הקרן</h1>
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
        <div className="mt-8 mb-6">
          <img src={ImageBottom} alt="Fund performance chart" className="w-full h-72" />
        </div>
        <h2 className="text-2xl font-black mb-4 text-main-color">הצוות</h2>
        <p className="mb-4">
          יוצאי מקצועיות ומנהלי תיקים בארץ ובחו"ל של אגפים של המוסדים הגדולים בישראל שרצו להקים קרן גידור עצמאית לטובת הלקוחות ובני המשפחה.
          מנהלי הקרן משקיעים את כספם האישי בקרן, מתוך אמונה במודל ובאסטרטגיית ההשקעה.
        </p>
      </section>
    </div>
);

export default AboutPage;
