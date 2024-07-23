import React from 'react';
import ContactImage from '../assets/bk8.png'; // Assuming you saved the image as 1.png

const ContactPage = () => (
    <section className="text-right flex flex-col md:flex-row items-center justify-between mr-[10%]">
      <form className="w-full w-1/2 p-8 pt-16 bg-white text-right" style={{ direction: 'ltr',height:'65vh',width:'50%',backgroundColor:'white' }}>
        <h1 className="text-2xl font-black pb-6 gradient-text-2 w-[340px] text-center">נשמח לעמוד לשירותכם בכל שאלה.
השאירו פרטים ונחזור אליכם</h1>
        <div className="mb-4" style={{width:'288px'}}>
          <input type="text" placeholder="שם" className="flex-1 p-2 border rounded text-right" />
          <input type="tel" placeholder="טלפון" className="flex-1 p-2 border rounded text-right" />
          <input type="email" placeholder="אימייל" className="flex-1 p-2 border rounded text-right" />
          <textarea placeholder="כיתבו לנו (לא חובה)" rows={3} className="flex-1 p-2 border rounded text-right"></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button type="submit" className="text-bgmain-color text-white px-8 py-2 rounded w-4xl">אישור</button>
        </div>
      </form>
      <div className="w-1/2 h-auto md:mb-0" style={{height:'65vh',width:'50%' }}>
        <img src={ContactImage} alt="Contact" className=""  style={{height:'65vh',width:'100%',objectFit:'cover' }}/>
      </div>
    </section>
);

export default ContactPage;
