// components/DesktopOnly.js
import { useEffect, useState } from 'react';

const DesktopOnly = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        children
      ) : (
        <div>This site is only accessible on desktop devices. Please use a larger screen.</div>
      )}
    </>
  );
};

export default DesktopOnly;
