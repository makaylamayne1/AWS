import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import CF_QST1 from './photo4/CF_QST1.png'

const CF_AmazonKinesis = () => {
  return (
    <div className={"container"}>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon Kinesis "}
      >  </StudyNoteTemplate>
      
        <StudyNoteTemplate
          containerStyle={"containerColor2"}
          title={
            "Amazon Kinesis Data Streams is about loading data into streams and then you forward it to make data analytics"
          }
          paragraph1={
            "Keyword: Analyze, Streaming data, fully managed service, real-time data, clickstream"
          }
          paragraph2={"A shard is a unit of streaming data. "}
          paragraph3={
            "Amazon Kinesis Data Streams can handle TERABYTES PER HOUR OF STREAMING DATA."
          }
        ></StudyNoteTemplate>

<StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={`A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company
        wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support
        this architecture. The data points must be accessible from the REST API.
        Which action meets these requirements for storing and retrieving location data?`}
        paragraph1={`Using Amazon API Gateway with Amazon Kinesis Data Analytics allows you to capture and process streaming data in real-time.
        This architecture provides the ability to capture and analyze location data in real-time, allowing the bicycle sharing company to track the location
        of its bicycles during peak operating hours. The REST API exposed through Amazon API Gateway enables easy access to the location data.
        Option B, using Amazon API Gateway with AWS Lambda, can be a valid choice for handling REST API requests, but it may not be the optimal
        solution for real-time data processing and analytics.
        `}
      ></StudyNoteTemplate>

        <StudyNoteTemplate
          containerStyle={"containerColor2"}
          title={"With Kinesis you can "}
          paragraph1={
            "Ingest and store real time data streams for processing and then send them to Spark on Amazon EMR or AWS lambda to build real time analytics or stream your code."
          }
        ></StudyNoteTemplate>

        <StudyNoteTemplate
          containerStyle={"containerColor2"}
          title={"When might your employer ask you to make Kinesis Data Streams?"}
          paragraph1={
            "Your employer might ask you to implement Amazon Kinesis in scenarios where there is a need for real-time data processing over large, distributed data streams. This could be for applications like real-time analytics, log and event data collection, or for processing data from IoT devices. Amazon Kinesis facilitates the collection, processing, and analysis of streaming data, allowing for timely insights and decisions. It's particularly useful in contexts where traditional batch data processing is insufficient due to the latency it introduces."
          }
        ></StudyNoteTemplate>

        <StudyNoteTemplate
          containerStyle={"containerColor2"}
          title={"What about Kinesis Firehose?"}
          paragraph1={"This will certainly show up on the exam."}
          paragraph2={
            "Firehose is for when we want to continually load data into DATA STORES. So for example its when we want to store it inot a storage service such as Redshift, S3 or ElasticSearch service. For Firehose, the data is AUTOMATICALLY delivered. "
          }
          paragraph3={
            "Just remember Kinesis = data streams and Firehose = just loading the streaming data into a storage place such as Amazon S3 and EVERYTHING is fully managed and does not require the configuration of shards like Kinesis Data Streams "
          }
          paragraph4={
            "Kinesis Firehose has NEAR REAL-TIME processing but NOT AS FAST AS  KINESIS DATA STREAMS "
          }
        ></StudyNoteTemplate>

<StudyNoteTemplate
          containerStyle={"containerColor2"}
          title={"Let me show you some example questions that you may see on the exam"}
          ></StudyNoteTemplate>
          <img className={"w-75 p-1 ml-3"} src={CF_QST1}></img>      
<StudyNoteTemplate
          containerStyle={"containerColor2"}
          paragraph1={"The answer is C because Amazon Kinesis Data Streams can process terabytes of data in near real time.  "}
          paragraph2={"Note that Firehose is unable to send data to DynamoDB and supports S3, Amazon Redshift, Opensearch and some others... "}
          paragraph3={"Remember that Kinesis data streams captures and stores temporarily in SHARDS which can retain the data for 24 hours and even be extended for a year and Firehose is also a delivery service for data but it works on SENDING the data to a storage service like S3 or Redshift."}
          ></StudyNoteTemplate>
<StudyNoteTemplate
containerStyle={"containerColor2"}
          title={"Shards?"}
          paragraph1={"Shards in Amazon Kinesis Data Streams are like individual lanes in a highway. Each lane (shard) can handle a certain amount of traffic (data). If you have more data coming in than one lane can handle, you add more lanes (shards) to keep traffic flowing smoothly. Each shard can handle up to 1 MB of incoming data per second and read up to 2 MB of data per second. So, if you need to process more data, you simply increase the number of lanes (shards) in your data stream."}
          >
            </StudyNoteTemplate>
  
    </div>
  );
};

export default CF_AmazonKinesis;