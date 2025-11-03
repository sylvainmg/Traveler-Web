import React, { useState } from "react";
import TokenAPI from "../api/TokenAPI";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [id, setId] = useState<number | null>(null);
    const refreshToken = async (): Promise<string | null> => {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) return null;

        try {
            const data = await TokenAPI(refresh);

            setToken(data?.accessToken);
            setId(data?.id);

            return data?.accessToken;
        } catch (err) {
            setToken(null);
            return null;
        }
    };

    return (
        <AuthContext.Provider
            value={{ token: token, setToken, refreshToken, id, setId }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
