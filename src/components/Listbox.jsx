import React, { Fragment, useState } from 'react';
import '../assets/styles/Listbox.scss';

const ListBox = ({ items, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleButtonClick = () => {
    onSelect(selectedItem);
  };

  return (
    <Fragment>
      <select className='main-container__select' onChange={(e) => handleItemClick(e.target.value)}>
        {
            items ? items.map((item, index) => (
          <option className='main-container__option' key={index} value={item}>
            {item}
          </option>
        )) : <>Sin datos</>
        }
      </select>
      <button className='main-container__button' onClick={handleButtonClick}>Seleccionar</button>
    </Fragment>
  );
};

export default ListBox;
