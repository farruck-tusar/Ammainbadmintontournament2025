import { Clock } from "lucide-react";

export function MatchSchedule() {
  const scheduleItems = [
    { stage: "Group Stage", time: "10:00 AM - 12:00 PM", color: "emerald" },
    { stage: "Quarter Finals", time: "1:00 PM - 1:30 PM", color: "teal" },
    { stage: "Semi Finals / Third Position", time: "2:00 PM - 3:00 PM", color: "cyan" },
    { stage: "Final", time: "3:00 PM - 4:00 PM", color: "amber" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <Clock className="w-8 h-8 text-emerald-600" />
        <h2 className="text-emerald-700">Match Schedule</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl p-6 border-2 border-${item.color}-200 hover:shadow-lg transition-shadow`}
          >
            <div className={`text-${item.color}-800 mb-2`}>{item.stage}</div>
            <div className="text-gray-700">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}