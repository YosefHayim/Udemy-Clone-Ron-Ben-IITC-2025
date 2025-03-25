import { Input } from '@/components/ui/input';

const UdemyBusinessForm = () => {
  return (
    <div>
      <form className="flex flex-col items-center justify-center">
        <div>
          <div>
            <Input placeholder="First Name*"></Input>
            <Input placeholder="Last Name*"></Input>
          </div>
          <div>
            <Input placeholder="Work Email*"></Input>
          </div>
          <div>
            <Input placeholder="Phone Number*"></Input>
          </div>
          <div>
            <select name="Where are you located?*" id="">
              <option value=""></option>
            </select>
          </div>
          <div>
            <div>
              <Input placeholder="Company Name*"></Input>
            </div>
            <div>
              <div>
                <select name="Company Size*" id="">
                  <option value=""></option>
                </select>
              </div>
              <div>
                <select name="Number of people to train" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div>
              <Input placeholder="Job title*"></Input>
              <div>
                <select name="Job level" id="">
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div>
              <Input
                placeholder="What are your organization's training needs?(Optional)"
                className="w-[550px]"
              ></Input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UdemyBusinessForm;
