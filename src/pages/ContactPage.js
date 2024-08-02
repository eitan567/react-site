import React,{useEffect,useRef,useState} from 'react';
import ContactImage from '../assets/bk8.png'; // Assuming you saved the image as 1.png
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });  
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);

    if (!formData.get('lead_name').trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }

    const phoneRegex = /^(\d{2,3}-?\d{7}|\d{9,10})$/;
    if (!formData.get('lead_phone').trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!phoneRegex.test(formData.get('lead_phone'))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.get('lead_email').trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/\S+@\S+\.\S+/.test(formData.get('lead_email'))) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      <section className="text-right flex flex-col md:flex-row items-center justify-between mr-0 lg:mr-[10%]">
        <form className='w-1/2 p-8 bg-white text-right h-[75vh] bg-white ltr' style={{direction:'rtl'}}>
          <div className="text-center background-main-color px-4 round-lg">
            <h2 className="text-2xl font-bold mb-4">תודה רבה!</h2>
            <p>הודעתך נשלחה בהצלחה. ניצור עמך קשר בהקדם.</p>
          </div>
        </form>
        <div className="hidden lg:block w-[50vw] h-[75vh] md:mb-0">
          <img src={ContactImage} alt="Contact" className="object-cover w-[65vw] h-[100%]"/>
        </div>
      </section>
    );
  }
  
  if (isError) {
    return (
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
      </section>
    );
  }
  
  return (
    <section className="text-right flex flex-col md:flex-row items-center justify-between mr-0 lg:mr-[10%]">
      <form ref={form} onSubmit={sendEmail} className="w-1/2 p-8 bg-white text-right h-[75vh] bg-white ltr">
        <h1 className="text-2xl font-black pb-6 gradient-text-2 w-[340px] text-center">
          נשמח לעמוד לשירותכם בכל שאלה. השאירו פרטים ונחזור אליכם</h1>
        <div className="mb-8 w-[288px]">
          <input type="hidden" name="to_me" value="Solomon" />
          <div className="mb-2">
            <input type="text" placeholder="שם" name="lead_name" className="w-full p-2 border rounded text-right" />
            {errors.name && <p className="text-red-500 text-sm mt-1 text-right">{errors.name}</p>}
          </div>
          <div className="mb-2">
            <input type="tel" placeholder="טלפון" name="lead_phone" className="w-full p-2 border rounded text-right" />
            {errors.phone && <p className="text-red-500 text-sm mt-1 text-right">{errors.phone}</p>}
          </div>
          <div className="mb-2">
            <input type="email" placeholder="אימייל" name="lead_email" className="w-full p-2 border rounded text-right" />
            {errors.email && <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>}
          </div>
          <textarea placeholder="כיתבו לנו (לא חובה)" rows={3} name="lead_text" className="w-full p-2 border rounded text-right"></textarea>
        </div>
        <div className="flex justify-center w-full pb-4">
          <button type="submit" className="text-bgmain-color text-white px-8 py-2 rounded w-4xl">אישור</button>
        </div>
      </form>
      <div className="hidden lg:block w-[50vw] h-[75vh] md:mb-0">
        <img src={ContactImage} alt="Contact" className="object-cover w-[65vw] h-[100%]"/>
      </div>
    </section>
  );
};
export default ContactPage;
