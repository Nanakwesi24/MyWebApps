import React, { useState } from 'react';
import { Sale } from '../types';

interface SalesFormProps {
  onSubmit: (sale: Sale) => void;
}

const SalesForm: React.FC<SalesFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [revenue, setRevenue] = useState('');
  const [expenses, setExpenses] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const revenueNum = parseFloat(revenue);
    const expensesNum = parseFloat(expenses);
    const profit = revenueNum - expensesNum;
    onSubmit({ date, revenue: revenueNum, expenses: expensesNum, profit });
    setDate('');
    setRevenue('');
    setExpenses('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="revenue" className="block text-sm font-medium text-gray-700">Revenue</label>
        <input
          type="number"
          id="revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="expenses" className="block text-sm font-medium text-gray-700">Expenses</label>
        <input
          type="number"
          id="expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Sale
      </button>
    </form>
  );
};

export default SalesForm;