For the systems design problem given, use the following guide:

1. Define the problem in a simple manner. I would like you to be as descriptive as possible, and to take on a casual, vibrant tone (not too playful). Simulate a real interview scenario. Be conversational. 
2. State the functional requirements and Define the core components of the system in brackets e.g. 'Limit API requests based on certain criteria (Rate Limit Manager)'
3. State the non-functional requirements. 
4. Where applicable, define the API contracts for the system (no need to show the code). 
5. Discuss the high level design for the system.
6. Draw a simple stick flow diagram for the system based on 6 above. Follow this diagram with a flow description of the components e.g.: 'As you can see in the diagram below, the system consists of the following components...and the flow of data is as follows... and the data is exchanged via the following API contracts... and this is how the various components talk to each other...'.. and so on. I want it to be so cohesive and flowing that it reads like a story.
7. Dive into a key component of the system and explain it in detail (no need to show the code)
8. State the assumptions you made in the beginning of the problem.
9. State the simplifications you made in the problem.
10. If time permits, talk about the scaling of the system.







I want you to simulate a technical system design interview candidate. I'll provide a system design problem, and I want you to:

1. First, ask me clarifying questions about some of the requirements that are very pertinent to the problem e.g.
   - Scale requirements (users, data volume, traffic)
   - Functionality expectations and core features
   - Performance requirements (latency, availability)

2. After gathering requirements, walk through your design approach:
   - Give a 30,000-foot view of the system.
   - Sketch a high-level architecture
   - Explain component choices with clear justification
   - For each technical decision (database, caching, messaging, etc.), explain:
      * Why you chose this particular technology
      * What alternatives you considered
      * The tradeoffs involved
      * How it addresses the specific requirements

3. Discuss how your design handles:
   - Scaling challenges
   - Failure scenarios
   - Security considerations

4. Be open to feedback and iterate on your design if I suggest changes or introduce new requirements.
5. Be conversational and engaging.
6. Be concise and to the point.
7. The time for the interview is limited, so make sure to only ask 2-3 clarifying questions.

The problem is as in the attached file. 




Help me create a clear, interview-ready flow diagram for [specific system]. Please:

1. Create a simple, high-level diagram showing:
   - Main components/services
   - Key data flows between components
   - Critical user interaction paths
   - Important external systems/dependencies

2. Use basic shapes and minimal notation that I could easily recreate on a whiteboard:
   - Rectangles for services/components
   - Arrows for data flow directions
   - Clear labels for each element

3. Focus on the core architecture rather than implementation details
   - Show primary user flows
   - Highlight scalability points
   - Indicate potential bottlenecks

4. Include a brief legend explaining any symbols or patterns used

The system I'm designing is: [DESCRIBE SYSTEM]










Act as a system design candidate being interviewed. I'll give you a system to design, and you should:

1. CLARIFYING QUESTIONS
   - Begin by asking me 2-3 focused clarifying questions about the most pertinent aspects of the specific system I've requested
   - These questions should target the critical information needed for your design (such as scale, user patterns, performance requirements, consistency needs, or other system-specific considerations)
   - Wait for my answers before proceeding with your design

2. DESIGN APPROACH
   - Give a high-level overview of your proposed system architecture
   - Sketch a clear, simple architecture diagram using basic shapes that could be drawn on a whiteboard
   - Explain component choices with clear justifications
   - For each technical decision (database, caching, messaging, etc.), explain:
      * Why you chose this particular technology
      * What alternatives you considered
      * The tradeoffs involved
      * How it addresses the specific requirements

3. DETAILED DESIGN
   - Define the core components of the system in brackets (e.g., 'Limit API requests based on criteria (Rate Limit Manager)')
   - State functional and non-functional requirements
   - Where applicable, define the API contracts between components
   - Provide a flow description that connects the components: "As you can see in the diagram, the system consists of the following components... the flow of data is as follows... data is exchanged via these API contracts..."
   - Dive into one key component and explain it in detail

4. DESIGN CONSIDERATIONS
   - Discuss how your design handles:
     * Scaling challenges
     * Failure scenarios
     * Security considerations
   - State assumptions and simplifications you made
   - If time permits, discuss how the system would evolve for larger scale

5. COMMUNICATION STYLE
   - Be descriptive but concise
   - Use a casual, conversational tone (professional but not overly formal)
   - Present information in a logical, flowing narrative that reads like a cohesive story

The system I want you to design is: [SYSTEM NAME]




be conversational, describe the diagram