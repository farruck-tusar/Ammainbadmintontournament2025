import { CountdownTimer } from "./components/countdown-timer";
import { TournamentStructure } from "./components/tournament-structure";
import { MatchSchedule } from "./components/match-schedule";
import { CourtAllocation } from "./components/court-allocation";
import { TeamsShowcase } from "./components/teams-showcase";
import { RulesModal } from "./components/rules-modal";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export default function App() {
  // November 29, 2025 10:00 AM Frankfurt time (CET is UTC+1)
  const tournamentDate = new Date("2025-11-29T10:00:00+01:00");
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-8 border-emerald-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-96 h-96 border-8 border-teal-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 border-8 border-cyan-600 rounded-full"></div>
        
        {/* Net pattern */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="net" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" className="text-emerald-600"/>
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-emerald-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net)" />
        </svg>
      </div>

      {/* Shuttlecock decorations */}
      <div className="fixed top-32 right-10 opacity-10 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="8" fill="#059669"/>
          <path d="M60 60 L60 20 L45 30 L60 60" fill="#10b981" opacity="0.7"/>
          <path d="M60 60 L60 20 L75 30 L60 60" fill="#10b981" opacity="0.7"/>
          <path d="M60 60 L45 30 L52 15 L60 60" fill="#34d399" opacity="0.6"/>
          <path d="M60 60 L75 30 L68 15 L60 60" fill="#34d399" opacity="0.6"/>
          <path d="M60 60 L52 15 L60 10 L60 60" fill="#6ee7b7" opacity="0.5"/>
          <path d="M60 60 L68 15 L60 10 L60 60" fill="#6ee7b7" opacity="0.5"/>
        </svg>
      </div>

      <div className="fixed bottom-20 left-10 opacity-10 pointer-events-none transform rotate-45">
        <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="8" fill="#0891b2"/>
          <path d="M60 60 L60 20 L45 30 L60 60" fill="#06b6d4" opacity="0.7"/>
          <path d="M60 60 L60 20 L75 30 L60 60" fill="#06b6d4" opacity="0.7"/>
          <path d="M60 60 L45 30 L52 15 L60 60" fill="#22d3ee" opacity="0.6"/>
          <path d="M60 60 L75 30 L68 15 L60 60" fill="#22d3ee" opacity="0.6"/>
        </svg>
      </div>

      <div className="fixed top-1/2 right-1/4 opacity-10 pointer-events-none transform -rotate-12">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="8" fill="#f59e0b"/>
          <path d="M60 60 L60 20 L45 30 L60 60" fill="#fbbf24" opacity="0.7"/>
          <path d="M60 60 L60 20 L75 30 L60 60" fill="#fbbf24" opacity="0.7"/>
          <path d="M60 60 L45 30 L52 15 L60 60" fill="#fcd34d" opacity="0.6"/>
          <path d="M60 60 L75 30 L68 15 L60 60" fill="#fcd34d" opacity="0.6"/>
        </svg>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 px-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Badminton rackets decoration */}
        <div className="absolute top-4 left-4 opacity-20">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="20" rx="18" ry="22" stroke="white" strokeWidth="3" fill="none"/>
            <line x1="30" y1="42" x2="30" y2="75" stroke="white" strokeWidth="3"/>
            <circle cx="30" cy="20" r="15" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
            <line x1="15" y1="20" x2="45" y2="20" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="30" y1="5" x2="30" y2="35" stroke="white" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="absolute top-4 right-4 opacity-20 transform scale-x-[-1]">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="20" rx="18" ry="22" stroke="white" strokeWidth="3" fill="none"/>
            <line x1="30" y1="42" x2="30" y2="75" stroke="white" strokeWidth="3"/>
            <circle cx="30" cy="20" r="15" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
            <line x1="15" y1="20" x2="45" y2="20" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="30" y1="5" x2="30" y2="35" stroke="white" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-3 text-emerald-100 tracking-wide uppercase text-sm">
            SV Tigers Am Main presents
          </div>
          <h1 className="text-center mb-6 text-5xl md:text-6xl lg:text-7xl">
            Am Main Badminton Tournament 2025
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Saturday, 29th November 2025</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Liesel-Oestreicher-Schule, Boskoopstraße 6, Frankfurt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <CountdownTimer targetDate={tournamentDate} />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 relative z-10">
        <TournamentStructure onViewRules={() => setIsRulesModalOpen(true)} />
        <MatchSchedule />
        <CourtAllocation />
        <TeamsShowcase />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-8 px-6 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerNet" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="30" y2="0" stroke="white" strokeWidth="1"/>
                <line x1="0" y1="0" x2="0" y2="30" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerNet)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p>Am Main Badminton Tournament 2025 • Follow us on Facebook</p>
        </div>
      </footer>

      {/* Rules Modal */}
      <RulesModal isOpen={isRulesModalOpen} onClose={() => setIsRulesModalOpen(false)} />
    </div>
  );
}