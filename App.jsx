import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import NewPatient from './components/NewPatient';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-6">DentPro CRM</h1>
            <nav className="space-y-2">
              <Link to="/" className="block py-2 px-3 rounded hover:bg-blue-50">Dashboard</Link>
              <Link to="/patients" className="block py-2 px-3 rounded hover:bg-blue-50">Patients</Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/new" element={<NewPatient />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}