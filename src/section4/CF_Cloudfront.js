import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";

const CF_Cloudfront = () => {
  return (
    <div className="container">
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Cloudfront"}
        paragraph1={"CloudFront is a content delivery network service by AWS that accelerates the delivery of data, videos, applications, and APIs to customers globally."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Content Delivery"}
        paragraph1={"CloudFront provides fast content delivery around the world by using the server closest to the user geographically, enhancing user experience."}
        paragraph2={"This approach significantly reduces the time it takes for a webpage to load."}
        paragraph3={"A key feature of CloudFront is its support for SSL/TLS encryption, ensuring secure transmission of content over the internet."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Route 53"}
        paragraph1={"Route 53 is AWS's scalable and highly available Domain Name System (DNS) web service."}
        paragraph2={"It facilitates domain name registration and routes internet traffic to the appropriate location."}
        paragraph3={"Strategically located alongside edge locations, Route 53 effectively connects user requests to CloudFront's distributed network of servers."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Hosted Zone"}
        paragraph1={"A Hosted Zone is a container that holds information about how you want to route traffic for a domain."}
        paragraph2={"Public Hosted Zones are used for routing internet traffic, while"}
        paragraph3={"Private Hosted Zones handle traffic routing within your Virtual Private Cloud (VPC)."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"CNAME"}
        paragraph1={"A CNAME record is used to map one domain name to another, providing continuity during domain transitions."}
        paragraph2={"It's important to note that alias records cannot be created for non-subdomains."}
        paragraph3={"CNAME records are instrumental in SEO optimization, often redirecting non-www subdomains to their www counterparts, and facilitating domain redirection in cases of domain changes or acquisitions."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Alias"}
        paragraph1={"Alias records in CloudFront can only point to specific AWS services like CloudFront, ELB, S3, and static websites."}
        paragraph2={"They are crucial for mapping records to particular IP addresses or CloudFront distributions, thus creating virtual IPs to route traffic efficiently."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"CloudFront Origins"}
        paragraph1={"CloudFront Origins refer to the original locations where the content is stored and served, such as in North America, Japan, or China."}
        paragraph2={"These origins can be either an Amazon S3 bucket, an HTTP server, or an AWS Elemental MediaStore."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"OAI and OAC"}
        paragraph1={"Origin Access Identity (OAI) is a unique user that enables secure access to S3 buckets, specifically for CloudFront distributions."}
        paragraph2={"It's been deprecated and replaced by Origin Access Control (OAC), which necessitates an S3 bucket policy allowing access."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"CloudFront SSL and TLS"}
        paragraph1={"SSL and TLS protocols in CloudFront ensure data integrity and security during transit."}
        paragraph2={"These protocols encrypt the connection between the client and the server, safeguarding data against interception and tampering."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"SSL and TLS Protocols"}
        paragraph1={"In SSL/TLS, the encryption process begins with a 'handshake' between client and server to agree on an encryption key."}
        paragraph2={"The server's digital certificate, containing the public key, is sent to the client, who then encrypts the session key for secure data transmission."}
        paragraph3={"TLS provides an additional layer of authentication, ensuring the connection established is between trusted parties."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"SNI"}
        paragraph1={"Server Name Indication (SNI) is a TLS extension used in CloudFront to host multiple SSL/TLS certificates for different domains on the same IP address."}
        paragraph2={"SNI optimizes resource utilization and management, as it eliminates the need for separate IP addresses for each SSL/TLS certificate."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Lambda Edge"}
        paragraph1={"Lambda@Edge allows customization of content delivered by CloudFront using Node.js and Python Lambda functions."}
        paragraph2={"This feature executes functions closer to the user, enhancing performance and user experience."}
        paragraph3={"Lambda@Edge can be used at various points in the data flow, including AWS Data Centers, Edge locations, within applications, and in data pipelines or lakes."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Global Accelerator"}
        paragraph1={"AWS Global Accelerator improves application availability and performance using the AWS global network."}
        paragraph2={"It integrates with Route 53 and CloudFront, efficiently routing user requests to the nearest edge location for reduced latency."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Static Anycast IP Address"}
        paragraph1={"A Static Anycast IP Address allows traffic from diverse locations to be routed to a single IP address."}
        paragraph2={"This enhances the efficiency and reliability of content delivery in a geographically dispersed network."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"CloudFront Distribution"}
        paragraph1={"CloudFront Distributions are configurations that dictate how content is delivered to users."}
        paragraph2={"Web Distributions are used for general websites, and RTMP Distributions cater to streaming media."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"TTL"}
        paragraph1={"Time To Live (TTL) settings in CloudFront define the duration for which content is cached in edge locations."}
        paragraph2={"TTL plays a critical role in managing cache behavior and ensuring content freshness."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Billing"}
        paragraph1={"CloudFront's pricing is based on data transfer and the number of requests, making it essential to understand its cost implications."}
        paragraph2={"Monitoring usage and optimizing configurations can help in managing expenses effectively."}
      ></StudyNoteTemplate>
    </div>
  );
};

export default CF_Cloudfront;
