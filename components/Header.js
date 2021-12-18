import { useMoralis } from "react-moralis"
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
    const {user} = useMoralis();

    return (
        <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black opacity-70 shadow-sm border-b-2 border-pink-700">
        <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
           {/* <Image src="https://www.metaverse.fm/wp-content/uploads/2021/07/Metaverse-square-logo.png"
            layout="fill"
            objectFit="cover"
            className="rounded-full" /> */}
            </div> 

            <div className="text-left lg:text-center col-span-4">
            <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full ">
             {/*Avatar */}
             <Avatar logoutOnPress />
            </div>

             {/*Welcome message */}
                <h1 className="text-3xl">Welcome to the Metaverse</h1>

                 {/*username*/}
                <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                   {/*change username component */}
                   <ChangeUserName />
        </div>
         
            </div>
        </div>
    )
}

export default Header
