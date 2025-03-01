const CantFindMyOccupation = ({
  isClicked,
  setClicked,
}: {
  isClicked: boolean;
  setClicked: (prev: boolean) => void;
}) => {
  const handlePrevious = () => {
    setClicked((prev) => !prev);
  };

  const handleDynamicOccupation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={
        isClicked
          ? "block w-[600px] text-start p-[2em] ml-[8em] mt-[2em]"
          : "hidden"
      }
    >
      <form
        className="w-full flex flex-col items-start justify-start gap-[0.5em]"
        onSubmit={handleDynamicOccupation}
      >
        <h1 className="text-[1.5em]">Which occupation are you learning for?</h1>
        <p>We'll do our best to bring you relevant recommendations.</p>
        <label htmlFor="my-occupation" className="font-bold">
          My occupation
        </label>
        <input
          type="text"
          name="my-occupation"
          id="my-occupation"
          className="bg-white border border-gray-400 p-[1em] rounded-[0.2em] w-full mb-[1em]"
          placeholder="Enter title"
        />
        <button
          type="button" // Prevents form submission
          className="underline text-btnColor font-bold"
          onClick={handlePrevious}
        >
          Back to list of occupations
        </button>
      </form>
    </div>
  );
};

export default CantFindMyOccupation;
