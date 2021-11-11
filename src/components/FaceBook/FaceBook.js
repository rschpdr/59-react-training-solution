import { useState } from 'react';

import profiles from '../../data/berlin.json';

import FaceBookCard from './FaceBookCard';

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState('');

  function handleClick(country) {
    setSelectedCountry(country);
  }

  function setBgColor(country) {
    return country === selectedCountry ? '#A4D2E2' : '#fff';
  }

  function renderButtons() {
    const countries = [
      ...new Set(profiles.map((currentPersonObj) => currentPersonObj.country)),
    ];

    return (
      <div>
        <button
          onClick={() => handleClick('')}
          className="btn btn-outline-dark m-1"
          style={{
            backgroundColor: setBgColor(''),
          }}
        >
          All
        </button>
        {countries.map((currentCountryStr) => (
          <button
            key={currentCountryStr}
            className="btn btn-outline-dark m-1"
            onClick={() => handleClick(currentCountryStr)}
            style={{
              backgroundColor: setBgColor(currentCountryStr),
            }}
          >
            {currentCountryStr}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      {renderButtons()}
      {profiles
        .filter(
          (currentPersonObj) =>
            currentPersonObj.country === selectedCountry ||
            selectedCountry === ''
        )
        .map((currentPersonObj) => (
          <FaceBookCard
            key={currentPersonObj.firstName + currentPersonObj.lastName}
            // Se o país da pessoal atual for igual ao país selecionado no filtro, passe uma cor de fundo azul
            bgColor={setBgColor(currentPersonObj.country)}
            img={currentPersonObj.img}
            firstName={currentPersonObj.firstName}
            lastName={currentPersonObj.lastName}
            country={currentPersonObj.country}
            isStudent={currentPersonObj.isStudent}
            // Caminho alternativo:
            // {...currentPersonObj}
          />
        ))}
    </div>
  );
}

export default FaceBook;
