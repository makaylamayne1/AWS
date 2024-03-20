import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import Prefix_List from "./photo3/PrefixList.png";
import VPCQST4 from "./photo3/VPCQST4.png"
const VPC_endpoints = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Gateway Endpoint "}
        paragraph1={
          "We could use this for S3 & DynamoDB... NOT COMMUNICATE WITH A WIDE RANGE OF SERVICES"
        }
        paragraph2={
          "To secure a VPC endpoint, implement fine-grained access control through IAM policies, configure endpoint policies, and restrict unnecessary permissions, ensuring only authorized entities can access the specified AWS service within the VPC."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Interface Endpoint "}
        paragraph1={
          "For other services when we do not want to use a public IP and we are using an ENI so we don't have to use NAT to connect to the service PRIVATELY WITH A PRIVATE IP ADDRESS"
        }
        paragraph2={"You use security groups to control traffic"}
        paragraph={"COMMUNICATE WITH A RANGE OF SERVICES"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Endpoints can be used when "}
        paragraph1={
          "When we don't want to use a NAT gateway and we want to communicate to services such as S3 privately. So we are not using the PUBLIC INTERNET!!"
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Gateway endpoints are used for only?"}
        paragraph1={"S3 and DynamoDB"}
   
      ></StudyNoteTemplate>

      <img className="w-100 m-3" src={Prefix_List}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Prefix List"}
        paragraph1={`
        In AWS, a prefix list is represented by a unique ID, such as pl-0123456789abcdef0. It's essentially a named list of IPv4 or IPv6 CIDR blocks (address ranges) associated with that ID.`}
        paragraph2={
          "A prefix list is a collection of one or more IP address prefixes (CIDR blocks) that are grouped together for the purpose of simplifying the management of network-related policies in cloud environments, such as AWS (Amazon Web Services). The primary use of prefix lists in AWS is for controlling access to resources through security groups, route tables, and network ACLs."
        }
        paragraph3={`For example, you might use a prefix list in a security group rule to allow traffic only from a specific set of IP addresses or in a route table to direct traffic through specific paths. By organizing and referencing CIDR blocks in a prefix list, it becomes easier to manage and update network policies in a more centralized manner.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Are Gateway Endpoints used over the public internet?"}
        paragraph1={"Gateway Endpoints are used within the AWS network. Traffic between your VPC and the AWS service does not leave the Amazon network, enhancing security by avoiding public internet routes."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What are NAT devices or NAT gateways communicating over then?"}
        paragraph1={"NAT (Network Address Translation) devices in the context of AWS and other network environments are used to enable instances in a private subnet to connect to the internet or other external services while preventing the internet from initiating a connection with those instances"}
        paragraph2={"NAT devices in AWS communicate over the internet by translating private IP addresses to a public IP address, allowing outbound internet communication for instances in a private subnet while maintaining their security and privacy."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon Gateway API"}
        paragraph1={"AWS API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the front door for applications to access data, business logic, or functionality from your backend services."}
        paragraph2={"For HTTPS REST calls such as PUT or DELETE"}
        paragraph3={"For calls to a database from the web for example..."}
        paragraph4={`An API call is a request sent to a server using an Application Programming Interface (API) to retrieve data or perform an operation. It typically involves sending a request to a web server using HTTP or HTTPS protocols, and it can include operations like reading, creating, updating, or deleting data. The server processes the request and sends back a response, which can be data in formats such as JSON or XML, status information, or error messages.`}
      ></StudyNoteTemplate>


<img src={VPCQST4} className={"w-50 mt-3 ml-6"}></img>
<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is A and C "}
        paragraph1={""}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Bucket Policy"}
        paragraph1={"Resource-based policy that you attach to an Amazon S3 bucket. "}
        paragraph2={`It provides centralised aaccess control to buckets and objects based on conditions`}
    
    ></StudyNoteTemplate>
      
<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>
    </div>

  );
};

export default VPC_endpoints;
