import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    };

    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    addScript.onerror = () => console.error("Google Translate script failed to load.");
    document.body.appendChild(addScript);

    // Ensure the function is available globally
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(addScript);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const handleTranslate = (lang) => {
    const googleTranslateElement = document.querySelector('.goog-te-combo');
    if (googleTranslateElement) {
      setTimeout(() => {
      googleTranslateElement.value = lang;
      googleTranslateElement.dispatchEvent(new Event('change'));
    }, 300);
    } else {
      console.error("Google Translate element not found.");
    }
  };

  return { handleTranslate };
};

export default GoogleTranslate;

