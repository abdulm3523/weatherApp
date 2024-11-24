import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const [favValue, setFavValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favValue));
  }, [favValue, storageKey]);

  return [favValue, setFavValue];
};

export { useLocalStorage };
