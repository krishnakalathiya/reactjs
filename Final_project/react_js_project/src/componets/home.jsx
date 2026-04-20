import React from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

const MantuPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- Navbar --- */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
               <ShoppingCart className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-slate-800">Mantu</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              Categories <ChevronDown size={16} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              Products <ChevronDown size={16} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              Pages <ChevronDown size={16} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-600">
          <Search className="cursor-pointer w-5 h-5" />
          <User className="cursor-pointer w-5 h-5" />
          <div className="relative">
            <Heart className="cursor-pointer w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </div>
          <div className="relative">
            <ShoppingCart className="cursor-pointer w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">4</span>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="p-6">
        <div className="relative bg-[#1a1c22] rounded-[40px] overflow-hidden min-h-[500px] flex items-center px-12">
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 text-white opacity-20 text-4xl">≈</div>
          <div className="absolute bottom-10 right-10 text-white opacity-20 text-4xl">≈</div>
          
          {/* Content */}
          <div className="z-10 max-w-lg">
            <div className="bg-yellow-100 text-yellow-700 font-bold px-4 py-2 rounded-full inline-block mb-6 shadow-[0_4px_0_0_#eab308]">
              50% Off
            </div>
            <h1 className="text-white text-6xl font-bold mb-4 leading-tight">
              Fashion sale <br /> for women's
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Elevate your every day. Style that speaks volumes.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all">
              Shop Now
            </button>
          </div>

          {/* Image Container */}
          <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-center justify-center">
            {/* The Yellow Circle Background */}
            <div className="relative w-[450px] h-[450px] bg-[#f9bc15] rounded-full flex items-center justify-center border-[15px] border-[#2a2d35]">
               {/* Replace with your actual image path */}
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Fashion Model" 
                className="absolute bottom-0 h-[110%] object-cover transform scale-x-[-1]"
               />
               
               {/* Decorative Dotted Circle */}
               <div className="absolute inset-[-30px] rounded-full border-2 border-dashed border-gray-500 opacity-50"></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white">
            <ChevronDown className="rotate-90" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white">
            <ChevronDown className="-rotate-90" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default MantuPage;