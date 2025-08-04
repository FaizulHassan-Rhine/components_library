import { useEffect, useState } from 'react';

const SunTimeThemeLocal = () => {
  const [theme, setTheme] = useState('light');
  const [status, setStatus] = useState('Checking location...');

  useEffect(() => {
    const applyTheme = async (lat, lng) => {
      try {
        const res = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
        );
        const data = await res.json();

        const sunriseUTC = new Date(data.results.sunrise);
        const sunsetUTC = new Date(data.results.sunset);

        // Convert UTC to local time using Date object
        const sunriseLocal = new Date(sunriseUTC.toLocaleString());
        const sunsetLocal = new Date(sunsetUTC.toLocaleString());
        const nowLocal = new Date();

        const isDark = nowLocal < sunriseLocal || nowLocal > sunsetLocal;

        // Apply Tailwind theme
        if (isDark) {
          document.documentElement.classList.add('dark');
          setTheme('dark');
          setStatus('🌙 Dark mode (after sunset or before sunrise)');
        } else {
          document.documentElement.classList.remove('dark');
          setTheme('light');
          setStatus('☀️ Light mode (daytime)');
        }
      } catch (error) {
        console.error(error);
        setStatus('⚠️ Could not fetch sunrise/sunset data');
      }
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        applyTheme(latitude, longitude);
      },
      () => {
        setStatus('⚠️ Location denied. Defaulting to light mode.');
        document.documentElement.classList.remove('dark');
        setTheme('light');
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-500 p-6 space-y-8">
      <h1 className="text-4xl font-bold mt-8">Time-Based Theme (Local)</h1>
      <p className="text-lg">{status}</p>

      {/* Text block */}
      <div className="max-w-2xl text-center">
        <p className="mb-4">
          This page automatically switches between light and dark themes based on your local sunrise and sunset times.
        </p>
        <p>
          You can add your normal website components here — everything will follow the theme using Tailwind's <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">dark:</code> utility classes.
        </p>
      </div>

      {/* Example card */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Example Card</h2>
        <p className="text-sm mb-4">
          This card’s background and text change based on the current theme. Great for testing buttons, forms, and components.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded transition-colors">
          Example Button
        </button>
      </div>

      {/* Grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Column One</h3>
          <p className="text-sm">Responsive and styled for both themes.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Column Two</h3>
          <p className="text-sm">Add any UI here to verify styling consistency.</p>
        </div>
      </div>
    </div>
  );
};

export default SunTimeThemeLocal;
