import React from "react";
import "./styles/_security-component.scss";

const SecurityComponent = () => {
  return (
    <div className='component-layout security-component'>
      <h1 className='header-text'>SIGURIA - Te dhenat personale</h1>
      <h3 className='paragraph-text security-paragraph'>
        Të dhënat personale të regjistruara nga ana juaj do të ruhen në
        databazat tona dhe do të jenë konfidenciale. Kështu që ju si blerës jeni
        përgjegjës për llogarinë tuaj të hapur në platformën për blerje online
        www.othmanhome.com dhe të gjitha informatat e regjistruara.
      </h3>
      <br />
      <h1 className='header-text'>
        Siguria - Arsyeja e mbledhjes se te dhenave dhe perdorimi
      </h1>
      <h3 className='paragraph-text security-paragraph'>
        Ne përdorim dhe ruajmë të dhënat e juaja personale të mbledhura nga ju
        për qëllimet e paraqitura si më poshtë:
        <ul>
          <li>
            &nbsp;&nbsp;• Identifikimi i llogarise tuaj për qasje në shërbime
            tona
          </li>
          <li>
            &nbsp;&nbsp;• Për të ju kontaktuar në lidhje me llogarinë tuaj
          </li>
          <li>
            &nbsp;&nbsp;• Për të ju kthyer përgjigje kur ju na kontaktoni neve
            përmes telefonit
          </li>
          <li>
            &nbsp;&nbsp;• Për të parandaluar, zbuluar dhe hetuar aktivitetet
            mashtruese dhe ilegale
          </li>
        </ul>
      </h3>
      <br />
      <h1 className='header-text'>
        Siguria - Arsyeja e mbledhjes se te dhenave dhe perdorimi
      </h1>
      <h3 className='paragraph-text security-paragraph'>
        Nëse jeni regjistruar për llogari në www.othmanhome.com ne ju ofrojmë të
        qaseni, korrigjoni, fshini apo modifikoni të dhënat personale që na i
        keni ofruar dhe që janë të lidhura me llogarinë tuaj.
      </h3>
    </div>
  );
};

export default SecurityComponent;
