import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import Spinner from "../Spinner";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { registerUser } from "../../features/auth/authActions";
import axios from "../../api/axios";
import "./Create.scss";
import { createJob } from "../../features/job/jobActions";
import { getCategory } from "../../features/category/categoryActions";


const Create = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [customError, setCustomError] = useState(null);

  const { loading, error, jobs } = useSelector(
    (state) => state.jobs
  );
  const categories = useSelector(state => state.category);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategory({}));
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory("");
    setSubCategories(categories.category.find(category => category.name === e.target.value).subCategories);
  }


  const submitForm = async (data) => {
    //checking if some files were selcted or not if yes then upload them then get the data and set it with data for job creation
    if (data.files && data.files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < data.files.length; i++) {
        formData.append("files", data.files[i]);
      }

      const filesData = await axios.post("/upload/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      //getting the data from the files and setting it with data for job creation
      data.files = filesData.data.map((file) => {
        return {
          name: file.filename,
          format: file.mimetype,
          size: file.size / 1000,
        };
      });
    }

    data.requestedDays = parseInt(data.requestedDays);
    data.requestedBudget = parseInt(data.requestedBudget);
    data.category = category;
    data.subCategory = subCategory;
    console.log(data);
    dispatch(createJob(data));
  };

  return (
    <div className="login-parent">
      <div className="form-parent">
        {/* <div className='star'>
        <img src="./images/star.png" alt="" />
       
      </div> */}
        <div>
          <h1>Welcome to job create page</h1>
          <p>
            Create your job <br />{" "}
          </p>
        </div>
        <center>
          <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            {customError && <Error>{customError}</Error>}
            <div className="form-group">
              <label htmlFor="title"></label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your title"
                {...register("title")}
                required
              />
            </div>
            <div>
              <label htmlFor="description"></label>
              <input
                placeholder="Enter your description"
                style={{ background: "none" }}
                type="textarea"
                className="form-input"
                {...register("description")}
                required
              />
            </div>
            <div>
              <label htmlFor="requestedBudget"></label>
              <input
                placeholder="Enter your budget"
                style={{ background: "none" }}
                type="number"
                className="form-input"
                {...register("requestedBudget")}
                required
              />
            </div>
            <div>
              <label htmlFor="requestedDays"></label>
              <input
                placeholder="Enter your number of days"
                style={{ background: "none" }}
                type="number"
                className="form-input"
                {...register("requestedDays")}
                required
              />
            </div>

            <div>
              <label htmlFor="number"></label>
              <input
                style={{ background: "none" }}
                type="file"
                className="form-input"
                {...register("files")}
                multiple
              />
            </div>
            {/* <div>
      <label htmlFor='number'></label>
        <input  style={{background:'none'}}
          type='file'
          className='form-input'
          {...register('photo')}
          required
        />
      </div>
      <div>
      <label htmlFor='number'></label>
        <input  style={{background:'none'}}
          type='file'
          className='form-input'
          {...register('photo')}
          required
        />
      </div> */}
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  label="Age"
                  onChange={handleCategoryChange}
                  placeholder="Category"
                >
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  {categories.category.map((category) => 
                    <MenuItem value={category.name}>{category.name}</MenuItem>
                  )}
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  placeholder="Sub Category"
                  inputProps={{ "aria-label": "Without label" }}
                >
                 {
                    subCategories.map((category) =>
                    <MenuItem value={category}>{category}</MenuItem>
                    )
                 } 
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
            </div>
            <button type="submit" className="login" disabled={loading}>
              {loading ? <Spinner /> : "Create"}
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Create;
