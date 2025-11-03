import React, { createContext, useContext } from "react";

export interface NavbarContextType {
    isAuthenticated: boolean;
}

export const NavbarContext = createContext<NavbarContextType | undefined>(
    undefined
);

export function useNavbar() {
    const context = useContext(NavbarContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");

    return context;
}
