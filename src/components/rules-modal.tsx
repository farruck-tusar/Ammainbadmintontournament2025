import { X } from "lucide-react";
import { useEffect } from "react";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RulesModal({ isOpen, onClose }: RulesModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 flex items-center justify-between">
          <h2>Rules & Regulations</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-88px)] p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-8">
              This rulebook provides a comprehensive overview of the rules and regulations. 
              It is intended for players, umpires, and anyone interested in understanding 
              the Am Main Badminton Tournament 2025 better. Get ready for an electrifying 
              day of shuttles, smashes, and sportsmanship!
            </p>

            {/* 1. Event Details */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">1. Event Details & Location</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Date:</strong> Saturday, 29th November 2025</li>
                <li><strong>Venue:</strong> Liesel-Oestreicher-Schule</li>
                <li><strong>Address:</strong> Boskoopstraße 6, 60435 Frankfurt am Main</li>
              </ul>
            </section>

            {/* 2. Match Format */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">2. Match Format & Duration</h3>
              <p className="text-gray-700 mb-4">
                Each match is timed to ensure a smooth and exciting tournament flow.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Group Stage Matches:</strong> 15 minutes</li>
                <li><strong>Quarter Finals:</strong> 20 minutes</li>
                <li><strong>Semi Finals:</strong> 45 minutes</li>
                <li><strong>Final:</strong> 45 minutes</li>
              </ul>
              <p className="text-gray-700 mt-4 italic">
                Matches run on continuous time - no extra time.
              </p>
            </section>

            {/* 3. Group Stage */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">3. Group Stage</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="text-emerald-800 mb-2">Teams & Groups</h4>
                  <p className="text-gray-700">
                    16 teams divided into 4 groups (A, B, C, D). Each group has 4 teams.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="text-teal-800 mb-2">Round Robin Format</h4>
                  <p className="text-gray-700">
                    Each team plays three matches decided by a single set.
                  </p>
                </div>

                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="text-cyan-800 mb-2">Qualification</h4>
                  <p className="text-gray-700">
                    Top 2 teams from each group qualify for the knockouts.
                  </p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="text-emerald-800 mb-2">Ranking Criteria</h4>
                  <ol className="text-gray-700 space-y-1">
                    <li>1. Total Win</li>
                    <li>2. Points Difference (Points Won - Points Lost)</li>
                    <li>3. Head-to-Head Result</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 4. Knockout Stage */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">4. Knockout Stage</h3>
              
              <div className="mb-6">
                <h4 className="text-teal-700 mb-3">Quarter Finals & Third Place</h4>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-2"><strong>Matchups:</strong></p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Q1: A1 vs C2</li>
                    <li>Q2: A2 vs C1</li>
                    <li>Q3: B1 vs D2</li>
                    <li>Q4: B2 vs D1</li>
                  </ul>
                </div>

                <ul className="space-y-2 text-gray-700">
                  <li>• Single set to 21 points</li>
                  <li>• At 20-20, must win by 2 points</li>
                  <li>• At 29-29, golden point at 30-29</li>
                </ul>
              </div>

              <div>
                <h4 className="text-teal-700 mb-3">Semi Finals & Final</h4>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-2"><strong>Matchups:</strong></p>
                  <ul className="space-y-1 text-gray-700">
                    <li>Semi Final 1: Q1 vs Q3</li>
                    <li>Semi Final 2: Q2 vs Q4</li>
                  </ul>
                </div>

                <ul className="space-y-2 text-gray-700">
                  <li>• Best of 3 sets</li>
                  <li>• Each set to 21 points</li>
                  <li>• At 20-20, must win by 2 points</li>
                  <li>• At 29-29, golden point at 30-29</li>
                  <li>• First to win 2 sets advances</li>
                </ul>
              </div>
            </section>

            {/* 5. Court Allocation */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">5. Court Allocation & Timeliness</h3>
              <p className="text-gray-700 mb-4">
                Stay organised and on schedule with our court assignments.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="text-emerald-800 mb-2">Dedicated Courts</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Group A - Court 1</li>
                    <li>Group B - Court 2</li>
                    <li>Group C - Court 3</li>
                    <li>Group D - Court 4</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm">
                    All group-stage matches for each group must be played on their assigned court.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                  <h4 className="text-amber-900 mb-2">Punctuality is Key</h4>
                  <p className="text-gray-700">
                    Teams must report to their designated court <strong>3 minutes before match time</strong>.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Arriving more than 3 minutes late will result in a <strong>walkover for the opponent</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Shuttlecock Rules */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">6. Shuttlecock Rules</h3>
              <p className="text-gray-700 mb-4">
                Know your shuttles! Fair play and consistent equipment are essential.
              </p>

              <div className="space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="text-teal-800 mb-2">Group Stage, Quarter Finals & Third Place</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Organisers provides 1 shuttle per match. If more are needed, teams must use their own personal shuttles.</li>
                    <li>• Personal shuttles must be standard tournament speed (77/78).</li>
                    <li>• Referee's decision is final on shuttle speed disputes.</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-lg p-4">
                  <h4 className="text-cyan-800 mb-2">Semi Finals & Final</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Organisers provides 3 shuttles per match. If more are needed, teams must use their own personal shuttles, approved by the referee.</li>
                    <li>• Damaged shuttles must be replaced from provided stock or personal stock if all 3 are used.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Official Rules */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">7. Official Rules & Conduct</h3>
              <p className="text-gray-700 mb-4">
                Adherence to BWF rules and good sportsmanship are expected.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="text-emerald-800 mb-2">BWF Official Rules</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Service faults</li>
                    <li>• Net faults</li>
                    <li>• Body/Clothing touches</li>
                    <li>• Double hits</li>
                    <li>• Line calls</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm">
                    Repeated disputes will be resolved by the referee, whose decision is final.
                  </p>
                  <p className="text-gray-700 mt-2 text-sm">
                    <strong>Note:</strong> You can see all rules of BWF by visiting{" "}
                    <a 
                      href="https://bwf.sport/the-official-rules/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      BWF Official Rules
                    </a>.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="text-teal-800 mb-2">Player & Team Rules</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Each team must have 2 fixed players.</li>
                    <li>• No substitutions.</li>
                    <li>• If injured player unable to continue - opponent wins.</li>
                    <li>• Players must wear indoor shoes.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Media Consent */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">8. Media Consent</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Players agree to appear in tournament photos/videos.</li>
                <li>• Organisers may use images for promotional purposes.</li>
              </ul>
            </section>

            {/* 9. Discipline */}
            <section className="mb-8">
              <h3 className="text-emerald-700 mb-4">9. Discipline</h3>
              <p className="text-gray-700 mb-4">
                Fair play and respect are paramount for a great tournament experience.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                  <h4 className="text-orange-900 mb-2">Discipline Protocol</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>1st Warning: Verbal</li>
                    <li>2nd Warning: Point deduction</li>
                    <li>3rd Warning: Disqualification</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <h4 className="text-red-900 mb-2">Zero Tolerance</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Abusive language or disrespect towards officials/players results in immediate penalty</li>
                    <li>• Referee's decision is final</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
              <p className="text-gray-800">
                Thank you for your participation and cooperation! Let's make this tournament a memorable one!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
