import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import { registerUser } from "../features/auth/authActions";
import axios from "../api/axios";
import "./Login.scss";
const RegisterScreen = () => {
  const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [radio, setRadio] = useState(null);

  useEffect(() => {
    // redirect authenticated user to jobs screen
    if (userInfo) navigate("/jobs");
    // redirect user to jobs page if registration was successful
    if (success) navigate("/jobs");
  }, [navigate, userInfo, success]);

  const submitForm = async (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError("Password mismatch");
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues in login

    if (data.avatar && data.avatar[0]) {
      let formData = new FormData();
      for(let i = 0; i < data.avatar.length; i++) {
        formData.append("files", data.avatar[i]);
      }
      let filesData = await axios.post(
        `${axios.defaults.baseURL}/upload/uploadFile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (filesData) {
        data.avatar = filesData.data[0].filename;
      } else {
        data.avatar = null;
      }
    }

    data.email = data.email.toLowerCase();
    data.interests = data.interests.split(",");
    data.role = radio;

    dispatch(registerUser(data));
  };

  const handleRadio = (e) => {
    setRadio(e);
  };

  return (
    <div className="login-parent">
      <div className="form-parent">
        {/* <div className='star'>
        <img src="./images/star.png" alt="" />
       
      </div> */}
        <div>
          <h1>Welcome to Register Page</h1>
          <p>
            Type your e-mail or phone number and password <br />{" "}
          </p>
        </div>
        <center>
          <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            {customError && <Error>{customError}</Error>}
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your name"
                {...register("name")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                placeholder="Enter your email"
                type="email"
                className="form-input"
                {...register("email")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                placeholder="Enter your password"
                type="password"
                className="form-input"
                {...register("password")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                placeholder="Enter your confirm password"
                type="password"
                className="form-input"
                {...register("confirmPassword")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo"></label>
              <input
                placeholder="Enter your contact Phone Number"
                style={{ background: "none" }}
                type="number"
                className="form-input"
                {...register("phoneNo")}
                required
              />
            </div>
            <div>
              <label htmlFor="companyName"></label>
              <input
                placeholder="Enter your company name"
                style={{ background: "none" }}
                type="text"
                className="form-input"
                {...register("companyName")}
              />
            </div>
            <div>
              <label htmlFor="designation"></label>
              <input
                placeholder="Enter your designation"
                style={{ background: "none" }}
                type="textarea"
                className="form-input"
                {...register("designation")}
              />
            </div>
            <div>
              <label htmlFor="interests"></label>
              <input
                placeholder="Enter your interest seprated by coulmn"
                style={{ background: "none" }}
                type="textarea"
                className="form-input"
                {...register("interests")}
                required
              />
            </div>
            <div>
              <label htmlFor="avatar"></label>
              <input
                style={{ background: "none" }}
                type="file"
                className="form-input"
                {...register("avatar")}
              />
            </div>
            <div>
              <input
                type="radio"
                name="role"
                onChange={(e) => handleRadio(e.target.value)}
                value={"Freelancer"}
                style={{ width: "40px" }}
              />{" "}
              Freelancer
              <input
                type="radio"
                name="role"
                onChange={(e) => handleRadio(e.target.value)}
                value={"Buyer"}
                style={{ width: "40px" }}
              />{" "}
              Buyer
            </div>
            <button type="submit" className="login" disabled={loading}>
              {loading ? <Spinner /> : "Register"}
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default RegisterScreen;
