import React from "react";
import StudyNoteTemplate from "../study_notes/study_note_template";
import Athena from "./photo5/Athena.png";
import QST1 from "./photo5/QST1.png";
import QST2 from "./photo5/QST2.png";
import QST3 from "./photo5/QST3.png";
import QST4 from "./photo5/QST4.png";
import QST5 from "./photo5/QST5.png";
import QST6 from "./photo5/QST6.png";
import QST7 from "./photo5/QST7.png";
import QST8 from "./photo5/QST8.png";
import QST10 from "./photo5/QST10.png";
import QST11 from "./photo5/QST11.png";
import ANS4 from "./photo5/ANS4.png";
import DynamoDB from "./photo5/DynamoDB.png";
import DynamoDB2 from "./photo5/DynamoDB2.png";
import Aurora from "./photo5/Aurora.png";
import AuroraCompatible from "./photo5/AuroraCompatible.png";
import Database from "./photo5/Database.png";
import Database2 from "./photo5/Database2.png";
import DBengine from "./photo5/DBengine.png";
import MariaDB from "./photo5/MariaDB.jpg";
import MySQL from "./photo5/mysql.png";
import Neptune from "./photo5/Neptune.png";
import Oracle from "./photo5/Oracle.png";
import RDS from "./photo5/RDS.png";

import Quiz_Me_Template from "../quiz/quiz_me_template.js";

