import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import YouTube from "react-youtube";

import React, { useState } from "react";
import App2 from "./App2";
import Login from "./login/login.js"
//intro
import Who_am_i from "./introduction/WhoAmI.js";
//section 1
import Ec2_instance from "./section1/ec2_instance";
import EC2_type from "./section1/ec2_type";
import EC2_autoscaling from "./section1/EC2_autoscaling";

//section 2
import MAN_organisations from "./section2/MAN_organisations";

//section 3
import VPC_CIDR from "./section3/VPC_CIDR.js";
import VPC_Terms from "./section3/VPC_Terms.js";
import VPC_endpoints from "./section3/VPC_endpoints.js";
import VPC_vpn from "./section3/VPC_vpn.js";

//section 4
import CF_Cloudfront from "./section4/CF_Cloudfront.js";
import CF_AmazonKinesis from "./section4/CF_AmazonKinesis.js";

//section5
import Storage from "./section5/Storage_BlockObject.js";
import Storage_EFS from "./section5/Storage_EFS.js";
import Storage_Services from "./section5/Storage_Services.js";
import Storage_AWSBackup from "./section5/Storage_AWSBackup.js";
import Services2 from "./section6/Services2.js";

//section6
import Services1 from "./section6/Services1.js";
function App() {
  const [nightMode, setNightMode] = useState(false);
  const [timer, setTimer] = useState(true);

  function toggleNightMode() {
    setNightMode((prevNightMode) => !prevNightMode);
  }

  function toggleTimer() {
    setTimer((prevTimer) => !prevTimer);
  }

  const videoId = new URL(
    "https://www.youtube.com/watch?v=jg2glpJOgMU"
  ).searchParams.get("v");

  // YouTube video options
  // YouTube video options
  const opts1 = {
    height: "100",
    width: "150",
    playerVars: {
      autoplay: 1, // Set to 1 for autoplay
    },
  };

  return (
    <BrowserRouter>
      <div className={`App ${nightMode ? "night-mode" : "day-mode"}`}>

        <div className={` ${timer ? "youtubeStyle1" : "youtubeStyle2"}`}>
          <YouTube videoId={videoId} opts={opts1} />
         
        </div>

        <main>
          <Routes>
            <Route path="/introduction/WhoAmI.js" element={<Who_am_i />} />
            <Route path="/" element={<App2 />} />
            <Route
              path="/login/login.js"
              element={<Login/>}
            />
            <Route
              path="/section1/ec2_instance.js"
              element={<Ec2_instance />}
            />
            <Route path="/section1/ec2_type.js" element={<EC2_type />} />
            <Route
              path="/section1/EC2_autoscaling.js"
              element={<EC2_autoscaling />}
            />

            <Route
              path="/section2/MAN_organisations.js"
              element={<MAN_organisations />}
            />

            <Route path="/section3/VPC_CIDR.js" element={<VPC_CIDR />}></Route>
            <Route
              path="/section3/VPC_Terms.js"
              element={<VPC_Terms />}
            ></Route>
            <Route
              path="/section3/VPC_endpoints.js"
              element={<VPC_endpoints />}
            ></Route>
            <Route path="/section3/VPC_vpn.js" element={<VPC_vpn />}></Route>

            <Route
              path="/section4/CF_Cloudfront.js"
              element={<CF_Cloudfront />}
            ></Route>
            <Route
              path="/section4/CF_AmazonKinesis.js"
              element={<CF_AmazonKinesis></CF_AmazonKinesis>}
            ></Route>

            <Route
              path="/section5/Storage_BlockObject.js"
              element={<Storage></Storage>}
            ></Route>
            <Route
              path="/section5/Storage_EFS.js"
              element={<Storage_EFS></Storage_EFS>}
            ></Route>
            <Route
              path="/section5/Storage_Services.js"
              element={<Storage_Services />}
            ></Route>
            <Route
              path="/section5/Storage_AWSBackup.js"
              element={<Storage_AWSBackup />}
            ></Route>
            <Route
              path="/section6/Services1.js"
              element={<Services1 />}
            ></Route>
            <Route
              path="/section6/Services2.js"
              element={<Services2 />}
            ></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
