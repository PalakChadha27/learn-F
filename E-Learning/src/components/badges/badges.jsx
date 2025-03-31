import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt,faCircleQuestion, faBook, faUsers, 
  faCog, faSignOutAlt, faBell, faEnvelope, faPlay, faEllipsisH, 
  faTrophy,
  faArrowUpRightDots,
  faBookOpenReader,
  faWebAwesome
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Badges = () => {
    return (
        <div className="flex min-h-screen right-0 mr-0 bg-gray-100 text-gray-800 font-inter">
          {/* Sidebar */}
          <Sidebar />
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
          <Link to="/"><SidebarItem icon={faTachometerAlt} text="Dashboard"/></Link>
          <Link to="/quests"><SidebarItem icon={faCircleQuestion} text="Learning Quests" /></Link>
          <Link to="/quizes"><SidebarItem icon={faBook} text="Quizzes and Challenges" /></Link>
          <Link to="/badges"><SidebarItem icon={faTrophy} text="Badges And Achievement" active /></Link>
          <Link to="/growth"><SidebarItem icon={faArrowUpRightDots} text="Career Growth Graphs" /></Link>
          <Link to="/forum"><SidebarItem icon={faUsers} text="Discussion Forums" /></Link>
          <Link to="/leader"><SidebarItem icon={faBookOpenReader} text="Leader Board" /></Link>
          <SidebarItem icon={faWebAwesome} text="Chatbot" />
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
    <li className="flex items-center mb-4">
      <img src={imgSrc} alt={name} className="w-10 h-10 rounded-full mr-2" />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{role}</div>
      </div>
    </li>
  );
};
export default Badges;