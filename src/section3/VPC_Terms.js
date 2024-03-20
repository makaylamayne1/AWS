import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import Woman1 from "./photo3/woman1.png";
import Woman2 from "./photo3/woman2.png";
import Internet_Gateway from "./photo3/InternetGateway.jpg";
import ENI from "./photo3/ENI.jpg";
import Default_Route from "./photo3/DefaultRoute.png";

import Data_Packet from "./photo3/DataPacket.png";
import ACL from "./photo3/ACL.png";
import Inter_region_peering from "./photo3/InterRegionPeering.png";
import NACL from "./photo3/NACL.png";
import WhyNAT from "./photo3/WhyNAT.png";
import NAT from "./photo3/NAT.png";
import PrivateIp from "./photo3/PrivateIP.png";
import Route from "./photo3/Route.png";
import VPCA from "./photo3/VPCAnswer.png";
import VPCQ from "./photo3/VPCQuestion.png";

import VPCQST1 from "./photo3/VPCQST1.png";
import VPCQST2 from "./photo3/VPCQST2.png";
import VPCQST3 from "./photo3/VPCQST3.png";
import YouTube from "react-youtube";
const VPC_Terms = () => {
  // Extract the video ID from the YouTube URL
  const videoId = new URL(
    "https://www.youtube.com/watch?v=8PxQiTiX3mg"
  ).searchParams.get("v");

  // YouTube video options
  // YouTube video options
  const opts = {
    height: "190",
    width: "240",
    playerVars: {
      autoplay: 0, // Set to 1 for autoplay
    },
  };

  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle="containerColor2"
        title={"What is a VPC?"}
      ></StudyNoteTemplate>

      <img className={"w-50 p-1 ml-3"} src={Woman1}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={
          "A Virtual Private Cloud (VPC) is a logically isolated section of a cloud provider's infrastructure that allows users to provision and manage their own virtualized network, enabling greater control over resources and enhanced security for cloud-based applications."
        }
      ></StudyNoteTemplate>
      <img className={"w-75 p-1 ml-3"} src={VPCQST1}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={"B is the answer"}
      ></StudyNoteTemplate>
      <img className={"w-75 p-1 ml-3"} src={VPCQST2}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={"A is the answer"}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"VPC Peering"}
        paragraph1={`You have two VPC's and you want to communicate with private IP addresses without going out to the internet? VPC uses the AWS global traffic between regions. This can be done with IPV6 and IPV4`}
        paragraph2={`Does not support TRANSITIVE ROUTING 
      Transitive routing refers to the capability of a network routing protocol to forward data between devices even if they are not directly connected, allowing communication through intermediate nodes.`}
        paragraph3={`Needs to do routing like A talks to B directly not like A talks to C through B`}
      ></StudyNoteTemplate>
      <img className={"w-100 p-1 ml-3"} src={Inter_region_peering}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Route Table"}
        paragraph1={
          "We use a route table to route the traffic to your VPC. Allows us to route an instance to the internet."
        }
        paragraph2={`
        The VPC infrastructure operates without a configurable router, using IP routing as a software function known as an implied router. This eliminates the need for configuring interface IP addresses 
        or dynamic routing protocols. Each route table in the VPC has one or more routes and at least one subnet association. If a subnet isn't 
        manually associated with a route table, AWS automatically links it to the main table. AWS also generates a main route 
        table when creating a VPC. When creating a route, you must specify the destination and target elements.`}
      ></StudyNoteTemplate>

      <img className={"w-75 p-1 ml-3"} src={Route}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Routes"}
        paragraph1={`
        Routes in a VPC determine the forwarding of traffic from instances within associated subnets, with destination-based (IP address) decision-making. To define a route, you must provide the destination (specified as an IP prefix in CIDR notation) and the target. The local route is mandatory and facilitates communication between instances in the same VPC.`}
      ></StudyNoteTemplate>
      <img className={"w-50 p-1 ml-3"} src={Default_Route}></img>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Internet Gateway"}
        paragraph1={
          "HAS NO MANAGEMENT IP ADDRESS → Performs NAT with public instances "
        }
        paragraph2={"you can only associate one Internet Gateway with a VPC "}
        paragraph3={
          " An Internet gateway is somewhat analogous to an Internet router an Internet service provider may install on-premises. But in AWS, an Internet gateway doesn’t behave exactly like a router."
        }
        paragraph4={`In a traditional network, you might configure your core router with
        a default gateway IP address pointing to the Internet router to give your servers access to the
        Internet.`}
      ></StudyNoteTemplate>
      <img className={"w-75 p-1 ml-3"} src={Internet_Gateway}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Subnet"}
        paragraph1={
          "Subnet is a container for a VPC that holds your EC2 instances. Subnets helps you isolate instances and once you launch an instance in a subnet you cannot move it. "
        }
        paragraph2={
          " Subnetting allows for efficient allocation of IP addresses. By dividing a network into smaller subnets, you can assign IP addresses based on the specific needs of each subnet, reducing IP address wastage."
        }
        paragraph3={
          "Subnets allow for the implementation of security measures and access controls at the subnet level. By segmenting the network, you can apply firewall rules, access lists, and other security mechanisms to control traffic between subnets and enhance network security. REMEMBER - *** A range of IP addresses in your VPC.***"
        }
        paragraph4={
          "VPC has a CIDR of 172.16.0.0/16, one of your subnets may have a CIDR of 172.16.100.0/24. This range covers 172.16.100.0–172.16.100.255, which yields a total of 256 addresses."
        }
        paragraph5={`AWS reserves the first four and last IP address in the subnet `}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Public Subnet "}
        paragraph1={`Any subnet that
        is associated with a route table containing a default route pointing to an Internet gateway
        is called a public subnet.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Private Subnet "}
        paragraph1={`
        A private subnet in AWS is a portion of a Virtual Private Cloud (VPC) where instances are not directly accessible from the internet. Instances in a private subnet can communicate with other resources within the same VPC, including those in public subnets, but they do not have a direct route to the internet. To enable internet access for instances in a private subnet, a Network Address Translation (NAT) gateway or NAT instance is typically used in conjunction with a public subnet. This design enhances security by isolating sensitive workloads from direct internet exposure while still allowing them to communicate with necessary resources.`}
      ></StudyNoteTemplate>
      <img className={"w-75 p-1 mb-3 ml-3"} src={NACL}></img>
      <img className={"w-75 p-1 ml-3"} src={ACL}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Security Group "}
        paragraph1={
          "You add it to a VPC and it has all the policies and rules to protect the VPC to your standards. "
        }
        paragraph2={` It serves as a set of inbound and outbound traffic rules, 
        controlling the communication to and from instances within the group. Each rule is defined based 
        on protocols, port ranges, and source or destination IP addresses. Security Groups are stateful, meaning that if you allow inbound traffic, the corresponding outbound traffic is automatically permitted, simplifying rule management.`}
      ></StudyNoteTemplate>
      <img className={"w-100 p-1 ml-3"} src={Data_Packet}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"SECURITY GROUP IS AT THE INSTANCE LEVEL"}
        paragraph1={
          "Stateful firewall (allows traffic going out to return automatically) "
        }
        paragraph2={`Only allow rules it does not have deny so that means that anything that ISN'T CLICKED ALLOW BY YOU is going to be DENIED`}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"NACL IS AT THE SUBNET LEVEL"}
        paragraph2={
          "Stateless firewall (checks for an allow rule for both connections so you need to make sure there is an inbound rule and outbound rule for traffic to flow in and out!)"
        }
        paragraph3={`Allow and deny rules. Rules are processed in order to keep track of things. It means once you reach a rule that allows or denies traffic the processing stops there.`}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"ENI (Elastic Network Interface) "}
        paragraph1={
          "ENI allows instance to communicate with other network resources including AWS services, instances etc… ENIs allow for dynamic configuration of network settings, such as IP addresses, security groups, and network interfaces, without requiring manual intervention or service disruption. This flexibility enables easy adaptation to changing network requirements, allowing instances to be moved or replaced while preserving their network configurations.  An instance must have a primary private IP address from the range specified by the subnet CIDR. The primary private IP address is bound to the primary ENI of the instance."
        }
      ></StudyNoteTemplate>
      <img className={"w-50 p-1 ml-3"} src={ENI}></img>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Can a subnet exist in more than one availability zone?"}
        paragraph1={
          "No but you can create availability by creating two subnets in different availability zones."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What does every instance have?"}
        paragraph1={"A primary IP address"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"0.0.0.0/0"}
        paragraph1={"prefix encompasses all IP addresses "}
        paragraph2={"including hosts on the internet "}
        paragraph3={
          "its listed as the destination in the default route... A private subnet does not have the public 0.0.0.0/0"
        }
      ></StudyNoteTemplate>

      <img className={"w-75 p-1 ml-3"} src={VPCQST3}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        paragraph1={`The answer is B... This approach will allow the EC2 instance to access the internet and download the monthly security updates while still being located in a private
subnet. By creating a NAT gateway and placing it in a public subnet, it will allow the instances in the private subnet to access the internet through
the NAT gateway. And then, configure the private subnet route table to use the NAT gateway as the default route. This will ensure that all
outbound traffic is directed through the NAT gateway, allowing the EC2 instance to access the internet while still maintaining the security of the
private subnet.`}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What is NAT?"}
        paragraph1={` NAT is Network Address Translation
        When a device in a private network wants to communicate with the internet, NAT translates the private IP address of the device into the public IP address of the NAT device.
        Outgoing traffic from multiple devices within the private network appears to come from a single public IP address.`}
        paragraph2={
          "The device in the PRIVATE NETWORK WANTS TO COMMUNICATE WITH THE INTERNET"
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"NAT Instance VS NAT Gateway?"}
        paragraph1={
          "Network Address Translation (NAT) is a crucial component in networking that allows multiple devices in a private network to share a single public IP address. This enhances security and helps in conserving public IP addresses. When it comes to implementing NAT in an AWS environment, two common options are NAT Instances and NAT Gateways."
        }
        paragraph2={
          "1. **NAT Instance:**\n\nNAT Instances are EC2 instances configured to perform Network Address Translation. They act as intermediaries between the private subnet and the internet. Some key points about NAT Instances include:\n\n- They can be deployed on the AWS marketplace or as a custom AMI (Amazon Machine Image).\n- You are responsible for the maintenance, security patches, and high availability of the NAT Instance.\n- It can be cost-effective for small to medium workloads with occasional internet access needs.\n\n2. **NAT Gateway:**\n\nNAT Gateway is a managed AWS service that provides high availability and automatic scaling. It is a fully-managed solution, and some important characteristics include:\n\n- NAT Gateways are region-specific and highly available within a specific availability zone.\n- AWS handles maintenance, scalability, and availability, reducing the operational overhead.\n- Suitable for workloads with higher traffic demands and a need for high availability.\n\nIn summary, while NAT Instances offer more control and customization, NAT Gateways provide a hassle-free, scalable, and highly available solution. The choice between them depends on the specific requirements and preferences of your AWS infrastructure."
        }
      />

      <img className={"w-100 mb-3 p-1 ml-3"} src={NAT}></img>
      <img className={"w-100 p-1 ml-3"} src={WhyNAT}></img>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"How to know if an IP is a Private IP? "}
        paragraph1={""}
      ></StudyNoteTemplate>

      <img className={"w-100 p-1 ml-3"} src={PrivateIp}></img>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Flow Logs"}
        paragraph1={
          "Lets you catch information flowing into your VPC, more specifically the IP traffic flowing to and from your network interfaces in the VPC..."
        }
        paragraph2={
          "A flow log can actually be created for a VPC, subnet or network interface. This data that you are watching will be sent to one of these: CloudWatch Logs, Amazon S3 or Amazon Kinesis Data Firehose"
        }
        paragraph3={
          "If you are now wondering what a network interface is: it is a hardware or software component that makes communication possible on a network. ENIs are virtual network interfaces that you can attach to instances in the AWS cloud. Each ENI is assigned a private IP address, MAC address, and can be associated with security groups and network ACLs (Access Control Lists)."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Principle of least priviledge "}
        paragraph1={"Give the minimum amount of access to information or resources required. Setting limits on what you can access."}
        paragraph2={`Say for example you have a question: A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure
        permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.
        Which solution meets these requirements?
        `}
        paragraph3={`The answer would be  Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the
        principal `}
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
        title={"Do this Question sheet!"}
        paragraph1={""}
      ></StudyNoteTemplate>
      <img className={"w-75 mb-3 p-1 ml-3"} src={VPCQ}></img>
      <img className={"w-75 p-1 ml-3"} src={VPCA}></img>
    </div>
  );
};
export default VPC_Terms;
