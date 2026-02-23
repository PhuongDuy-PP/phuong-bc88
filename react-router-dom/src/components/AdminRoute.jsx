import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminRoute = ({children}) => {
    // dùng hook useLocation để lấy thông tin về location hiện tại
    const location = useLocation();

    const {user} = useAuth()

    // nếu chưa có user thì chuyển hướng về trang login
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // không phải admin => redirect đến login
    if(user.role !== 'admin') {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default AdminRoute;