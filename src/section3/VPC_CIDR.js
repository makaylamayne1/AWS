import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import CIDR1 from "./photo3/CIDR1.png";
import CIDR2 from "./photo3/CIDR2.jpg";
import CIDR3 from "./photo3/CIDR3.png";

const VPC_CIDR = () => {
  return (
    <div className="container">
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Understanding CIDR Blocks"}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={
          "While important for exam preparation, it is advisable to focus efficiently on CIDR blocks. The exam primarily emphasizes selecting the correct AWS services and databases, rather than extensive IP address calculations."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Educational Video Resource"}
        link1={"Short CIDR Video"}
        route1={"https://www.youtube.com/watch?v=I_LXaIg6mkM"}
      ></StudyNoteTemplate>
      <img className="w-100 m-3" src={CIDR3} alt="CIDR Block"></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={
          "To calculate the available IP addresses, apply the formula: 2 to the power of the remaining bits. For instance, a /24 CIDR block has 8 bits left, resulting in 2^8 and 256 usable IP addresses."
        }
      ></StudyNoteTemplate>
      <img className="w-100 m-3" src={CIDR1} alt="CIDR Calculation"></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={`CIDR notation simplifies IP address allocation and is vital for VPC design, subnetting, and routing questions that may appear in the exam.`}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={`CIDR blocks facilitate the division of large IP address spaces into smaller subnets, allowing for better organization, management, and security within a network infrastructure. They play a crucial role in routing IP traffic across networks, providing scalability and efficiency.`}
        paragraph2={
          "Furthermore, CIDR blocks aid in IP address planning and management, helping administrators assign and track IP resources effectively. They are commonly used for defining firewall rules, security policies, and access control lists to control and restrict network access."
        }
      ></StudyNoteTemplate>
      <img className="w-100 m-3" src={CIDR2} alt="CIDR Usage"></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={
          "IPv6 CIDR blocks come with varying prefix lengths, such as /48, /56, and /64, depending on organizational needs. IPv6 CIDR blocks offer significantly more address space than IPv4, overcoming address exhaustion challenges."
        }
        paragraph2={`IPv6 adoption is increasing, and proper CIDR block management becomes crucial for efficient routing and address utilization, considering the extensive subnetting and allocation capabilities it provides.`}
        paragraph3={`It's important to note that IPv6 CIDR blocks provide a publicly routable prefix from the global unicast IPv6 address space, and the specific allocation is determined by ISPs.`}
      ></StudyNoteTemplate>
    </div>
  );
};

export default VPC_CIDR;
