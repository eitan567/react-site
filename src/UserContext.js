import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const cookieName = 'algoVibe_formSubmitted';
  const consentCookieName = 'algoVibe_cookiesAccepted';

  useEffect(() => {

    //for test only
    // Clear all cookies for the current site
    // Object.keys(Cookies.get()).forEach(cookieName => {
    //   Cookies.remove(cookieName);
    // });

    const checkCookieConsent = () => {
      const cookiesAcceptedStatus = Cookies.get(consentCookieName);
      if (cookiesAcceptedStatus === 'true') {
        setCookiesAccepted(true);
        const formSubmitted = Cookies.get(cookieName);
        setIsFormSubmitted(formSubmitted === 'true');
      } else {
        setCookiesAccepted(false);
        setIsFormSubmitted(false); // Reset form submission status if cookies are not accepted
      }
    };

    checkCookieConsent();
    window.addEventListener('storage', checkCookieConsent);

    return () => {
      window.removeEventListener('storage', checkCookieConsent);
    };
  }, []);

  const setFormSubmitted = (value) => {
    setIsFormSubmitted(value);
    if (cookiesAccepted) {
      Cookies.set(cookieName, value.toString(), { expires: 365, sameSite: 'strict' });
    }
  };

  const acceptCookies = () => {
    setCookiesAccepted(true);
    Cookies.set(consentCookieName, 'true', { expires: 365, sameSite: 'strict' });
    // We don't transfer any temporary form submission status here
  };

  return (
    <UserContext.Provider value={{ isFormSubmitted, setFormSubmitted, cookiesAccepted, acceptCookies }}>
      {children}
    </UserContext.Provider>
  );
};