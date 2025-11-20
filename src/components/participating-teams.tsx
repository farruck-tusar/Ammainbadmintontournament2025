import { Users } from "lucide-react";

export function ParticipatingTeams() {
  const teams = [
    { city: "Gross-Gerau", name: "Team Eagles", player1: "Shaiful islam", player2: "Muhaiminur Rahman" },
    { city: "Bremen", name: "The Net Nomads", player1: "Md Sahin Sarker", player2: "Abdullah Hasan" },
    { city: "Duisburg", name: "DSC Kaiserberg", player1: "Humayun Kabir", player2: "Mohammed Kashem" },
    { city: "Bad Honnef", name: "RR STRIKERS", player1: "Mohammad Raisul ISLAM", player2: "Md Mushfiqur Rahman Raaz" },
    { city: "Giessen", name: "Giessen Flight Mode", player1: "Md Shajedur Hossain", player2: "Masud Alam" },
    { city: "Frankfurt", name: "Ace Mavericks", player1: "Md Rashedul islam nayem", player2: "Anik Rahman" },
    { city: "Frankfurt", name: "Shuttle Rockers", player1: "Fazley Rabbe", player2: "Hridoy Ahashan" },
    { city: "Mannheim", name: "BD Tigers", player1: "Niaz Habib", player2: "Abdur Rahman Munna" },
    { city: "Mannheim", name: "Team Injured", player1: "Foysal", player2: "Al Mamun" },
    { city: "Dieburg", name: "Dieburg Dynasty", player1: "Md. Saidur Rahman", player2: "Md. Abir Iqbal" },
    { city: "Bonn", name: "Bonn Warriors", player1: "Khan Rahat Al Rafe", player2: "Fakhrul Islam" },
    { city: "Stuttgart", name: "die PONKHI", player1: "Tanjim Rahman Tanim", player2: "Adnan Sadeque" },
    { city: "Bonn", name: "Wart3nz", player1: "Mushfiqur Rahman", player2: "Shahrier Erfan Harun" },
    { city: "Frankfurt", name: "Frankfurt Smashers", player1: "Md Rizwanul Islam", player2: "Md Abdus Samad" },
    { city: "Berlin & Dresden", name: "Team Thanos", player1: "Alif khan", player2: "MD Ashraful Islam" },
    { city: "Darmstadt", name: "Team DraGon", player1: "Md Kobir", player2: "Sowrav Shuvo" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8 text-emerald-600" />
        <h2 className="text-emerald-700">Participating Teams</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-5 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="text-emerald-600 text-xs uppercase tracking-wider mb-2">
              {team.city}
            </div>
            <div className="text-gray-900 uppercase tracking-wide mb-4 pb-3 border-b-2 border-emerald-300">
              {team.name}
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">•</span>
                <span>{team.player1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">•</span>
                <span>{team.player2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}