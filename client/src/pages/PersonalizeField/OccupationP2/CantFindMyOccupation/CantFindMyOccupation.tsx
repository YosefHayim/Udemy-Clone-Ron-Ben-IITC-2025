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
          ? "ml-[8em] mt-[2em] block w-[600px] p-[2em] text-start"
          : "hidden"
      }
    >
      <form
        className="flex w-full flex-col items-start justify-start gap-[0.5em]"
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
          className="mb-[1em] w-full rounded-[0.2em] border border-gray-400 bg-white p-[1em]"
          placeholder="Enter title"
        />
        <button
          type="button" // Prevents form submission
          className="font-bold text-btnColor underline"
          onClick={handlePrevious}
        >
          Back to list of occupations
        </button>
      </form>
    </div>
  );
};

export default CantFindMyOccupation;
