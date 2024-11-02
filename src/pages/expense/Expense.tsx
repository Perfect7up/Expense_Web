import React from 'react';
import { FilterFilled, MenuOutlined, EllipsisOutlined, PlusOutlined,  } from '@ant-design/icons';
import { FaMoneyBillWave, FaStore, FaCalendarAlt, FaCheckCircle,  FaUtensils, 
    FaShoppingCart, FaNewspaper, FaPlane, FaGlassCheers, FaHotel } from 'react-icons/fa';

const Expense: React.FC = () => {
    return (
        <div className="py-5 px-10">
            <div className="flex-grow ml-64 py-5 rounded-2xl bg-black px-10">
                <div className="flex mb-5 justify-between ">
                    <h2 className="font-semibold mt-5 text-2xl text-white">Expense</h2>
                <div className="flex mt-5 items-center">
                <a href="#" className="bg-cyan-400 rounded-sm m-2 items-center py-1 px-3 text-sm">
                <PlusOutlined className="text-sm m-1" />
                New Expense</a>
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
                                    <FaStore className="inline-block mr-1 -mt-1" /> Details 
                                </th>
                                <th scope="col" className="px-6 py-3"> 
                                    <FaStore className="inline-block mr-1 -mt-1" /> Merchant 
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
                                <FaUtensils className="inline-block mr-3" /> Food Catering
                                </th>
                                <td className="px-6 py-4">
                                    McFood
                                </td>
                                <td className="px-6 py-4">
                                    €250.00
                                </td>
                                <td className="px-6 py-4">
                                    20/07/2022
                                </td>
                                <td>
                                   <span className='px-3 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Not Submitted</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaShoppingCart className="inline-block mr-3" />  Shopping
                                </th>
                                <td className="px-6 py-4">
                                    Mart
                                </td>
                                <td className="px-6 py-4">
                                    €150.00
                                </td>
                                <td className="px-6 py-4">
                                    4/07/2022
                                </td>
                                <td>
                                   <span className='px-3 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Not Submitted</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaUtensils className="inline-block mr-3" /> Business Lunch
                                </th>
                                <td className="px-6 py-4">
                                    Restaurant
                                </td>
                                <td className="px-6 py-4">
                                    €70.00
                                </td>
                                <td className="px-6 py-4">
                                    3/07/2022
                                </td>
                                <td>
                                   <span className='px-3 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Not Submitted</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaPlane className="inline-block mr-3" /> Travel Expense
                                </th>
                                <td className="px-6 py-4">
                                    Airlines
                                </td>
                                <td className="px-6 py-4">
                                    €450.25
                                </td>
                                <td className="px-6 py-4">
                                    29/06/2022
                                </td>
                                <td>
                                   <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Submitted</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaGlassCheers className="inline-block mr-3" /> Client Dinner
                                </th>
                                <td className="px-6 py-4">
                                    Bistro
                                </td>
                                <td className="px-6 py-4">
                                    €120.00
                                </td>
                                <td className="px-6 py-4">
                                    15/06/2022
                                </td>
                                <td>
                                    <span className='px-3 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Not Submitted</span>  
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#141414'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaHotel className="inline-block mr-3" /> Accommodations
                                </th>
                                <td className="px-6 py-4">
                                    Hotel
                                </td>
                                <td className="px-6 py-4">
                                    €275.75
                                </td>
                                <td className="px-6 py-4">
                                    30/05/2022
                                </td>
                                <td>
                                    <span className='px-7 py-2 rounded-full text-sm' style={{ backgroundColor: '#2e1066'}} >Submitted</span> 
                                </td>
                            </tr>
                            <br />
                            <tr className='mb-5 text-white font-semibold' style={{backgroundColor: '#282829'}}>
                                <th scope="row" className="flex items-center px-6 py-7 font-medium whitespace-nowrap">
                                <FaNewspaper className="inline-block mr-3" /> News Subscription
                                </th>
                                <td className="px-6 py-4">
                                    Hotel
                                </td>
                                <td className="px-6 py-4">
                                    €275.75
                                </td>
                                <td className="px-6 py-4">
                                    30/05/2022
                                </td>
                                <td>
                                    <span className='px-3 py-2 rounded-full text-sm' style={{ backgroundColor: '#73172f'}} >Not Submitted</span>
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