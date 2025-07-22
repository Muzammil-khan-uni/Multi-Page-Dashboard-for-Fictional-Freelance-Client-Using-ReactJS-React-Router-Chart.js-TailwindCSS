import { useState } from 'react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Freelance Designer',
    bio: 'Specializing in web design and development with 5 years of experience.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Here you would typically send the data to your backend
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
        {!editMode && (
          <button 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden p-6">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  disabled
                />
                <p className="text-xs text-gray-500 mt-1">Password can't be changed here</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold mr-4">
                JD
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{formData.name}</h3>
                <p className="text-gray-600">{formData.email}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Company</h4>
                <p className="mt-1 text-gray-800">{formData.company}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500">Password</h4>
                <p className="mt-1 text-gray-800">••••••••</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500">Bio</h4>
              <p className="mt-1 text-gray-800">{formData.bio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;