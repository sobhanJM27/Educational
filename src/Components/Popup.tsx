import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../utils/lib/Cn';
import Close from './UI/Icons/Close';

interface Props {
  children: React.ReactNode;
  zIndex: number;
  parentStateControl?: boolean;
}

const Popup = ({ children, zIndex, parentStateControl = true }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      handleRemoveListener();
    };
  }, [isActive, handleClickOutside]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrolledPercent = (scrollTop / docHeight) * 100;

      if (scrolledPercent >= 30) {
        setIsActive(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleRemoveListener = () => {
    document.removeEventListener('click', handleClickOutside);
  };

  return (
    <div
      ref={popupRef}
      style={{ zIndex }}
      className={cn(
        `flex items-center justify-center p-4 rounded-xl bg-[#fff] transition-all duration-300 delay-100 shadow-main fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 pointer-events-none`,
        {
          'opacity-100 scale-100 pointer-events-auto':
            parentStateControl && isActive,
        },
      )}
    >
      <Close
        className="w-3 h-3 absolute top-2 right-2 cursor-pointer"
        onClick={() => {
          setIsActive(!isActive);
          handleRemoveListener();
        }}
      />
      {children}
    </div>
  );
};

export default Popup;
