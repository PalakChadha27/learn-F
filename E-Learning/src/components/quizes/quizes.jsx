import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faCircleQuestion, faBook, faUsers, 
  faCog, faSignOutAlt, faTrophy, faArrowUpRightDots,
  faBookOpenReader, faWebAwesome, faPlay, faEllipsisH,
  faPlusCircle, faEye, faEdit, faChartPie, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Quizes = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [quizzes, setQuizzes] = useState([]);
  const [preCreatedQuizzes, setPreCreatedQuizzes] = useState([]);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    subject: 'math',
    difficulty: 'medium',
    questions: 10
  });

  // Sample quiz data
  useEffect(() => {
    const sampleQuizzes = [
      {
        id: 1,
        title: 'JavaScript Fundamentals',
        subject: 'Programming',
        score: '15/20',
        status: 'completed',
        difficulty: 'medium',
        date: '2023-05-15'
      },
      {
        id: 2,
        title: 'React Hooks',
        subject: 'Frontend',
        score: '-',
        status: 'unattempted',
        difficulty: 'hard',
        date: '2023-05-18'
      },
      {
        id: 3,
        title: 'Python Basics',
        subject: 'Programming',
        score: '18/20',
        status: 'completed',
        difficulty: 'easy',
        date: '2023-05-20'
      },
      {
        id: 4,
        title: 'Data Structures',
        subject: 'Computer Science',
        score: '-',
        status: 'unattempted',
        difficulty: 'hard',
        date: '2023-05-22'
      },
      {
        id: 5,
        title: 'CSS Flexbox',
        subject: 'Frontend',
        score: '19/20',
        status: 'completed',
        difficulty: 'medium',
        date: '2023-05-25'
      }
    ];
    
    const samplePreCreatedQuizzes = [
      {
        id: 101,
        title: 'HTML5 Basics',
        subject: 'Web Development',
        difficulty: 'easy',
        questions: 15,
        popularity: 'High',
        rating: 4.8
      },
      {
        id: 102,
        title: 'Advanced Algorithms',
        subject: 'Computer Science',
        difficulty: 'hard',
        questions: 20,
        popularity: 'Medium',
        rating: 4.5
      },
      {
        id: 103,
        title: 'Machine Learning Intro',
        subject: 'Data Science',
        difficulty: 'medium',
        questions: 12,
        popularity: 'High',
        rating: 4.7
      },
      {
        id: 104,
        title: 'Database Design',
        subject: 'Backend',
        difficulty: 'medium',
        questions: 18,
        popularity: 'Medium',
        rating: 4.3
      }
    ];
    
    setQuizzes(sampleQuizzes);
    setPreCreatedQuizzes(samplePreCreatedQuizzes);
  }, []);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const newQuizObj = {
      id: quizzes.length + 1,
      title: newQuiz.title,
      subject: newQuiz.subject,
      score: '-',
      status: 'unattempted',
      difficulty: newQuiz.difficulty,
      date: new Date().toISOString().split('T')[0]
    };
    setQuizzes([newQuizObj, ...quizzes]);
    setNewQuiz({ title: '', subject: 'math', difficulty: 'medium', questions: 10 });
    setShowQuizForm(false);
  };

  const filteredQuizzes = quizzes.filter(quiz => {
    if (activeTab === 'all') return true;
    if (activeTab === 'completed') return quiz.status === 'completed';
    if (activeTab === 'unattempted') return quiz.status === 'unattempted';
    return true;
  });

  const stats = {
    inProgress: quizzes.filter(q => q.status === 'completed').length + 5,
    completed: quizzes.filter(q => q.status === 'completed').length,
    completionRate: Math.round((quizzes.filter(q => q.status === 'completed').length / quizzes.length) * 100) || 0,
    highScores: Math.round(quizzes.filter(q => q.status === 'completed').length * 0.8)
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-inter">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Quiz Generation Form */}
        {showQuizForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-purple-200">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Generate New Quiz</h2>
            <form onSubmit={handleQuizSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">Quiz Title</label>
                  <input
                    type="text"
                    value={newQuiz.title}
                    onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter quiz title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <select
                    value={newQuiz.subject}
                    onChange={(e) => setNewQuiz({...newQuiz, subject: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="math">Mathematics</option>
                    <option value="programming">Programming</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="language">Language</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={newQuiz.difficulty}
                    onChange={(e) => setNewQuiz({...newQuiz, difficulty: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Number of Questions</label>
                  <input
                    type="number"
                    min="5"
                    max="50"
                    value={newQuiz.questions}
                    onChange={(e) => setNewQuiz({...newQuiz, questions: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowQuizForm(false)}
                  className="px-4 py-2 border border-purple-700 text-purple-700 rounded-lg hover:bg-purple-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                >
                  Generate Quiz
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="In Progress" 
            value={stats.inProgress} 
            change="+20%" 
            icon={faBook}
            color="purple"
          />
          <StatCard 
            title="Completed" 
            value={stats.completed} 
            change="+15%" 
            icon={faTrophy}
            color="blue"
          />
          <StatCard 
            title="Completion Rate" 
            value={`${stats.completionRate}%`} 
            change="+5%" 
            icon={faChartPie}
            color="green"
          />
          <StatCard 
            title="High Scores" 
            value={`${stats.highScores}`} 
            change="+8%" 
            icon={faTrophy}
            color="purple"
          />
        </div>

        {/* Pre-Created Quizzes Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-bold text-purple-800 mb-4">Pre-Created Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {preCreatedQuizzes.map(quiz => (
              <div key={quiz.id} className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{quiz.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    quiz.difficulty === 'easy' ? 'bg-green-100 text-green-800' : 
                    quiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {quiz.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{quiz.subject}</p>
                <div className="flex justify-between text-sm mb-3">
                  <span>Questions: {quiz.questions}</span>
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mr-1" />
                    {quiz.rating}
                  </span>
                </div>
                <div className="flex justify-between">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    Preview
                  </button>
                  <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition">
                    Start Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-purple-800">My Quizzes</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1 text-sm rounded-lg ${activeTab === 'all' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveTab('completed')}
                    className={`px-3 py-1 text-sm rounded-lg ${activeTab === 'completed' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => setActiveTab('unattempted')}
                    className={`px-3 py-1 text-sm rounded-lg ${activeTab === 'unattempted' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}
                  >
                    Unattempted
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-500 border-b">
                      <th className="py-3 px-4">Title</th>
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Score</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQuizzes.map(quiz => (
                      <tr key={quiz.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{quiz.title}</td>
                        <td className="py-3 px-4">{quiz.subject}</td>
                        <td className="py-3 px-4">{quiz.score}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            quiz.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {quiz.status === 'completed' ? 'Completed' : 'Unattempted'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-purple-600 hover:text-purple-800 mr-3">
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                          <button className="text-yellow-600 hover:text-yellow-800">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-900 text-white p-6 rounded-xl flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold">{stats.completed}</div>
                  <div className="text-purple-300">Quizzes Completed</div>
                  <div className="mt-2 text-sm text-purple-200">
                    Great progress! Keep up the good work.
                  </div>
                </div>
                <div className="text-purple-300 text-4xl">
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-purple-800 mb-4">Performance Overview</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-bold text-purple-800">78%</div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset={283 * 0.22} // 78% filled
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Score</span>
                  <span className="font-medium">82%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Highest Score</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Improvement</span>
                  <span className="font-medium text-green-500">+12%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-purple-800 mb-2">Quick Quiz</h2>
              <p className="text-gray-600 mb-4">
                Test your knowledge with a quick 5-question quiz on JavaScript fundamentals.
              </p>
              <button 
                onClick={() => setShowQuizForm(true)}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
              >
                Start Quick Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
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
            <Link to="/quests"><SidebarItem icon={faCircleQuestion} text="Learning Quests"/></Link>
            <Link to="/quizes"><SidebarItem icon={faBook} text="Quizzes and Challenges" active/></Link>
            <Link to="/badges"><SidebarItem icon={faTrophy} text="Badges And Achievement" /></Link>
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

// Stat Card Component
const StatCard = ({ title, value, change, icon, color }) => {
  const colors = {
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600'
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h2 className="text-2xl font-bold">{value}</h2>
          <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-full ${colors[color]}`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default Quizes;