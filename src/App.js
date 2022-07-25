import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPersonWalking, faDumbbell, faBellConcierge, faUserCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck, faBell } from "@fortawesome/free-regular-svg-icons"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { PieChart } from "react-minimal-pie-chart";
import 'react-circular-progressbar/dist/styles.css';
import image from "./images/img.jpg";
import './App.css';


function App() {

  const details =[ 
    {userId: "1", name: "Charvie Sharma", email: "charviesharma@gmail.com", stepsWalked: "2547", stepsTarget: "4K", performedDate: "15 Oct",
    scheduledDate: "22  Oct",calorieIntake: "2547", calorieTarget: "2.5K", proteinConsumed: "10g", proteinTarget: "20g", 
    carbConsumed: "500g", carbTarget: " 2547g", fatConsumed: "500g", fatTarget: "200g" },
  
    {userId: "1", name: "Charvie Sharma", email: "charviesharma@gmail.com", stepsWalked: "2547", stepsTarget: "4K", performedDate: "15 Oct",
    scheduledDate: "22 Oct",calorieIntake: "2547", calorieTarget: "2.5K", proteinConsumed: "10g", proteinTarget: "20g", 
    carbConsumed: "500g", carbTarget: " 2547g", fatConsumed: "500g", fatTarget: "200g" },
  
    {userId: "1", name: "Charvie Sharma", email: "charviesharma@gmail.com", stepsWalked: "2547", stepsTarget: "4K", performedDate: "15 Oct",
    scheduledDate: "22 Oct",calorieIntake: "2547", calorieTarget: "2.5K", proteinConsumed: "10g", proteinTarget: "20g", 
    carbConsumed: "500g", carbTarget: " 2547g", fatConsumed: "500g", fatTarget: "200g" }
  ];

  let data = [
    { title: "Cats", value: 50, color: "#F5C90F" },
    { title: "Dogs", value: 25, color: "#03C7FC" },
    { title: "Birds", value: 40, color: "#F45C84" }
  ];
  
  const value = 2547/4000;

  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    // return an CSS hsl color string
    return 'hsl(' + c + ', 100%, 50%)';
  };

  return (
    <div className="App">
    <div className='container'>
    <div className='headings'>
    <p className='box-1'><FontAwesomeIcon icon={faPersonWalking} /> Steps</p>
    <p className='box-2'><FontAwesomeIcon icon={faDumbbell} /> Workout</p>
    <p className='box-3'><FontAwesomeIcon icon={faBellConcierge} /> Nutrition</p>
    </div>
    {details.map((user, key) => {
       return (
        <div className='individualUser'>
        <div className="user-image">
        <img src={image} style={{height: 40, width: 39.68 }}/>
        </div>
        <div className="user-name">
        {user.name}
        <div className="user-email">{user.email}</div>
        </div>


        <div className='Circular-progress-bar' style={{ width: 60, height: 60 }}>
        

        <CircularProgressbarWithChildren value={66} 
        styles={{
            trail: {
              strokeLinecap: 'butt',
              transform: 'rotate(-126deg)',
              transformOrigin: 'center center',
            },
            path: {
              strokeLinecap: 'butt',
              transform: 'rotate(-260deg)',
              transformOrigin: 'center center',
              stroke: '#7FD18C',
            },
            text: {
              fill: '#ddd',
              fontSize: '12',
            },
          }}>

  <div style={{ fontSize: 8, marginTop: 8, marginLeft: 17}}>
    <strong style={{fontSize: 12}}>{user.stepsWalked}</strong> walked
  </div>
</CircularProgressbarWithChildren>

        </div>
        
        <div className="user-target">
          {user.stepsTarget}
          <div className="target">target</div>
        </div>

        <div className="date">
        <div className="performed-date"><FontAwesomeIcon icon={faUserCheck} /> {user.performedDate}</div>
          <div className="scheduled-date"><FontAwesomeIcon icon={faCalendarCheck} /> {user.scheduledDate}</div>
        </div>
        
        <div className="angle-right">
        <div><FontAwesomeIcon icon={faAngleRight} /></div>
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
            fontWeight: "800"
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
        <div><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>

        <div className="bell-icon">
        <div className="bell"><FontAwesomeIcon icon={faBell} color="black"/></div>
        </div>

        </div>
       ); 
      })}
    </div>

    </div>
      
  );
}

export default App;
