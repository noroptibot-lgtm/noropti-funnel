import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const TakkPage = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');

  useEffect(() => {
    // Track CompleteRegistration event
    window.fbq?.('track', 'CompleteRegistration');

    // Get name from URL params
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setName(decodeURIComponent(nameParam));
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-dark-bg text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pop-in">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Thank You Message */}
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Takk{name && `, ${name}`}! 🎉
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Vi jobber allerede med utkastet ditt. Du mottar det på e-post innen 48 timer.
          </p>
          
          <div className="glass-morphism p-6 text-left">
            <h2 className="text-xl font-semibold mb-4 text-center">Hva skjer nå?</h2>
            
            <div className="space-y-6">
              {/* Timeline */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Analyse (0-6 timer)</h3>
                  <p className="text-gray-300">
                    Vi går gjennom din nåværende nettside og bedriftsinformasjon for å forstå dine behov.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Design (6-36 timer)</h3>
                  <p className="text-gray-300">
                    Vi designer et profesjonelt utkast som viser hvordan nettsiden din kan bli.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Levering (36-48 timer)</h3>
                  <p className="text-gray-300">
                    Du mottar utkastet på e-post med detaljerte forklaringer av alle endringene.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="glass-morphism p-6">
            <h2 className="text-xl font-semibold mb-4">Hva du mottar</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <span className="text-green-400 mr-3 text-lg">✓</span>
                Visuell sammenligning: før vs. etter
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3 text-lg">✓</span>
                Detaljert forklaring av hver endring
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3 text-lg">✓</span>
                Forslag til forbedret tekst og struktur
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3 text-lg">✓</span>
                Tips for mobil-optimalisering
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3 text-lg">✓</span>
                Anbefalinger for økt konvertering
              </li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
            <h3 className="font-semibold mb-2 text-blue-300">Viktig å vite:</h3>
            <p className="text-sm text-gray-300">
              Dette er et gratis utkast uten noen forpliktelser. Du kan velge å implementere 
              endringene selv, få hjelp av oss, eller ganske enkelt bruke innsiktene som inspirasjon. 
              Beslutningen er helt din.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">
            <span className="font-semibold">Brukt av over 30 norske bedrifter</span>
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>Elektriker i Oslo</span>
            <span>•</span>
            <span>Regnskapsfører i Bergen</span>
            <span>•</span>
            <span>Frisør i Trondheim</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center text-gray-400">
          <p className="mb-2">Spørsmål? Kontakt oss på:</p>
          <p className="font-semibold">hei@noropti.no</p>
        </div>
      </div>
    </div>
  );
};

export default TakkPage;