const Profile = ({ name, email }) => (
    <div className="bg-gray-100 p-6 rounded-md shadow-lg">
      <p className="text-lg font-semibold">Name: {name}</p>
      <p className="text-lg">Email: {email}</p>
    </div>
  );
  
  export default Profile;
  