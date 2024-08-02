// components/DesktopOnly.js
import { useEffect, useState } from 'react';

const DesktopOnly = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return <div>This site is only accessible on desktop devices. Please use a larger screen.</div>;
  }

  return <>{children}</>;
};

export default DesktopOnly;
