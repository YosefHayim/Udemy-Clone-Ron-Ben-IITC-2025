import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const AddCardInfo: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const visaOwnerName = formData.get("card-owner");
    const creditCardNumber = formData.get("card-number");
    const date = formData.get("date");
    const cvv = formData.get("cvv");
    // console.log(visaOwnerName, creditCardNumber, date, cvv);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-start justify-start"
      >
        <div className="w-full px-[1em] flex flex-col items-start justify-start gap-[1em]">
          <div className="w-full">
            <label htmlFor="card-number" className="font-bold mb-[0.3em]">
              Credit number
            </label>
            <Input
              name="card-number"
              placeholder="1234 5678 9012 3456"
              className="border border-black rounded-[0.2em] w-full"
            ></Input>
          </div>
          <div className="w-full flex flex-row items-start justify-start gap-[1em]">
            <div>
              <label htmlFor="date" className="font-bold">
                Expiry date
              </label>
              <Input
                placeholder="MM/DD"
                name="date"
                className="border border-black rounded-[0.2em] w-full"
              ></Input>
            </div>
            <div>
              <label htmlFor="cvv" className="font-bold">
                CVV / CVC
              </label>
              <Input
                placeholder="CVC"
                name="cvv"
                className="border border-black rounded-[0.2em] w-full"
              ></Input>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="card-owner" className="font-bold">
              Name on card
            </label>
            <Input
              placeholder="Name on card"
              name="card-owner"
              className="border border-black rounded-[0.2em] w-full"
            ></Input>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.5em]">
            <Checkbox name="save-card" className="rounded-[0em]" />
            <label htmlFor="save-card">
              Securely save this card for my later purchase
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCardInfo;
