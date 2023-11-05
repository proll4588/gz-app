import { useEffect, useState } from 'react';

const getIsMobile = () => window.innerWidth <= 600;
export const useDevice = () => {
  const [deviceIsMobile, setDeviceIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setDeviceIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return { isMobile: deviceIsMobile };
};
