import React, { useState } from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import QST1 from "./photo1/QST1.png"


const EC2_autoscaling = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Autoscaling"}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What is it?"}
        paragraph1={`
          Its simple, autoscaling is scaling a group of instances based on the requirements you set them such as web traffic. You could have a policy that says for example if there is more than 50% web traffic users on the site than scale up the instance groups by 4... Make sense?
        `}
        paragraph2={`
          Now let's learn about autoscaling and things that will relate to it on the exam. Autoscaling is really important to know and I will also include some additional vocabulary to add to your brain.
        `}
        paragraph3={`
          Just remember: Auto Scaling in Amazon Web Services (AWS) automatically adjusts the number of instances in a group to handle changes in demand, ensuring optimal performance and cost efficiency.
        `}
      ></StudyNoteTemplate>
  
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Target Group"}
        paragraph1={`
          A target group is a logical grouping of targets, which can be Amazon EC2 instances, IP addresses, or other resources that can receive traffic. Targets are registered with a target group, and the load balancer routes incoming requests to these targets based on the configured routing rules.
        `}
        paragraph2={`
          Say for example you are using HTTPS or HTTP traffic... The user types into their browser www.makaylasnotes.com/learn the traffic will then be routed to a certain target group based on what they put after the slash. Different target groups could be for  makaylasnotes.com/questions makaylasnotes.com/review makaylasnotes.com/cram
        `}
        paragraph3={`
          For Application Load Balancers (ALB), target groups support path-based routing. This means that different paths in the URL can be directed to different target groups, enabling more granular control over how requests are distributed based on the URL path.
        `}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Network Load Balancer"}
        paragraph1={`
          Network load balancers also use target groups similar to HTTPs except they are using layer 4 UDP and TCP traffic (ip addresses for example)
        `}
        paragraph2={`
          Network Load Balancers (NLB) in AWS perform routing based on the Transport Layer (Layer 4) of the OSI model, focusing on IP addresses and ports.
          For example makaylanotes.com:8080 in this case the target group is routed with the port 8080... Very simple.
          NLB uses port numbers to determine how to route traffic. Each target group associated with an NLB can handle requests
          on a specific port or range of ports. For example, makaylanotes.com:8080 indicates that NLB routes traffic to the target group
          associated with port 8080. Certain port numbers are reserved for specific well-known services. For example, port 80 is commonly
          associated with HTTP (web traffic), port 443 with HTTPS (secure web traffic), and port 22 with SSH (secure shell).
          So routing based on port numbers allows us to route based on different applications and services.
        `}
        paragraph3={
          "For the exam if it says NLB you should look for TCP and UDP traffic. UDP traffic is low latency and can be used for real time gaming or real time analytics."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Query String"}
        paragraph1={`
        Query String  is used for sending data to the server, such as 
        form inputs or user preferences. For example, ?search=keyword might be used to specify a search term.
        ? indicates the start of a query string 
        https://www.example.com/path/to/resource?name=value&age=25&city=example
        It can be used for passing data that was input into a form or even filtering data
        `}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Simple Scaling "}
        paragraph1={`Simple conditions to scale the instance group up or down
        For example when web traffic is more than 50% 
        Specify the number of instances to add when scaling up.
        Choose a cooldown period to prevent rapid and unnecessary scaling actions.
        `}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"CoolDown Period in Scaling"}
        paragraph1={`
        A cooldown period is like a break time for an auto-scaling system. After it makes a change, such as adding or removing instances in response to increased or decreased demand, it takes a short break before deciding to make more changes. This break allows the system to stabilize and ensures that it doesn't make rapid, back-to-back adjustments, giving the environment time to settle. It's a way to prevent the system from constantly reacting to small fluctuations in usage.
        The default cooldown period is 300 seconds... `}
      ></StudyNoteTemplate>
      <div className="ml-4">
   
      </div>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Dynamic Scaling "}
        paragraph1={`Dynamic Scaling uses CloudWatch alarms to determine when to scale up or down. It scales based on the amount of traffic. For example, 
        when a scaling policy is invoked, the number of instances will increase or decrease accordingly.
         You set minimum and maximum size limits. For instance, you may have 10 instances running with a maximum capacity of 12 instances.
        When the traffic on your website exceeds 70%, you can create a policy that adds 2 capacity units to the group.
         Now, you have 12 instances running, allowing you to effectively handle the increased traffic.
         `}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Scheduled Scaling "}
        paragraph1={
          "Define when  the autoscaling group will scale each day... For example there may be more traffic during the morning so we should schedule a scale up of instances in the morning."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What does it mean to Elastically Scale? "}
        paragraph1={
          "It means to be able to adapt to instance traffic with load balancing. This could be done with compute or networking infrastructure."
        }
        paragraph2={
          "Elastic Scaling makes sure our application is handled in a way that it won't crash and to manage cost as we only use the amount of instances that we need because it scales up and down based on the needs of the application"
        }
        paragraph3={
          "Elastic scaling is basically adjusting the amount of instance based on an applications needs or the amount of web traffic with a load balancer. Read the full article :https://avinetworks.com/glossary/elastic-scale/"
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Cross Zone Load Balancing "}
        paragraph1={
          "Distribute traffic EVENLY across different availability zones.  These availability zones can have uneven amounts of traffic but you can enable cross zone load balancing to evenly distribute the traffic across backend instances. "
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Session State Session Stickiness "}
        paragraph1={
          "Session stickiness is a mechanism employed in load balancing scenarios to direct a user's requests consistently to the same server during their session. This is particularly crucial in scenarios where session state data, such as authentication information, needs to persist throughout the user's interaction with the application. "
        }
        paragraph2={`
        Several mechanisms are employed to implement sticky sessions with one of the most common being the 
        use of HTTP cookies. When a user initially connects to a server, 
        the server sets a unique session identifier in a cookie. Subsequent 
        requests from the same user include this cookie, allowing the load 
        balancer to recognize the user and direct the request to the server associated with their ongoing session.
        Another approach involves IP address-based affinity, where the load balancer uses the source IP
         address of the incoming request to determine which server should handle the request. While this
          method is simpler, it may encounter challenges 
        in scenarios where users are behind network address translation (NAT) devices or proxy servers.
        DynamoDB table can be used to store session state data. 
        Session state data is authentication data 
        Elasticache can also store this type of data. Elasticache significantly reduces the latency associated with fetching session data from a traditional database. 
        Sticky sessions could also be stored into an external store with more latency. `}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"SSL Certificate "}
        paragraph1={
          "It encrypts data such as passwords and personal information in transit." +
          "It creates a secure connection between the server and the user's browser. " +
          "Both the server and browser of the user can agree to have secure encrypted communication in transit." +
          "This is a safe way to transmit data."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"LifeCycle Hook"}
        paragraph1={
          "The lifecycle hook provides a certain amount of time to wait for the action to complete before moving on to the next state."
        }
        paragraph2={`For example a lifecycle hook can be added when we have an instance refresh (we are replacing instances)
        When a lifecycle hook is triggered, it temporarily pauses the state transition of the instance. This means that the Auto Scaling Group doesn't immediately proceed to the next state (e.g., from launching to running, or from terminating to terminated).`}
        paragraph3={`There is then a specific period of time to perform actions when the instance is in "waiting" state due to the lifecycle hook 
        In this time you may for example perform the setup on a newly launched instance.
        Conversely, if the actions or validations are automated and executed by scripts, programs, or other automated processes, 
        it is considered an automatic process. In this case, the custom tasks are performed without direct human intervention.`}
        paragraph4={
          "Here is a list of instance actions: Instance is launching, terminating, refreshing or there is a specific requirement met."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"UDP Listener"}
        paragraph1={
          "Low latency needed? UDP is for you! UDP is a connectionless protocol that allows data to be sent from one application to another without establishing a formal connection. "
        }
      ></StudyNoteTemplate>
 <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"NLB = UDP and TCP TRAFFIC ON THE EXAM"}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"When to use ALB verse NLB? "}
        paragraph1={`
        Use an Application Load Balancer (ALB) when you need to route HTTP/HTTPS traffic and benefit from advanced features like
         content-based routing, SSL termination, and support for containerized applications; use a Network Load Balancer (NLB) for 
         TCP/UDP traffic and scenarios where low-latency and high-throughput are crucial, such as with microservices or gaming
        applications.
        `}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Gateway load balancer"}
        paragraph1={
          "Gateway Load Balancer (GWLB) is unique in its ability to efficiently distribute network traffic across virtual appliances in a way that is highly scalable and easy to manage. It is designed specifically for routing and load balancing traffic to and from virtual appliances, providing a centralized and simplified solution for deploying and scaling network functions in the cloud. GWLB streamlines the deployment and management of network appliances, making it particularly well-suited for scenarios where routing and load balancing are critical components of the network architecture."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Classic Load Balancer"}
        paragraph1={`
        Classic Load Balancer (CLB) – this is the oldest of the three and provides basic load balancing at both layer 4 and layer 7.
        It handles traffic at request level and connection level... 
        It becomes the single point of contact if there is an issue... 
        Good for microservices and container based architectures...
        It can distribute traffic across instances in different availability zones(ALB and NLB can too the only
        main difference is  that it can load balance on both layer 4 which would be for TCP and UDP traffic
        (ip addresses for example) and ALB's layer 7 HTTP and HTTPS traffic) `}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"To Remember"}
        paragraph1={
          "Application Load Balancer (ALB) – layer 7 load balancer that routes connections based on the content of the request."
        }
        paragraph2={
          "Network Load Balancer (NLB) – layer 4 load balancer that routes connections based on IP protocol data."
        }
        paragraph3={
          "Gateway Load Balancer (GLB) – layer 3/4 load balancer used in front of virtual appliances such as firewalls and IDS/IPS systems."
        }
      ></StudyNoteTemplate>
      
      <img src={QST1} className={"w-75 mt-3 ml-6"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"B meets this requirement"}
        paragraph1={"Scheduled scaling does not maked sense... "}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Config "}
        paragraph1={"Check the configuration of resources, create tags for your resources and detect resources that are not properly tagged. So what is the answer to the next question? "}
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
        <button className={"styleButton"}><a href={"/"}>back to section page</a></button>
    </div>
  );
};

export default EC2_autoscaling;
