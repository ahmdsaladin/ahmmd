import { useEffect } from 'react';

const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault(); // Prevents the default context menu
      }
    };

    // Add the event listener to the document
    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
};

export default useDisableRightClick; 