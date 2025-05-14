import { useState } from 'react';
import vocabJson from "../data/vocab.json";
import { VocabData, WordItem } from '../../type';

const data: VocabData = vocabJson;

export default function VocabTabs() {
  const weeks = Object.keys(data);
  const [selectedWeek, setSelectedWeek] = useState<string>(weeks[0]);

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {weeks.map((week) => (
          <button
            key={week}
            onClick={() => setSelectedWeek(week)}
            className={`px-4 py-2 rounded text-sm font-medium ${
              selectedWeek === week ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {week.replace('_', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="px-4 py-2 border">No.</th>
              <th className="px-4 py-2 border">English</th>
              <th className="px-4 py-2 border">Class</th>
              <th className="px-4 py-2 border">Burmese</th>
              <th className="px-4 py-2 border">Pronunciation</th>
              <th className="px-4 py-2 border">Audio</th>
            </tr>
          </thead>
          <tbody>
            {data[selectedWeek].map((word: WordItem, index: number) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2 text-right">{index + 1}.</td>
                <td className="border px-4 py-2">{word.english}</td>
                <td className="border px-4 py-2 capitalize">{word.wordClass}</td>
                <td className="border px-4 py-2">{word.burmese}</td>
                <td className="border px-4 py-2">{word.pronounciation}</td>
                <td className="border px-4 py-2">
                <button
                  onClick={() => {
                    const audio = new Audio(word.audio);
                    audio.play();
                  }}
                  className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 text-sm rounded focus:outline-none focus:ring"
                  aria-label="Play Audio"
                >
                  ▶️
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
