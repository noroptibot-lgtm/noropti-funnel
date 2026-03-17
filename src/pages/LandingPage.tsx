import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    business: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track Lead event
      window.fbq?.('track', 'Lead');

      const response = await fetch('https://qnazhgefbvgtqegnjdps.supabase.co/functions/v1/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const firstName = formData.name.split(' ')[0];
        navigate(`/takk?name=${encodeURIComponent(firstName)}`);
      } else {
        alert('Det oppstod en feil. Prøv igjen.');
      }
    } catch (error) {
      alert('Det oppstod en feil. Prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium pulse-badge">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
            Begrenset kapasitet — maks 4 prosjekter/mnd
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Få et gratis nettside-utkast{' '}
            <span className="gradient-text">på under 48 timer</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vi viser deg nøyaktig hvordan nettsiden din burde se ut for å tiltrekke flere kunder 
            og øke salget — helt gratis og uten forpliktelser.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <div className="glass-morphism p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Fullt navn"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-postadresse"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefonnummer"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <select
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="text-gray-700">Har du nettside i dag?</option>
                  <option value="ja-fungerer" className="text-gray-700">Ja, og den fungerer bra</option>
                  <option value="ja-trenger-hjelp" className="text-gray-700">Ja, men trenger hjelp</option>
                  <option value="nei-trenger-ny" className="text-gray-700">Nei, trenger ny nettside</option>
                  <option value="usikker" className="text-gray-700">Usikker på kvaliteten</option>
                </select>
              </div>

              <div>
                <textarea
                  name="business"
                  placeholder="Beskriv kort hva bedriften din gjør"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Sender...' : 'Ja, send meg gratis utkast'}
              </button>

              <p className="text-sm text-gray-400 text-center">
                100% gratis. Vi sender bare utkastet — ingen spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Førsteinntrykk</h3>
            <p className="text-gray-300">
              Besøkende bestemmer seg på 3 sekunder. Vi sørger for at de blir værende.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobil</h3>
            <p className="text-gray-300">
              80% av kundene bruker mobil. Din nettside må fungere perfekt der.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕐</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7</h3>
            <p className="text-gray-300">
              Nettsiden din jobber når du sover. Den må selge for deg døgnet rundt.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Konvertering</h3>
            <p className="text-gray-300">
              Hver besøkende er en mulighet. Vi maksimerer sjansen for at de tar kontakt.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tillit</h3>
            <p className="text-gray-300">
              Profesjonell design bygger tillit. Tillit fører til salg.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Hastighet</h3>
            <p className="text-gray-300">
              Treg nettside = tapte kunder. Vi optimaliserer for lynrask lasting.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Slik fungerer det</h2>
          <p className="text-gray-300">Enkel prosess, profesjonelle resultater</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyser</h3>
              <p className="text-gray-300">
                Vi analyserer din nåværende nettside og identifiserer forbedringspunkter
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-300">
                Vi lager et profesjonelt utkast som viser potensialet i bedriften din
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Leverer</h3>
              <p className="text-gray-300">
                Du mottar utkastet på e-post med forklaringer av alle endringene
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hva kundene sier</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-morphism p-6">
            <p className="text-gray-300 italic mb-4">
              "Jeg skjønte ikke hvor dårlig nettsiden vår var før jeg så Noroptis utkast. 
              Vi implementerte endringene og fikk 40% flere henvendelser første måned."
            </p>
            <div className="font-semibold">— Glenn R., Elektriker, Oslo</div>
          </div>

          <div className="glass-morphism p-6">
            <p className="text-gray-300 italic mb-4">
              "Fantastisk service! De viste meg nøyaktig hva som var galt og hvordan vi kunne 
              forbedre oss. Helt gratis, som lovet."
            </p>
            <div className="font-semibold">— Marius P., Regnskapsfører, Bergen</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-morphism p-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 pulse-badge">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
            Vi tar maks 4 prosjekter per måned
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Ikke gå glipp av muligheten til å se hvordan nettsiden din kan se ut
          </h2>
          <p className="text-gray-300 mb-6">
            Begrenset kapasitet betyr at vi kan gi hver bedrift den oppmerksomheten de fortjener.
          </p>
          <a href="#" onClick={() => window.scrollTo(0, 0)} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
            Sikre min plass nå
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>Brukt av over 30 norske bedrifter</p>
      </section>
    </div>
  );
};

export default LandingPage;