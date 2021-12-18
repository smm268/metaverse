
import { useRef } from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

//only show messages from the last 15 minutes
const MINS_DURATION =15;

function Messages() {
const {user} = useMoralis();
const endOfMessagesRef= useRef(null);
const {data,loading,error} = useMoralisQuery(
  'Messages', 
  (query) =>
   query.ascending("createdAt").greaterThan
  ('createdAt', 
  new Date(Date.now() - 1000 * 60 * MINS_DURATION)
  ),
  [],
  {
    live:true,
  }
  );



    return (
        <div className="pb-56 ">
        <div className="my-5">
          <ByMoralis style={{marginLeft:"auto", marginRight:"auto"}} variant="dark" />
        </div>
            <div className="space-y-10 p-4">
               {data.map((message) => (
                 <Message key={message.id} message={message} />
               ))}
            </div>
           <div className="flex justify-center" >
             {/* send message*/}
             <SendMessage endOfMessagesRef={endOfMessagesRef} />
           </div>
            <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
             {/* uptodate message*/}
             <p>You're up to date {user.getUsername()}!🎉</p>
            </div>
            
        </div>
    )
}

export default Messages
