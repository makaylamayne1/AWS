import React, { useState } from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import Woman15 from "./photo2/Woman15.png";
const MAN_organisations = () => {
  return (
    <div className="container">
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Organisations"}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Organisations"}
        paragraph1={
          "Manage a bunch of accounts here  with consolidated billing to create a single bill for all of the accounts usages of services and compute for the WHOLE ORGANISATION. "
        }
        paragraph2={
          "There is a management account that is at the top and is typically the person paying for everything..."
        }
        paragraph3={
          "Remember that AWS Organisations offer consolidated billing."
        }
      ></StudyNoteTemplate>
      <img className={"w-25 p-1 ml-3"} src={Woman15}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What Can it do?"}
        paragraph1={
          "AWS Organisations is good for auditing and organized control"
        }
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Service Control Policy "}
        paragraph1={"JSON policies "}
        paragraph2={
          "SCPs control the MAXIMUM AVAILABLE PERMISSIONS. Users in the management account are not limited but you can apply them to different organisational units. It can make a hierarchy of different permissions based on people's roles in the company... For example you could make a policy that developers can only launch t2.micro instances. SCP does not grant permissions they only limit them, you need to first grant permissions and then control them with SCP."
        }
        paragraph3={"SCPS ONLY  affect IAM users and Roles not EVERYTHING..."}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Control Tower"}
        paragraph1={
          "At the top of all the control, it separates sections of development and security in AWS for you. It makes a bunch of preventative gaurdrails and it makes a bunch of rules to prevent certain things from users or developers from doing."
        }
        paragraph2={
          "Based on AWS best practices. Used to Disallow certain API Actions and make sure developers are following government compliance in the AWS landing zone(like the region) the software/instance is in."
        }
      ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Distribution Lists in Organizations are?"}
        paragraph1={"They are a way to make sure future notifications are not missed by a list of administrators for example."}
        paragraph2={"We can use a distribution lists ensure multiple admins get notified and limits notifications to accounts rather than all users. "}
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
export default MAN_organisations;
