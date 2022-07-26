import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalking,
  faDumbbell,
  faBellConcierge,
  faUserCheck,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck, faBell } from "@fortawesome/free-regular-svg-icons";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { PieChart } from "react-minimal-pie-chart";
import "react-circular-progressbar/dist/styles.css";
import image from "./images/img.jpg";
import "./App.css";

function App() {
  const details = [
    {
      userId: "1",
      name: "Charvie Sharma",
      email: "charviesharma@gmail.com",
      stepsWalked: "2547",
      stepsTarget: "4K",
      performedDate: "15 Oct",
      scheduledDate: "22  Oct",
      calorieIntake: "2547",
      calorieTarget: "2.5K",
      proteinConsumed: "10g",
      proteinTarget: "20g",
      carbConsumed: "500g",
      carbTarget: " 2547g",
      fatConsumed: "500g",
      fatTarget: "200g",
    },

    {
      userId: "1",
      name: "Charvie Sharma",
      email: "charviesharma@gmail.com",
      stepsWalked: "2547",
      stepsTarget: "4K",
      performedDate: "15 Oct",
      scheduledDate: "22 Oct",
      calorieIntake: "2547",
      calorieTarget: "2.5K",
      proteinConsumed: "10g",
      proteinTarget: "20g",
      carbConsumed: "500g",
      carbTarget: " 2547g",
      fatConsumed: "500g",
      fatTarget: "200g",
    },

    {
      userId: "1",
      name: "Charvie Sharma",
      email: "charviesharma@gmail.com",
      stepsWalked: "2547",
      stepsTarget: "4K",
      performedDate: "15 Oct",
      scheduledDate: "22 Oct",
      calorieIntake: "2547",
      calorieTarget: "2.5K",
      proteinConsumed: "10g",
      proteinTarget: "20g",
      carbConsumed: "500g",
      carbTarget: " 2547g",
      fatConsumed: "500g",
      fatTarget: "200g",
    },
  ];

  let data = [
    { title: "x", value: 2547, color: "#F5C90F" },
    { title: "x", value: 2547, color: "#03C7FC" },
    { title: "x", value: 2547, color: "#F45C84" },
  ];


  return (
    <div className="App">
      <div className="container">
        <div className="headings">
          <p className="box-1">
            <FontAwesomeIcon icon={faPersonWalking} style={{width: 13.85, height: 20}} /> Steps
          </p>
          <p className="box-2">
            <FontAwesomeIcon icon={faDumbbell} transform={{ rotate: 140 }} /> Workout
          </p>
          <p className="box-3">
            <FontAwesomeIcon icon={faBellConcierge} style={{width: 24, height: 19.2}}/> Nutrition
          </p>
        </div>
        {details.map((user, key) => {
          return (
            <div className="individualUser">
              <div className="user-image">
                <img src={image} style={{ height: 40, width: 39.68 }} />
              </div>
              <div className="user-name">
                {user.name}
                <div className="user-email">{user.email}</div>
              </div>

              <div
                className="Circular-progress-bar"
                style={{ width: 60, height: 60 }}
              >
                <CircularProgressbarWithChildren className="circular-bar"
                  value={66}
                  styles={{path: {
                    stroke: "#7FD18C"
                  }}}
                >
                  <div style={{ fontSize: 8, marginTop: 5, marginLeft: 16 }}>
                    <strong style={{ fontSize: 12 }}>{user.stepsWalked}</strong>{" "}
                    walked
                  </div>
                </CircularProgressbarWithChildren>
              </div>

              <div className="user-target">
                {user.stepsTarget}
                <div className="target">target</div>
              </div>

              <div className="date">
                <div >
                  <FontAwesomeIcon icon={faUserCheck} style={{marginRight: 2,marginTop: 2, height: 16.25}} /> {user.performedDate}
                </div>
                <div className="scheduled-date">
                  <FontAwesomeIcon icon={faCalendarCheck} style={{marginRight: 8,marginTop: 11.04, height: 21.13}} />{user.scheduledDate}
                </div>
              </div>

              <div className="angle-right">
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>

              <div className="Colored-progress-bar">
                <PieChart
                  center={[50, 50]}
                  data={data}
                  lengthAngle={360}
                  lineWidth={15}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                  labelPosition={65}
                  labelStyle={{
                    fontSize: "10px",
                    fontColor: "FFFFFA",
                    fontWeight: "800",
                  }}
                />
                <div className="colored-text">
                  {user.calorieIntake}
                  <div className="colories-text">calories</div>
                </div>
              </div>

              <div className="user-target">
                {user.calorieTarget}
                <div className="target">target</div>
              </div>

              <div className="rightmost angle-right rightmost">
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>

              <div className="bell-icon">
                
                  <FontAwesomeIcon icon={faBell} className="bell" />
    
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
