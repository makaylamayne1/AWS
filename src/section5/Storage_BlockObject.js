import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import Woman1 from "./photo5/Woman1.png"
const Storage = () => {
  return (
    <div className="container">

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Block Based Storage"}
        paragraph1={"Block-based storage systems, like hard drives, store data in fixed-sized blocks. They are essential for tasks requiring high performance and low latency."}
        paragraph2={"The compatibility between a computer and a block-based storage system is crucial, especially when using Amazon EBS (Elastic Block Store), which offers high durability and availability."}
        paragraph3={"EBS Volumes need to be in the same availability zone as the instance to attach. They can be replicated for increased durability. For different availability zones, creating an AMI (Amazon Machine Image) is recommended."}
        paragraph4={"EBS offers SSD-backed volumes for high-performance needs and HDD Volumes as a cost-effective solution. Note that HDD volumes, with lower IOPS, cannot be used as boot volumes."}
        paragraph5={"EBS volumes persist independently of the life of the instance and can be attached to multiple instances. They are accessed over the network and can be replicated using snapshots."}
        paragraph6={"Snapshots facilitate the creation of AMIs, allowing replication of instance configurations."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"File Based Storage"}
        paragraph1={"File-based storage, like Network Attached Storage (NAS), allows multiple users to share files over a network. However, it doesn't support creating volumes like block-based storage."}
        paragraph2={"This type of storage is ideal for scenarios where simultaneous access by many users is required, offering a shared space for files."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Object Storage System"}
        paragraph1={"Object storage systems like Amazon S3 store data as objects within resources called buckets. Users can interact with these objects using a web browser or HTTP-based REST APIs."}
        paragraph2={"Unlike hierarchical file systems, object storage works with a flat data structure, but a hierarchical illusion can be created using naming conventions with slashes (/)."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Encrypted Snapshot"}
        paragraph1={"Encrypted snapshots provide a secure way to backup EBS volumes by encrypting the snapshot with a specific key. They ensure the confidentiality and integrity of the data."}
        paragraph2={"These snapshots are crucial for protecting sensitive data and are essential for complying with various security standards and regulations."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Unencrypted Snapshot"}
        paragraph1={"Unencrypted snapshots are basic backups of EBS volumes without additional encryption. They are quicker to create but less secure."}
        paragraph2={"Suitable for non-sensitive data, these snapshots should be used cautiously when dealing with confidential information."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AMIs are backed by what?"}
        paragraph1={"Amazon Machine Images (AMIs) are backed by snapshots of EBS volumes. The encryption status of the snapshot dictates that of the AMI."}
        paragraph2={"Encrypted AMIs can be shared across accounts using custom AWS Key Management Service (KMS) keys for added security."}
      ></StudyNoteTemplate>
      <img src={Woman1} className={"w-50 mt-3 ml-6"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Unencrypted Snapshot Risks"}
        paragraph1={"The primary risk of unencrypted snapshots is the potential exposure of sensitive data, making them vulnerable to unauthorized access."}
        paragraph2={"Unencrypted snapshots can lead to data breaches and compromise compliance with data protection laws."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Regions when it comes to EBS"}
        paragraph1={"EBS volumes are confined to the AWS region they are created in, making them inaccessible to instances in other regions."}
        paragraph2={"To utilize EBS volumes in different regions, one must create snapshots and then replicate them to the desired region."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Availability Zones and EBS"}
        paragraph1={"Within a region, EBS volumes are also tied to specific Availability Zones and can only be attached to instances in the same zone."}
        paragraph2={"This limitation necessitates strategic planning for high availability and disaster recovery across multiple zones."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Data LifeCycle Manager"}
        paragraph1={"AWS Data LifeCycle Manager automates the creation, retention, and deletion of EBS snapshots and AMIs, helping manage backups efficiently."}
        paragraph2={"This automation is crucial for maintaining consistent backup schedules and ensuring data durability across different environments."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Instance Store Volumes"}
        paragraph1={"Instance Store Volumes offer temporary block-level storage directly on the host computer for EC2 instances."}
        paragraph2={"These volumes provide high I/O performance but are ephemeral, meaning data is lost if the instance is stopped or the host fails."}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"An AMI provides?"}
        paragraph1={"The information required to launch an instance. We discussed this in Section 1"}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Raid with EBS"}
        paragraph1={"Stands for redundant array of independent disks"}
        paragraph2={"Not provided by AWS, you configure it through the OS"}
        paragraph3={"RAID 0 and RAID 1 are potential options"}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"EBS "}
        paragraph1={"To remind you, it exists independently of the running life of the EC2 instance. You can make snapshots of EC2 instance and then use it to make EBS volumes."}
        paragraph2={`You can encrypt these volumes with Key Management Service. `}
        paragraph3={`There are different volumes for different needs such as the Throughput optimized HDD is for frequently accessed workloads...`}
        paragraph4={`For databases, file systems, containers etc `}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Why EBS?"}
        paragraph1={"EBS allows users to store data persistently, enabling the data to survive independently of the life of an EC2 instance"}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"RAID 0 "}
        paragraph1={"Spreading the data across the disks, two or more disks"}
        paragraph2={"If one disk fails the ENTIRE RAID SET (OF EBS VOLUMES) FAILS"}
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"RAID 1"}
        paragraph1={"Writing the same data to two different volumes. If one disk fails the other disk is still working. "}
        paragraph2={"Replicating data to the two EBS volumes at the same time"}
        paragraph3={"EBS already copies data 3 times but sometimes we need this for extra safety protection of our data."}
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

      {/* ... other components if needed ... */}
    </div>
  );
};

export default Storage;
