import Login from "../admin/Login/login";

export const ProtectLayout = ({ children }: { children: JSX.Element }) => {
    const sessionToken = sessionStorage.getItem("@AuthUser:token");
    // const sessionUser = sessionStorage.getItem("@AuthUser:user");
    if (!sessionToken) {
        return <Login />;
    }

    return children;
};