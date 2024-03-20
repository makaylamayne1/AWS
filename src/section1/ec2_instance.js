import React, { useState } from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import EC21 from "./photo1/EC21.png";
import EC22 from "./photo1/EC22.png";
import EC23 from "./photo1/EC23.png";
import EC24 from "./photo1/EC24.png";
import EC25 from "./photo1/EC25.png";

const Ec2_instance = () => {
  const [showAnswersRight, setShowAnswersRight] = useState(false);
  const [showAnswersWrong, setShowAnswersWrong] = useState(false);

  if (showAnswersRight == true) {
    return (
      <div className={"container"}>
        <StudyNoteTemplate
          containerStyle={"containerColor2"}
          paragraph1={"Correct and amazing job!"}
        ></StudyNoteTemplate>
        <button
          onClick={() => {
            setShowAnswersRight(false);
          }}
        >
          go back
        </button>
      </div>
    );
  }
  if (showAnswersWrong == true) {
    return (
      <div className={"container "}>
        <StudyNoteTemplate
          containerStyle={"containerColor2"}
          paragraph1={
            "This is the wrong answer. m5.large instances are well-suited for hosting web servers that handle moderate to high levels of web traffic. They provide sufficient CPU and memory resources to serve web content efficiently."
          }
        ></StudyNoteTemplate>
        <button
          onClick={() => {
            setShowAnswersWrong(false);
          }}
        >
          go back
        </button>
      </div>
    );
  }
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title="What are EC2 Instances?"
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={
          "An instance is simply a self contained virtual server. There are many types of instances for different use cases: high performance computing, reading datasets, real-time analytics and more. "
        }
      ></StudyNoteTemplate>
      <img className={"w-100 p-3"} src={EC22} alt="EC2 Web" />
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={
          "An EC2 instance is a virtual operating system. They can be created on AWS using an Amazon Machine Image or created from scratch. An Amazon Machine Image (AMI) is a pre-configured virtual machine image used to create instances in Amazon Elastic Compute Cloud (EC2). It includes the operating system, software, configuration, and any data associated with the image."
        }
        paragraph2={
          "An instance is a virtual server for running applications (it is not the application, virtual server is a computer someplace else in the world that is running an operating system like like Windows or Linux. There are many different types of instances for different types of workloads. EC2 Instances are made available with Amazon Elastic Compute Cloud."
        }
        paragraph3={
          "Instances can help you run workloads that you otherwise wouldn't be able to in your local area. It is also very great for isolating environments as they have their own CPU, memory and storage... It's useful because one instance will not affect the speed or ability of other instances on the same physical server. Instances can help us run applications that our computer at home would not be able to handle. For example, we may not have enough memory to handle a certain application with our computer at home but if we use a memory intensive instance such as the R-series or X-series it would be able to run it nice and easily."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title="Amazon Machine Images are created from Snapshots of EC2 instances to create them again"
        paragraph1={
          "Public AMIs: These are provided by AWS and the community, available for anyone to use. They cover various operating systems and applications."
        }
        paragraph2={
          "Customization: AMIs can be customized with software installations, configuration changes, and even data before being saved as a new AMI. This allows you to create instances tailored to your needs."
        }
        paragraph3={
          "Fast Deployment: Using AMIs, you can quickly launch new instances with the same configuration as the original image. This makes scaling and provisioning instances more efficient."
        }
      ></StudyNoteTemplate>
      <img className={"w-50 p-3"} src={EC21} alt="EC2 Web" />
      <StudyNoteTemplate
        containerStyle="containerColor2"
        title={"Question time"}
        paragraph1={
          "You are developing a small application and need a cost-effective solution to host it. The application has modest resource requirements and does not need high performance. Which EC2 instance type would be a suitable and cost-effective choice for this scenario?"
        }
      ></StudyNoteTemplate>
      <button
        className={"m-6 btn btn-primary"}
        onClick={() => {
          setShowAnswersRight(true);
        }}
      >
        t3.micro
      </button>
      <button
        className={"m-6 btn btn-primary"}
        onClick={() => {
          setShowAnswersWrong(true);
        }}
      >
        m5.large
      </button>
      <br></br>
      <StudyNoteTemplate
        containerStyle="containerColor2"
        title={"Instance Store Volume"}
        paragraph1={"Locally attached storage for data caching"}
        paragraph2={"If instance is shut down all the data gets lost"}
        paragraph3={"It attaches to the instance"}
        paragraph4={
          "If your website involves batch processing or data analysis tasks that require temporary storage for intermediate results, instance store volumes could be beneficial. The high I/O performance of instance store volumes can accelerate data processing tasks"
        }
      >
        {" "}
      </StudyNoteTemplate>
      <img className={"w-25 p-1 ml-3"} src={EC23} alt="EC2 Web" />
      <img className={"w-25 p-1 "} src={EC24} alt="EC2 Web" />
      <img className={"w-25 p-1 "} src={EC25} alt="EC2 Web" />
      <StudyNoteTemplate
        containerStyle="containerColor2"
        title={"EBS Volume"}
        paragraph={
          "Unlike instance store volumes where the data is lost if the instance is terminated the data on an Elastic Block Storage Volume does not go away when instance is terminated."
        }
        paragraph2={
          "EBS volumes provide persistent storage that persists independently from the life of an EC2 instance. This means that even if an EC2 instance is terminated, the data on the EBS volume remains intact, and you can attach it to another instance."
        }
        paragraph3={
          "These volumes are for backing up data. They can back up data on a schedule to help reduce data loss."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle="containerColor2"
        title={"An EBS-based Amazon Machine Image (AMI) "}
        paragraph1={
          "EBS-based AMI uses Amazon Elastic Block Store (EBS) snapshots as the storage mechanism."
        }
        paragraph2={
          "Root Volume Storage:EBS volumes serve as the root device for instances in EBS-based AMIs."
        }
        paragraph3={
          "EBS-based AMIs use EBS volumes as the root device for instances. The instance's root filesystem is stored on an EBS volume. This configuration provides increased durability and the flexibility to detach and attach volumes to different instances. Offers advantages over instance store-backed AMIs, including data persistence and the ability to create consistent snapshots for backup and recovery. Provides enhanced durability and allows detachment/attachment of volumes to different instances."
        }
        paragraph4={
          "For example you could have a website and you need to store the product catalog storage... You could store information for the product catalog on an EBS volume. Boot Volume: The boot volume is stored on the ROOT volume. The ROOT volume has information about operating system, web server configurations, and application code. Keeping this ROOT VOLUME SAFELY STORED it allows us to replace the instance easily if something terrible were to happen..."
        }
      ></StudyNoteTemplate>
      <button className={"styleButton"}><a href={"/"}>back to section page</a></button>
      <button className={"styleButton"} > <a href={"/section1/ec2_type.js"}>next</a></button>
    </div>
  );
};

export default Ec2_instance;
