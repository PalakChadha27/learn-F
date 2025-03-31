import React from 'react';
import { FaChartLine, FaBell, FaCog } from 'react-icons/fa';

const CareerGrowth = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-300 p-2 rounded-full">
            <FaChartLine className="text-black" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg">
              Dashboard
            </button>
            <button className="text-gray-600 px-4 py-2">
              Message
            </button>
            <button className="text-gray-600 px-4 py-2">
              People
            </button>
            <button className="text-gray-600 px-4 py-2">
              Document
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-600" />
          <FaCog className="text-gray-600" />
          <img 
            alt="User profile picture" 
            className="rounded-full w-10 h-10" 
            src="https://storage.googleapis.com/a1aa/image/b-14myqT5Un6DqRRfpDMiuqR6tF9byIG77sxnzCfSes.jpg" 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Career Analysis
            </h1>
            <p className="text-gray-600">
              Automatic career progression tracking
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 lg:mt-0">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">
                Total Applications
              </p>
              <h2 className="text-2xl font-bold">
                2,931,232
              </h2>
              <p className="text-green-500">
                +1.03
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">
                Interviews Scheduled
              </p>
              <h2 className="text-2xl font-bold">
                8,381,13
              </h2>
              <p className="text-green-500">
                +1.03
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">
                Offers Received
              </p>
              <h2 className="text-2xl font-bold">
                7,951,533
              </h2>
              <p className="text-green-500">
                +1.03
              </p>
            </div>
          </div>
        </div>

        {/* Adjusted grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
          {/* Career Path Analysis - now takes 1 column */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">
              Career Path Analysis
            </h2>
            <p className="text-gray-600">
              Your career progression in last 30 days
            </p>
            <div className="mt-4">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-600">
                  Applications Sent
                </p>
                <h3 className="text-2xl font-bold">
                  24,199
                </h3>
                <p className="text-green-500">
                  +1.03 Higher than last month
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600">
                  Interviews Completed
                </p>
                <h3 className="text-2xl font-bold">
                  24,199
                </h3>
                <p className="text-green-500">
                  +3.13 Higher than last month
                </p>
              </div>
            </div>
          </div>

          {/* Statistics - now takes 2 columns */}
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h2 className="text-xl font-bold">
              Career Progress
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <button className="bg-yellow-300 text-black px-4 py-2 rounded-lg">
                This year's
              </button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">
                Summary
              </button>
            </div>
            <div className="mt-4">
              <img 
                alt="Bar chart showing career progress over the months" 
                className="w-full max-w-lg" 
                src="https://storage.googleapis.com/a1aa/image/iIlWnwM5dJKMuN_yCuRhCkGe0ZWoAffmTbHcq_K7Xxg.jpg" 
              />
            </div>
          </div>

          {/* Top Skills - now takes 1 column */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">
              Top Skills
            </h2>
            <p className="text-gray-600">
              Last 30 days
            </p>
            <h3 className="text-2xl font-bold">
              31,119
            </h3>
            <p className="text-gray-600">
              From 32,499
            </p>
            <div className="mt-4">
              <img 
                alt="Pie chart showing top skills" 
                className="w-full max-w-xs" 
                src="https://storage.googleapis.com/a1aa/image/5_j5c1k9xyewf-txU4KC0efpahLGeoKPDAD0ABuSEEs.jpg" 
              />
              <div className="mt-4">
                <p className="text-gray-600">
                  JavaScript 80%
                </p>
                <p className="text-gray-600">
                  React 57%
                </p>
                <p className="text-gray-600">
                  Node.js 46%
                </p>
                <p className="text-gray-600">
                  Python 46%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGrowth;