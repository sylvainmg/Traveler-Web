import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({
    children,
    props,
}: {
    children: React.ReactNode;
    props: {
        token: string | null;
        setToken: React.Dispatch<React.SetStateAction<string | null>>;
        refreshToken: () => Promise<string | null>;
        id: number | null;
        setId: React.Dispatch<React.SetStateAction<number | null>>;
    };
}) => {
    return (
        <AuthContext.Provider
            value={{
                token: props.token,
                setToken: props.setToken,
                refreshToken: props.refreshToken,
                id: props.id,
                setId: props.setId,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
