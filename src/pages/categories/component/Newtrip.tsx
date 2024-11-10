import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Newtrip = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('domestic');
  const [purpose, setPurpose] = useState('');
  const [flightType, setFlightType] = useState('one-way');
  const [departFrom, setDepartFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [budgetLimit, setBudgetLimit] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [hotel, setHotel] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      name,
      type,
      purpose,
      flightType,
      departFrom,
      destination,
      budgetLimit,
      departDate,
      returnDate,
      checkIn,
      checkOut,
      hotel
    });
  };

  return (
    <div className="py-5 px-15">
      <div className="flex-grow ml-64 py-5 rounded-2xl bg-black px-10">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-white mb-4">New Trip</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-gray-400 text-sm font-bold mb-2">
                Type
              </label>
              <div className="flex items- ">
                <input
                  type="radio"
                  id="domestic"
                  value="Domestic"
                  checked={type === 'Domestic'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="domestic" className="mr-4">
                  Domestic
                </label>
                <input
                  type="radio"
                  id="international"
                  value="International"
                  checked={type === 'International'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="international" className="mr-4">
                  International
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="purpose" className="block text-gray-400  text-sm font-bold mb-2">
                Purpose
              </label>
              <input
                type="text"
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="flightType" className="block text-gray-400 text-sm font-bold mb-2">
                Flight Type
              </label>
              <div className="flex items- ">
                <input
                  type="radio"
                  id="one-way"
                  value="One-way"
                  checked={type === 'One-way'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="one-way" className="mr-4">
                  One-way
                </label>
                <input
                  type="radio"
                  id="two-way"
                  value="Two-way"
                  checked={type === 'Two-way'}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="two-way" className="mr-4">
                  Two-way
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="departFrom" className="block text-gray-400 text-sm font-bold mb-2">
                Depart From
              </label>
              <input
                type="text"
                id="departFrom"
                value={departFrom}
                onChange={(e) => setDepartFrom(e.target.value)}
                className="shadow appearance-none   w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-gray-400 text-sm font-bold mb-2">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="budgetLimit" className="block text-gray-400 text-sm font-bold mb-2">
                Budget Limit
              </label>
              <input
                type="number"
                id="budgetLimit"
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(e.target.value)}
                className="shadow appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="departDate" className="block text-gray-400 text-sm font-bold mb-2">
                Depart Date
              </label>
              <input
                type="date"
                id="departDate"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="returnDate" className="block text-gray-400 text-sm font-bold mb-2">
                Return Date
              </label>
              <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="checkIn" className="block text-gray-400 text-sm font-bold mb-2">
                Check-in
              </label>
              <input
                type="date"
                id="checkIn"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="block text-gray-400 text-sm font-bold mb-2">
                Check-out
              </label>
              <input
                type="date"
                id="checkOut"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
            <div>
              <label htmlFor="hotel" className="block text-gray-400 text-sm font-bold mb-2">
                Hotel
              </label>
              <input
                type="text"
                id="hotel"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#282829' }}
              />
            </div>
          </div>
          <div className="mt-10 mb-5">
            <Link to="/" className="py-2 px-3 rounded-xl text-black font-semibold bg-cyan-400">
              Save draft
            </Link>
            <Link
              to="/"
              className="py-2 px-7 m-2 rounded-xl text-cyan-400 font-semibold"
              style={{ backgroundColor: '#141414' }}
            >
              Save
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newtrip;
