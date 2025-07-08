import React from "react";

import UserContext from "./UserContext";
//making a wrapper component that accept (any components inside it)
//Provides them with access to user data
const UserContextProvider = ({ children }) => {
    const [user,setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider