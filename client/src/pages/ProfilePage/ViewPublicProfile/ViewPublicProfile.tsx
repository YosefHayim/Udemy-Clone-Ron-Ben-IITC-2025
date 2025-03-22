const ViewPublicProfile = () => {
  return (
    <header className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-4xl text-center">
        {/* Nome do usuário */}
        <h1 className="text-3xl font-extrabold">Ben Klinski</h1>

        {/* Avatar */}
        <div className="mt-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 text-2xl font-extrabold">
            BK
          </div>
        </div>
      </div>
    </header>
  );
};

export default ViewPublicProfile;
