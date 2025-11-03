import { useEffect } from "react";
import { NavbarContext } from "../contexts/NavbarContext";

const NavbarProvider = ({
    children,
    isAuthenticated,
}: {
    children: React.ReactNode;
    isAuthenticated: boolean;
}) => {
    useEffect(() => {
        console.log("====================================");
        console.log(isAuthenticated);
        console.log("====================================");
    }, [isAuthenticated]);
    return (
        <NavbarContext.Provider value={{ isAuthenticated }}>
            {children}
        </NavbarContext.Provider>
    );
};

export default NavbarProvider;
