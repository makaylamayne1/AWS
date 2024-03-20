import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import QST1 from "./photo6/QST1.png";
import QST2 from "./photo6/QST2.png";
import QST3 from "./photo6/QST3.png";
import QST4 from "./photo6/QST4.png";
import QST5 from "./photo6/QST5.png";
import QST6 from "./photo6/QST6.png";
import QST7 from "./photo6/QST7.png";
import QST8 from "./photo6/QST8.png";
import QST9 from "./photo6/QST9.png";
import QST10 from "./photo6/QST10.png";
import QST11 from "./photo6/QST11.png";
import QST12 from "./photo6/QST12.png";
import QST13 from "./photo6/QST13.png";
import QST14 from "./photo6/QST14.png";
import QST15 from "./photo6/QST15.png";
import QST16 from "./photo6/QST16.png";
import QST17 from "./photo6/QST17.png";
import QST18 from "./photo6/QST18.png";
import QST19 from "./photo6/QST19.png";
import QST20 from "./photo6/QST20.png";
import QST21 from "./photo6/QST21.png";
import QST22 from "./photo6/QST22.png";
import QST23 from "./photo6/QST23.png";
import QST24 from "./photo6/QST24.png";
import QST25 from "./photo6/QST25.png";
import QST26 from "./photo6/QST26.png";
import QST27 from "./photo6/QST27.png";
import QST28 from "./photo6/QST28.png";
import QST29 from "./photo6/QST29.png";
import QST30 from "./photo6/QST30.png";
import QST31 from "./photo6/QST31.png";
import QST32 from "./photo6/QST32.png";


