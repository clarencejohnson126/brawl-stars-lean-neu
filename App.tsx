import React, { useState, useEffect } from 'react';
import { BRAWLERS, RARITY_COLORS, RARITY_TEXT_COLORS } from './constants';
import { Brawler, Skin } from './types';
import StatHexagon from './components/StatHexagon';
import {
  Users,
  MessageCircle,
  Shield,
  Settings,
  Menu,
  Plus,
  Newspaper,
  ShoppingBag,
  Gamepad2,
  Trophy,
  Star,
  Skull,
  Coins,
  Gem
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedBrawler, setSelectedBrawler] = useState<Brawler>(BRAWLERS[0]);
  const [selectedSkin, setSelectedSkin] = useState<Skin>(BRAWLERS[0].skins[0]);
  const [showBrawlerSelect, setShowBrawlerSelect] = useState(false);

  // Bei Brawler-Wechsel: Skin zurücksetzen
  useEffect(() => {
    setSelectedSkin(selectedBrawler.skins[0]);
  }, [selectedBrawler]);

  // Currency Mock Data
  const coins = 168;
  const starPoints = 0;
  const gems = 50;

  // Brawler-spezifische Daten (später erweiterbar)
  const brawlerTrophies = 45 + BRAWLERS.findIndex(b => b.id === selectedBrawler.id) * 12;
  const brawlerPower = Math.min(9, 1 + BRAWLERS.findIndex(b => b.id === selectedBrawler.id));
  const brawlerRank = Math.min(20, 1 + Math.floor(brawlerTrophies / 50));

  // Render a "Game Icon" button
  const GameIconButton = ({ icon: Icon, label, notificationCount, color = "bg-white", onClick }: any) => (
    <button
      onClick={onClick}
      className="relative group flex flex-col items-center gap-1 transition-transform active:scale-95"
    >
      <div className={`w-14 h-12 ${color} border-2 border-black rounded-lg flex items-center justify-center box-shadow-game relative z-10`}>
        <Icon size={24} className="text-black fill-current" strokeWidth={2.5} />
        {notificationCount && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 border-2 border-black rounded-full text-white text-xs font-bold flex items-center justify-center z-20">
            {notificationCount}
          </div>
        )}
      </div>
      <span className="text-white text-stroke-sm font-bold text-xs uppercase tracking-wide drop-shadow-md">
        {label}
      </span>
    </button>
  );

  // Currency Display Pill
  const CurrencyPill = ({ icon: Icon, amount, iconColor }: any) => (
    <div className="h-8 bg-black/40 rounded-md flex items-center px-2 gap-2 min-w-[80px] justify-between border border-white/10">
      <div className={`${iconColor} p-0.5`}>
        <Icon size={16} fill="currentColor" className="text-white" />
      </div>
      <span className="text-white font-bold text-sm">{amount}</span>
    </div>
  );

  // Skin Selector Component
  const SkinSelector = () => (
    <div className="flex gap-2 mt-2">
      {selectedBrawler.skins.map((skin) => (
        <button
          key={skin.id}
          onClick={() => setSelectedSkin(skin)}
          className={`
            relative w-12 h-12 rounded-lg border-2 overflow-hidden transition-all
            ${selectedSkin.id === skin.id
              ? `${RARITY_COLORS[skin.rarity]} ring-2 ring-white scale-110`
              : 'border-black/50 bg-black/30 hover:scale-105'}
          `}
          title={`${skin.name} (${skin.rarity})`}
        >
          <img
            src={skin.image}
            alt={skin.name}
            className="w-full h-full object-cover"
            style={{ filter: skin.filter || 'none' }}
          />
          {selectedSkin.id === skin.id && (
            <div className="absolute inset-0 bg-white/20"></div>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full h-screen bg-brawl-pattern relative overflow-hidden flex flex-col justify-between p-2 md:p-4">

      {/* --- CINEMA TITLE --- */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
        <h1 className="cinema-title text-5xl md:text-6xl text-yellow-400 uppercase">
          Leans BRAWLER
        </h1>
      </div>

      {/* --- TOP HUD --- */}
      <header className="flex justify-between items-start z-30 pt-16">

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer">
            <div className="w-14 h-14 bg-blue-500 border-2 border-black rounded-lg overflow-hidden box-shadow-game">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full bg-slate-200" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1 rounded font-bold">
              LVL 10
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-white font-black text-lg text-stroke-sm tracking-wide">BrawlMaster</div>
            {/* Trophy Road Bar */}
            <div className="w-48 h-6 bg-black/50 rounded-full border-2 border-black relative flex items-center">
               <div className="h-full bg-orange-500 rounded-l-full border-r-2 border-black" style={{ width: `${Math.min(100, brawlerTrophies / 5)}%` }}></div>
               <div className="absolute left-2 flex items-center gap-1 text-white text-xs font-bold">
                  <div className="bg-yellow-400 rounded-full p-0.5 border border-black">
                     <Trophy size={10} className="text-black" fill="black" />
                  </div>
                  <span>{brawlerTrophies}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Resources & Settings */}
        <div className="flex items-start gap-3">
          <div className="flex gap-2">
            <CurrencyPill icon={Star} amount={starPoints} iconColor="text-pink-400" />
            <CurrencyPill icon={Coins} amount={coins} iconColor="text-yellow-400" />
            <CurrencyPill icon={Gem} amount={gems} iconColor="text-green-400" />
          </div>
          <button className="w-10 h-10 bg-blue-500 border-2 border-black rounded flex items-center justify-center box-shadow-game active:translate-y-1 active:shadow-none transition-all">
             <Menu size={24} className="text-white" />
          </button>
        </div>
      </header>


      {/* --- MAIN STAGE --- */}
      <main className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

        {/* Stats Hexagon - Left Side */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-48 h-48 pointer-events-auto hidden lg:block">
          <StatHexagon stats={selectedBrawler.stats} />
        </div>

        {/* Character Model */}
        <div className="relative flex flex-col items-center animate-float pointer-events-auto">

          {/* Rank/Power Badges */}
          <div className="flex items-end gap-2 mb-2 translate-y-4 z-20">
             {/* Rank Badge */}
             <div className="relative">
                <div className="w-10 h-12 bg-red-600 border-2 border-black clip-path-badge flex items-center justify-center pt-2">
                  <span className="text-white font-black text-lg">{brawlerRank}</span>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[8px] font-black bg-black px-1 rounded uppercase">Rank</div>
             </div>

             {/* Power Badge */}
             <div className="relative">
                <div className="w-10 h-10 bg-purple-600 border-2 border-black flex items-center justify-center rounded-lg rotate-45 mt-2">
                   <div className="-rotate-45 text-white font-black text-lg">{brawlerPower}</div>
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[8px] font-black bg-black px-1 rounded uppercase z-10">Power</div>
             </div>

             {/* Trophy Count for Brawler */}
             <div className="bg-black/60 rounded px-2 py-0.5 flex items-center gap-1 border border-white/20 mb-2">
                <Trophy size={12} className="text-yellow-400" fill="currentColor" />
                <span className="text-white text-sm font-bold">{brawlerTrophies}</span>
             </div>
          </div>

          {/* Character Image */}
          <div
            onClick={() => setShowBrawlerSelect(true)}
            className="h-[50vh] w-auto aspect-[3/4] cursor-pointer filter hover:brightness-110 transition-all drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          >
             <img
               src={selectedSkin.image}
               alt={selectedBrawler.name}
               className="h-full w-full object-contain transition-all duration-300"
               style={{
                 filter: selectedSkin.filter || 'none',
                 maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
               }}
             />
          </div>

          {/* Add Friend Button (Floating Left) */}
          <button className="absolute left-[-80px] top-1/2 w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center box-shadow-game hover:scale-105 transition-transform">
             <Plus size={28} className="text-blue-500" strokeWidth={4} />
          </button>

          {/* Character Name & Skin Selector */}
          <div className="mt-[-20px] z-20 flex flex-col items-center">
             <h2 className="text-3xl text-white font-black text-stroke uppercase tracking-wider">{selectedBrawler.name}</h2>
             <span className="text-yellow-300 font-bold text-sm text-stroke-sm uppercase">{selectedBrawler.role}</span>

             {/* Skin Name with Rarity Color */}
             <span className={`text-xs font-bold mt-1 ${RARITY_TEXT_COLORS[selectedSkin.rarity]}`}>
               {selectedSkin.name}
             </span>

             {/* Skin Selector */}
             <SkinSelector />
          </div>

        </div>
      </main>


      {/* --- SIDEBARS --- */}
      {/* Left Sidebar */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 mt-24">
        <GameIconButton icon={ShoppingBag} label="Shop" color="bg-red-500" />
        <GameIconButton
          icon={Gamepad2}
          label="Brawlers"
          color="bg-yellow-400"
          notificationCount={1}
          onClick={() => setShowBrawlerSelect(true)}
        />
        <GameIconButton icon={Newspaper} label="News" notificationCount={2} />
      </div>

      {/* Right Sidebar */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <GameIconButton icon={Users} label="Friends" color="bg-green-500" />
        <GameIconButton icon={Shield} label="Club" color="bg-blue-500" />
        <GameIconButton icon={MessageCircle} label="Chat" color="bg-white" />
      </div>


      {/* --- BOTTOM HUD --- */}
      <footer className="flex items-end justify-between gap-4 z-30 pb-2">

        {/* Brawl Pass Banner */}
        <div className="flex-1 max-w-xs h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-black rounded-lg relative box-shadow-game flex items-center px-2 overflow-hidden group cursor-pointer hover:brightness-110">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
           <div className="z-10 flex flex-col w-full">
              <div className="flex justify-between items-center mb-1">
                 <span className="text-white text-stroke font-black uppercase text-sm">Brawl Pass</span>
                 <div className="bg-red-600 w-5 h-5 rounded-full border border-black text-white text-xs flex items-center justify-center font-bold">1</div>
              </div>
              <div className="w-full h-3 bg-black/40 rounded-full border border-black/20">
                 <div className="w-1/3 h-full bg-yellow-300 rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] text-white font-bold mt-0.5">
                 <span>33/100</span>
                 <span className="bg-black/50 px-1 rounded text-white">3</span>
              </div>
           </div>
           <Skull className="absolute -right-4 -bottom-2 text-black/20 w-24 h-24 rotate-12" />
        </div>

        {/* Game Mode Selector */}
        <div className="flex-1 bg-slate-900/90 border-2 border-black rounded-lg h-20 flex items-center px-4 gap-4 relative box-shadow-game cursor-pointer hover:bg-slate-800 transition-colors">
            {/* New Event Tag */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded border border-black uppercase animate-bounce">
              New Event in: 9h 12m
            </div>

            <div className="w-12 h-12 bg-purple-600 rounded border-2 border-black flex items-center justify-center">
              <Skull className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black uppercase text-sm tracking-wide">Solo Showdown</span>
              <span className="text-green-400 font-bold text-xs">Two Thousand Lakes</span>
            </div>
            <button className="absolute right-2 top-2 bg-white/10 p-1 rounded hover:bg-white/20">
              <Settings size={14} className="text-white" />
            </button>
        </div>

        {/* PLAY Button */}
        <button className="w-32 h-16 bg-yellow-400 border-2 border-black rounded-lg flex items-center justify-center box-shadow-game box-shadow-game-active transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
          <span className="text-2xl font-black text-white text-stroke uppercase italic relative z-10">Play</span>
        </button>

      </footer>

      {/* --- BRAWLER SELECTION DRAWER (Overlay) --- */}
      {showBrawlerSelect && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-4 bg-slate-900 border-b-2 border-slate-700">
            <h2 className="text-white text-2xl font-black text-stroke">BRAWLERS</h2>
            <button
              onClick={() => setShowBrawlerSelect(false)}
              className="text-white font-bold bg-red-500 px-4 py-2 rounded border-2 border-black box-shadow-game active:shadow-none active:translate-y-1"
            >
              CLOSE
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {BRAWLERS.map((brawler) => (
              <button
                key={brawler.id}
                onClick={() => {
                  setSelectedBrawler(brawler);
                  setShowBrawlerSelect(false);
                }}
                className={`
                  relative aspect-[3/4] bg-slate-800 rounded-xl border-2 overflow-hidden transition-transform hover:scale-105
                  ${selectedBrawler.id === brawler.id ? 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'border-black'}
                `}
              >
                <div className="absolute top-1 left-1 z-10">
                   <div className="bg-black/50 text-white text-[10px] px-1.5 rounded font-bold border border-white/10">
                     PWR {Math.min(9, 1 + BRAWLERS.findIndex(b => b.id === brawler.id))}
                   </div>
                </div>
                <img
                  src={brawler.skins[0].image}
                  alt={brawler.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-2">
                  <span className={`text-sm font-black text-stroke uppercase ${selectedBrawler.id === brawler.id ? 'text-yellow-400' : 'text-white'}`}>
                    {brawler.name}
                  </span>
                </div>
                {/* Role Color Stripe */}
                <div className={`absolute top-0 right-0 w-8 h-8 rotate-45 translate-x-4 -translate-y-4
                  ${brawler.role === 'Assassin' ? 'bg-purple-500' :
                    brawler.role === 'Tank' ? 'bg-blue-500' :
                    brawler.role === 'Marksman' ? 'bg-green-500' :
                    brawler.role === 'Support' ? 'bg-pink-500' : 'bg-orange-500'}
                `}></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CSS for custom badge shape */}
      <style>{`
        .clip-path-badge {
          clip-path: polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%);
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;
