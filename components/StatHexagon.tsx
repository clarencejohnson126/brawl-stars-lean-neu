import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { BrawlerStats } from '../types';

interface StatHexagonProps {
  stats: BrawlerStats;
}

const StatHexagon: React.FC<StatHexagonProps> = ({ stats }) => {
  const data = [
    { subject: 'OFF', A: stats.offense, fullMark: 100 },
    { subject: 'DEF', A: stats.defense, fullMark: 100 },
    { subject: 'UTL', A: stats.utility, fullMark: 100 },
    { subject: 'MOB', A: stats.mobility, fullMark: 100 },
    { subject: 'TEC', A: stats.technique, fullMark: 100 },
  ];

  return (
    <div className="w-full h-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#4ade80', fontSize: 12, fontFamily: 'Orbitron', fontWeight: 'bold' }} 
          />
          <Radar
            name="Stats"
            dataKey="A"
            stroke="#4ade80"
            strokeWidth={2}
            fill="#4ade80"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full blur-md opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default StatHexagon;
