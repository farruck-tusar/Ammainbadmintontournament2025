import { Trophy, Users, Zap, Clock, Target } from "lucide-react";

interface TournamentStructureProps {
  onViewRules: () => void;
}

export function TournamentStructure({ onViewRules }: TournamentStructureProps) {
  return (
    <div className="space-y-8">
      {/* Match Format & Duration */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-8 h-8 text-emerald-600" />
          <h2 className="text-emerald-700">Match Format & Duration</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          Each match is timed to ensure a smooth and exciting tournament flow.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border-2 border-emerald-200">
            <div className="text-emerald-800 mb-2">Group Stage Matches</div>
            <div className="text-3xl text-emerald-600">15 min</div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border-2 border-teal-200">
            <div className="text-teal-800 mb-2">Quarter Finals</div>
            <div className="text-3xl text-teal-600">20 min</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-5 border-2 border-cyan-200">
            <div className="text-cyan-800 mb-2">Semi Finals</div>
            <div className="text-3xl text-cyan-600">45 min</div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border-2 border-amber-200">
            <div className="text-amber-800 mb-2">Final</div>
            <div className="text-3xl text-amber-600">45 min</div>
          </div>
        </div>
      </div>

      {/* Tournament Structure */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="mb-8 text-emerald-700">Tournament Structure</h2>
        
        <div className="space-y-8">
          {/* Group Stage */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-7 h-7 text-emerald-600" />
              <h3 className="text-emerald-800">Group Stage</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
                <div className="text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <span>Teams & Groups</span>
                </div>
                <p className="text-gray-700 text-sm">
                  16 teams divided into 4 groups (A, B, C, D). Each group has 4 teams.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
                <div className="text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  <span>Round Robin Format</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Each team plays three matches decided by a single set.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
                <div className="text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  <span>Qualification</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Top 2 teams from each group qualify for the knockouts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
                <div className="text-emerald-700 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  <span>Ranking Criteria</span>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>1. Total Win</li>
                  <li>2. Points Difference</li>
                  <li>3. Head-to-Head</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Knockout Stage */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-7 h-7 text-amber-600" />
              <h3 className="text-amber-800">Knockout Stage</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Quarter Finals */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                <div className="text-amber-800 mb-4">Quarter Finals & Third Place</div>
                
                <div className="space-y-3 mb-4">
                  <div className="text-sm text-gray-700">
                    <span className="text-amber-600">Matchups:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white p-2 rounded border border-amber-200">Q1: A1 vs C2</div>
                    <div className="bg-white p-2 rounded border border-amber-200">Q2: A2 vs C1</div>
                    <div className="bg-white p-2 rounded border border-amber-200">Q3: B1 vs D2</div>
                    <div className="bg-white p-2 rounded border border-amber-200">Q4: B2 vs D1</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Single set to 21 points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>At 20-20, must win by 2 points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>At 29-29, golden point at 30-29</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Semi Finals & Final */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-purple-800 mb-4">Semi Finals & Final</div>
                
                <div className="space-y-3 mb-4">
                  <div className="text-sm text-gray-700">
                    <span className="text-purple-600">Matchups:</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="bg-white p-2 rounded border border-purple-200">Semi Final 1: Q1 vs Q3</div>
                    <div className="bg-white p-2 rounded border border-purple-200">Semi Final 2: Q2 vs Q4</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Best of 3 sets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Each set to 21 points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>At 20-20, must win by 2 points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>At 29-29, golden point at 30-29</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>First to win 2 sets advances</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={onViewRules}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            View Full Rules
          </button>
        </div>
      </div>
    </div>
  );
}