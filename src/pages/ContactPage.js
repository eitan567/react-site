import React,{useEffect,useRef,useState} from 'react';
import ContactImage from '../assets/bk8.png'; // Assuming you saved the image as 1.png
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  
  useEffect(() => {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });  
  }, []);

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
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsError(true);
        },
      );
  };
  
  if (isSubmitted) {
    setIsError(false);
    return (
      <form className='my-10' style={{direction:'rtl'}}>
        <div className="text-center background-main-color px-4 round-lg">
          <h2 className="text-2xl font-bold mb-4">תודה רבה!</h2>
          <p>הודעתך נשלחה בהצלחה. ניצור עמך קשר בהקדם.</p>
        </div>
      </form>
    );
  }
  
  return(
      isError ? (
      <section className="text-right flex flex-col md:flex-row items-center justify-between mr-0 lg:mr-[10%]">
        <form style={{direction:'rtl'}} className="w-1/2 p-8 bg-white text-right h-[75vh] bg-white ltr">
          <div className="text-center background-main-color px-4 round-lg">
            <h2 className="text-2xl font-bold mb-4">תקלה בשליחת המייל !</h2>
            <p>אנו מתנצלים על התקלה, אנא צור עימנו קשר בטלפון או נסה מאוחר יותר.</p>
          </div>
        </form>
        <div className="hidden lg:block w-[50vw] h-[75vh] md:mb-0">
          <img src={ContactImage} alt="Contact" className="object-cover w-[65vw] h-[100%]"/>
        </div>
      </section>) : (
      <section className="text-right flex flex-col md:flex-row items-center justify-between mr-0 lg:mr-[10%]">
        <form  ref={form} onSubmit={sendEmail}  className="w-1/2 p-8 bg-white text-right h-[75vh] bg-white ltr">
          <h1 className="text-2xl font-black pb-6 gradient-text-2 w-[340px] text-center">
            נשמח לעמוד לשירותכם בכל שאלה. השאירו פרטים ונחזור אליכם</h1>
          <div className="mb-8 w-[288px]">
            <input type="hidden" name="to_me" value="Solomon" />
            <input type="text" placeholder="שם" name="lead_name" className="flex-1 p-2 border rounded text-right" />
            <input type="tel" placeholder="טלפון" name="lead_phone" className="flex-1 p-2 border rounded text-right" />
            <input type="email" placeholder="אימייל" name="lead_email" className="flex-1 p-2 border rounded text-right" />
            <textarea placeholder="כיתבו לנו (לא חובה)" rows={3} name="lead_text" className="flex-1 p-2 border rounded text-right"></textarea>
          </div>
          <div className="flex justify-center w-full pb-4">
            <button type="submit" className="text-bgmain-color text-white px-8 py-2 rounded w-4xl">אישור</button>
          </div>
        </form>
        <div className="hidden lg:block w-[50vw] h-[75vh] md:mb-0">
          <img src={ContactImage} alt="Contact" className="object-cover w-[65vw] h-[100%]"/>
        </div>
      </section>
      )
  );
};

export default ContactPage;
