import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
  const selectWrapperElement = useRef<HTMLElement | undefined>();

  const handleClick = (event: MouseEvent) => {
    if (
      selectWrapperElement.current &&
      !event.defaultPrevented &&
      !selectWrapperElement.current.contains(event.target as HTMLElement)
    )
      handler();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [selectWrapperElement]);

  return { ref: selectWrapperElement };
};
