import React from 'react';
export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded">Total Patients: 124</div>
        <div className="bg-white shadow p-4 rounded">Appointments Today: 8</div>
        <div className="bg-white shadow p-4 rounded">Pending Invoices: 5</div>
        <div className="bg-white shadow p-4 rounded">Monthly Revenue: $8,420</div>
      </div>
    </div>
  );
}