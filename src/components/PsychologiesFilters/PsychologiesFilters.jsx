import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import css from './PsychologiesFilters.module.css';

export const PsychologiesFilters = () => {
  const [selectedOption, setSelectedOption] = useState('A to Z');
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef(null);

  const options = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // UseEffect to close the dropdown menu when clicked outside of it //
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={css.container}>
      <p className={css.filterTitle}>Filters</p>
      <div className={css.customSelect} ref={selectRef}>
        <div className={css.selectSelected} onClick={toggleSelect}>
          <p>{selectedOption}</p>{' '}
          {isOpen ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20} />}
        </div>
        {isOpen && (
          <div className={css.selectItems}>
            {options.map((option) => (
              <div
                key={option}
                className={css.selectItem}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
