import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {

    const [user] = useState({
        name: "John",
        email: "johnwerey9@gmail.com",
        dob: "08/02/2006",
    });
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
};

export const useUser = () => useContext(UserContext);