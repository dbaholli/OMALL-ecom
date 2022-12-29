import React from "react";
import { Link } from "react-router-dom";
import "./styles/_terms-component.scss";

const TermsComponent = () => {
  return (
    <div className='component-layout terms-component'>
      <h1 className='terms-header header-text'>Termat dhe Kushtet</h1>
      <h3 className='terms-paragraph paragraph-text'>
        Kushtet e përdorimit janë të detyrueshme nëse vazhdoni me blerjen dhe
        shfrytëzimin e platformës <Link>www.othmanhome.com</Link> - OTHMAN
        SH.P.K Në momentin e pranimit të tyre ju pajtoheni që ky pëlqim të
        pranohet si kontratë e lidhur në mes Blerësit (Konsumatori) dhe Shitësit
        (<Link>www.othmanhome.com</Link>, OTHMAN SH.P.K) me lokacion ne Central
        park, Prishtinë.
      </h3>
      <br />
      <h3 className='terms-paragraph paragraph-text'>
        <Link>www.othmanhome.com</Link> - <b>OTHMAN HOME SH.P.K</b> kërkon nga ju që ti
        lexoni me kujdes të gjitha informacionet dhe kushtet e blerjes, pasi që
        me pranimin e këtij teksti, rregullave dhe kushteve konsiderohet
        përfundimisht kontratë në mes Blerësit (Konsumatori) dhe Shitësit (
        <Link>www.othmanhome.com</Link>, OTHMAN Home, <b>OTHMAN HOME SH.P.K</b>).
      </h3>
      <br />
      <h3 className='terms-paragraph paragraph-text'>
        <Link>www.othmanhome.com</Link> është Platformë e Shitjes Online nën
        ombrellën e <b>OTHMAN HOME SH.P.K</b>, të cilët ofrojnë artikuj për blerje
        online. <b>OTHMAN HOME SH.P.K</b>, ka të drejtën e ofertave për shitje online
        gjithashtu edhe në Dyqanet fizike – OTHMAN Home. Webfaqja online shpalos
        artikuj të ndryshëm për konsumatorët të cilët preferojnë blerjen online
        dhe dërgesat në adresën e tyre sipas kushteve dhe rregullave të blerjes.
        Për dërgesat me vlerë deri në shumën 19.98 Euro duhet të paguhet
        Transporti i Porosisë që është 2.50 Euro, për dërgesat nga vlera 19.99
        Euro e tutje Transporti i porosisë është GRATIS. Transporti nuk
        llogaritet në disa artikuj të caktuar të cilët janë të liruar nga pagesa
        e Transportit pa marrë parasysh vlerën.
      </h3>
      <br />
      <h1 className='terms-header header-text'>
        Kushtet e blerjes së produkteve
      </h1>
      <h3 className='terms-paragraph paragraph-text'>
        Artikujt e ofruar nga <b>OTHMAN HOME SH.P.K</b> në
        <Link>www.othmanhome.com</Link> janë artikuj që ekzistojnë në
        gjendje/sasi dhe i përmbahen specifikave të vendosura. Gjithashtu kanë
        të drejtën të ndryshojnë pa paralajmërim. Artikujt që bëhen porosi,
        dërgesat bëhen prej 1-3 ditë pune, gjithashtu gjatë dorëzimit artikujt
        duhet të jenë në gjendje të rregullt (të paketuara) pa dëmtime. Artikujt
        i dorëzohen postës me paketim nga <Link>www.othmanhome.com</Link> -
        <b>OTHMAN HOME SH.P.K</b> Në rast të dëmtimit të artikullit gjatë dërgesës,
        konsumatori është i obliguar që të lajmëroj shitësin dhe të organizoj
        kthimin e artikullit me atë të ri dhe të padëmtuar, brenda 24 orëve.
        <br />
        <br />
        Kthimi duhet të bëhet nga vet Konsumatori ose nëse pajtohet të paguaj
        shpenzimet e dërgesës (postën) prej 2.50 Euro dhe duhet të evidentohet
        dëmtimi me anë të fotografive. Artikujt e blerë përmes webfaqes{" "}
        <Link>www.othmanhome.com</Link> nuk mund të kthehen për faktin se
        konsumatorit nuk i pëlqen artikulli, përveç nëse artikulli është i
        dëmtuar të cilat janë shkaktuar nga prodhuesi/fabrika.
        <br />
        <br />
        Pagesat mund të bëhen në 3 mënyra të ndryshme të cilat janë të
        përcaktuara në webfaqe si: 1. Paguaj me kartelë; 2. Paguaj me para në
        dorë dhe 3. Transfer Bankar. Konsumatori ka të drejtën të zgjedhë se
        çfarë mënyre të pagesës dëshiron të procesoj në rast të blerjes së
        artikujve përmes <Link>www.othmanhome.com</Link>
      </h3>
      <br />
      <h1 className='terms-header header-text'>
        Përmbarimi i detyrimeve dhe zgjedhja e kontesteve
      </h1>
      <h3 className='terms-paragraph paragraph-text'>
        Nëse përdoruesi është person fizik dhe ka detyrime apo konteste me <Link>www.othmanhome.com</Link> - <b>OTHMAN HOME SH.P.K</b> palët do të drejtohen në gjykatën
        themelore në vendbanimin e përdoruesit. Ligjet e aplikueshme janë ligjet
        e Republikës të Kosovës të cilat janë në fuqi. <b>OTHMAN HOME SH.P.K</b> ka të
        drejtë të kërkojë përmbarimin e faturave dhe detyrimeve përmes
        përmbaruesëve privat, sipas nenit 29 të Ligjit Për Procedurën
        Përmbarimore.
      </h3>
    </div>
  );
};

export default TermsComponent;
