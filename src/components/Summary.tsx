import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryProps {
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
}

const GhanaCedisIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-600"
  >
    <path d="M12 3v18" />
    <path d="M5 7h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H5" />
  </svg>
);

const Summary: React.FC<SummaryProps> = ({ totalProfit, totalRevenue, totalExpenses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <div className="flex items-center">
          <GhanaCedisIcon />
          <h3 className="text-lg font-semibold text-blue-800 ml-2">Total Revenue</h3>
        </div>
        <p className="text-2xl font-bold text-blue-600 mt-2">₵{totalRevenue.toFixed(2)}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
        <div className="flex items-center">
          <TrendingDown className="text-red-600 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-red-800">Total Expenses</h3>
        </div>
        <p className="text-2xl font-bold text-red-600 mt-2">₵{totalExpenses.toFixed(2)}</p>
      </div>
      <div className={`${totalProfit >= 0 ? 'bg-green-100' : 'bg-red-100'} p-4 rounded-lg`}>
        <div className="flex items-center">
          <TrendingUp className={`${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'} mr-2`} size={24} />
          <h3 className={`text-lg font-semibold ${totalProfit >= 0 ? 'text-green-800' : 'text-red-800'}`}>Total Profit</h3>
        </div>
        <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'} mt-2`}>
          ₵{totalProfit.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Summary;