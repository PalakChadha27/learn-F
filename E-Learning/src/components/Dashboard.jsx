import React from 'react';
import { useState } from 'react';
export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left Sidebar - Dashboard Navigation */}
        <div className="w-64 bg-white shadow-lg fixed left-0 h-full p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Dashboard</h2>
          
          {/* Navigation Menu */}
          <div className="space-y-4">
            {['Home', 'Courses', 'Friends', 'Progress', 'Messages'].map((item) => (
              <button 
                key={item}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
  
          {/* Friends Section */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">Friends Online</h3>
            {['Sarah Wilson', 'Mike Chen', 'Emma Davis', 'John Patel'].map((friend, index) => (
              <div key={index} className="flex items-center space-x-3 mb-3">
                <div className="h-8 w-8 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-700">{friend}</span>
              </div>
            ))}
          </div>
        </div>
  
       {/* Main Content */}
<div className="flex-1 ml-30 mr-30 p-8">
  {/* Header */}
  <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Share Your Skills With Professional Online Courses
            </h1>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Join Now
            </button>
          </div>
  
          {/* Progress Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { watched: "8/15", title: "Front-end" },
              { watched: "3/14", title: "Back-end" },
              { watched: "2/6", title: "Product Design" },
              { watched: "9/10", title: "Project Manager" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-gray-800">{item.watched}</p>
                <p className="text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
  
          {/* Continue Watching Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Continue Watching</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 text-sm font-medium">HOMTEND</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full" 
                        style={{ width: `${item * 25}%` }}
                      ></div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Beginner’s Guide To Becoming A Professional Frontend Developer
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
  
              {/* right Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed right-0 h-full p-6">
        {/* Profile Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Profile</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Good Morning Alex</p>
            <p className="text-sm text-gray-600 mt-2">
              Continue Your Journey And Achieve Your Target
            </p>
          </div>
        </div>

        {/* Mentor Team */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Mentor Team</h2>
          <div className="space-y-4">
            {[
              "Kilian Rosvett - Software Developer",
              "Teodor Maskevich - Product Owner",
              "Andrew Koeller - Frontend Developer",
              "Adam Chekish - Backend Developer",
            ].map((member, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <span className="text-sm text-gray-700">{member}</span>
              </div>
            ))}
            <button className="text-blue-600 text-sm mt-4 hover:underline">
              See All
            </button>
          </div>
        </div>
      </div>

      </div>
    );
  }