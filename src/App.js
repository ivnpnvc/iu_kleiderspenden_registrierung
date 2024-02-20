import React, { useState } from 'react';
import './App.css';

function App() {
  const [option, setOption] = useState(''); // Option für Ort der Kleiderspende
  const [clothingType, setClothingType] = useState(''); // Art der Kleidung
  const [crisisRegion, setCrisisRegion] = useState(''); // Aktuelles Krisengebiet
  const [address, setAddress] = useState(''); // Abholadresse
  const [registrationConfirmed, setRegistrationConfirmed] = useState(false); // Zustand für die Bestätigung der Registrierung

  const checkZipCode = () => {
    if (address.substring(0, 2) === '80') { // Prüfung der ersten beiden Postleitzahlen, in meinem Beispiel München (80xxx)
      return true;
    }
    return false;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isNearby = checkZipCode();

    if ((option === 'Abholung' && isNearby) || option === 'Übergabe an der Geschäftsstelle') {
      setRegistrationConfirmed(true);
    } else {
      alert('Adresse ist außerhalb des Geschäftsstellenbereiches. Bitte prüfen Sie die Postleitzahl.');
    }
  };

  return (
    <div className="App">
      <header>
        <div className="header-title">
          <h1>
            <span className="blue">K</span>leider
            <span className="blue">S</span>penden-
            <span className="blue">R</span>egistrierung
          </h1>
        </div>
        <img src="logo.jpg" alt="Logo" />
        <p>Geschäftsstelle: 80000 München</p> {/* Geschäftsstelle unter dem Logo */}
      </header>

      <main>
        {registrationConfirmed ? (
          <div>
            <h2>Vielen Dank für Ihre Kleiderspende!</h2>
            <p>
              Art der Kleidung: {clothingType}<br />
              Aktuelle Krisenregion: {crisisRegion}<br />
              Datum und Uhrzeit: {new Date().toLocaleString()}<br />
              Ort: {option === 'Abholung' ? 'Abholadresse' : 'Geschäftsstelle'}
              {option === 'Abholung' && <span>: {address}</span>}
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>
                Ort der Kleiderspende:
                <select value={option} onChange={(e) => setOption(e.target.value)}>
                  <option value="">Bitte wählen</option>
                  <option value="Abholung">Abholung</option>
                  <option value="Übergabe an der Geschäftsstelle">Übergabe an der Geschäftsstelle</option>
                </select>
              </label>
            </div>

            {option === 'Abholung' && (
              <div>
                <label>
                  Abholadresse:
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="12345, Musterstraße 12"
                  />
                </label>
              </div>
            )}

            <div>
              <label>
                Art der Kleidung:
                <select value={clothingType} onChange={(e) => setClothingType(e.target.value)}>
                  <option value="">Bitte wählen</option>
                  <option value="Kopfbedeckung">Kopfbedeckung</option>
                  <option value="Jacke">Jacke</option>
                  <option value="Oberteil (langärmelig)">Oberteil (langärmelig)</option>
                  <option value="Oberteil (kurzärmelig)">Oberteil (kurzärmelig)</option>
                  <option value="Hose">Hose</option>
                  <option value="Schuhe">Schuhe</option>
                  <option value="Sonstiges">Sonstiges</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Aktuelle Krisenregion:
                <select value={crisisRegion} onChange={(e) => setCrisisRegion(e.target.value)}>
                  <option value="">Bitte wählen</option>
                  <option value="80111 Muenchen Nord">80111 München Nord</option>
                  <option value="80222 Muenchen Ost">80222 München Ost</option>
                  <option value="80333 Muenchen West">80333 München West</option>
                  <option value="80444 Muenchen Sued">80444 München Süd</option>
                  <option value="80555 Muenchen Land">80555 München Land</option>
                </select>
              </label>
            </div>

            <button type="submit">Kleiderspende registrieren</button>
          </form>
        )}
      </main>

      <footer>
        <p>IPWA01-01 - Programmierung von Webanwendungsoberflächen - Paunovic Ivan</p>
        <p>2024 Kleiderspenden-Portal. Alle Rechte vorbehalten.</p>
        <ul>
          {/* Rechtliche Hinweise */}
        </ul>
      </footer>
    </div>
  );
}

export default App;

