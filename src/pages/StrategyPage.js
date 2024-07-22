import React from 'react';
import StrategyImage from '../assets/bk7.png'; // Assuming you saved the image as 3.png

const StrategyPage = () => (
    <div>
      <div className="">
        <img src={StrategyImage} alt="AI" className="w-full h-auto" />
      </div>
      <section className="p-8 max-w-6xl mx-auto text-right">
        <h1 className="text-6xl font-black pb-6 gradient-text-2">אסטרטגיית המסחר שלנו</h1>
        <h2 className="text-4xl font-black pb-2 text-main-color">
          קרן גידור סיסטמתית המבוססת על מודל סטטיסטי
        </h2>
        <p className="mb-4">
          קרן גידור המבוססת על אלגוריתם ייחודי שפותח ונבדק ע״י מומחי קרנות גידור ומסחר בינ״ל במשך שנים. האסטרטגיה מבוססת על
          מתודולוגיה מתמטית וסטטיסטית בתחום ה-Behavioral Finance. בבסיס האלגוריתם עומדת היכולת לזהות דפוסים בהתנהגות המשקיעים
          ולחזות בסבירות גבוהה את מגמת השוק, לשם ייצור תשואה עודפת.
        </p>
        <p className="mb-4">
          אסטרטגיית המסחר אפקטיבית לאורך זמן ובכל תקופה שהיא בשוק העולמי, שהוא בסופו של דבר שוק של אנשים הפועלים מתוך רגשות
          של פחד וחמדנות. האסטרטגיה נבדקה ונמצאה יעילה בתקופות שוק שונות ומגוונות ובסביבות מאקרו שונות.
        </p>
      </section>
    </div>
);

export default StrategyPage;
