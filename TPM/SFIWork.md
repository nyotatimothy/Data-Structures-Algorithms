# MISE dSTS App Compliance Project

## Project Overview
Let me break down the key elements of this project:

- **Problem**: Flagging non-compliant MISE dSTS apps on s360
- **Stakeholders**: MISE team, engineers, PMs, content writers, manager
- **Technical challenges**:
  - Data stored in datalake in parquet files
  - Needed to unpack, aggregate, process and combine data
  - Used IDX (Intelligent Data Experiences/Azure Synapse) as the solution
- **Project management**:
  - Created spreadsheet to assign work based on experience
  - Realized requirements were incomplete
  - Set up cross-functional team to investigate and align expectations
  - Identified deployment cadence as a bottleneck
  - Led efforts to onboard onto flexible deployments
- **Monitoring and results**:
  - Implemented monitoring for jobs and pipelines
  - Updated partners' PowerBI dashboards
  - Partners could visualize compliance status and issues

## Introduction
So I led a project to flag non-compliant MISE dSTS apps on our s360 platform. This was a great experience that actually showcased many of the skills I believe are essential for a TPM role.

## The Problem
The MISE team (Microsoft Identity Service Essentials) came to us with a requirement to identify and flag applications that weren't meeting compliance standards in our s360 dashboard system. These were specifically dSTS (Datacenter Security Token Service) apps, which handle sensitive authentication flows.

Non-compliant apps posed security risks, but the challenge was that there was no easy way to surface this information to application owners so they could take action.

## Understanding the Scope and Technical Challenges
When I first received this request, I realized we needed to deeply understand the data structure before we could build a solution. I organized initial meetings with the MISE team to learn how their data was stored - it turned out to be in Azure Data Lake in Parquet file format, which isn't something we typically worked with.

Rather than just accepting the initial requirements at face value, I dug deeper. I asked questions about what specific compliance issues we needed to flag, what the data schema looked like, and how frequently it would be updated. This investigation revealed that we needed a robust data processing pipeline rather than a simple one-time query.

## Stakeholder Engagement
I quickly realized this was going to require coordination across multiple teams:
- The MISE team who owned the compliance data
- My engineering team who would build the solution
- Product managers who needed to ensure the feature met business requirements
- Content writers who would help craft the appropriate messaging for non-compliant apps
- Experts in dSTS functionality to ensure we were correctly interpreting the compliance criteria

I set up a cross-functional working group with representatives from each area, establishing weekly sync meetings to ensure alignment. When I discovered that the initial requirements were incomplete and somewhat malformed, I didn't just go back with questions - I organized a dedicated workshop with all stakeholders to clarify expectations and requirements.

## Solution Design
After researching various options, I proposed using Microsoft's IDX (Intelligent Data Experiences) platform, which is built on Azure Synapse Analytics. This would allow us to:
1. Extract and transform the Parquet files from Data Lake
2. Aggregate the compliance data
3. Combine it with metadata from our existing systems
4. Process it according to compliance rules
5. Write the results to our database for display in s360

To validate this approach, I led a proof-of-concept effort, working hands-on with the data to ensure it would meet our needs before committing the full team to this direction.

## Project Management
Here's where my approach shifted from just being an engineer to thinking like a TPM:

I created a detailed work breakdown spreadsheet and assigned tasks strategically based on team members' experience. For example, engineers who had previously worked with IDX got the data pipeline tasks, while those familiar with PowerAutomate handled the notification workflows.

I also identified dependencies and risks early. The most significant risk I uncovered was the deployment cadence for IDX solutions - at that time, it was taking 1-2 weeks for each deployment, which would severely impact our timeline and ability to iterate.

Instead of accepting this constraint, I collaborated with my manager to make a case for moving to flexible deployments. I gathered data on the business impact of the delays and presented a plan for how we could safely accelerate our deployment cycle. This initiative reduced deployment time from 2 weeks to just a few hours, which not only helped our project but became a standard practice for the team afterward.

## Implementation and Monitoring
As we built the solution, I implemented comprehensive monitoring for our data pipelines:
- Alert thresholds for pipeline failures
- Daily success/failure metrics
- Data quality checks to ensure we weren't missing compliance issues

I also worked directly with the MISE team to update their PowerBI dashboards, creating visualizations that showed:
- Overall compliance status across all apps
- Trend data showing improvement or degradation over time
- Detailed breakdowns of compliance issues (like outdated BrokerSKUs)
- Action items for app owners to address specific issues

## Results and Impact
The solution we delivered gave application owners clear visibility into compliance issues that previously had been hidden in complex data stores. They could see exactly which apps were at risk, why they were non-compliant, and what actions they needed to take.

Within three months of launch, we saw a 40% reduction in non-compliant apps because owners could finally see and address the issues proactively.

This project taught me valuable lessons about bringing technical solutions to life through effective cross-team collaboration and project management. I had to balance technical details with business needs, manage stakeholder expectations, and drive process improvements - all skills that I'm excited to bring to a TPM role.








# dSTS and eSTS Authentication Services

dSTS (Datacenter Security Token Service) and eSTS (Enterprise Security Token Service) are both authentication services used within your organization, but they have distinct differences and use cases.

## dSTS

### Authentication
- Used for authentication of clients (users/applications) and provides them with tokens (SAML/JWT) which can be presented to applications by clients

### Stacks
There are two authentication stacks for dSTS:

1. **Classic Stack**
   - Uses the WS-Federation protocol for passive clients (browsers)
   - Uses the WS-Trust protocol for active clients (command line or other Windows/Linux applications)

2. **Modern Stack**
   - Details on the modern stack were not specified in the document

### Data Handling
- dSTS data is currently housed inside IDX deployments and not some separate ADLS IDX has access to

## eSTS

### Authentication
- Similar to dSTS, eSTS is used for authentication and provides tokens for clients

### Data Handling
- eSTS data is also managed within IDX, but there are distinctions in how data from eSTS and dSTS are merged and processed

### Integration
- eSTS is integrated with various services and has specific flows for handling data, such as:
  - Updating MiseAdoptionHistory
  - MiseKeyDiscoveryTrafficHistory