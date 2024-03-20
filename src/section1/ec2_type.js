import React, { useState } from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";

import Parallel from "./photo1/ParallelProcessing.png";
import Woman1 from "./photo1/Woman1.png";

const EC2_type = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Instance Type"}
      ></StudyNoteTemplate>
      <img className={"w-25 p-1 ml-3"} src={Woman1}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"List"}
        paragraph1={
          "Here are the instances you should know for the exam you don't have to know every single one but you should have a general idea:"
        }
      ></StudyNoteTemplate>
  
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"t3.micro"}
        paragraph1={
          "Popular for newbies to use this instance. It is for low traffic applications."
        }
        paragraph2={
          "Lightweight workloads only! It has only 1 GB of memory... it belongs to t3 family which is categorized as the Burstable Performance Instances. "
        }
      ></StudyNoteTemplate>
   
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title="m5.large"
        paragraph1={
          "m5 family is for the General Purpose Instances and they offer a good balance of compute, memory and networking resources."
        }
        paragraph2={
          "They are good for medium or even small databases and applications!"
        }
        paragraph3={"High network performance."}
      ></StudyNoteTemplate>
  
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"c5.xlarge"}
        paragraph1={
          "Compute Optimized Instances are for high performance compute intensive workloads. So you will use this type of instance when you are doing some sort of task that needs a lot of computational power such as data analytics."
        }
        paragraph2={
          "My husband who is an economist probably should learn how to run an instance of this type due to the fact that he had to use a computer at his univerity could not handle the 20 years of data he was trying to analyze from an excel spreadsheet for one of his PHD papers. Every few days he would go to the school and attempt to run the data, for a few years to be analyzed through the machine it would take a couple hours. An AWS instance would be better for this task!! Let PHD students know!"
        }
      ></StudyNoteTemplate>
      <img className={"w-25 p-1 ml-3"} src={Parallel}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"p3"}
        paragraph1={
          "Accelerated Computing Instances are for high performance computing needs such as Machine learning or deep learning and for cases such as training neural networks"
        }
        paragraph2={
          "VERY large scale data processing tasks with high-performance GPU capabilities for parallel processing tasks (when handling a task all in synchronization to get it done faster) In the image above you can see a bunch of people working together just like a parallel processing task!"
        }
      ></StudyNoteTemplate>
  
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"r"}
        paragraph1={
          "This is a memory optimized instance family that is for database analytics and data mining processes. Medium sized databases are for this family. If you have a need for a high input/output rate you may need to choose an instance like this one... You can run apps that need these I/O requirements such as Oracle or other database servers. The R represents RAM! Random Access MEMORY"
        }
        paragraph3={
          "You can make it have even 768 GB of RAM (That's a lot by the way... and if YOU REAAALLY want to handle some big time analytics you could go for an R5 or R6 series... Ah, I am getting carried away. What to take from this? You don't have to know EVERYTHING about every instance family its just good to know a bit."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Learning more about the instance families"}
        route1={
          "https://blogs.vmware.com/cloudhealth/aws-instance-types-and-comparison/#:~:text=AWS%20instance%20families%201%20General%20Purpose%20%28A1%2C%20T2%2C,G4%29%205%20Storage%20Optimized%20%28D2%2C%20H1%2C%20I3%2C%20I3en%29"
        }
        link1={"Learn more"}
        route2={
          "https://www.nakivo.com/blog/the-definitive-guide-to-aws-ec2-instance-types/#:~:text=R%20is%20the%20instance%20family%20or%20instance%20class,can%20belong%20to%20only%20one%20EC2%20instance%20type"
        }
        link2={"Learn even more"}
      ></StudyNoteTemplate>
      <button className={"styleButton"}><a href={"/"}>back to section page</a></button>
      <button className={"styleButton"}>  <a href={"/section1/ec2_autoscaling.js"}>next</a></button>
    </div>
  );
};

export default EC2_type;
