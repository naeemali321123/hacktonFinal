// import { Navigate, Outlet} from "react-router-dom";

// const PrivateRoute = ({
//     isLoginUser,
//     redirectPath = '/login',
//     children,
//   }) => {
//     console.log('isLoginUser Private comp', isLoginUser);
//     if (!isLoginUser) {
//       return <Navigate to={redirectPath} replace />;
//     }else
//     console.log('isLoginUser ELSE Private comp', isLoginUser);
  
//     return children ? children : <Outlet />;
//   };
 
// export default PrivateRoute