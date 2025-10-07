import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Patients() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', phone: '555-222-9000', nextAppointment: 'Oct 10, 9:30 AM' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', phone: '', nextAppointment: '' });

  const addPatient = () => {
    if (!newPatient.name) return;
    setPatients([...patients, { id: uuidv4(), ...newPatient }]);
    setShowModal(false);
    setNewPatient({ name: '', phone: '', nextAppointment: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Patients</h2>
        <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded">+ New Patient</button>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-blue-50 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Next Appointment</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.phone}</td>
              <td className="p-3">{p.nextAppointment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg w-96 p-6">
            <h3 className="text-lg font-semibold mb-4">Add New Patient</h3>
            <input type="text" placeholder="Full Name" value={newPatient.name} onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })} className="border w-full mb-3 p-2 rounded" />
            <input type="text" placeholder="Phone Number" value={newPatient.phone} onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })} className="border w-full mb-3 p-2 rounded" />
            <input type="text" placeholder="Next Appointment" value={newPatient.nextAppointment} onChange={(e) => setNewPatient({ ...newPatient, nextAppointment: e.target.value })} className="border w-full mb-3 p-2 rounded" />
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-3 py-2 rounded border">Cancel</button>
              <button onClick={addPatient} className="px-3 py-2 rounded bg-blue-600 text-white">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}