const Services2 = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Questions"}
        paragraph1={""}
      ></StudyNoteTemplate>
      <img src={QST1} className={"w-75 ml-5 mt-3"}></img>

      <img src={QST2} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon S3 File Gateway^^ answer is B"}
        paragraph1={
          "Amazon S3 File Gateway is a service that allows you to access your Amazon S3 storage as a file system. It provides seamless integration between on-premises environments and Amazon S3, enabling efficient storage and retrieval of data. Key features include:" +
          "\n\n- **File-Based Access**: S3 File Gateway enables you to mount your S3 buckets as a network file share, allowing applications to interact with S3 using standard file I/O APIs." +
          "\n\n- **Low Latency Access**: The gateway caches frequently accessed data locally, reducing latency for frequently accessed files and improving overall performance." +
          "\n\n- **Security and Encryption**: It supports encryption both in transit and at rest, ensuring the confidentiality and integrity of your data. You can also integrate it with AWS Identity and Access Management (IAM) for access control." +
          "\n\n- **Integration with AWS Storage Services**: S3 File Gateway seamlessly integrates with other AWS storage services, providing a flexible and scalable solution for your data storage needs." +
          "\n\nPrepare for the exam by understanding these key features and their use cases. Familiarize yourself with configuration options, security best practices, and integration scenarios."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"S3 File Gateway "}
        paragraph1={`Creating an Amazon S3 File Gateway is the recommended solution. It allows the company to extend their storage space by utilizing
        Amazon S3 as a scalable and durable storage service. The File Gateway provides low-latency access to the most recently accessed files by
        maintaining a local cache on-premises. `}
      ></StudyNoteTemplate>

      <img src={QST3} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Answer is B "}
        paragraph1={`
          Budgets is used to set goals, not for analysis.
          The Billing and Cost Management dashboard is a dashboard, no in-depth analysis is provided.
          Option D introduces S3 into the solution, adds operational overhead.
          So B.
          `}
        route1={
          "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html"
        }
        link1={"Learn more information here"}
      ></StudyNoteTemplate>

      <img src={QST4} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"A"}
      ></StudyNoteTemplate>

      <img src={QST5} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={`Packet Inspection = Gateway Load Balancer`}
        paragraph1={`Gateway Load Balancer helps you easily deploy, scale, and manage your third-party virtual appliances. It gives you one gateway for distributing
        traffic across multiple virtual appliances while scaling them up or down, based on demand. This decreases potential points of failure in your
        network and increases availability`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"EBS Snapshot Restore "}
        paragraph1={`Enabling the EBS fast snapshot restore feature allows you to restore EBS snapshots into new EBS volumes almost instantly, without needing to wait
        for the data to be fully copied from the snapshot. This significantly reduces the time required to clone the production data.`}
      ></StudyNoteTemplate>

      <img src={QST6} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"For the next question know this"}
        paragraph1={
          "Remember that firehose cannot send to DynamoDB and if it says REAL TIME that means we are probably looking for the answer relating to Kinesis Data Streams"
        }
      ></StudyNoteTemplate>
      <img src={QST7} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is ? "}
        paragraph1={
          "The answer is Kinesis Data Streams and to remove sensitive data from the transactions we use AWS Lambda."
        }
      ></StudyNoteTemplate>
      <img src={QST8} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is AWS Shield Advanced..."}
        paragraph1={
          "Application Layer DDOS detection, protect against large scale DDOS attacks."
        }
        paragraph2={
          "If it says DDOS we will most likely use shield or shield advanced "
        }
        route1={
          "https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-summary-capabilities.html"
        }
        link1={"See more information here"}
      ></StudyNoteTemplate>
      <img src={QST9} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is B"}
        link1={"See more information here"}
        route1={
          "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html"
        }
      ></StudyNoteTemplate>

      <img src={QST10} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is C "}
        paragraph1={`CloudFront automatically caches and replicates content to its edge locations, resulting in faster delivery and lower latency for users worldwide. This
        solution is highly effective in optimizing performance while keeping costs under control because CloudFront charges are based on actual data
        transfer and requests, and the pay-as-you-go pricing model ensures that you only pay for what you use.
        `}
      ></StudyNoteTemplate>

      <img src={QST11} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"SAAS ? Possibly Appflow "}
        paragraph1={
          "AppFlow is a fuly managed integration service that automatically handles data transfer and transformation, so it's the one that requires the least ssopp overhead"
        }
      ></StudyNoteTemplate>

      <img src={QST12} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"A gateway endpoint helps avoid data transfer charges"}
        paragraph1={"Answer is C"}
      ></StudyNoteTemplate>

      <img src={QST13} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is B "}
        paragraph1={
          "VPNs go through the internet and use bandwidth but Direct connect is fast and we can transfer data privately."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Direct Connect"}
        paragraph1={`Establishing a new AWS Direct Connect connection and directing backup traffic through this new connection would meet these requirements. AWS
        Direct Connect is a network service that provides dedicated network connections from on-premises data centers to AWS. It allows the company to
        bypass the public Internet and establish a direct connection to AWS, providing a more reliable and lower-latency connection for data transfer. By
        directing backup traffic through the Direct Connect connection, the company can reduce the impact on internet connectivity for internal users and
        improve the speed of backups to Amazon S3. This solution would provide a long-term solution for timely backups with minimal impact on internet
        connectivity.`}
      ></StudyNoteTemplate>

      <img src={QST14} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Answer?? "}
        paragraph1={"B and E "}
      ></StudyNoteTemplate>

      <img src={QST16} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={
          "What to do if it says : Increase Lambda Quotas for performance??"
        }
        paragraph1={
          "Add more lambda functions, for example you may see a question like the one below. What will you choose? Increase Lambda quotas = Set up two Lambda functions. Improve scalability = Amazon Simple Queue Service."
        }
        paragraph2={`Answer is D (16)`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"TomCat Code "}
        paragraph1={"Free and open-source implementation of Jakerta Servlet"}
        paragraph2={`It provides a pure java HTTP web server environment where Java code can run.`}
        paragraph3={`It is considered a web server, reliable platform for Java-Based web applications.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Lambda "}
        paragraph1={
          "Pay for the compute time you consume, no charge when your code isn't running."
        }
        paragraph2={
          "Make your application code events into a series of Lambda functions. This service runs your function only when needed and scales automatically... "
        }
        route1={"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"}
        link1={"Learn more information here"}
      ></StudyNoteTemplate>
      <img src={QST17} className={"w-75 ml-5 mt-3"}></img>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={
          "Database snapshots you are not paying for hours it is not used so it is the most cost efficient."
        }
      ></StudyNoteTemplate>

      <img src={QST18} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is B"}
        paragraph1={
          "Cloudtrail track  user activity and API call history and AWS Config is to assess, audit and evaluate the configuration and relationships of tag resources."
        }
      ></StudyNoteTemplate>

      <img src={QST19} className={"w-75 ml-5 mt-3"}></img>
      <img src={QST20} className={"w-75 ml-5 mt-3"}></img>
      <img src={QST21} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={
          "Keywords: file system structure, scales automatically, highly available, and minimal operational overhead"
        }
        paragraph1={"Answer is C"}
      ></StudyNoteTemplate>

      <img src={QST22} className={"w-75 ml-5 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Certificate Manager"}
        paragraph1={
          "AWS Certificate Manager (ACM) is a service that enables you to provision, manage, and deploy SSL/TLS certificates for use with AWS services and your internal connected resources."
        }
        paragraph2={"Key Features of AWS Certificate Manager:"}
        listItems={[
          "**Simplified Certificate Management:** ACM takes care of the complexity of creating, managing, and renewing SSL/TLS certificates.",
          "**Integration with AWS Services:** Easily deploy SSL/TLS certificates on AWS services like Elastic Load Balancing, CloudFront, and API Gateway.",
          "**Automatic Renewal:** ACM automatically renews certificates, reducing the administrative burden and the risk of certificate expirations.",
          "**Certificate Types:** ACM supports both public and private certificates.",
        ]}
        paragraph3={
          "When working with ACM, it is important to understand the difference between public and private certificates. Public certificates are used for securing domain names that you own and are publicly accessible, while private certificates are used for internal resources within your organization."
        }
      />

   

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What is an SSL Certificate"}
        paragraph1={
          "An SSL (Secure Sockets Layer) certificate is a digital certificate that provides a secure and encrypted connection between a web browser and a web server. It ensures that the data transmitted between the user's browser and the website remains confidential and cannot be intercepted by malicious third parties."
        }
        paragraph2={"Key Components of an SSL Certificate:"}
        listItems={[
          "**Encryption:** SSL certificates use encryption algorithms to secure the data in transit, making it unreadable to anyone attempting to intercept it.",
          "**Authentication:** SSL certificates verify the identity of the website, ensuring that users are connecting to the intended and legitimate server.",
          "**Data Integrity:** SSL certificates ensure that the data exchanged between the user and the server remains intact and has not been tampered with during transmission.",
        ]}
        paragraph3={
          "SSL certificates play a crucial role in establishing trust between users and websites, especially in scenarios where sensitive information, such as login credentials or financial data, is being exchanged. Websites with SSL certificates are accessed over HTTPS (Hypertext Transfer Protocol Secure), and modern browsers display a padlock icon to indicate a secure connection."
        }
      />

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"ACM does not "}
        paragraph1={"automate the renewal process for expired IMPORTED certificates. So for the above question so you need to make it renewed MANUALLY"}
      ></StudyNoteTemplate>

<img src={QST23} className={"w-75 ml-5 mt-3"}></img>
<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is C "}
        paragraph1={""}
      ></StudyNoteTemplate>

<img src={QST24} className={"w-75 ml-5 mt-3"}></img>
<img src={QST25} className={"w-75 ml-5 mt-3"}></img>
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

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Didn't understand them all? "}
        paragraph1={
          "No worries! We will talk more about all these services soon! Just relax and click next! This is why you bought this, to be fed the information! Just read and click next. "
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>
    </div>
  );
};
export default Services2;
