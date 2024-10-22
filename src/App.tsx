import React, { useState, useEffect } from 'react';
import { PlusCircle, MinusCircle, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import SalesForm from './components/SalesForm';
import SalesList from './components/SalesList';
import Summary from './components/Summary';
import { Sale } from './types';

function App() {
  const [sales, setSales] = useState<Sale[]>(() => {
    const savedSales = localStorage.getItem('sales');
    return savedSales ? JSON.parse(savedSales) : [];
  });

  useEffect(() => {
    localStorage.setItem('sales', JSON.stringify(sales));
  }, [sales]);

  const addSale = (sale: Sale) => {
    setSales([...sales, sale]);
  };

  const removeSale = (index: number) => {
    setSales(sales.filter((_, i) => i !== index));
  };

  const totalProfit = sales.reduce((sum, sale) => sum + sale.profit, 0);
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.revenue, 0);
  const totalExpenses = sales.reduce((sum, sale) => sum + sale.expenses, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Daily Sales Tracker</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Sale</h2>
            <SalesForm onSubmit={addSale} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Summary</h2>
            <Summary totalProfit={totalProfit} totalRevenue={totalRevenue} totalExpenses={totalExpenses} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales List</h2>
            <SalesList sales={sales} onRemove={removeSale} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;