import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useState } from "react";

interface fullName {
  firstname: string;
  lastname: string;
}

interface Vehicle {
  color: string;
  plate: string;
  capacity: number;
  vehicletype: string;
}

interface Captain {
  fullname: fullName;
  email: string;
  password: string;
  vehicle: Vehicle;
}

type CaptainContextType = [Captain, Dispatch<SetStateAction<Captain>>];
export const CaptainDataContext = createContext<CaptainContextType | null>(null);

interface CaptainContextProps {
  children: ReactNode;
}

const CaptainContext: React.FC<CaptainContextProps> = ({ children }) => {
  const [captain, setCaptain] = useState<Captain>({
    fullname: { firstname: "", lastname: "" },
    email: "",
    password: "",
    vehicle: { color: "", plate: "", capacity: 0, vehicletype: "" },
  });

  return (
    <CaptainDataContext.Provider value={[captain, setCaptain]}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;


