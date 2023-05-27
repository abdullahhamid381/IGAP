import React, { useEffect } from "react";
import "./Detailjob.scss";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import user from "../../assets/user.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getJobById } from "../../features/job/jobActions";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Banner from "../Homepage/Banner";
import { createBid } from "../../features/bid/bidActions";

const Detailjob = () => {
  const [job, setJob] = React.useState({});
  const userInfo = JSON.parse(localStorage.getItem("user"))
  const [bid, setBid] = React.useState({
    budget: 0,
    days: 0,
  });
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getJobById(id)).then((res) => {
      if (res.payload) {
        if (getJobById.fulfilled.match(res)) {
          setJob(res.payload.data);
        }
      }
    });
  }, [dispatch]);

  const handleBid = async () => {
    console.log(bid);
    dispatch(createBid({ jobId: id, ...bid }))
  };

  return (
    <div>
      <Banner />
      <div className="my-jobdetail-parent">
        <div>
          {(userInfo.role === "Admin" || userInfo.role === "Freelancer") && (
            <div className="Title-my-job" style={{ marginTop: "40px " }}>
              <p style={{ color: "rgb(128, 128, 128)", fontWeight: "normal" }}>
                Buyer
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <img
                  src={
                    job?.buyer?.avatar
                      ? `${axios.defaults.baseURL}/upload/image/${job.buyer.avatar}`
                      : user
                  }
                  alt=""
                  style={{ width: "5%" }}
                />
                <p
                  style={{ color: "rgb(128, 128, 128)", fontWeight: "normal" }}
                >
                  {job?.buyer?.name}
                </p>
              </div>
            </div>
          )}
          {(userInfo.role === "Admin" || userInfo.role === "Buyer") &&
            job?.freelancer && (
              <div className="Title-my-job" style={{ marginTop: "40px " }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img
                    src={
                      job?.freelancer?.avatar
                        ? `${axios.defaults.baseURL}/upload/image/${job.freelancer.avatar}`
                        : user
                    }
                    alt=""
                    style={{ width: "5%" }}
                  />
                  <p
                    style={{
                      color: "rgb(128, 128, 128)",
                      fontWeight: "normal",
                    }}
                  >
                    {job?.freelancer?.name}
                  </p>
                </div>
              </div>
            )}
          <div className="Title-my-job" style={{ marginTop: "40px " }}>
            <div>
              <p style={{ color: "rgb(128, 128, 128)", fontWeight: "normal" }}>
                Title
              </p>
            </div>
            <div>{job.title}</div>
          </div>

          <div className="description-section">
            <p className="description-title">About this job</p>
            <p className="description-detail">{job.description}</p>
          </div>

          {/* BUDJEt SECTION START HERE */}

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "20px",
            }}
          >
            <div className="budget-parent">
              <div style={{ display: "flex", gap: "5px" }}>
                <div>
                  <BsCurrencyDollar />
                </div>
                <div>
                  <h3>${job.requestedBudget}</h3>
                  <p
                    style={{ margin: "5px 0 0 0", color: "rgb(128, 128, 128)" }}
                  >
                    Fixed Price
                  </p>
                </div>
              </div>
              {/* <div style={{ display: 'flex', gap: '5px' }}>
                            <div>
                                <AiOutlineFieldTime />
                            </div>
                            <div>
                                <h3>Less than 30hrs/week</h3>
                                <p style={{ margin: '5px 0 0 0' }}>Hourly</p>
                            </div>
                        </div> */}
              <div></div>
            </div>
          </div>

          {/* PROJECT TYPE */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "20px",
              margin: "40px 0",
            }}
          >
            <h3>Project Type</h3>
            <div style={{ margin: "10px 0", display: "flex", gap: 20 }}>
              <p>
                <sapn style={{ color: "rgb(128, 128, 128) " }}>Category:</sapn>{" "}
                {job.category}
              </p>
              <p>
                <sapn style={{ color: "rgb(128, 128, 128)" }}>
                  SubCategory:
                </sapn>{" "}
                {job.subCategory}
              </p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "20px",
              margin: "40px 0",
            }}
          >
            <h3>Status</h3>
            <div style={{ margin: "10px 0", display: "flex", gap: 20 }}>
              <p>
                <sapn style={{ color: "rgb(128, 128, 128) " }}>Status:</sapn>{" "}
                {job.status === "created"
                  ? "Accepting Bids"
                  : job.status === "in-progress"
                  ? "In Progress"
                  : job.status}
              </p>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "20px",
              margin: "40px 0",
            }}
          >
            <h3>Attachments</h3>
            {job?.files && (
              <div style={{ margin: "10px 0" }}>
                {job?.files.map((file, index) => (
                  <div key={index} style={{ display: "flex", gap: 20 }}>
                    <p>
                      <sapn style={{ fontWeight: "bold", color: "green" }}>
                        File Name:
                      </sapn>{" "}
                      <a
                        href={`${axios.defaults.baseURL}/upload/${
                          file.format.split("/")[0] === "image"
                            ? "image"
                            : "file"
                        }/${file.name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {file.name}
                      </a>
                    </p>
                    <p>
                      <sapn style={{ fontWeight: "bold", color: "green" }}>
                        File Size:
                      </sapn>{" "}
                      {file.size} <span style={{ fontWeight: "bold" }}>kb</span>
                    </p>
                    <p>
                      <sapn style={{ fontWeight: "bold", color: "green" }}>
                        File Type:
                      </sapn>{" "}
                      {file.format}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ATTACHMENT SECTION */}
          {/* //TODO: This will be managed when a freelancer is delivering the project */}
          {/* <div style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '20px', margin: '40px 0' }}>
                    <h3>Choose the file (Optional)</h3>
                    <div style={{ margin: '10px 0' }}>
                        <input type="file" multiple={true} />
                    </div>
                </div> */}
          {/* {
 (
              <div>
                <button onClick={handleBid} className="apply">
                  Apply Now
                </button>
              </div>
            )} */}

          <>
            {/* Button trigger modal */}
            {           (userInfo.role==="Freelancer" && job.status === "created") && <button
              style={{
                border: "none",
                background: "rgb(255, 91, 55)",
                padding: "10px 20px",
                color: "white",
                borderRadius: "4px",
              }}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Apply Now
            </button>}
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div>
                    <center>
                      Days:{" "}
                      <input
                        type="number"
                        placeholder="Days"
                        style={{
                          border: "none",
                          outline: "none",
                          border: "1px solid gray",
                          marginLeft: "15px",
                          marginTop: "20px ",
                          borderRadius: "4px",
                        }}
                        onChange={(e) => setBid({ ...bid, days: e.target.value })}
                      />
                      <br />
                      Budget:{" "}
                      <input
                        type="number"
                        placeholder="Budget"
                        style={{
                          border: "none",
                          outline: "none",
                          border: "1px solid gray",
                          marginTop: "20px ",
                          borderRadius: "4px",
                        }}
                        onChange={(e) => setBid({ ...bid, budget: e.target.value })}
                      />
                    </center>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ background: "rgb(255, 91, 55)", border: "none" }}
                      onClick={handleBid}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "20px ",
            }}
            
          >
            <div>
              <h3>About the Client</h3>
              <p style={{ marginTop: "10px" }}>America</p>
              <p style={{ color: "gray", marginTop: "10px" }}>Calofornia</p>
              <p style={{ marginTop: "10px" }}>4 jobs posted</p>
              <p style={{ marginTop: "10px" }}>50$ total spents</p>
              <p style={{ color: "gray", marginTop: "10px" }}>
                2 hires, 0 Actives
              </p>
              <p style={{ color: "gray", marginTop: "30px" }}>
                Member Since 2019
              </p>
            </div>
          </div>

          <div>
            <button className="contact">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailjob;
