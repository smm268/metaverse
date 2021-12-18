import { useMoralis } from "react-moralis"

function ChangeUserName() {
    const {setUserData, isUserUpdating, userError, user} = useMoralis();

    const setUsername = () => {
      const username = prompt (`Enter your new Username (current:${user.getUsername()})`);

      if(!username)return;

      setUserData({
          username,
      })
    }

    return (
        <div className="absolute text-sm top-5 right-5">
            <button
            onClick={setUsername}
             className="hover:text-pink-700">Change your username</button>
        </div>
    )
}

export default ChangeUserName
