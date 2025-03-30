import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faInbox, 
  faBook, 
  faTasks, 
  faUsers, 
  faCog, 
  faSignOutAlt, 
  faBell, 
  faEnvelope, 
  faPlay, 
  faEllipsisH 
} from '@fortawesome/free-solid-svg-icons';

const CourseDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-inter">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <HeaderSection />
        <ContinueWatchingSection />
        <MentorTableSection />
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6">
      <div className="flex items-center mb-8">
        <div className="text-purple-600 text-3xl font-bold">C!</div>
        <div className="ml-2 text-xl font-semibold">COURSE</div>
      </div>
      
      <div className="mb-8">
        <input 
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200" 
          placeholder="Search your course here..." 
          type="text" 
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">OVERVIEW</h2>
        <ul>
          <SidebarItem icon={faTachometerAlt} text="Dashboard" active />
          <SidebarItem icon={faInbox} text="Inbox" />
          <SidebarItem icon={faBook} text="Lesson" />
          <SidebarItem icon={faTasks} text="Task" />
          <SidebarItem icon={faUsers} text="Group" />
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">FRIENDS</h2>
        <ul>
          <FriendItem 
            name="Andrew Meter" 
            role="Software Developer" 
            imgSrc="https://storage.googleapis.com/a1aa/image/Uvfi4E1H5sZH_zeBWy20ktPIJwvjVPTX2v5UCGSBlmc.jpg" 
          />
          <FriendItem 
            name="Jeff Linkoln" 
            role="Product Owner" 
            imgSrc="https://storage.googleapis.com/a1aa/image/vXSsRsaaywWwClXN3DvfIaIp1wPesYN4VD7Ijpoo0fU.jpg" 
          />
          <FriendItem 
            name="Sasha Melstone" 
            role="HR Manager" 
            imgSrc="https://storage.googleapis.com/a1aa/image/PpKB9Mt7kmyTFx-bidRpQrbDyi2su1a10HF2DrwqXHs.jpg" 
          />
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">SETTINGS</h2>
        <ul>
          <SidebarItem icon={faCog} text="Settings" />
          <SidebarItem icon={faSignOutAlt} text="Logout" logout />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active = false, logout = false }) => {
  return (
    <li className={`mb-4 flex items-center ${active ? 'text-purple-600' : ''} ${logout ? 'text-red-600' : ''}`}>
      <FontAwesomeIcon icon={icon} className="mr-2 w-4" />
      {text}
    </li>
  );
};

const FriendItem = ({ name, role, imgSrc }) => {
  return (
    <li className="mb-4 flex items-center">
      <img alt={name} className="w-8 h-8 rounded-full mr-2" src={imgSrc} />
      <div>
        <div>{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </li>
  );
};

const HeaderSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mb-8 gap-6">
      <div className="flex-1">
        <div className="bg-purple-100 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="text-2xl font-semibold mb-2">
              Sharpen Your Skills With Professional Online Courses
            </h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Join Now
            </button>
          </div>
          <img 
            alt="Online Course" 
            className="w-32 h-32 object-contain" 
            src="https://storage.googleapis.com/a1aa/image/VR8lXtOe_0ztHzT2CCkbNLJkobKP93hu_Z6ktp377F0.jpg" 
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <StatsCard value="8/15 Watched" label="Front-end" />
          <StatsCard value="3/14 Watched" label="Back-end" />
          <StatsCard value="2/6 Watched" label="Product Design" />
          <StatsCard value="9/10 Watched" label="Project Manager" />
        </div>
      </div>
      
      <div className="w-full lg:w-64 flex flex-col gap-6">
        <ProfileCard />
        <MentorList />
      </div>
    </div>
  );
};

const StatsCard = ({ value, label }) => {
  return (
    <div className="bg-white p-4 rounded-lg text-center">
      <div className="text-purple-600 text-xl font-semibold">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg text-center">
      <img 
        alt="Profile Picture" 
        className="w-16 h-16 rounded-full mx-auto mb-4" 
        src="https://storage.googleapis.com/a1aa/image/i88OePYu96HwF8JP7itgOMOpGkDjF7QGr3Teaogmrdo.jpg" 
      />
      <div className="text-lg font-semibold">Good Morning Alex</div>
      <div className="text-sm text-gray-500 mb-4">
        Continue Your Journey And Achieve Your Target
      </div>
      <div className="flex justify-center space-x-4">
        <FontAwesomeIcon icon={faBell} className="text-gray-500 hover:text-purple-600 cursor-pointer" />
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 hover:text-purple-600 cursor-pointer" />
        <FontAwesomeIcon icon={faCog} className="text-gray-500 hover:text-purple-600 cursor-pointer" />
      </div>
    </div>
  );
};

