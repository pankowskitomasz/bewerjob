
import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import AnwendungHeader from "./komponenten/anwendungHeader";
import AnwendungFooter from "./komponenten/anwendungFooter";

//Allgemeine
import DatenschutzAnsicht from "./ansichten/allgemeine/datenschutzAnsicht";
import EinloggenAnsicht from "./ansichten/allgemeine/einloggenAnsicht";
import HomeAnsicht from "./ansichten/allgemeine/homeAnsicht";
import KontaktAnsicht from "./ansichten/allgemeine/kontaktAnsicht";
import NutzungsbedingungenAnsicht from "./ansichten/allgemeine/nutzungsbedingungenAnsicht";
import RegistrierenAnsicht from "./ansichten/allgemeine/registrierenAnsicht";
import WiederherstellenAnsicht from "./ansichten/allgemeine/wiederherstellenAnsicht";

//Arbeit
import ArbeitAktualisierenAnsicht from "./ansichten/arbeit/arbeitAktualisierenAnsicht";
import ArbeitDetailsAnsicht from "./ansichten/arbeit/arbeitDetailsAnsicht";
import ArbeitListAnsicht from "./ansichten/arbeit/arbeitDetailsAnsicht";
import ArbeitNeuAnsicht from "./ansichten/arbeit/arbeitNeuAnsicht";
import ArbeitVerwalten from "./ansichten/arbeit/arbeitVerwaltenAnsicht";

//Bestellungen
import BestellungenAllgemeineAnsicht from "./ansichten/bestellungen/bestellungenAllgemeineAnsicht";
import BestellungenBestatigenAnsicht from "./ansichten/bestellungen/bestellungenBestatigenAnsicht";
import BestellungenLieferungAnsicht from "./ansichten/bestellungen/bestellungenLieferungAnsicht";
import BestellungenWarenkorbAnsicht from "./ansichten/bestellungen/bestellungenWarenkorbAnsicht";
import BestellungenZahlungAnsicht from "./ansichten/bestellungen/bestellungenZahlungAnsicht";

//Bewerbungen
import BewerbungenBestatigenAnsicht from "./ansichten/bewerbungen/bewerbungenBestatigenAnsicht";
import BewerbungenDetailsAnsicht from "./ansichten/bewerbungen/bewerbungenDetailsAnsicht";
import BewerbungenListeAnsicht from "./ansichten/bewerbungen/bewerbungenListeAnsicht";

//Kunde
import KundeDashboardAnsicht from "./ansichten/kunde/kundeDashboardAnsicht";
import KundeMeineBestellungenAnsicht from "./ansichten/kunde/kundeMeineBestellungenAnsicht";
import KundeMeineDatenAnsicht from "./ansichten/kunde/kundeMeineDatenAnsicht";
import KundeMeineZahlungenAnsicht from "./ansichten/kunde/kundeMeineZahlungenAnsicht";
import KundeProfilAnsicht from "./ansichten/kunde/kundeProfilAnsicht";

//leistungen
import LeistungenAktualisierenAnsicht from "./ansichten/leistungen/leistungenAktualisierenAnsicht";
import LeistungenDetailsAnsicht from "./ansichten/leistungen/leistungenDetailsAnsicht";
import LeistungenListeAnsicht from "./ansichten/leistungen/leistungenListeAnsicht";
import LeistungenNeuAnsicht from "./ansichten/leistungen/leistungenNeuAnsicht";
import LeistungenVerwalten from "./ansichten/leistungen/leistungenVerwaltenAnsicht";

//Mitarbeiter
import MitarbeiterBestellungenAnsicht from "./ansichten/mitarbeiter/mitarbeiterBestellungenAnsicht";
import MitarbeiterBestellungenDetailsAnsicht from "./ansichten/mitarbeiter/mitarbeiterBestellungenDetailsAnsicht";
import MitarbeiterDashboardAnsicht from "./ansichten/mitarbeiter/mitarbeiterDashboardAnsicht";
import MitarbeiterKundeDetailsAnsicht from "./ansichten/mitarbeiter/mitarbeiterKundeDetailsAnsicht";
import MitarbeiterKundenAnsicht from "./ansichten/mitarbeiter/mitarbeiterKundenAnsicht";

//verwaltung
import VerwaltungBenutzerAktualisierenAnsicht from "./ansichten/verwaltung/verwaltungBenutzerAktualisierenAnsicht";
import VerwaltungBenutzerDashboardAnsicht from "./ansichten/verwaltung/verwaltungBenutzerDashboardAnsicht";
import VerwaltungBenutzerGeschichteAnsicht from "./ansichten/verwaltung/verwaltungBenutzerGeschichteAnsicht";
import VerwaltungBenutzerNeuAnsicht from "./ansichten/verwaltung/verwaltungBenutzerNeuAnsicht";
import VerwaltungBenutzerVerwaltenAnsicht from "./ansichten/verwaltung/verwaltungBenutzerVerwaltenAnsicht";

import './App.css';

function App() {
  return (
    <Router>
        <AnwendungHeader/>
        <Routes>
          <Route path="/datenschutz" element={<DatenschutzAnsicht/>} />
          <Route path="/einloggen" element={<EinloggenAnsicht/>} />
          <Route exact path="/" element={<HomeAnsicht/>} />
          <Route path="/kontakt" element={<KontaktAnsicht />} />
          <Route path="/Nutzungsbedingungen" element={<NutzungsbedingungenAnsicht />} />
          <Route path="/registrieren" element={<RegistrierenAnsicht/>} />
          <Route path="/wiederherstellen" element={<WiederherstellenAnsicht/>} />
          
          <Route exact path="/arbeit" element={<ArbeitVerwalten/>}/>
          <Route path="/arbeit/aktualisieren" element={<ArbeitAktualisierenAnsicht/>} />
          <Route path="/arbeit/liste/:id" element={<ArbeitDetailsAnsicht/>} />
          <Route path="/arbeit/liste" element={<ArbeitListAnsicht/>} />
          <Route path="/arbeit/neu" element={<ArbeitNeuAnsicht/>} />
          
          <Route exact path="/bestellungen" element={<BestellungenAllgemeineAnsicht/>}/>
          <Route path="/bestellungen/bestatigen" element={<BestellungenBestatigenAnsicht/>} />
          <Route path="/bestellungen/lieferung" element={<BestellungenLieferungAnsicht/>} />
          <Route path="/bestellungen/warenkorb" element={<BestellungenWarenkorbAnsicht/>} />
          <Route path="/bestellungen/zahlung" element={<BestellungenZahlungAnsicht/>} />
          
          <Route exact path="/bewerbungen" element={<BewerbungenListeAnsicht/>}/>
          <Route path="/bewerbungen/bestatigen" element={<BewerbungenBestatigenAnsicht/>} />
          <Route path="/bewerbungen/liste/:id" element={<BewerbungenDetailsAnsicht/>} />

          <Route exact path="/kunde" element={<KundeDashboardAnsicht/>}/>
          <Route path="/kunde/bestellungen" element={<KundeMeineBestellungenAnsicht/>} />
          <Route path="/kunde/daten" element={<KundeMeineDatenAnsicht/>} />
          <Route path="/kunde/zahlungen" element={<KundeMeineZahlungenAnsicht/>} />
          <Route path="/kunde/profil" element={<KundeProfilAnsicht/>} />
          
          <Route exact path="/leistungen" element={<LeistungenVerwalten/>}/>
          <Route path="/leistungen/neu" element={<LeistungenNeuAnsicht/>} />
          <Route path="/leistungen/liste/:id" element={<LeistungenDetailsAnsicht/>} />
          <Route path="/leistungen/liste" element={<LeistungenListeAnsicht/>} />
          <Route path="/leistungen/aktulisieren/:id" element={<LeistungenAktualisierenAnsicht/>} />
          
          <Route exact path="/mitarbeiter" element={<MitarbeiterDashboardAnsicht/>}/>
          <Route path="/mitarbeiter/bestellungen" element={<MitarbeiterBestellungenAnsicht/>} />
          <Route path="/mitarbeiter/bestellungen/:id" element={<MitarbeiterBestellungenDetailsAnsicht/>} />
          <Route path="/mitarbeiter/kunden" element={<MitarbeiterKundenAnsicht/>} />
          <Route path="/mitarbeiter/kunden/:id" element={<MitarbeiterKundeDetailsAnsicht/>} />
          
          <Route exact path="/benutzer" element={<VerwaltungBenutzerDashboardAnsicht/>}/>
          <Route path="/benutzer/aktualisieren/:id" element={<VerwaltungBenutzerAktualisierenAnsicht/>} />
          <Route path="/benutzer/geschichte/:id" element={<VerwaltungBenutzerGeschichteAnsicht/>} />
          <Route path="/benutzer/neu" element={<VerwaltungBenutzerNeuAnsicht/>} />
          <Route path="/benutzer/verwalten" element={<VerwaltungBenutzerVerwaltenAnsicht/>} />
        </Routes>
        <AnwendungFooter/>
    </Router>
  );
}

export default App;
