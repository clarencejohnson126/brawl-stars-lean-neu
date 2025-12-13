import { Brawler, WeaponType } from './types';
import { Sword, Crosshair, Shield, Zap, Hammer } from 'lucide-react';

export const WEAPON_ICONS: Record<WeaponType, any> = {
  Melee: Sword,
  Ranged: Crosshair,
  Heavy: Hammer,
  Magic: Zap,
  Tech: Shield,
};

// Rarity-Farben für UI
export const RARITY_COLORS: Record<string, string> = {
  Common: 'border-gray-400 bg-gray-600',
  Rare: 'border-blue-400 bg-blue-600',
  Epic: 'border-purple-400 bg-purple-600',
  Legendary: 'border-yellow-400 bg-yellow-500',
};

export const RARITY_TEXT_COLORS: Record<string, string> = {
  Common: 'text-gray-300',
  Rare: 'text-blue-400',
  Epic: 'text-purple-400',
  Legendary: 'text-yellow-400',
};

export const BRAWLERS: Brawler[] = [
  {
    id: 'b1',
    name: 'Grit',
    title: 'Wasteland Cowboy',
    description: 'A classic gunslinger in a neon world. Quick draw, quicker wit.',
    role: 'Marksman',
    stats: { offense: 85, defense: 45, utility: 45, mobility: 55, technique: 95 },
    compatibleWeapons: ['Ranged', 'Melee'],
    skins: [
      { id: 's1_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/1.png' },
      { id: 's1_2', name: 'Crimson Outlaw', rarity: 'Rare', image: './brawl stars Fotos/1.png', filter: 'hue-rotate(320deg) saturate(1.3)' },
      { id: 's1_3', name: 'Golden Sheriff', rarity: 'Legendary', image: './brawl stars Fotos/1.png', filter: 'sepia(0.8) saturate(2) hue-rotate(15deg)' },
    ]
  },
  {
    id: 'b2',
    name: 'Heavy Metal',
    title: 'Junkyard Titan',
    description: 'Constructed from scrap parts of destroyed mechs. Unstoppable force.',
    role: 'Tank',
    stats: { offense: 60, defense: 100, utility: 50, mobility: 20, technique: 40 },
    compatibleWeapons: ['Heavy', 'Melee'],
    skins: [
      { id: 's2_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/2.png' },
      { id: 's2_2', name: 'Rust Bucket', rarity: 'Rare', image: './brawl stars Fotos/2.png', filter: 'sepia(0.5) saturate(0.8)' },
      { id: 's2_3', name: 'Chrome Plated', rarity: 'Legendary', image: './brawl stars Fotos/2.png', filter: 'saturate(0.3) brightness(1.3) contrast(1.1)' },
    ]
  },
  {
    id: 'b3',
    name: 'Rogue',
    title: 'Shadow Walker',
    description: 'Invisibility and backstabs are the name of the game.',
    role: 'Assassin',
    stats: { offense: 85, defense: 25, utility: 70, mobility: 85, technique: 75 },
    compatibleWeapons: ['Melee', 'Ranged'],
    skins: [
      { id: 's3_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/3.png' },
      { id: 's3_2', name: 'Nightshade', rarity: 'Epic', image: './brawl stars Fotos/3.png', filter: 'brightness(0.7) saturate(1.2)' },
      { id: 's3_3', name: 'Blood Moon', rarity: 'Legendary', image: './brawl stars Fotos/3.png', filter: 'hue-rotate(300deg) saturate(1.4)' },
    ]
  },
  {
    id: 'b4',
    name: 'Bastion',
    title: 'Shield Wall',
    description: 'A mobile fortress designed to protect the squad.',
    role: 'Tank',
    stats: { offense: 70, defense: 95, utility: 60, mobility: 30, technique: 50 },
    compatibleWeapons: ['Heavy', 'Tech'],
    skins: [
      { id: 's4_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/4.png' },
      { id: 's4_2', name: 'Desert Storm', rarity: 'Rare', image: './brawl stars Fotos/4.png', filter: 'sepia(0.4) saturate(1.2)' },
      { id: 's4_3', name: 'Arctic Defender', rarity: 'Epic', image: './brawl stars Fotos/4.png', filter: 'hue-rotate(180deg) saturate(0.9) brightness(1.1)' },
    ]
  },
  {
    id: 'b5',
    name: 'Viper',
    title: 'Toxic Sniper',
    description: 'Uses experimental bio-toxins to weaken enemies from afar.',
    role: 'Controller',
    stats: { offense: 70, defense: 40, utility: 100, mobility: 50, technique: 90 },
    compatibleWeapons: ['Ranged', 'Tech'],
    skins: [
      { id: 's5_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/5.png' },
      { id: 's5_2', name: 'Hazmat', rarity: 'Rare', image: './brawl stars Fotos/5.png', filter: 'hue-rotate(60deg) saturate(1.3)' },
      { id: 's5_3', name: 'Neon Venom', rarity: 'Legendary', image: './brawl stars Fotos/5.png', filter: 'hue-rotate(280deg) saturate(1.5) brightness(1.1)' },
    ]
  },
  {
    id: 'b6',
    name: 'Voltage',
    title: 'Energy Runner',
    description: 'Speed is key. Converts movement into devastating attacks.',
    role: 'Assassin',
    stats: { offense: 80, defense: 30, utility: 50, mobility: 100, technique: 60 },
    compatibleWeapons: ['Melee', 'Tech'],
    skins: [
      { id: 's6_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/6.png' },
      { id: 's6_2', name: 'Circuit Breaker', rarity: 'Rare', image: './brawl stars Fotos/6.png', filter: 'hue-rotate(200deg) saturate(1.2)' },
      { id: 's6_3', name: 'Inferno', rarity: 'Epic', image: './brawl stars Fotos/6.png', filter: 'hue-rotate(340deg) saturate(1.5)' },
    ]
  },
  {
    id: 'b7',
    name: 'Seraph',
    title: 'Sky Guardian',
    description: 'Rains justice from above. Veteran warrior with unmatched wisdom.',
    role: 'Support',
    stats: { offense: 60, defense: 50, utility: 90, mobility: 55, technique: 85 },
    compatibleWeapons: ['Magic', 'Ranged'],
    skins: [
      { id: 's7_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/7.png' },
      { id: 's7_2', name: 'Fallen Angel', rarity: 'Epic', image: './brawl stars Fotos/7.png', filter: 'hue-rotate(280deg) saturate(1.1) brightness(0.9)' },
      { id: 's7_3', name: 'Divine Light', rarity: 'Legendary', image: './brawl stars Fotos/7.png', filter: 'sepia(0.3) saturate(1.4) brightness(1.15)' },
    ]
  },
  {
    id: 'b8',
    name: 'Nebula',
    title: 'Star Weaver',
    description: 'Harnesses cosmic energy to control the battlefield.',
    role: 'Assassin',
    stats: { offense: 75, defense: 35, utility: 65, mobility: 80, technique: 90 },
    compatibleWeapons: ['Melee', 'Magic'],
    skins: [
      { id: 's8_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/8.png' },
      { id: 's8_2', name: 'Dark Matter', rarity: 'Epic', image: './brawl stars Fotos/8.png', filter: 'hue-rotate(260deg) saturate(1.3) brightness(0.85)' },
      { id: 's8_3', name: 'Supernova', rarity: 'Legendary', image: './brawl stars Fotos/8.png', filter: 'hue-rotate(30deg) saturate(1.6) brightness(1.1)' },
    ]
  },
  {
    id: 'b9',
    name: 'Ronin X',
    title: 'Cyber Samurai',
    description: 'A wandering blade from the Neon District. High burst damage.',
    role: 'Marksman',
    stats: { offense: 95, defense: 30, utility: 40, mobility: 90, technique: 80 },
    compatibleWeapons: ['Melee', 'Tech'],
    skins: [
      { id: 's9_1', name: 'Default', rarity: 'Common', image: './brawl stars Fotos/9.png' },
      { id: 's9_2', name: 'Crimson Ghost', rarity: 'Epic', image: './brawl stars Fotos/9.png', filter: 'hue-rotate(320deg) saturate(1.4)' },
      { id: 's9_3', name: 'Mecha Ronin', rarity: 'Legendary', image: './brawl stars Fotos/9.png', filter: 'hue-rotate(180deg) saturate(1.2) brightness(1.05)' },
    ]
  },
];
