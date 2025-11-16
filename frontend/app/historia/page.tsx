export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-700 via-amber-600 to-amber-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Historia Kiełpina
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 mb-4">
              Ponad 775 lat bogatej historii największej wioski w powiecie kartuskim
            </p>
            <p className="text-lg text-amber-100">
              Od średniowiecznych dokumentów po współczesność - poznaj fascynującą przeszłość naszej społeczności
            </p>
          </div>
        </div>
      </div>

      {/* Etymology Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Nazwa i pochodzenie</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Nazwa <strong>Kiełpino</strong> pochodzi od staropolskiego, kaszubskiego słowa <em>&quot;kiełp&quot;</em> (lub <em>&quot;kiełpik&quot;</em>),
            które oznacza <strong>łabędzia</strong>. To piękne połączenie języka i tradycji kaszubskiej odzwierciedla bliskość wioski
            z przyrodą i lokalną kulturą.
          </p>
          <p className="text-gray-600">
            Pierwsza pisemna wzmianka o wsi pojawia się w dokumencie z <strong>21 lutego 1241 roku</strong> w formie
            &quot;Kelpyno&quot;, wydanym przez księcia Sambora II.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Oś czasu - kluczowe wydarzenia
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-green-400 to-blue-400"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 1241 */}
              <TimelineItem
                year="1241"
                title="Pierwsza wzmianka"
                description="Kiełpino po raz pierwszy pojawia się w dokumentach historycznych - w akcie księcia Sambora II tworzącym kasztelanię goręczyńską."
                side="left"
                color="amber"
              />

              {/* 1382 */}
              <TimelineItem
                year="1382"
                title="Era kartuzów"
                description="29 czerwca Jan z Rusocina przekazuje Kiełpino i przyległy las zakonowi kartuzów. Rozpoczyna się 450-letni okres własności klasztornej."
                side="right"
                color="amber"
              />

              {/* 1404 */}
              <TimelineItem
                year="1404"
                title="Pierwszy kościół"
                description="Budowa drewnianego kościoła pw. św. Michała Archanioła i św. Małgorzaty. Powstaje niezależna parafia."
                side="left"
                color="amber"
              />

              {/* 1647 */}
              <TimelineItem
                year="1647"
                title="Murowany kościół"
                description="Wzniesienie murowanego kościoła, który do dziś stanowi serce wioski. Poświęcony 20 września 1772 roku."
                side="right"
                color="amber"
              />

              {/* 1772 */}
              <TimelineItem
                year="1772"
                title="I rozbiór Polski"
                description="Klasztor zostaje skonfiskowany, Kiełpino staje się własnością królewską pod panowaniem pruskim."
                side="left"
                color="green"
              />

              {/* 1820 */}
              <TimelineItem
                year="1820"
                title="Uwłaszczenie chłopów"
                description="15 listopada - chłopi otrzymują wolność osobistą i prawa do ziemi. Przełomowy moment dla społeczności."
                side="right"
                color="green"
              />

              {/* 1910 */}
              <TimelineItem
                year="1910"
                title="Elektryfikacja"
                description="Kiełpino otrzymuje elektryczność - wieś wkracza w XX wiek z nowoczesnymi udogodnieniami."
                side="left"
                color="green"
              />

              {/* 1920 */}
              <TimelineItem
                year="1920"
                title="Powrót do Polski"
                description="4 lutego Kiełpino zostaje włączone do odrodzonego państwa polskiego. 12 maja 1921 oficjalnie przywrócono polską nazwę."
                side="right"
                color="blue"
              />

              {/* 1939 */}
              <TimelineItem
                year="1939"
                title="II wojna światowa"
                description="29 października Niemcy zamordowali ks. Antoniego Arasmusa - proboszcza parafii. Tragiczny okres okupacji."
                side="left"
                color="blue"
              />

              {/* 1945 */}
              <TimelineItem
                year="1945"
                title="Wyzwolenie"
                description="8 marca wioska zostaje wyzwolona. Rozpoczyna się odbudowa i powrót do normalności."
                side="right"
                color="blue"
              />

              {/* 2016 */}
              <TimelineItem
                year="2016"
                title="775-lecie Kiełpina"
                description="Uroczyste obchody 775. rocznicy pierwszej wzmianki o wsi. Publikacja książki o historii przez Dariusza Dolatowskiego (2017)."
                side="left"
                color="blue"
              />
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Prehistoric */}
          <HistorySection
            icon="🏺"
            title="Prehistoria i starożytność"
            bgColor="bg-stone-50"
            borderColor="border-stone-200"
          >
            <p className="text-gray-700 mb-3">
              Ślady osadnictwa na terenie Kiełpina sięgają <strong>okresu neolitycznego</strong>. W latach 1927-1929
              przeprowadzono badania archeologiczne, podczas których odkryto:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Narzędzia kamienne i naczynia ceramiczne</li>
              <li>Kurhany zawierające kości, naczynia gliniiane, szpile i paciorki szklane</li>
              <li>Ślady osady z około V wieku n.e. prowadzącej handel z basenem Morza Śródziemnego</li>
            </ul>
          </HistorySection>

          {/* Medieval */}
          <HistorySection
            icon="⚔️"
            title="Średniowiecze (1241-1500)"
            bgColor="bg-amber-50"
            borderColor="border-amber-200"
          >
            <p className="text-gray-700 mb-3">
              Kiełpino przeżywa dynamiczny rozwój pod panowaniem kolejnych władców:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>1241</strong> - pierwsza wzmianka pisemna</li>
              <li><strong>1308-1309</strong> - zajęcie przez Krzyżaków</li>
              <li><strong>1382</strong> - przekazanie zakonu kartuzów, którzy władali wsią przez 450 lat</li>
              <li><strong>1391</strong> - powstanie parafii</li>
              <li><strong>1404</strong> - budowa pierwszego kościoła</li>
              <li><strong>1454-1466</strong> - wojna trzynastoletnia, włączenie do Królestwa Polskiego</li>
            </ul>
          </HistorySection>

          {/* Carthusian Period */}
          <HistorySection
            icon="⛪"
            title="Era kartuzów (1382-1772)"
            bgColor="bg-green-50"
            borderColor="border-green-200"
          >
            <p className="text-gray-700 mb-3">
              Prawie 400 lat Kiełpino było własnością zakonu kartuzów z Kartuz. Ten okres to czas:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Rozwoju życia religijnego i powstania silnej parafii</li>
              <li>Budowy murowanego kościoła (1646-1647)</li>
              <li>Pierwszej szkoły parafialnej (1686)</li>
              <li>Nadania przywilejów jarmarcznych przez króla Augusta II (1730)</li>
            </ul>
            <p className="text-gray-600 mt-3 italic">
              Era kartuzów zakończyła się w 1772 roku wraz z I rozbiorem Polski i konfiskatą dóbr klasztornych przez władze pruskie.
            </p>
          </HistorySection>

          {/* Prussian Period */}
          <HistorySection
            icon="🏛️"
            title="Okres pruski (1772-1920)"
            bgColor="bg-blue-50"
            borderColor="border-blue-200"
          >
            <p className="text-gray-700 mb-3">
              Mimo trudności pod panowaniem pruskim, Kiełpino się rozwijało:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>1820</strong> - uwłaszczenie chłopów (15 listopada)</li>
              <li><strong>1837-1840</strong> - budowa głównej drogi (dzisiejsza ul. ks. Sędzickiego)</li>
              <li><strong>1867</strong> - budowa katolickiej szkoły</li>
              <li><strong>1897</strong> - otwarcie dwuklasowej szkoły</li>
              <li><strong>1910</strong> - elektryfikacja wioski</li>
            </ul>
            <p className="text-gray-600 mt-3">
              W 1892 roku wieś liczyła 557 mieszkańców: 523 Kaszubów (515 katolików i 8 protestantów)
              oraz 34 protestantów niemieckich.
            </p>
          </HistorySection>

          {/* 20th Century */}
          <HistorySection
            icon="🇵🇱"
            title="XX wiek - powrót do Polski i czasy współczesne"
            bgColor="bg-red-50"
            borderColor="border-red-200"
          >
            <p className="text-gray-700 mb-3">
              <strong>1920-1939: Okres międzywojenny</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>4 lutego 1920 - włączenie do Polski</li>
              <li>12 maja 1921 - oficjalne przywrócenie polskiej nazwy</li>
              <li>1926-1929 - poszerzenie kościoła o prezbiterium i transept</li>
              <li>1933-1934 - budowa repliki groty z Lourdes (uczestniczyło 3000 osób!)</li>
            </ul>

            <p className="text-gray-700 mb-3">
              <strong>II wojna światowa i powojnie</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>29 października 1939 - zamordowanie ks. Antoniego Arasmusa przez Niemców</li>
              <li>8 marca 1945 - wyzwolenie</li>
              <li>1945 - wznowienie polskojęzycznej szkoły</li>
              <li>11 grudnia 1965 - uruchomienie wodociągu</li>
              <li>1974 - odsłonięcie pomnika na miejscu kaźni księdza</li>
            </ul>

            <p className="text-gray-700 mb-3">
              <strong>Czasy współczesne</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>2014-2016 - kompleksowa renowacja kościoła</li>
              <li>2016 - uroczyste obchody 775-lecia wioski</li>
              <li>2017 - publikacja książki &quot;Kiełpino. Zarys dziejów wsi i parafii&quot; autorstwa Dariusza Dolatowskiego</li>
              <li>Tytuł najpiękniejszej wsi w powiecie kartuskim</li>
            </ul>
          </HistorySection>

          {/* Coat of Arms */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Herb Kiełpina</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Symbolika</h3>
                <p className="text-gray-700 mb-4">
                  Herb przedstawia niebieski sztandar z czarnym obramowaniem, zawierający trzy kluczowe elementy:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">🦢</span>
                    <div>
                      <strong>Biały łabędź</strong> - symbolizuje nazwę wioski pochodzącą od słowa &quot;kiełp&quot;
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <strong>Siedem srebrnych gwiazd</strong> - reprezentują zakon kartuzów, którzy przez 450 lat byli właścicielami Kiełpina
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <strong>Atrybuty św. Michała Archanioła</strong> - złoty miecz, tarcza i waga, symbol patrona parafii
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 bg-blue-400 rounded-lg flex items-center justify-center text-white text-6xl">
                    🦢
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    Projekt: Urszula Szczepańska<br />
                    Grafika: Łukasz Kitowski i Łukasz Brylowski
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-gray-100 rounded-xl p-6 mt-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Źródła:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Dariusz Dolatowski - &quot;Kiełpino. Zarys dziejów wsi i parafii&quot; (2017)</li>
              <li>• Kielpino.eu - oficjalna strona wioski</li>
              <li>• Parafia pw. św. Michała Archanioła w Kiełpinie</li>
              <li>• Wikipedia - Kiełpino (województwo pomorskie)</li>
              <li>• Archiwum lokalne i dokumenty historyczne</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({
  year,
  title,
  description,
  side,
  color
}: {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  color: 'amber' | 'green' | 'blue';
}) {
  const colorClasses = {
    amber: 'bg-amber-500 border-amber-600',
    green: 'bg-green-500 border-green-600',
    blue: 'bg-blue-500 border-blue-600'
  };

  const bgColorClasses = {
    amber: 'bg-amber-50 border-amber-200',
    green: 'bg-green-50 border-green-200',
    blue: 'bg-blue-50 border-blue-200'
  };

  return (
    <div className={`flex items-center ${side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-5/12 ${side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className={`inline-block bg-white rounded-lg shadow-md p-6 border-2 ${bgColorClasses[color]} hover:shadow-lg transition-shadow`}>
          <div className={`text-2xl font-bold ${color === 'amber' ? 'text-amber-600' : color === 'green' ? 'text-green-600' : 'text-blue-600'} mb-2`}>
            {year}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>

      <div className="w-2/12 flex justify-center">
        <div className={`w-6 h-6 rounded-full border-4 ${colorClasses[color]} z-10`}></div>
      </div>

      <div className="w-5/12"></div>
    </div>
  );
}

// History Section Component
function HistorySection({
  icon,
  title,
  bgColor,
  borderColor,
  children
}: {
  icon: string;
  title: string;
  bgColor: string;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${bgColor} rounded-xl shadow-lg p-8 border-2 ${borderColor}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}
