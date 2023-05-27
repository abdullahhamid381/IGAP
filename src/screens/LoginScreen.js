import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";
import { useEffect } from "react";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import "./Login.scss";
const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/jobs");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <div className="login-parent">
      <div className="form-parent">
        {/* <div className='star'>
          <img src="./images/star.png" alt="" />
         
        </div> */}
        <div>
          <h1>Welcome to Login Page</h1>
          <p>
            Type your e-mail or phone number and password <br /> .
          </p>
        </div>
        <center>
          <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-input"
                {...register("email")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-input"
                {...register("password")}
                required
              />
            </div>

            <button type="submit" className="login" disabled={loading}>
              {loading ? <Spinner /> : "Login"}
            </button>
            <br />
          </form>
        </center>
      </div>
    </div>
  );
};

export default LoginScreen;
