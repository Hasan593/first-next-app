// pages/dashboard/layout.tsx

import React from 'react';
import Aside from '@/components/Dashboard/Aside';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-400 shadow-lg rounded-xl">
        {/* Render Children */}
        <div className="mt-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
