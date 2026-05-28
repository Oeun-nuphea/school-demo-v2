export default function StudentLife() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Vibrant Campus Life</h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              At AIC, learning extends far beyond the classroom. We provide exceptional opportunities to build your network, gain global perspective, and prepare for a successful career.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary mt-2 mr-3 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">International study tours and factory visits (e.g., Japan, China)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary mt-2 mr-3 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Participation in international conferences (e.g., Eurasia Foundation)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary mt-2 mr-3 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Opportunities for jobs and internships abroad, particularly in Japan</span>
              </li>
            </ul>
            <div className="pt-4">
              <a href="/campus-life" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-2 rounded-sm transition-colors">
                Explore Campus Life
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Students collaborating"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-40 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Graduation day"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Campus library"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-64 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Student activity"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
