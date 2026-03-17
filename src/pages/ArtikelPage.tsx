import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtikelPage = () => {
  useEffect(() => {
    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercentage >= 100 && !sessionStorage.getItem('scroll_100')) {
        window.fbq?.('trackCustom', 'ScrollDepth', { depth: 100 });
        sessionStorage.setItem('scroll_100', 'true');
      } else if (scrollPercentage >= 75 && !sessionStorage.getItem('scroll_75')) {
        window.fbq?.('trackCustom', 'ScrollDepth', { depth: 75 });
        sessionStorage.setItem('scroll_75', 'true');
      } else if (scrollPercentage >= 50 && !sessionStorage.getItem('scroll_50')) {
        window.fbq?.('trackCustom', 'ScrollDepth', { depth: 50 });
        sessionStorage.setItem('scroll_50', 'true');
      } else if (scrollPercentage >= 25 && !sessionStorage.getItem('scroll_25')) {
        window.fbq?.('trackCustom', 'ScrollDepth', { depth: 25 });
        sessionStorage.setItem('scroll_25', 'true');
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []);

  const handleCTAClick = () => {
    window.fbq?.('track', 'ViewContent', { content_name: 'CTA Click - Artikkel' });
  };

  return (
    <div className="min-h-screen bg-light-bg font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold text-red-600 font-serif">Næringsnytt</h1>
            <span className="text-sm text-gray-500">
              {new Date().toLocaleDateString('no-NO', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded text-gray-600">
            Annonsørinnhold
          </span>
        </div>
      </header>

      {/* Main Article */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6 leading-tight">
            Norsk bedrift tilbyr gratis nettside-utkast til lokale bedrifter — ble oversvømt av henvendelser
          </h1>

          {/* Lead Text */}
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Digitalbyrået Noropti i Oslo har skapt oppsikt etter de lanserte sin «Gratis Nettside-Utkast»-tjeneste. På bare to uker fikk de over 200 henvendelser fra lokale bedrifter som ønsker å se hvordan deres nettside burde se ut.
            </p>
          </div>

          {/* First CTA */}
          <div className="my-8 text-center">
            <Link 
              to="/gratis-utkast" 
              onClick={handleCTAClick}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Se om du kvalifiserer for gratis utkast →
            </Link>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              «Vi ser gang på gang at lokale bedrifter taper kunder fordi nettsiden deres ikke fungerer som den skal,» 
              forteller Albert Opdahl, grunnlegger av Noropti. «De fleste forstår ikke hvor mye de mister hver dag.»
            </p>

            {/* Quote Block */}
            <blockquote className="bg-gray-50 border-l-4 border-blue-500 p-6 my-8 italic text-lg">
              «95% av de nettsidene vi analyserer skremmer bort potensielle kunder innen de første 10 sekundene. 
              Folk forventer å forstå hva bedriften gjør umiddelbart — hvis de må lete etter informasjon, 
              forlater de siden og går til konkurrenten.»
              <footer className="mt-3 text-base font-semibold text-gray-900">
                — Albert Opdahl, Noropti AS
              </footer>
            </blockquote>

            <p className="mb-6">
              Noropti har hjulpet over 30 bedrifter med å forbedre sin digitale tilstedeværelse, 
              og resultatene snakker for seg selv. Kundene rapporterer om økt trafikk, flere henvendelser 
              og høyere konverteringsrater.
            </p>

            {/* Stats Row */}
            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-700">Bedrifter hjulpet</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">48t</div>
                  <div className="text-gray-700">Leveringstid</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">0 kr</div>
                  <div className="text-gray-700">Utkastet koster</div>
                </div>
              </div>
            </div>

            <p className="mb-6">
              Tjenesten er helt gratis og uten forpliktelser. Bedrifter sender inn grunnleggende informasjon, 
              og innen 48 timer mottar de et profesjonelt utkast som viser hvordan nettsiden deres burde se ut.
            </p>

            {/* Second CTA */}
            <div className="my-8 text-center">
              <Link 
                to="/gratis-utkast" 
                onClick={handleCTAClick}
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Få ditt gratis nettside-utkast her
              </Link>
            </div>

            {/* Testimonials */}
            <div className="my-12">
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-6">Hva kundene sier:</h3>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-3">
                    "Jeg skjønte ikke hvor dårlig nettsiden vår var før jeg så Noroptis utkast. 
                    Vi implementerte endringene og fikk 40% flere henvendelser første måned."
                  </p>
                  <div className="font-semibold text-gray-900">— Glenn R., Elektriker, Oslo</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 italic mb-3">
                    "Fantastisk service! De viste meg nøyaktig hva som var galt og hvordan vi kunne 
                    forbedre oss. Helt gratis, som lovet."
                  </p>
                  <div className="font-semibold text-gray-900">— Marius P., Regnskapsfører, Bergen</div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-green-50 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 font-serif mb-4">
                Hva inkluderer det gratis utkastet?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Profesjonell visuell redesign av forsiden
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Optimalisert tekstinnhold som konverterer
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Mobilvennlig design som fungerer overalt
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Klare handlingsoppfordringer som driver salg
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Detaljert forklaring av alle endringer
                </li>
              </ul>
            </div>

            <p className="mb-6">
              «Vi tar kun fire prosjekter per måned for å sikre kvalitet,» 
              understreker Opdahl. «Dette er ikke en automatisert tjeneste — 
              hvert utkast er skreddersydd for den spesifikke bedriften.»
            </p>

            {/* Third CTA */}
            <div className="my-8 text-center bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Begrenset kapasitet — kun 4 plasser igjen denne måneden</h3>
              <Link 
                to="/gratis-utkast" 
                onClick={handleCTAClick}
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Sikre din plass nå →
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
          Annonsørinnhold levert av Noropti AS
        </div>
      </footer>
    </div>
  );
};

export default ArtikelPage;