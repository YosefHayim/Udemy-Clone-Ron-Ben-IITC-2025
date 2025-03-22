import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import TicketCompose from "./TicketCompose/TicketCompose";

const Messages = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClicks = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "BUTTON" && target.textContent === "Compose") {
      setClicked(true);
    } else
      (isClicked) => {
        setClicked(false);
      };
  };

  return (
    <div onClick={handleClicks}>
      <div className="pb-[2em] pl-[2em]">
        <h1 className="mb-[0.5em] mt-[0.5em] font-[lifeLtstd] font-bold">
          Messages
        </h1>
        <h2>You have 0 unread messages.</h2>
      </div>
      <hr className="mb-[0.5em]" />
      <div className="flex w-full flex-row items-start justify-start">
        <div className="ml-[0.5em] flex h-[50vh] w-1/3 flex-col flex-wrap items-start justify-start gap-[0.5em] bg-[#F6F7F9] p-[0.5em]">
          <div className="flex w-full flex-row items-center justify-start gap-[0.5em]">
            <button className="rounded-[0.2em] border border-btnColor p-[0.5em] font-bold text-btnColor hover:bg-purpleHoverBtn focus:outline-none">
              Compose
            </button>
            <select
              name="message-filter"
              id="message-filter"
              className="w-full cursor-pointer rounded-[0.2em] border border-gray-500 bg-white p-[0.5em]"
            >
              <option value="all-messages" className="cursor-pointer">
                All Messages
              </option>
              <option value="unread">Unread</option>
              <option value="no-response">No Response</option>
              <option value="important">Important</option>
            </select>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-[0.5em]">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-[0.2em] border border-gray-400 bg-white p-[0.5em] placeholder:text-gray-600 hover:bg-gray-100"
            />
            <button className="rounded-[0.2em] bg-btnColor p-[0.5em] hover:bg-[#892de1] focus:outline-none">
              <IoMdSearch className="text-[1.5em] text-white" />
            </button>
          </div>
          <p className="w-full text-center">You have no messages.</p>
        </div>
        <div className="w-2/3">
          {isClicked ? (
            <div className="flex w-full flex-col items-start justify-start gap-[1em] pl-[2em] text-start">
              <b className="text-[1.5em]">Compose</b>
              <b>What do you have in mind?</b>
              <TicketCompose
                title={"Technical, payment or other platform issues"}
                text={"Visit the Udemy help center"}
              />
              <TicketCompose
                title={"Questions about course content"}
                text={"View course Q&A"}
              />
              <TicketCompose
                title={"Private or personal message to instructor"}
                text={"Send a new message"}
              />
            </div>
          ) : (
            <div className="w-full text-center">
              <p>Select a message thread to read it here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
