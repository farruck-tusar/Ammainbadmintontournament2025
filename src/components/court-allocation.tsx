import { MapPin } from "lucide-react";

export function CourtAllocation() {
  const courts = [
    { 
      number: 1, 
      group: "A", 
      color: "emerald",
      teams: ["Team Eagles", "Giessen Flight Mode", "die PONKHI", "The Net Nomads"]
    },
    { 
      number: 2, 
      group: "B", 
      color: "amber",
      teams: ["Team DraGon", "DSC Kaiserberg", "Ace Mavericks", "Wart3nz"]
    },
    { 
      number: 3, 
      group: "C", 
      color: "yellow",
      teams: ["RR STRIKERS", "Team Thanos", "BD Tigers", "Team Injured"]
    },
    { 
      number: 4, 
      group: "D", 
      color: "yellow",
      teams: ["Shuttle Rockers", "Dieburg Dynasty", "Bonn Warriors", "Frankfurt Smashers"]
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          bg: "bg-gradient-to-br from-emerald-600 to-emerald-700",
          header: "bg-emerald-700",
          teamBg: "bg-white/95"
        };
      case "amber":
        return {
          bg: "bg-gradient-to-br from-amber-500 to-amber-600",
          header: "bg-amber-600",
          teamBg: "bg-white/95"
        };
      case "yellow":
        return {
          bg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
          header: "bg-yellow-500",
          teamBg: "bg-white/95"
        };
      default:
        return {
          bg: "bg-gradient-to-br from-teal-500 to-teal-600",
          header: "bg-teal-600",
          teamBg: "bg-white/95"
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <MapPin className="w-8 h-8 text-emerald-600" />
        <h2 className="text-emerald-700">Court Allocation</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courts.map((court) => {
          const colors = getColorClasses(court.color);
          return (
            <div
              key={court.number}
              className={`${colors.bg} rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
            >
              <div className={`${colors.header} text-white p-4 text-center`}>
                <div className="text-2xl mb-1">Court {court.number}</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="uppercase tracking-wider text-sm">Group {court.group}</span>
                  <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-sm">
                    4
                  </div>
                </div>
              </div>
              <div className={`${colors.teamBg} p-4`}>
                <ul className="space-y-2">
                  {court.teams.map((team, idx) => (
                    <li key={idx} className="text-gray-800 text-sm py-1.5 px-2 bg-white rounded border border-gray-200">
                      {team}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}