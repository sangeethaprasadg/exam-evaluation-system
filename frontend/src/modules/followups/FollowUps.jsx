import { useState } from "react";

import FollowUpStats from "./components/FollowUpStats";
import FollowUpTabs from "./components/FollowUpTabs";
import FollowUpFilters from "./components/FollowUpFilters";
import FollowUpTable from "./components/FollowUpTable";
import FollowUpModal from "./FollowUpModal";

import { followUps } from "./followUpData";

function FollowUps() {
  const [selectedFollowUp, setSelectedFollowUp] = useState(null);

  const [activeTab, setActiveTab] = useState("Today");

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [program, setProgram] = useState("All Programs");
  const [trigger, setTrigger] = useState("All Triggers");

  const filteredFollowUps = followUps.filter((item) => {
    const matchesSearch =
      item.studentName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.rollNo.includes(search);

    const matchesBatch =
      batch === "All Batches" ||
      item.batch === batch;

    const matchesProgram =
      program === "All Programs" ||
      item.program === program;

    const matchesTrigger =
      trigger === "All Triggers" ||
      item.triggerType === trigger;

    const matchesTab =
      activeTab === "Today"
        ? item.status === "Pending"
        : activeTab === "Upcoming"
        ? item.status === "Upcoming"
        : activeTab === "Completed"
        ? item.status === "Completed"
        : item.status === "Critical";

    return (
      matchesSearch &&
      matchesBatch &&
      matchesProgram &&
      matchesTrigger &&
      matchesTab
    );
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Follow-ups
        </h1>

        <p className="text-gray-500 mt-2">
          Track inactive students and record follow-up activities.
        </p>

      </div>

      {/* Statistics */}

      <FollowUpStats />

      {/* Tabs */}

      <FollowUpTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Filters */}

      <FollowUpFilters
        search={search}
        setSearch={setSearch}
        batch={batch}
        setBatch={setBatch}
        program={program}
        setProgram={setProgram}
        trigger={trigger}
        setTrigger={setTrigger}
      />

      {/* Table */}

      <FollowUpTable
        followUps={filteredFollowUps}
        onSelectFollowUp={setSelectedFollowUp}
      />

      {/* Modal */}

      <FollowUpModal
        followUp={selectedFollowUp}
        onClose={() => setSelectedFollowUp(null)}
      />

    </div>
  );
}

export default FollowUps;
