export type WeaponType = 'Melee' | 'Ranged' | 'Magic' | 'Heavy' | 'Tech';

export interface BrawlerStats {
  offense: number;
  defense: number;
  utility: number;
  mobility: number;
  technique: number;
}

export interface Skin {
  id: string;
  name: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  image: string;      // Pfad zum Bild
  filter?: string;    // CSS-Filter für Farbvariante (optional)
}

export interface Brawler {
  id: string;
  name: string;
  title: string;
  description: string;
  role: 'Tank' | 'Assassin' | 'Support' | 'Controller' | 'Marksman';
  stats: BrawlerStats;
  compatibleWeapons: WeaponType[];
  skins: Skin[];
}
