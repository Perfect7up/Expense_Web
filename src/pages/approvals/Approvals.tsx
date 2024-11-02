import React from 'react';
import { FilterFilled, MenuOutlined, EllipsisOutlined  } from '@ant-design/icons';
import { FaMoneyBillWave, FaStore, FaCog , FaCheckCircle, FaEye, FaCheck, FaUser, FaTimes } from 'react-icons/fa';

const Expense: React.FC = () => {
    return (
        <div className="py-5 px-10">
            <div className="flex-grow ml-64 py-5 rounded-2xl bg-black px-10">
                <div className="flex mb-5 justify-between ">
                    <h2 className="font-semibold mt-5 text-2xl text-white">Approvals</h2>
                <div className="flex mt-5 items-center">
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
                                    <FaUser className="inline-block mr-1 -mt-1" />Owner
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaStore className="inline-block mr-1 -mt-1" /> Catergoary 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaMoneyBillWave className="inline-block mr-1 -mt-1" /> Amount 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaCog  className="inline-block mr-1 -mt-1" /> Freqeuncy 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaCheckCircle className="inline-block mr-1 -mt-1" /> Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaUser className="inline-block mr-3" /> Samson Zap
                                </th>
                                <td className="px-6 py-4">
                                <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Engineer</span> 
                                </td>
                                <td className="px-6 py-4">
                                    €1000.00
                                </td>
                                <td className="px-10 py-4">
                                    Once
                                </td>
                                <td className='px-6 py-4'>
                                <FaEye className="inline-block mr-3" />
                                <FaCheck className="inline-block mr-3" />
                                <FaTimes className="inline-block mr-3" />
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaUser className="inline-block mr-3" /> Vardy                                </th>
                                <td className="px-6 py-4">
                                <span className='px-10 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Client</span> 
                                </td>
                                <td className="px-6 py-4">
                                    €850.00
                                </td>
                                <td className="px-10 py-4">
                                    Monthly
                                </td>
                                <td className='px-6 py-4'>
                                <FaEye className="inline-block mr-3" />
                                <FaCheck className="inline-block mr-3" />
                                <FaTimes className="inline-block mr-3" />
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaUser className="inline-block mr-3" /> Ashlay Jack                                </th>
                                <td className="px-6 py-4">
                                <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Engineer</span> 
                                </td>
                                <td className="px-6 py-4">
                                    €1500.00
                                </td>
                                <td className="px-10 py-4">
                                    Monthly
                                </td>
                                <td className='px-6 py-4'>
                                <FaEye className="inline-block mr-3" />
                                <FaCheck className="inline-block mr-3" />
                                <FaTimes className="inline-block mr-3" />
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaUser className="inline-block mr-3" /> John Doe                                </th>
                                <td className="px-6 py-4">
                                <span className='px-10 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Client</span> 
                                </td>
                                <td className="px-6 py-4">
                                    €2000.00
                                </td>
                                <td className="px-10 py-4">
                                    Once
                                </td>
                                <td className='px-6 py-4'>
                                <FaEye className="inline-block mr-3" />
                                <FaCheck className="inline-block mr-3" />
                                <FaTimes className="inline-block mr-3" />
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaUser className="inline-block mr-3" /> Jim Micheal                                </th>
                                <td className="px-6 py-4">
                                <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#7d1420'}} >Manager</span> 
                                </td>
                                <td className="px-6 py-4">
                                    €980.00
                                </td>
                                <td className="px-10 py-4">
                                    Once
                                </td>
                                <td className='px-6 py-4'>
                                <FaEye className="inline-block mr-3" />
                                <FaCheck className="inline-block mr-3" />
                                <FaTimes className="inline-block mr-3" />
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