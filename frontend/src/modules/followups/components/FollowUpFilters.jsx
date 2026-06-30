import { Search, RotateCcw, Download } from "lucide-react";

function FollowUpFilters({
  search,
  setSearch,
  batch,
  setBatch,
  program,
  setProgram,
  trigger,
  setTrigger,
}) {
  const handleReset = () => {
    setSearch("");
    setBatch("All Batches");
    setProgram("All Programs");
    setTrigger("All Triggers");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-8">

      {/* Top Row */}

      <div className="flex flex-col xl:flex-row gap-4 mb-4">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button
            onClick={handleReset}
            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-100 transition"
          >
            <RotateCcw size={18} />
            Reset
          </button>

          <button
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 transition"
          >
            <Download size={18} />
            Export
          </button>

        </div>

      </div>

      {/* Bottom Row */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <select
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5"
        >
          <option>All Batches</option>
          <option>5305</option>
          <option>5306</option>
          <option>5307</option>
        </select>

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5"
        >
          <option>All Programs</option>
          <option>Bounce Back 1</option>
          <option>Bounce Back 2</option>
        </select>

        <select
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5"
        >
          <option>All Triggers</option>
          <option>Missed Last 3 Tests</option>
          <option>No One-on-One for 15 Days</option>
          <option>Inactive for 15 Days</option>
        </select>

      </div>

    </div>
  );
}

export default FollowUpFilters;