const Storage_Services = () => {
  return (
    <div className="container">
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon Athena"}
        paragraph1={"It can be used to query Data for S3 using SQL"}
        paragraph2={
          "But it doesn't just have to with S3, using Lambda you can connect with other data sources."
        }
        paragraph3={"It is serverless and you pay per query."}
        paragraph4={
          " Athena is commonly used for ad-hoc querying, data analysis, reporting, and data discovery. It's suitable for analyzing logs, generating reports, and conducting interactive analytics."
        }
      ></StudyNoteTemplate>
      <img src={Athena} className={"w-75 m-6"}></img>
      <img src={QST1} className={"w-75 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is A by the way..."}
        paragraph1={`Athena is a serverless query service that enables analyzing data in S3 using SQL queries without the need for managing infrastructure. It allows for
        easy analysis of the existing and new data.
        `}
      ></StudyNoteTemplate>
      <img src={QST10} className={"w-75 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS Glue"}
        paragraph1={
          "It's used to store the information about databases and tables all in one place so we can use it later to query for analytics. Glue makes it easier for data to be collected for analytics and machine learning."
        }
        paragraph2={
          "Its a central repository that stores all of your metadata and makes it searchable and easy to navigate."
        }
        paragraph3={
          "Metadata is data that provides information about other data, such as its content, format, source, and creation date, essentially serving as a descriptive summary or a reference guide for data assets."
        }
        paragraph4={
          "Glue is also serverless! AWS Glue is a serverless data integration service that simplifies the discovery, preparation, and combination of data for analytics, machine learning, and application development."
        }
        paragraph5={`They also have job bookmarks. Job bookmarks allow you to 54qck what data has already been processed during previous runs. This prevents the reprocessing of old data.`}
      ></StudyNoteTemplate>
      <img src={QST7} className={"w-100 m-6 mt-3"}></img>
      <img src={QST8} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"DynamoDB"}
        paragraph1={
          "DynamoDB Accelerator (DAX): A fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement from milliseconds to microseconds responses for read-intensive applications."
        }
        paragraph2={`
        Amazon DynamoDB is a fully managed, scalable NoSQL database service provided by Amazon Web Services (AWS) that offers fast and predictable performance with seamless scalability. It's designed to handle high-velocity, large-scale applications, such as mobile, web, gaming, ad tech, IoT, and many others that require low-latency data access at any scale. A primary reason to use DynamoDB is its ability to automatically manage the hardware provisioning, setup, configuration, replication, software patching, and scaling of databases, which significantly reduces the overhead for developers and businesses. It supports key-value and document data structures, making it versatile for different types of applications. DynamoDB is also highly durable and available, as it replicates data across multiple AWS Availability Zones, ensuring high availability and data durability. Its built-in security features, backup and restore capabilities, and in-memory caching with DynamoDB Accelerator (DAX) make it an attractive choice for developers looking for a robust, managed NoSQL database solution.`}
      ></StudyNoteTemplate>
      <img src={DynamoDB} className={"w-100 m-6 mt-3"}></img>s
      <img src={DynamoDB2} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Keywords for DynamoDB"}
        paragraph1={"Automatically Scale, MongoDB, using JSON data "}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Aurora"}
        paragraph1={
          "Amazon Aurora is a highly performant, fully managed relational database service that offers the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases."
        }
      ></StudyNoteTemplate>
      <img src={Aurora} className={"w-75 m-6 mt-3"}></img>
      <img src={AuroraCompatible} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon Aurora Serverless "}
        paragraph1={
          "Gives us a way to autoscale with Amazon Aurora, now there is also no need to manage database instances. "
        }
        paragraph2={
          "You specify the desired database capacity range, and connect to your applications. "
        }
        paragraph3={
          "Amazon Aurora Serveless v2 scales instantly to hundreds of thousands of transactions in a fraction of a second"
        }
        paragraph4={
          "Amazon Aurora Serverless v1 is a cost-effective option for infrequent, intermittent or unpredictable workloads. You pay only for the resources you use. IT IS FOR INFREQUENTLY-USED APPLICATIONS. "
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={""}
        paragraph1={""}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Databases (more information)"}
        paragraph1={""}
      ></StudyNoteTemplate>
      <img src={Database} className={"w-100 m-6 mt-3"}></img>
      <img src={Database2} className={"w-75 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Database Engine"}
        paragraph1={""}
      ></StudyNoteTemplate>
      <img src={DBengine} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"MariaDB"}
        paragraph1={
          "MariaDB is an open-source relational database management system, forked from MySQL, that offers a robust, scalable, and reliable SQL server for data storage, retrieval, and management."
        }
      ></StudyNoteTemplate>
      <img src={MariaDB} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"^^Stuff above is most likely not on the exam do not worry!"}
        paragraph1={""}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"MySQL"}
        paragraph1={
          "MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage, add, access, and process data stored in databases. It is known for its reliability, scalability, and flexibility, making it suitable for both small and large applications. MySQL supports various data types, offers powerful transactional support, and implements robust security measures to protect data. It is widely used in web applications, and is a component of the LAMP (Linux, Apache, MySQL, PHP/Perl/Python) web application software stack."
        }
      ></StudyNoteTemplate>
      <img src={MySQL} className={"w-75 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Neptune"}
        paragraph1={"Serverless Graph Databases "}
        paragraph2={
          "It can be used as an analytics database engine to analyze large amounts of data "
        }
        paragraph3={
          "One example could be building graph queries for near real-time fraud pattern detection "
        }
      ></StudyNoteTemplate>
      <img src={Neptune} className={"w-75 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Oracle"}
        paragraph1={
          "Oracle Database is a comprehensive, multi-model database management system offered by Oracle Corporation. It is widely recognized for its advanced features, scalability, and reliability in supporting large-scale enterprise applications. Oracle Database is designed to handle a wide range of data types, including relational data, JSON, XML, and more, making it versatile for various use cases. It supports SQL for data manipulation, PL/SQL for procedural extensions, and offers robust security features to safeguard data. Oracle is a preferred choice for critical business operations, supporting a vast ecosystem of solutions, including cloud-based services, and is instrumental in data warehousing, online transaction processing (OLTP), and mixed database workloads."
        }
      ></StudyNoteTemplate>
      <img src={QST4} className={"w-100 m-6 mt-3"}></img>
      <img src={ANS4} className={"w-75 mt-3 ml-6"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Keywords "}
        paragraph1={
          "RDS Custom keyword??? Well it said underlying operating system access is needed but it still wants to reduce the OPERATIONAL OVERHEAD for the ORACLE DATABASE"
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What is RDS Custom for Oracle?"}
        paragraph1={
          "Amazon RDS Custom for Oracle is a specialized version of Amazon RDS designed to give users more control over their Oracle database environments. This service allows for modifications to the operating system and database environment, catering to applications that require specific settings, packages, or configurations not available in standard RDS offerings. It bridges the gap between the managed database services' convenience and the flexibility of self-managed databases. RDS Custom supports advanced customizations, including the use of custom Oracle patches, specific database parameter settings, and the installation of additional software required by the database. This makes it an ideal choice for enterprises with complex, highly customized Oracle database applications that still want to benefit from the managed service aspects of RDS, such as automated backups, patching, and scalability."
        }
      ></StudyNoteTemplate>
      <img src={Oracle} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"RDS "}
        paragraph1={`
        Amazon Relational Database Service (RDS) is a managed database service offered by Amazon Web 
        Services (AWS) that simplifies the setup, operation, and scaling of a relational database in the cloud. It provides 
        cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning,
        database setup, patching, and backups. Amazon RDS offers a choice of several database instance types - optimized for memory,
        performance, or I/O - and provides you with six familiar database engines to choose from, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, 
        Oracle Database, and SQL Server.`}
        paragraph2={`You can achieve high availibility with it's RDS Multi-AZ deployments -> there is a primary database and if it fails it automatically uses a standby instance, This is done with MySQL or PostgreSQL databases in three AZs. `}
      ></StudyNoteTemplate>
      <img src={RDS} className={"w-75 m-6 mt-3"}></img>
      <img src={QST2} className={"w-100 m-6 mt-3"}></img>
      <img src={QST3} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Database Migration Service"}
        paragraph1={
          "AWS Database Migration Service (DMS) simplifies database migration, allowing users to securely move databases to AWS, between on-premises instances, or between different AWS services. The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations like Oracle to Amazon Aurora. DMS minimizes downtime to applications that rely on the database, making it an ideal choice for migration of live databases with minimal impact."
        }
        paragraph2={
          "DMS also offers continuous data replication capabilities with high availability and failover support, making it suitable for not only migration projects but also for disaster recovery purposes. DMS is designed to be easy to use, with a simple setup process and automatic replication tasks management. It can handle large-scale migrations, supporting various database types, including relational, NoSQL, and warehouse databases."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Schema Conversion Tool to convert a database schema"}
        paragraph1={
          "The AWS Schema Conversion Tool (SCT) facilitates the migration of database schemas from one database engine to another, enabling heterogeneous database migrations. For instance, it can convert schemas from Oracle or SQL Server to Amazon Aurora, PostgreSQL, MySQL, MariaDB, or other supported AWS database services. SCT automatically converts the source database schema and a majority of the database code objects, including views, stored procedures, and functions, to a format compatible with the target database. It also identifies potential migration challenges, providing detailed assessment reports that highlight unsupported features and recommend specific modifications. This tool is crucial for planning migration projects, ensuring compatibility, and minimizing the manual effort required to convert databases for use on AWS."
        }
      ></StudyNoteTemplate>
      <img src={QST5} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is B!"}
        paragraph1={
          "Amazon ElastiCache for Redis is an in-memory data store that can be used as a caching layer between the application and the databases. By caching frequently accessed data, it can drastically reduce the number of reads directly hitting the databases, thereby improving performance and reducing load. Redis supports various data structures and is highly suitable for scenarios requiring complex data types. It also offers high availability through features like replication and automatic failover."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"ElastiCache"}
        paragraph1={
          "Easy managing of in-memory cache environments in the AWS cloud. "
        }
        paragraph2={"Works with Redis and other Memcached engines."}
        paragraph3={
          "Retrieves cached data that is frequently accessed to IMPROVE SPEED. It caches frequenly accessed data or compute-intensive data. "
        }
        paragraph4={
          "Encryption at rest and in transit, VPC support, IAM policies. It also has Point-in-time recovery and backup features"
        }
      ></StudyNoteTemplate>
      <img src={QST6} className={"w-100 m-6 mt-3"}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is A"}
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"What is Apache Cassandra"}
        paragraph1={
          "Apache Cassandra is a free and open-source, distributed, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. It offers robust support for clusters spanning multiple datacenters, with asynchronous masterless replication allowing low latency operations for all clients. Cassandra's data model is a partitioned row store with tunable consistency. Rows are organized into tables; the first component of a table's primary key is the partition key; within a partition, rows are clustered by the remaining columns of the key."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon Redshift"}
        paragraph1={
          "Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. The first step to create a data warehouse is to launch a set of nodes, called a Redshift cluster. After you provision your cluster, you can upload your data set and then perform data analysis queries. Regardless of the size of the data set, Amazon Redshift offers fast query performance using the same SQL-based tools and business intelligence applications that you use today."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Amazon KeySpaces (for Apache Cassandra)"}
        paragraph1={
          "Amazon Keyspaces is a scalable, highly available, and managed Apache Cassandra-compatible database service. It makes it easy to run Cassandra workloads in the cloud with the same Cassandra application code. Amazon Keyspaces offers a serverless experience, so you don’t need to provision, patch, or manage servers. Amazon Keyspaces automatically scales tables up and down to adjust for capacity and maintain performance. It also manages the replication and storage of data across multiple Availability Zones to maintain high availability and durability."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"When should we use RDS?"}
        paragraph1={
          "Amazon RDS should be used when you need a relational database that is managed, scalable, and offers automated backups, software patching, and recovery. It's ideal for applications that require a traditional relational database management system (RDBMS), such as transactional applications, ERP systems, CRM tools, and other business applications. RDS supports multiple database engines including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server, making it a versatile choice for a wide range of database applications. RDS is also suited for applications that require database read replicas, multi-AZ deployments for high availability, or the simplicity of database management without the need for database administration expertise."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"Cassandra"}
        paragraph1={
          "Apache Cassandra is an open-source, distributed NoSQL database designed for handling large amounts of data across many commodity servers, without a single point of failure. It offers robust support for clusters spanning multiple datacenters, with asynchronous replication providing high availability and fault tolerance. Cassandra's data model is highly scalable and designed for horizontal scalability, making it ideal for applications that can't afford to be down. This system is optimized for writes and is capable of handling large volumes of data with dynamic partitioning and replication to ensure data integrity and availability. Cassandra is widely used in applications where reliability, scalability, and performance are critical, such as in social media platforms, data warehouses, and IoT applications."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"An overall summary:"}
        paragraph1={
          "AWS offers a broad set of database services to fit your application requirements. These services are designed to provide high performance, scalability, availability, and security, allowing developers to focus on their applications rather than on managing database infrastructure. Whether you need a relational database with RDS, a fast in-memory data store with ElastiCache, a scalable NoSQL database with DynamoDB, or a managed Apache Cassandra service with Amazon Keyspaces, AWS has the technology to meet your needs. Understanding when and how to use each service will enable you to design efficient, cost-effective solutions for your data storage and processing requirements."
        }
      ></StudyNoteTemplate>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"AWS S3 "}
        paragraph1={
          "Very cost effective storage. Store large amounts of data. Remember it is not cheaper than Elastic File Storage."
        }
        paragraph2={`S3 is the cheapest and most scalable. S3 can store BLOCK STORAGE, FILE OR TEXT`}
      ></StudyNoteTemplate>
      <img className={"w-75 mt-3"} src={QST11}></img>
      <StudyNoteTemplate
        containerStyle={"containerColor2"}
        title={"The answer is D..."}
        paragraph1={
          "MOST cost-effective = S3 (unless explicitly stated in the requirements)"
        }
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

export default Storage_Services;
