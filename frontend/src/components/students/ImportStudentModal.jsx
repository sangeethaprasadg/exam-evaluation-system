import { useState } from "react";

function ImportStudentModal({ open, onClose,onImportSuccess}) {
  const [file, setFile] = useState(null);

const handleImport = async () => {
  if (!file) {
    alert("Please select an Excel file.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(
      "http://localhost:3000/api/students/import",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

  alert(
  `${data.message}

Imported: ${data.imported}

Failed: ${data.failed.length}`
);

    if (response.ok) {
      onImportSuccess();
      onClose();
    }
  } catch (error) {
    console.error(error);
    alert("Import failed.");
  }
};

  if (!open) return null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Import Students
        </h2>

        <label className="block mb-2 font-medium">
          Choose Excel File
        </label>

        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
          className="w-full border rounded-lg p-2"
        />

        {file && (
          <p className="mt-3 text-green-600">
            Selected File: {file.name}
          </p>
        )}

        <div className="mt-6 flex justify-between">

          <button
            className="text-blue-600 hover:underline"
          >
            Download Sample Template
          </button>

          <div className="space-x-3">

            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

          
            <button
            onClick={handleImport}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
             >
            Import
           </button>


          </div>

        </div>

      </div>
    </div>
  );
}

export default ImportStudentModal;
