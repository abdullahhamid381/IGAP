import React from "react";
import "./Getjob.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../features/job/jobActions";
import Banner from "../Homepage/Banner";
import { getMyJobs } from "../../features/myJob/myJobActions";
import MyBid from "../MyBid/MyBid";
import { getMyBids } from "../../features/bid/bidActions";
const Getjob = () => {
  const jobs = useSelector((state) => state.jobs);
  const myJobs = useSelector((state) => state.myJobs);
  console.log(myJobs);
  const [selected, setSelected] = React.useState("New Jobs");
  const { userInfo } = useSelector((state) => state.auth);
  const myBids = useSelector((state) => state.bid);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (jobs.jobs.length === 0) {
      dispatch(getJobs({}));
    }
   if(userInfo?.role==="Freelancer"){
    if (myJobs.jobs.length === 0) {
      dispatch(getMyJobs({}));
    }
    if (myBids.bids.length === 0) {
      dispatch(getMyBids({}));
    }
   }
  }, [dispatch]);

  const handleSelected = (e) => {
    setSelected(e.target.innerText);
    if (e.target.innerText === "New Jobs") {
      setSelected("New Jobs");
    }
    if (e.target.innerText === "My Jobs") {
      setSelected("My Jobs");
    }
    if (e.target.innerText === "My Bids") {
      setSelected("My Bids");
    }
  };

  return (
    <div className="getjob-parent">
      <Banner />
      <div>
        <center>
          <h1>View All Jobs</h1>
        </center>
        {userInfo?.role === "Freelancer" && (
          <div
            onClick={handleSelected}
            style={{ display: "flex", justifyContent: "center", gap: 10 }}
          >
            <div
              onClick={handleSelected}
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                padding: 10,
                borderWidth: 2,
                borderColor: selected === "New Jobs" ? "blue" : "transaprent",
                color: "white",
                cursor: "pointer",
              }}
            >
              New Jobs
            </div>
            <div
              onClick={handleSelected}
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                padding: 10,
                borderWidth: 2,
                borderColor: selected === "My Jobs" ? "blue" : "transaprent",
                color: "white",
                cursor: "pointer",
              }}
            >
              My Jobs
            </div>
            <div
              onClick={handleSelected}
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                padding: 10,
                borderWidth: 2,
                borderColor: selected === "My Bids" ? "blue" : "transaprent",
                color: "white",
                cursor: "pointer",
              }}
            >
              My Bids
            </div>
          </div>
        )}
      </div>
      <div>
        {selected === "New Jobs" || selected === "My Jobs"
          ? (selected === "New Jobs" ? jobs : myJobs).jobs.map((item) => (
              <div className="card">
                {/* <img src={} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div style={{ display: "flex", gap: "40px " }}>
                    <p>Days: {item.requestedDays} </p>
                    <p>Budget: ${item.requestedBudget}</p>
                  </div>
                  <div style={{ display: "flex", gap: "40px " }}>
                    <p>Cata: {item.category} </p>
                    <p>Subcata: {item.subCategory}</p>
                  </div>
                  <div style={{ marginTop: "20px " }}>
                    <Link
                      to={`/jobdetail/${item._id}`}
                      style={{
                        background: "rgb(255, 91, 55)",
                        color: "white",
                        textDecoration: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                      }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : myBids.bids.map((item) => (
              <MyBid
                jobTitle={item.job.title}
                jobDesc={item.job.description}
                bidDays={item.days}
                bidBudget={item.budget}
              />
            ))}
      </div>
    </div>
  );
};

export default Getjob;
