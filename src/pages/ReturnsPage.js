import React from 'react';
import ReturnsImage from '../assets/bk6.png'; // Assuming you saved the image as 4.png
import StockChart from '../components/advanced-stock-chart';


const ReturnsPage = () => (
  <div>
    <div className="">
      <img src={ReturnsImage} alt="Fund performance chart" className="w-full h-auto" />
    </div>
    <section className="p-8 max-w-6xl mx-auto text-right">
      <h1 className="text-4xl lg:text-5xl font-black pb-6 gradient-text-2">תשואות הקרן</h1>
      <p className="mb-4">
        אלמוגו קפיטל קרן גידור היא קרן גידור בעלת מודל מסחר ייחודי שפותח ונבדק ע"י מומחי קרנות גידור במשך שנים. מנהלי
        הקרן משקיעים את כספם האישי בקרן, מתוך אמונה במודל ובאסטרטגיית ההשקעה.
      </p>
      <StockChart />
    </section>
  </div>
);

export default ReturnsPage;
