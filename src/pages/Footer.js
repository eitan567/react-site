import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FooterBk from '../assets/footerbk2.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => (
    <footer className="bg-[#1f5972] text-white text-sm" style={{background:`url(${FooterBk})`, backgroundSize:"cover"}}>
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <PhoneIcon className="w-6 h-6 ml-2" />
            <span className="font-semibold text-xl">050-6252559</span>
          </div>
          <div className="flex items-center">
            <EmailIcon className="w-6 h-6 ml-2" />
            <span className="font-semibold text-xl">office@algopolo-capital.com</span>
          </div>
          <div className="flex items-center">
            <LocationOnIcon className="w-6 h-6 ml-2" />
            <span className="font-semibold text-xl">כרמלית 9, תל אביב</span>
          </div>
        </div>
        <p className="text-xs leading-tight mb-4 text-right">
          בעשייתו העבר אנחנו עובדה לציבור הקרן בעזרת הגופים המוסדיים לעיל מקוונת מידע בלבד בנוגע לפעילות החברה והאסטרטגיה. המשקיע בשירותיות הקרן עשוי להיות מועט פרטיות ולפי שיקול דעתו
          הפרטיים והכללי על הסימון הכללי. זכויות בשימושות אינן מובנות ואף נצגנו לצורכה. המשקיע בשירותיות הקרן בהתאם לחוזה הסכם והפרטיות שיחתם עם המשקיע הכללי ולמשקיע, ובמידת הצורך
          סיכונים ומסמכים נוספים. המשקיע מבין כי סיכוני נובעים מהשקעה בקרן גידור ו/או מוצרי השקעה ו/או תחליפי ליצירת שווי השקעה ו/או שימוש בשקעות. אין נתון מהווה או משמש כדי לקבוע
          המתחייב בזכויות ובסיכונים המיוחדים של כל אדם. פרסום מידע זה אינו מהווה הצעה לציבור להשקיע בשותפות. כל המידע והתכנים באתר זה מוגנים "AS IS" ללא אחריות או ייצוג מכל סוג שהוא.
        </p>
        <div className="flex justify-between items-center" style={{direction: 'rtl'}}>
          <span>© 2021 כל הזכויות שמורות AlgoPolo</span>
          <div>
            <a href="#" className="ml-4">הצהרת נגישות</a>
            <a href="#">מדיניות פרטיות</a>
          </div>
        </div>
      </div>
    </footer>
  );

  export default Footer;