import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
};

export default function SubmitForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState<Partial<FormState>>({});

  const handleSubmit = () => {
    if (!form.name) return setError({ name: "Nama wajib diisi" });
    if (!form.email) return setError({ email: "Email wajib diisi" });

    // submit logic
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <input
          placeholder="Nama"
          className="border p-2 w-full mt-3 rounded-lg"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {error.name && <small className="text-red-500">{error.name}</small>}

        <input
          placeholder="No. Telepon"
          className="border p-2 w-full mt-3 rounded-lg"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full mt-3 rounded-lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {error.email && <small className="text-red-500">{error.email}</small>}

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 mt-3 rounded-lg w-full"
        >
          Kirim & Generate PDF
        </button>
      </div>
    </div>
  );
}
