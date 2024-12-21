import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the shape of user data
interface FullName {
  firstName: string;
  lastName: string;
}

interface User {
  email: string;
  password: string;
  fullName: FullName;
}

// Define the type of the context value
type UserContextType = [User, Dispatch<SetStateAction<User>>];

// Create the context with an initial value
export const UserDataContext = createContext<UserContextType | undefined>(undefined);

// Define props for the provider component
interface UserContextProps {
  children: ReactNode;
}

const UserContext: React.FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    fullName: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
