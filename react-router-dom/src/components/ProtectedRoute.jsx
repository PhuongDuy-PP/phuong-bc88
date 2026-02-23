import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";


// children: tên props đặc biệt giúp nhận route con
// children: <User user={user} />
const ProtectedRoute = ({children}) => {
    // dùng hook useLocation để lấy thông tin về location hiện tại
    const location = useLocation();

    const {user} = useAuth()

    // nếu chưa có user thì chuyển hướng về trang login
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;
