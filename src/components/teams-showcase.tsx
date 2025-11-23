import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Users } from "lucide-react";

export function TeamsShowcase() {
  const teams = [
    { 
      city: "Gross-Gerau", 
      name: "Team Eagles", 
      player1: "Shaiful islam", 
      player2: "Muhaiminur Rahman",
      teamPhoto: "/teams/eagles.jpg",
    },
    { 
      city: "Bremen", 
      name: "The Net Nomads", 
      player1: "Md Sahin Sarker", 
      player2: "Abdullah Hasan",
      teamPhoto: "/teams/nomad.jpg",
    },
    { 
      city: "Duisburg", 
      name: "DSC Kaiserberg", 
      player1: "Humayun Kabir", 
      player2: "Mohammed Kashem",
      teamPhoto: "/teams/dsc.jpg",
    },
    { 
      city: "Bad Honnef", 
      name: "RR STRIKERS", 
      player1: "Mohammad Raisul ISLAM", 
      player2: "Md Mushfiqur Rahman Raaz",
      teamPhoto: "/teams/strikers.jpg",
    },
    { 
      city: "Giessen", 
      name: "Giessen Flight Mode", 
      player1: "Md Shajedur Hossain", 
      player2: "Masud Alam",
      teamPhoto: "/teams/giessen.jpg",
    },
    { 
      city: "Frankfurt", 
      name: "Ace Mavericks", 
      player1: "Md Rashedul islam nayem", 
      player2: "Anik Rahman",
      teamPhoto: "/teams/ace.jpg",
    },
    { 
      city: "Frankfurt", 
      name: "Shuttle Rockers", 
      player1: "Fazley Rabbe", 
      player2: "Hridoy Ahashan",
      teamPhoto: "/teams/rockers.jpg",
    },
    { 
      city: "Mannheim", 
      name: "BD Tigers", 
      player1: "Niaz Habib", 
      player2: "Abdur Rahman Munna",
      teamPhoto: "/teams/tigers.jpg",
    },
    { 
      city: "Mannheim", 
      name: "Team Injured", 
      player1: "Foysal", 
      player2: "Al Mamun",
      teamPhoto: "/teams/injured.jpg",
    },
    { 
      city: "Dieburg", 
      name: "Dieburg Dynasty", 
      player1: "Md. Saidur Rahman", 
      player2: "Md. Abir Iqbal",
      teamPhoto: "/teams/dieburg.jpg",
    },
    { 
      city: "Bonn", 
      name: "Bonn Warriors", 
      player1: "Khan Rahat Al Rafe", 
      player2: "Fakhrul Islam",
      teamPhoto: "/teams/warriors.jpg",
    },
    { 
      city: "Stuttgart", 
      name: "die PONKHI", 
      player1: "Tanjim Rahman Tanim", 
      player2: "Adnan Sadeque",
      teamPhoto: "/teams/ponkhi.jpg",
    },
    { 
      city: "Bonn", 
      name: "Wart3nz", 
      player1: "Mushfiqur Rahman", 
      player2: "Shahrier Erfan Harun",
      teamPhoto: "/teams/wartenz.jpg",
    },
    { 
      city: "Frankfurt", 
      name: "Frankfurt Smashers", 
      player1: "Md Rizwanul Islam", 
      player2: "Md Abdus Samad",
      teamPhoto: "/teams/smashers.jpg",
    },
    { 
      city: "Berlin & Dresden", 
      name: "Team Thanos", 
      player1: "Alif khan", 
      player2: "MD Ashraful Islam",
      teamPhoto: "/teams/thanos.jpg",
    },
    { 
      city: "Darmstadt", 
      name: "Team DraGon", 
      player1: "Md Kobir", 
      player2: "Sowrav Shuvo",
      teamPhoto: "/teams/dragon.jpg",
    },
  ];

   return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8 text-emerald-600" />
        <h2 className="text-emerald-700">Participating Teams</h2>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all"
          >
            {/* Team Photo */}
            <div className="mb-3">
              <ImageWithFallback
                src={team.teamPhoto}
                alt={team.name}
                className="w-full aspect-square rounded-lg object-cover border-2 border-emerald-300"
              />
            </div>
            
            {/* Team Info */}
                <div className="text-center">
                <div className="text-emerald-600 text-xs uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <MapPin size={12} className="text-emerald-600" />
                {team.city}
                </div>

                {/* Team Name Bold */}
                <div className="text-gray-900 uppercase tracking-wide pb-3 border-b-2 border-emerald-300">
                {team.name}
                </div>

                {/* Numbered Players */}
                <div className="mt-2 text-center space-y-1 pb-3">
                    <div className="text-sm text-gray-700 font-medium">
                    <span className="text-emerald-600 mt-0.5">•</span> {team.player1}
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                    <span className="text-emerald-600 mt-0.5">•</span> {team.player2}
                    </div>
                </div>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
}