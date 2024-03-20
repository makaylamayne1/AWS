import React from "react";

import StudyNoteTemplate from "../study_notes/study_note_template";
import Woman4 from './photo5/Woman4.png'
import QST9 from './photo5/QST9.png'

const Storage_AWSBackup = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Backup "}
        paragraph1={"Keywords: Fully managed, create schedules and policies for data retention. "}
        paragraph2={`It can be done across multiple services, less operational overhead, centralized backup, it can work with services like dynamo DB and help retain data for 7 years.`}
      ></StudyNoteTemplate>
    <img src={QST9} className={"w-75"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is B"}
        paragraph1={""}
      ></StudyNoteTemplate>
        <img src={Woman4} className={"w-50 mt-3"}></img>
      
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={`AWS Backup is a fully managed service that makes it easy to centralize and automate the backup of data across AWS resources. It can be used to
        create backup schedules and retention policies for DynamoDB tables, which will ensure that the data is retained for the desired period of 7 years.
        This solution will provide the most operationally efficient method for meeting the requirements because it requires minimal effort to set up and
        manage.`}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Migrating with Datasync "}
        paragraph1={"AWS DataSync is a managed data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS storage services, as well as between different AWS storage services."}
        paragraph2={`Automates and accelerates the moving of data between on premises and storage services`}
        paragraph3={`Datasync can be used to copy data automatically, migrating large amounts of data and periodic processing jobs `}
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

export default Storage_AWSBackup;