// import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FooterBk from '../assets/footerbk2.png'
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => (
    <footer className="bg-[#1f5972] text-white text-sm" style={{background:`url(${FooterBk})`, backgroundSize:"cover"}}>
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex-col sm:flex-row flex justify-between items-center mb-4">
          {/* <div className="flex items-center">
            <PhoneIcon className="w-6 h-6 ml-2" />
            <span className="font-semibold text-xl">054-1234567</span>
          </div> */}
          <div className="flex items-center">
            <EmailIcon className="w-6 h-6 ml-2" />
            <span className="font-semibold text-xl">office@algovibe.com</span>
          </div>
          {/* <div className="flex items-center">
            <LocationOnIcon className="w-6 h-6 ml-2" />
            <span className="font-semibold text-xl">המלך דוד 1, אשדוד</span>
          </div> */}
        </div>
        <p className="text-xs leading-tight mb-4 text-right">
        המידע באתר זה ("האתר") מיועד למטרות מידע ודיון בלבד ואינו מהווה כל חלק מכל הזמנה, הצעה למכירה או הרשמה ל- או שידול לכל הצעה לקנות או להירשם ל- כל זכות בשותפות. באתר זה הצגה כללית ועקרונית בלבד של האפשרות להצטרף להשקעה משותפת וזאת על מנת שמעוניינים להשקיע יוכלו לבחון האם להצטרף לשוטפות וזאת אם וככל שיוצגו להם כל תנאי ורכיבי המסחר ולאחר שמנהלי השותפות יבחנו האם לקבלם כמשקיעים בשותפות. אין האתר מציע הבטחה לתשואה כלשהי, התחזיות עשויות שלא להתממש ו/או להתממש באופן שונה מהותית מהצפוי כתלות בגורמים שונים וביצועי העבר אינם ערובה לביצועי הקרן בעתיד. ההשקעה בשותפויות הינה בהתאם לתנאי הסכם השותפויות שייחתם בין השותף הכללי למשקיע, וטומנת בחובה סיכונים כמפורט בהסכמי השותפויות וכן סיכונים נוספים הנובעים מחשיפה לניירות ערך. האמור הנו למטרת אינפורמציה כללית וחומר רקע בלבד ואין בו כדי להוות ייעוץ השקעות ו/או תחליף לייעוץ השקעות המתחשב בצרכיו של כל משקיע. המידע והתכנים באתר זה מסופקים"AS IS" ללא אחריות ו/או מצג מכל סוג שהוא.
        </p>
        <div className="flex justify-between items-center" style={{direction: 'rtl'}}>
          <span>© 2022 כל הזכויות שמורות AlgoVibe</span>
          {/* <div>
            <a href="http://google.com" className="ml-4">הצהרת נגישות</a>
            <a href="http://google.com">מדיניות פרטיות</a>
          </div> */}
        </div>
      </div>
    </footer>
  );

  export default Footer;