import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { cookiesAccepted, acceptCookies } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const consentCookieName = 'algoVibe_cookiesAccepted';
    const cookiesAcceptedStatus = Cookies.get(consentCookieName);
    
    if (cookiesAcceptedStatus !== 'true') {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, [cookiesAccepted]);

  const handleAccept = () => {
    acceptCookies();
    setShowConsent(false);
    
    const pendingNavigation = localStorage.getItem('pendingNavigation');
    if (pendingNavigation) {
      navigate(pendingNavigation);
      localStorage.removeItem('pendingNavigation');
    }
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 text-center border border-sky-500">
      <p className="mb-2">אתר זה משתמש בקובצי cookie כדי לשפר את החוויה שלך. המשך השימוש באתר מהווה הסכמה לשימוש שלנו בקובצי cookie.</p>
      <button onClick={handleAccept} className="bg-blue-500 text-white px-4 py-2 rounded">
        אישור
      </button>
      <button onClick={()=>setShowConsent(false)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        סרב
      </button>
    </div>
  );
};

export default CookieConsent;


