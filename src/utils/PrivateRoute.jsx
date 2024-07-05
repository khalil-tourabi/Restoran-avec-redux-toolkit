import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
    const { user } = useSelector((store) => store.user);

    return <>{user.isLogged ? <Component /> : <Navigate to="/login" />}</>
};

export default PrivateRoute;
