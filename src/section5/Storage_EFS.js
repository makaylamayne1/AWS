import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
const Storage_EFS = () => {
  return (
    <div className="container">
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"EFS File System "}
        paragraph1={""}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={`Encrypting File System (EFS) is a feature specific to Windows operating systems and is not available for Linux instances`
        }
        paragraph2={
          "Scale on demand to petabytes without disrupting applications. Allow parallel access of compute instances. It is also serverless and you only pay for the storage you use.  "
        }
        paragraph3={
          "EFS is a feature for Windows OS's that provides filesystem-level encryption. "
        }
        paragraph4={`
        We need Amazon Elastic File System (EFS) because it provides a scalable, elastic, and highly available file storage solution that can automatically adjust its size to meet the changing needs of applications, ensuring efficient storage usage and cost-effectiveness, especially for applications that require shared access to files across multiple instances in cloud environments.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"NFS Protocol"}
        paragraph1={
          "The NFS (Network File System) protocol is a distributed file system protocol developed by Sun Microsystems in 1984. It allows a user on a client computer to access files over a network in the same way they would access a local storage file. This is accomplished by mounting file systems over a network and interacting with those file systems as though they are part of the local system. NFS operates in a client-server architecture where the server configures the file systems to be shared and each client accesses them. Key features of NFS include its ability to allow different computers to share the same files, its platform independence, and its support for stateless connections. NFS is widely used in enterprise environments for shared data storage solutions and is known for its simplicity and ease of setup."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Storage Gateway - File Gateway"}
        paragraph1={
          "AWS Storage Gateway's File Gateway offers a seamless way to store and retrieve objects in Amazon S3 using a file system interface. This service enables on-premises applications to use the AWS Cloud as a storage backend through standard file protocols like NFS and SMB. It essentially acts as a bridge between on-site environments and cloud storage, allowing users to leverage the scalability and security of AWS S3 without modifying existing applications. File Gateway stores files as native S3 objects, retains directory structures, and offers a familiar file system interface."
        }
        paragraph2={
          "File Gateway provides a number of benefits including low-latency access to frequently accessed data, automatic data synchronization with AWS S3, cost-effective storage management through lifecycle policies, and integrated data protection features. It's particularly useful for backup and archiving, hybrid cloud storage scenarios, and disaster recovery purposes. By caching data locally, it offers fast, local read and write performance, while asynchronously backing up data to S3 for durable and scalable storage."
        }
        paragraph3={
          "Moreover, the integration with AWS S3 means that stored data can take advantage of S3 features like versioning, cross-region replication, and lifecycle policies. This integration also simplifies compliance and audit processes, as data stored in S3 is automatically encrypted at rest. In summary, AWS Storage Gateway's File Gateway is an effective solution for organizations looking to integrate their on-premises environments with the cloud, offering a balance of performance, scalability, and security."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon FSX for Windows File Server"}
        paragraph1={
          "Amazon FSX for Windows File Server provides a fully managed native Microsoft Windows file system, enabling seamless integration with Windows-based applications. It's designed to support Windows features like Active Directory integration, file locks, and NTFS file permissions."
        }
        paragraph2={
          "This service is ideal for enterprises requiring a fully managed, reliable, and scalable Windows file system in the cloud, with features like data deduplication, compression, and snapshots for data protection."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon FSX for Lustre"}
        paragraph1={
          "Amazon FSX for Lustre is a fully managed file system optimized for compute-intensive workloads, like machine learning, high performance computing (HPC), and video processing. It's designed for workloads that require fast and scalable storage."
        }
        paragraph2={
          "FSX for Lustre can directly integrate with S3, enabling users to process large data sets stored in S3 with high performance. It's suitable for workloads that need high-throughput, low-latency file storage."
        }
        paragraph3={`LINUX INSTANCES NOT WINDOWS`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Storage Gateway - Volume Gateway"}
        paragraph1={
          "The Volume Gateway in AWS Storage Gateway provides cloud-backed storage volumes that can be mounted as iSCSI devices from on-premises application servers. It supports stored volumes and cached volumes for different use cases."
        }
        paragraph2={
          "Stored volumes store primary data locally and asynchronously back up data to AWS, while cached volumes store primary data in AWS and retain frequently accessed data locally for low-latency access."
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Storage Gateway - Tape Gateway"}
        paragraph1={
          "Tape Gateway is a feature in AWS Storage Gateway that enables you to replace physical tape infrastructure with a virtual tape library (VTL) in AWS. It's used for archiving and long-term backup in the cloud."
        }
        paragraph2={
          "This gateway emulates physical tape devices and tapes, providing a seamless transition to cloud-based tape backup solutions, and is compatible with leading backup applications."
        }
      ></StudyNoteTemplate>
    </div>
  );
};

export default Storage_EFS;
