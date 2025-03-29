import { Checkbox } from '@radix-ui/react-checkbox';

const CheckboxSpecialOffer = () => {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-[0.5em]">
      <div className="w-full flex-col flex-wrap items-center justify-center gap-1">
        <Checkbox
          id="offers"
          required={false}
          className="absolute mr-[0.5em] h-4 w-4 scale-90 rounded-[0.2em] border-2 border-black ring-0 focus:outline-none focus:ring-0"
        />
        <label htmlFor="offers" className="ml-5 text-sm">
          Send me special offers, personalized recommendations, and learning tips.
        </label>
      </div>
    </div>
  );
};

export default CheckboxSpecialOffer;
