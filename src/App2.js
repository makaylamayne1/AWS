// App.js

import React, { useState } from "react";
import StudyNoteTemplate from "./study_notes/study_note_template";
import "./App.css";

function App() {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        container={"m-3 "}
        containerStyle={"containerColor4"}
        title={"Learn Full Stack Development "}
        paragraph1={"Fake test"}
        link1={"Login"}
        route1={"login/login.js"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={`container`}
        title={"AWS SA-C03 Exam "}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={"m-3 "}
        containerStyle={"containerColor1"}
        title={"Section 1: "}
        link1={"EC2 Instances"}
        route1={"/section1/ec2_instance.js"}
        link2={"Types of Instances"}
        route2={"/section1/ec2_type.js"}
        link3="Instance Price"
        route3={"#"}
        link4={"EC2 AutoScaling"}
        route4={"/section1/EC2_autoscaling.js"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={"m-3 "}
        containerStyle={"containerColor1"}
        title={"Section 2: "}
        link1={"Organisations"}
        route1={"/section2/MAN_organisations.js"}
        link2={"Keys, Encryption and Security"}
        route2={"/section6/Services1.js"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={"m-3"}
        containerStyle={"containerColor1"}
        title={"Section 3:"}
        link1={"CIDR"}
        route1={"/section3/VPC_CIDR.js"}
        link2={"VPC and Terms to know"}
        route2={"/section3/VPC_Terms.js"}
        link3={"Endpoints "}
        route3={"/section3/VPC_endpoints.js"}
        link4={"VPN"}
        route4={"/section3/VPC_vpn.js"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={"m-3"}
        containerStyle={"containerColor1"}
        title={"Section 4: "}
        link1={"CloudFront"}
        route1={"/section4/CF_Cloudfront.js"}
        link2={"Amazon Kinesis"}
        route2={"/section4/CF_AmazonKinesis.js"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={"m-3"}
        containerStyle={"containerColor1"}
        title={"Section 5: "}
        link1={"EBS and Encryption"}
        route1={"/section5/Storage_BlockObject.js"}
        link2={"EFS"}
        route2={"/section5/Storage_EFS.js"}
        link3={"Storage Services (Databases)"}
        route3={"/section5/Storage_Services.js"}
        link4={"More services such as Backup"}
        route4={"/section5/Storage_AWSBackup.js"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        container={"m-3"}
        containerStyle={"containerColor1"}
        title={"Section 6:"}
        link1={"Questions 1 "}
        route1={"/section6/Services2.js"}
      ></StudyNoteTemplate>
    </div>
  );
}

export default App;
