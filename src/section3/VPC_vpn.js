import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import VPC_Question_Site_to_Site from "./photo3/VPCQuestionSitetoSite1.png";
import YouTube from "react-youtube";

const VPC_vpn = () => {
  const videoId = new URL(
    "https://www.youtube.com/watch?v=xlTHkoKR-Os"
  ).searchParams.get("v");

  // YouTube video options
  // YouTube video options
  const opts1 = {
    height: "300",
    width: "380",
    playerVars: {
      autoplay: 0, // Set to 1 for autoplay
    },
  };
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"VPN"}
        paragraph1={""}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={
          "A VPN IS RUN OVER THE INTERNET! To connect privately with high bandwidth without going on the public internet you could use Direct Connect"
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"VPN Client Connection"}
        paragraph1={
          "Encrypted VPN's are encrypted end to end. They are associated with subnets. The VPN is associated into the subnet and the VPN endpoint."
        }
        paragraph2={`
                A VPN, or Virtual Private Network, is a technology that establishes a secure and encrypted connection over the internet, allowing users to access a private network from a remote location as if they were physically present at the same location.`}
        paragraph3={
          "You can communicate to EC2 instances with a VPN directly using PRIVATE IP ADDRESSES"
        }
        paragraph4={"Connects with SSL/TLS (port 443)"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Site-to-Site VPN"}
        paragraph1={`
                A site-to-site VPN establishes a secure and encrypted connection between two or more physical locations or networks, allowing seamless communication as if they are on the same local network.`}
        paragraph2={`Can be used for example when we want to connect all the different departments of an office to the main office.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What questions look like on the exam:"}
        paragraph1={
          "Please be prepared to practice for the test. We will start practicing with what we know soon!"
        }
      ></StudyNoteTemplate>

      <img className={"w-75 p-1 ml-3"} src={VPC_Question_Site_to_Site}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"^^^The answer is B"}
        paragraph1={
          "We will talk more about all these services later. We are focusing on the services before jumping back and forth between questions."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"VPN CloudHub"}
        paragraph1={""}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Direct Connect (Not a VPN)"}
        paragraph1={
          "There are direct connect location with a cage and there is a customer or partner cage, they will have a router and you need connectors (dx port) and then you communicate between these two connections with this port! It is a physical CONNECTION. They then connect to your AWS region. There are many benefits: private connectivity, increase speed, better bandwidth, for those who transfer lots of data it can be cost effective but it is considered expensive. DX CONNECTIONS ARE NOT ENCRYPTED. NOT A FEATURE  -> CREATE AN IPSEC SITE-TO-SITE VPN TO MAKE TRAFFIC PRIVATE"
        }
        paragraph2={`IPSEC VPN? IPsec (Internet Protocol Security) site-to-site VPN, or simply IPsec VPN, is a technology that allows secure communication between two or more networks over the internet. `}
        paragraph3={`IPSEC IS? A bunch of rules for how we are going to transfer the data over the internet. It authenticates and encrypts data packets. IPSEC is for security.`}
        paragraph4={`
        IPsec stands for "Internet Protocol Security." It is a comprehensive suite of protocols and standards used to secure internet communication by authenticating and encrypting each data packet during transmission. IPsec operates at the network layer of the OSI model and is commonly employed in virtual private networks (VPNs) to establish secure connections over the internet.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Direct Connect Gateway"}
        paragraph1={
          "The Direct Connect Gateway is a centralized hub that simplifies connectivity. Instead of setting up individual Direct Connect connections for each VPC or AWS account, you can connect them all to the same Direct Connect Gateway. This makes it easier to manage and scale your network architecture."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Transit Gateway"}
        paragraph1={"Interconnects VPCs. "}
      ></StudyNoteTemplate>
      <div className={"youtubeStyle3"}>
        <YouTube videoId={videoId} opts={opts1} />
      </div>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={
          "How does Transit Gateway work well with DX Gateway(Direct Connect)?"
        }
        paragraph1={
          "Transit Gateway and DX Gateway integration allows organizations to efficiently connect their on-premises networks to multiple Amazon Virtual Private Clouds (VPCs) through a centralized hub. Transit Gateway serves as a hub for routing traffic between connected networks, providing a scalable and simplified architecture for network connectivity in AWS."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>
    </div>
  );
};
export default VPC_vpn;
