import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
const Services1 = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"KMS (Key Management Services)"}
        paragraph1={" Simplifies the creation, management, and rotation of encryption keys."}
        pargraph2={"Offers automatic key rotation for customer master keys (CMKs) to enhance security. Optional and configurable."}
        pargraph3={`: Fine-grained access control policies to specify who can use and manage keys`}
        paragraph4={`AWS Key Management Service (AWS KMS) is a managed service provided by Amazon Web Services that enables customers to easily create and control the encryption keys used to encrypt their data. AWS KMS is designed to be highly secure and integrated seamlessly with other AWS services, making it straightforward for developers and businesses to implement encryption and manage the lifecycle of cryptographic keys, including their creation, usage, rotation, and deletion.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Systems Session Manager"}
        paragraph1={"No need for bastion hosts, VPNs or SSH to manage instances and virtual machines"}
        pargraph2={`Secure session management without needing to expose instances to the internet. It allows us to connect to a command line (make a session to the instance) without the need for inbound ports.`}
        pargraph3={"Supports Amazon EC2 instances running both Linux and Windows as well on-premises services."}
        paragraph4= {`Removes the SSH keys or remote desktop protocal credentials to be needed.. It integrates with other Systems Manager capabilities.`}
        paragraph5={`Allows you to create sessions -> Sessions are based on a secure bi-directional communication channel between the client (you) and the remote managed node that streams inputs and outputs for commands.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What is a session? "}
        paragraph1={`
        In computing and technology, a "session" refers to a temporary and interactive information exchange between two or more communicating devices, or between a computer and user (see user session). A session is established at a certain point in time and then torn down at some later point. During the life of a session, certain parameters are kept constant which were negotiated at the start of the session. A session is used to keep track of a user's interactions with a system, ensuring that the exchange of information is coherent and consistent throughout the user's experience.`}
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

export default Services1;