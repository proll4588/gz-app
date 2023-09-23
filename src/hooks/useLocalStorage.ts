import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(storageKey: string) => {
  const [storageData, setStorageData] = useState<T | null>(null);

  const getDataFromLocalStorage = () => {
    const storageData = localStorage.getItem(storageKey);
    if (storageData) {
      const parsedAuthData = JSON.parse(storageData);
      setStorageData(parsedAuthData);
    } else {
      setStorageData(null);
    }
  };

  const setDataToLocalStorage = () => {
    const prepareDataToSet = JSON.stringify(storageData);
    localStorage.setItem(storageKey, prepareDataToSet);
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  useEffect(() => {
    setDataToLocalStorage();
  }, [storageData]);

  return [storageData, setStorageData];
};
