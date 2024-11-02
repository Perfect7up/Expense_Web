import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewExpenseForm = () => {
  const [subject, setSubject] = useState('');
  const [merchant, setMerchant] = useState('');
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');
  const [currency, setCurrency] = useState('');
  const [reimbursable, setReimbursable] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [employee, setEmployee] = useState('');
  const [addToReport, setAddToReport] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with values:', {
      subject,
      merchant,
      date,
      total,
      currency,
      reimbursable,
      category,
      description,
      employee,
      addToReport,
    });
  };

  return (
    <div className="py-5 px-10">
        <div className="flex-grow ml-64 py-5 rounded-2xl bg-black px-10">
        <h2 className="text-2xl font-bold text-white mb-4">New expense</h2>
            <form onSubmit={handleSubmit} className="px-2 py-2 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label htmlFor="subject" className="block text-white text-sm font-bold mb-2">
                    Subject*
                </label>
                <input
                    type="text"
                    id="subject"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="merchant" className="block text-white text-sm font-bold mb-2">
                    Merchant*
                </label>
                <input
                    type="text"
                    id="merchant"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"  style={{backgroundColor: '#282829'}}
                    value={merchant}
                    onChange={(e) => setMerchant(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="date" className="block text-white text-sm font-bold mb-2">
                    Date*
                </label>
                <input
                    type="date"
                    id="date"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="total" className="block text-white text-sm font-bold mb-2">
                    Total*
                </label>
                <input
                    type="number"
                    id="total"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="currency" className="block text-white text-sm font-bold mb-2">
                    Currency*
                </label>
                <select
                    id="currency"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <option value="">Select currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                </div>
                <div>
                <label htmlFor="reimbursable" className="block text-white text-sm font-bold mb-2">
                    Reimbursable
                </label>
                <input
                    type="checkbox"
                    id="reimbursable"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    checked={reimbursable}
                    onChange={(e) => setReimbursable(e.target.checked)}
                />
                </div>
                <div>
                <label htmlFor="category" className="block text-white text-sm font-bold mb-2">
                    Category*
                </label>
                <select
                    id="category"
                    className="shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Accommodation">Accommodation</option>
                </select>
                </div>
                <div>
                <label htmlFor="description" className="block text-white text-sm font-bold mb-2">
                    Description
                </label>
                <textarea
                    id="description"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="employee" className="block text-white text-sm font-bold mb-2">
                    Employee*
                </label>
                <select
                    id="employee"
                    className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" style={{backgroundColor: '#282829'}}
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                >
                    <option value="">Select employee</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Doe">Jane Doe</option>
                </select>
                </div>
                <div>
                <label htmlFor="addToReport" className="block text-white text-sm font-bold mb-2">
                    Add to report
                </label>
                <input
                    type="checkbox"
                    id="addToReport"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    checked={addToReport}
                    onChange={(e) => setAddToReport(e.target.checked)}
                />
                </div>
            </div>
            <div className="mt-10 mb-5">
            <Link to="/" className='py-2 px-3 rounded-xl text-black font-semibold bg-cyan-400'>Save draft
            </Link>
            <Link to="/" className='py-2 px-7 m-2 rounded-xl text-cyan-400 font-semibold' style={{backgroundColor: '#141414'}}>Save
            </Link>
            </div>
            </form>
        </div>
    </div>
  );
};

export default NewExpenseForm;