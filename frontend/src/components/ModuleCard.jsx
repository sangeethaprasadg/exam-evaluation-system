function ModuleCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md h-28 flex items-center justify-center text-xl font-semibold text-gray-700 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {title}

    </div>
  );
}

export default ModuleCard;