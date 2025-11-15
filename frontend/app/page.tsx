import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 flex">
          <div
            className="w-1/2 bg-cover bg-center opacity-95"
            style={{ backgroundImage: "url('/images/hero/river1.png')" }}
          />
          <div
            className="w-1/2 bg-cover bg-center opacity-95"
            style={{ backgroundImage: "url('/images/hero/river2.png')" }}
          />
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700/15 via-green-600/10 to-green-500/15" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Witamy w Kiełpinie
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50 drop-shadow-md">
              Największa wioska w powiecie kartuskim - gdzie tradycja spotyka się z nowoczesnością
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#aktualnosci"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
              >
                Zobacz aktualności
              </a>
              <a
                href="/atrakcje"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
              >
                Odkryj atrakcje
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a href="/sprawy-mieszkancow" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sprawy Mieszkańców</h3>
                <p className="text-sm text-gray-600">Ważne informacje dla lokalnej społeczności</p>
              </div>
            </a>

            <a href="/atrakcje" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Atrakcje</h3>
                <p className="text-sm text-gray-600">Odkryj piękno naszego regionu</p>
              </div>
            </a>

            <a href="/historia" className="group">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl hover:shadow-lg transition-all border border-amber-200">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Historia</h3>
                <p className="text-sm text-gray-600">Poznaj przeszłość Kiełpina</p>
              </div>
            </a>

            <a href="tel:+48123456789" className="group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:shadow-lg transition-all border border-red-200">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Kontakt</h3>
                <p className="text-sm text-gray-600">Skontaktuj się z nami</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div id="aktualnosci" className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Aktualności
          </h2>
          <p className="text-gray-600">
            Bieżące informacje z życia naszej społeczności
          </p>
        </div>
        <NewsFeed />
      </div>
    </div>
  );
}
