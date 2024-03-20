import React from "react";

const Security = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Security with AWS"}
        paragraph1={""}
      ></StudyNoteTemplate>

      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={`A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key
        usage must be logged for auditing purposes. Keys must be rotated every year.
        Which solution meets these requirements and is the MOST operationally efficient?
        `}
        paragraph1={"D is the answer..."}
        paragraph2={`SSE-KMS is the most secure way to encrypt data in Amazon S3. It uses AWS KMS, which is a highly secure key management service that is managed
        by AWS. AWS KMS logs all key usage, so the company can meet its compliance requirements. AWS KMS also rotates keys automatically, so the
        company does not have to worry about manually rotating keys`}
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

export default Security;