const MentorList = () => {
  const mentors = [
    {
      name: "Kiliam Rosvelt",
      role: "Software Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/gH4jx4BZMJWm9qynqlMzUHplJ5cATMKVQCffRFtArIU.jpg"
    },
    {
      name: "Teodor Maskevich",
      role: "Product Owner",
      imgSrc: "https://storage.googleapis.com/a1aa/image/hA071g6XRu6MqwsA_zHaCSSsnC0RK8SrFVz4Ef3DEFs.jpg"
    },
    {
      name: "Andrew Kooller",
      role: "Frontend Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/cKbkWskeE6rOQC5kDltCqfqlVYYERAcjYFhl6EzM5pw.jpg"
    },
    {
      name: "Adam Chekish",
      role: "Backend Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/dkaIdpzqlqPON0FSnBLa2gdo67vjdWOHiXVd2YSelxQ.jpg"
    },
    {
      name: "Anton Peterson",
      role: "Software Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/9WCFVVY6KOQ-aXCto2EqJ_uCLheRYsx9Q34yVA91QGw.jpg"
    },
    {
      name: "Matew Jackson",
      role: "Product Designer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/YD6Uz9aspkAl1cmTBntzN_acmvhsoCzrwL3D1yP6cg8.jpg"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Your Mentor</h2>
      <ul className="max-h-96 overflow-y-auto">
        {mentors.map((mentor, index) => (
          <MentorItem key={index} {...mentor} />
        ))}
      </ul>
      <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-lg mt-4 transition-colors">
        See All
      </button>
    </div>
  );
};

const MentorItem = ({ name, role, imgSrc }) => {
  return (
    <li className="mb-4 flex items-center">
      <img alt={name} className="w-8 h-8 rounded-full mr-2" src={imgSrc} />
      <div className="flex-1">
        <div>{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-lg text-sm transition-colors">
        Follow
      </button>
    </li>
  );
};

const ContinueWatchingSection = () => {
  const courses = [
    {
      type: "FRONTEND",
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/ekgy5VcEHAG4uGDN9r-fMcaQVbwhmpxDyC9I9ATzT2M.jpg",
      views: 124,
      users: 124
    },
    {
      type: "BACKEND",
      title: "Beginner's Guide To Becoming A Professional Backend Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/h5gVp7p2lLViz_PmDmbGCesh-QGlUkUHRcu72vZkRdc.jpg",
      views: 27,
      users: 27
    },
    {
      type: "FRONTEND",
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/ekgy5VcEHAG4uGDN9r-fMcaQVbwhmpxDyC9I9ATzT2M.jpg",
      views: 67,
      users: 67
    },
    {
      type: "FRONTEND",
      title: "Beginner's Guide To Becoming A Professional Frontend Developer",
      imgSrc: "https://storage.googleapis.com/a1aa/image/ekgy5VcEHAG4uGDN9r-fMcaQVbwhmpxDyC9I9ATzT2M.jpg",
      views: 67,
      users: 67
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ type, title, imgSrc, views, users }) => {
  const userImages = [
    "https://storage.googleapis.com/a1aa/image/x5E_QNH8QdSy3-0zPUoO9gf5BDNl1DKD8K4opASdQs4.jpg",
    "https://storage.googleapis.com/a1aa/image/PKf1GJSVA090WDLR6qcAxvAQ3tIg8m9hb0mb0E0heOY.jpg",
    "https://storage.googleapis.com/a1aa/image/pZmCZsK2FgrDohg6Bl7axyriRwQWWSjDx9tHa4eWs5U.jpg"
  ];

  return (
    <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
      <img 
        alt={type + " Course"} 
        className="w-full h-32 object-cover rounded-lg mb-4" 
        src={imgSrc} 
      />
      <div className="text-purple-600 text-sm font-semibold mb-2">{type}</div>
      <div className="text-lg font-semibold mb-2 line-clamp-2">{title}</div>
      <div className="flex items-center mb-2">
        {userImages.map((img, i) => (
          <img 
            key={i} 
            alt={`User ${i+1}`} 
            className="w-6 h-6 rounded-full mr-2 border-2 border-white" 
            src={img} 
            style={{ zIndex: userImages.length - i }}
          />
        ))}
        <div className="text-sm text-gray-500">+{users - 3}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">{views} views</div>
        <FontAwesomeIcon icon={faPlay} className="text-purple-600 cursor-pointer" />
      </div>
    </div>
  );
};

const MentorTableSection = () => {
  const mentors = [
    {
      name: "Alex Morgan",
      date: "25/02/2023",
      type: "FRONTEND",
      title: "Understanding Concept Of React"
    },
    {
      name: "Nikolas Helmet",
      date: "18/03/2023",
      type: "BACKEND",
      title: "Concept Of The Data Base"
    },
    {
      name: "Josh Freakson",
      date: "12/04/2023",
      type: "BACKEND",
      title: "Core Development Approaches"
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Mentor</h2>
      <div className="bg-white p-4 rounded-lg overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2 text-gray-500 font-medium">INSTRUCTOR NAME & DATE</th>
              <th className="pb-2 text-gray-500 font-medium">COURSE TYPE</th>
              <th className="pb-2 text-gray-500 font-medium">COURSE TITLE</th>
              <th className="pb-2 text-gray-500 font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4">
                  <div>{mentor.name}</div>
                  <div className="text-sm text-gray-500">{mentor.date}</div>
                </td>
                <td className="py-4">
                  <div className="bg-purple-100 text-purple-600 px-2 py-1 rounded-lg inline-block text-sm">
                    {mentor.type}
                  </div>
                </td>
                <td className="py-4">{mentor.title}</td>
                <td className="py-4">
                  <FontAwesomeIcon 
                    icon={faEllipsisH} 
                    className="text-gray-500 hover:text-purple-600 cursor-pointer" 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseDashboard;