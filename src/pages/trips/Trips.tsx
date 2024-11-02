import React from 'react';
import { FilterFilled, MenuOutlined, EllipsisOutlined, PlusOutlined,  } from '@ant-design/icons';
import { FaMoneyBillWave, FaStore, FaCalendarAlt, FaCheckCircle, FaInfoCircle,FaPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Expense: React.FC = () => {
    return (
        <div className="py-5 px-10">
            <div className="flex-grow ml-64 py-5 rounded-2xl bg-black px-10">
                <div className="flex mb-5 justify-between ">
                    <h2 className="font-semibold mt-5 text-2xl text-white">Trips</h2>
                <div className="flex mt-5 items-center">
                <Link to="/trips/newtrip" className="bg-cyan-400 rounded-sm m-2 items-center py-1 px-4 text-sm">
                 <PlusOutlined className="text-sm m-1" />
                New Trip</Link>
                <FilterFilled className="text-cyan-400 mr-4" />
                <MenuOutlined className="text-cyan-400  mr-4" />
                <EllipsisOutlined className="text-cyan-400 mr-4" />
                </div>         
                </div>
                <hr className='text-black' />
                <div className="mt-5">
                    <table className="w-full text-sm text-left">
                    <thead className="font-semibold text-gray-400 uppercase bg-black">
                            <tr className='rounded-xl'>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaInfoCircle className="inline-block mr-1 -mt-1" /> Details 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaStore className="inline-block mr-1 -mt-1" /> Catergoary 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaMoneyBillWave className="inline-block mr-1 -mt-1" /> Amount 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaCalendarAlt className="inline-block mr-1 -mt-1" /> Report Date 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaCheckCircle className="inline-block mr-1 -mt-1" /> Status 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaPlane className="inline-block mr-3" /> Capenhagen
                                </th>
                                <td className="px-6 py-4">
                                    Business Trip
                                </td>
                                <td className="px-6 py-4">
                                    €1000.00
                                </td>
                                <td className="px-6 py-4">
                                    20/07/2022
                                </td>
                                <td>
                                   <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Approved</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaPlane className="inline-block mr-3" />London
                                </th>
                                <td className="px-6 py-4">
                                    Client Pitch
                                </td>
                                <td className="px-6 py-4">
                                    €850.00
                                </td>
                                <td className="px-6 py-4">
                                    4/07/2022
                                </td>
                                <td>
                                   <span className='px-8 py-2 rounded-full text-sm' style={{ backgroundColor: '#8c2042'}} >Pending</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaPlane className="inline-block mr-3" />Brussels
                                </th>
                                <td className="px-6 py-4">
                                    Client Pitch
                                </td>
                                <td className="px-6 py-4">
                                    €1500.00
                                </td>
                                <td className="px-6 py-4">
                                    3/07/2022
                                </td>
                                <td>
                                <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Approved</span>
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaPlane className="inline-block mr-3" /> Barcelona
                                </th>
                                <td className="px-6 py-4">
                                    Conference
                                </td>
                                <td className="px-6 py-4">
                                    €2000.00
                                </td>
                                <td className="px-6 py-4">
                                    29/06/2022
                                </td>
                                <td>
                                   <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Approved</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaPlane className="inline-block mr-3" />Hamburg
                                </th>
                                <td className="px-6 py-4">
                                    Business Trip
                                </td>
                                <td className="px-6 py-4">
                                    €980.00
                                </td>
                                <td className="px-6 py-4">
                                    29/06/2022
                                </td>
                                <td> 
                                   <span className='px-3 py-2 rounded-full text-sm' style={{ backgroundColor: '#7d1420'}} >Not Approved</span> 
                                </td>
                            </tr>
                          </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expense;