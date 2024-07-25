import React from 'react';
import StrategyImage from '../assets/bk4.png'; // Assuming you saved the image as 3.png

const StrategyPage = () => (
    <div>
      <div className="">
        <img src={StrategyImage} alt="AI" className="w-full h-auto" />
      </div>
      <section className="p-8 max-w-6xl mx-auto text-right">
        <h1 className="text-4xl lg:text-5xl font-black pb-6 gradient-text-2">אסטרטגיית המסחר שלנו</h1>
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
    </div>
);

export default StrategyPage;
