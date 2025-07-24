import { useEffect, useState } from "react";
import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import type { User } from "./components/types";


function App() {
  
  const userProfile = {
    id:"#10101",
    name:"user 1",
    email:"userOne@gmail.com",
    role:"shooting guard",
    avatarUrl:""
  }

  useEffect(() => {
      
  },[])

const [user, setUser] = useState<User>(userProfile)

  return (
    <>
    {/* <AlertBox
        type = "success"
        message = "Your profile has been updated successfully"
        onClose={() => alert("Alert Closed")}
        /> */}
        <UserProfileCard
            user={user}
            showEmail={true}
            showRole={true}
            onEdit={() => alert('editing user information')}
        />
    </>
  );
}

export default App;
