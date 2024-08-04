const { Navigate } = require("react-router-dom");


const PrivateRoute = () => {
      const authenticate = localStorage.getItem("token");
      if(!authenticate){
            localStorage.removeItem("token");
            return (<Navigate to={"/login"}/>)
      }
}

export default PrivateRoute