import React, { useState } from 'react';
import { Plane, Hotel, Map, Phone, Search, Star, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-teal-500" />
              <span className="text-2xl font-black tracking-tighter text-teal-600">TripZen</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-slate-600 hover:text-teal-500 font-medium flex items-center gap-1"><Plane size={18}/> Flights</a>
              <a href="#" className="text-slate-600 hover:text-teal-500 font-medium flex items-center gap-1"><Hotel size={18}/> Hotels</a>
              <a href="#" className="text-slate-600 hover:text-teal-500 font-medium flex items-center gap-1"><Map size={18}/> Packages</a>
              <a href="#" className="text-slate-600 hover:text-teal-500 font-medium flex items-center gap-1"><Phone size={18}/> Contact</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Flaw: Search form misaligned, inconsistent sizes, button away */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/tripzenhero/1920/1080" 
            alt="Beautiful travel destination" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Find Your Zen.
          </h1>
          
          {/* FLAW 1, 2, 3: Misaligned, inconsistent sizes, button far away */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl w-full flex flex-col md:flex-row items-start md:items-center">
            <div className="flex flex-col md:flex-row w-full items-start md:items-center">
              <div className="w-full md:w-72 mb-4 md:mb-0 md:mr-4 md:mt-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Where to?</label>
                <div className="relative">
                  <Map className="absolute left-3 top-3.5 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="City or Airport" 
                    className="w-full h-14 pl-10 pr-4 rounded-lg border-2 border-slate-200 focus:border-teal-500 outline-none text-lg"
                  />
                </div>
              </div>
              
              {/* FLAW 3: Date field is noticeably smaller and misaligned */}
              <div className="w-full md:w-40 mb-4 md:mb-0 md:mr-6 md:-mt-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">When?</label>
                <input 
                  type="date" 
                  className="w-full h-10 px-3 rounded-md border border-slate-300 focus:border-teal-500 outline-none text-sm"
                />
              </div>

              {/* FLAW 1: Guests field is taller and misaligned */}
              <div className="w-full md:w-56 md:mt-8">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Who?</label>
                <select className="w-full h-16 px-4 rounded-xl border-2 border-slate-200 focus:border-teal-500 outline-none text-lg bg-white">
                  <option>1 Guest, 1 Room</option>
                  <option>2 Guests, 1 Room</option>
                  <option>Family (4+)</option>
                </select>
              </div>
            </div>

            {/* FLAW 2 & 5: Button is far away from inputs, different style (pill gradient) */}
            <button className="mt-8 md:mt-16 md:ml-12 bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Offers Section - FLAW 4: Highlighted way more than the search feature */}
      <section className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 py-32 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-yellow-400 text-slate-900 font-black px-6 py-2 rounded-full text-sm uppercase tracking-widest mb-6 transform -rotate-2">
            Limited Time Only
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
            SUMMER<br/>BLOWOUT!
          </h2>
          <p className="text-2xl text-pink-100 mb-12 max-w-2xl mx-auto font-medium">
            Get up to 70% off on all tropical destinations. This is the biggest sale of the year and you absolutely cannot miss it!
          </p>
          {/* FLAW 5: Different button style (sharp, solid, massive) */}
          <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black text-2xl py-6 px-16 rounded-none shadow-[8px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-[12px_12px_0px_rgba(0,0,0,0.2)] transition-all uppercase tracking-wider">
            Claim Offer Now
          </button>
        </div>
      </section>

      {/* Popular Destinations - FLAW 6: Uneven spacing. FLAW 7: Contrast issues */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Trending Destinations</h2>
          <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">Discover the most sought-after locations for your next unforgettable adventure.</p>
          
          {/* FLAW 6: Flex layout with weird margins to create uneven spacing */}
          <div className="flex flex-wrap justify-center items-start">
            
            {/* Card 1 */}
            <div className="w-full md:w-[30%] h-96 relative group overflow-hidden rounded-2xl m-2 md:mr-6 md:mb-12 shadow-xl">
              <img 
                src="https://picsum.photos/seed/santorini/800/600" 
                alt="Santorini" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* FLAW 7: White text on potentially light image with NO dark overlay */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-thin text-4xl drop-shadow-sm">Santorini</h3>
                <p className="text-white font-light text-lg">Greece</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[30%] h-96 relative group overflow-hidden rounded-2xl m-2 md:ml-8 md:mt-16 shadow-xl">
              <img 
                src="https://picsum.photos/seed/kyoto/800/600" 
                alt="Kyoto" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* FLAW 7: White text on potentially light image with NO dark overlay */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-thin text-4xl drop-shadow-sm">Kyoto</h3>
                <p className="text-white font-light text-lg">Japan</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-[30%] h-96 relative group overflow-hidden rounded-2xl m-2 md:mx-4 md:-mt-8 shadow-xl">
              <img 
                src="https://picsum.photos/seed/maldives/800/600" 
                alt="Maldives" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* FLAW 7: White text on potentially light image with NO dark overlay */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-thin text-4xl drop-shadow-sm">Maldives</h3>
                <p className="text-white font-light text-lg">South Asia</p>
              </div>
            </div>

          </div>
          
          <div className="text-center mt-12">
            {/* FLAW 5: Different button style (outline, pill) */}
            <button className="border-2 border-slate-300 text-slate-600 hover:border-slate-900 hover:text-slate-900 font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2">
              Explore All Destinations <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", text: "TripZen made our honeymoon absolutely perfect. The booking process was a breeze!", rating: 5 },
              { name: "Michael Chen", text: "Found an incredible deal on the Summer Blowout. Highly recommend checking their offers.", rating: 5 },
              { name: "Emma Watson", text: "The hotel recommendations were spot on. Will definitely use TripZen for my next adventure.", rating: 4 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-slate-900">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Plane className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-black tracking-tighter text-white">TripZen</span>
            </div>
            <p className="text-sm text-slate-400">Your ultimate companion for finding the perfect getaway. Travel smart, travel Zen.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cancellation Options</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe for the latest travel deals.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-teal-400 text-sm" />
              <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-r-md text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          &copy; {new Date().getFullYear()} TripZen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
