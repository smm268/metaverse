import Image from "next/image"
import { useMoralis } from "react-moralis"

function Login() {
    const {authenticate} = useMoralis();

    return (
        <div className="bg-black relative">
            
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
                {/* papafam logo*/ }
                <Image 
                className="object-cover rounded-full opacity-90"
                    src="https://www.metaverse.fm/wp-content/uploads/2021/07/Metaverse-square-logo.png"
                    height={200}
                    width={200}
                />
               
                {/* login button*/ }
                <button 
                onClick={authenticate}
                className="bg-gradient-to-b from-pink-700 to-fuchsia-900 rounded-lg p-5 font-bold animate-pulse">
                Login to the METAVERSE
                </button>
            </div>
            <div className="w-full h-screen">
                {/* background img*/ }
                <Image
                src="https://www.howtogeek.com/wp-content/uploads/2021/08/shutterstock_739699258.png?height=200p&trim=2,2,2,2&crop=16:9"
                layout="fill" 
                objectFit="cover"    
                />
            </div>

        </div>
    )
}

export default Login
