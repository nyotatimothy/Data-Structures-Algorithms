# Distributed Computing with Apache Spark

## Why Apache Spark?
Apache Spark was chosen for its ability to handle large-scale data processing tasks efficiently. Its distributed computing model allows for parallel processing across a cluster of machines, making it ideal for our needs.

## Data Processing Workflow

### Cluster Setup
- We set up a Spark cluster on Azure Databricks, which provided a scalable and managed environment for running Spark jobs
- The cluster was configured with multiple worker nodes, allowing us to distribute the workload and process data in parallel

### Data Ingestion
- Parquet files from the MISE portal were loaded into Spark DataFrames. Spark's ability to read parquet files directly into memory allowed us to leverage its columnar storage format for efficient data access
- The data was partitioned across the cluster nodes, enabling parallel processing and reducing the time required for data ingestion

### Data Transformation
- Using Spark SQL and DataFrame APIs, we performed various data transformation tasks. This included filtering, aggregating, and joining datasets to prepare them for compliance rule application
- The distributed nature of Spark allowed these operations to be executed concurrently across the cluster, significantly speeding up the processing time

### Compliance Rule Application
- Compliance rules were applied using Spark's map and filter transformations. Each rule was implemented as a function that could be applied to the DataFrame, allowing Spark to distribute the computation across nodes
- For example, a rule checking version compliance would map over the dataset, flagging non-compliant entries. This operation was parallelized, with each node processing a subset of the data

### Data Aggregation and Output
- After applying the rules, the results were aggregated to generate compliance reports. Spark's reduce and groupBy operations were used to summarize the data, such as counting the number of non-compliant applications
- The final processed data was written back to Azure SQL Database, with Spark handling the distribution of write operations to optimize performance

## Benefits of Distributed Computing

- **Scalability**: The ability to add more nodes to the cluster allowed us to scale our processing power as needed, accommodating increases in data volume without a drop in performance
- **Efficiency**: By distributing tasks across multiple nodes, we reduced the time required for data processing, enabling faster insights and decision-making
- **Fault Tolerance**: Spark's resilient distributed dataset (RDD) model provided fault tolerance, ensuring that data processing could continue even if some nodes failed

## Challenges and Solutions

### Data Skew
We encountered data skew, where some nodes had more data to process than others. To address this, we implemented data partitioning strategies to balance the load across nodes.

### Resource Management
Efficiently managing cluster resources was crucial. We used Spark's dynamic resource allocation to adjust the number of executors based on workload, optimizing resource usage and cost.

## Conclusion
By leveraging distributed computing with Apache Spark, we were able to process large datasets efficiently, apply complex compliance rules, and deliver timely insights. This approach not only met the project's requirements but also provided a scalable solution for future data processing needs.