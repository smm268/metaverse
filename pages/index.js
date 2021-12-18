import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const {isAuthenticated}= useMoralis();

    if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll overflow-hidden
     bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse Challenge</title>
      </Head>
    
    <h1>Welcome to App</h1>
  
    <div className="max-w-screen-xl mx-auto">
    
       {/*Header */}
       <Header />
       {/*Messages*/}
       <Messages />
    </div> 
    </div>
  )
}
