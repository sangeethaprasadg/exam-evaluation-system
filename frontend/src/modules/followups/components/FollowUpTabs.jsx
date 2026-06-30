function FollowUpTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "Today",
      label: "🔵 Today's",
      count: 18,
    },
    {
      id: "Upcoming",
      label: "🟡 Upcoming",
      count: 12,
    },
    {
      id: "Completed",
      label: "🟢 Completed",
      count: 145,
    },
    {
      id: "Critical",
      label: "🔴 Critical",
      count: 6,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 mb-6">

      <div className="flex flex-wrap gap-3">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 rounded-xl font-medium transition ${
              activeTab === tab.id
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {tab.label}

            <span className="ml-2 font-bold">
              ({tab.count})
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}

export default FollowUpTabs;
