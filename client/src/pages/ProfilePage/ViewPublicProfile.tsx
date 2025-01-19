
const ViewPublicProfile = () => {
  return (
    <header className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Nome do usuário */}
        <h1 className="text-3xl font-bold">Ben Klinski</h1>

        {/* Avatar */}
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold">
            BK
          </div>
        </div>
      </div>
    </header>
  );
};

export default ViewPublicProfile;
