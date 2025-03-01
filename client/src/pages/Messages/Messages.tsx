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
      <div className="pl-[2em] pb-[2em]">
        <h1 className="mb-[0.5em] font-[lifeLtstd] font-bold mt-[0.5em]">
          Messages
        </h1>
        <h2>You have 0 unread messages.</h2>
      </div>
      <hr className="mb-[0.5em]" />
      <div className="w-full flex flex-row items-start justify-start">
        <div className="ml-[0.5em] flex flex-col items-start justify-start w-1/3 flex-wrap gap-[0.5em] bg-[#F6F7F9] h-[50vh] p-[0.5em]">
          <div className="w-full flex flex-row items-center justify-start gap-[0.5em]">
            <button className="text-btnColor border border-btnColor p-[0.5em] rounded-[0.2em] font-bold hover:bg-purpleHoverBtn">
              Compose
            </button>
            <select
              name="message-filter"
              id="message-filter"
              className="cursor-pointer p-[0.5em] bg-white border border-gray-500 rounded-[0.2em] w-full"
            >
              <option value="all-messages" className="cursor-pointer">
                All Messages
              </option>
              <option value="unread">Unread</option>
              <option value="no-response">No Response</option>
              <option value="important">Important</option>
            </select>
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-[0.5em]">
            <input
              type="text"
              placeholder="Search"
              className="hover:bg-gray-100 w-full bg-white border border-gray-400 p-[0.5em] rounded-[0.2em] placeholder:text-gray-600"
            />
            <button className="hover:bg-[#892de1] bg-btnColor p-[0.5em] rounded-[0.2em]">
              <IoMdSearch className="text-white text-[1.5em]" />
            </button>
          </div>
          <p className="w-full text-center">You have no messages.</p>
        </div>
        <div className="w-2/3">
          {isClicked ? (
            <div className="w-full text-start pl-[2em] flex flex-col items-start justify-start gap-[1em]">
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
