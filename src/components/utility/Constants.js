export const promptData = [
  {
    category: "Research",
    prompts: [
      {
        question: "Overall Research",
        answer:
          "Act as a product manager, browse the web, and perform market research in the [enter your niche] niche. Give me: Global market size and growth projections, Key players and their market share, Industry trends and technologies, SWOT analysis, Customer needs and pain points, Competitive advantages and USPs",
      },
      {
        question: "Analyze Market Segmentation",
        answer:
          "Conduct a comprehensive analysis of market segmentation within the [enter your niche] industry. Identify key demographic, geographic, and psychographic segments and their respective market sizes and growth projections.",
      },
      {
        question: "Competitor Analysis",
        answer:
          "Perform a detailed competitor analysis by identifying and profiling key players in the [enter your niche] market. Evaluate their market share, product offerings, pricing strategies, distribution channels, and competitive advantages.",
      },
      {
        question: "Trend Identification",
        answer:
          "Identify and analyze emerging trends and technologies within the [enter your niche] industry. Explore innovations, advancements, and disruptions that could impact market dynamics and consumer behavior.",
      },
      {
        question: "SWOT Analysis",
        answer:
          "Conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for the [enter your niche] market. Evaluate internal strengths and weaknesses, as well as external opportunities and threats to uncover strategic insights.",
      },
      {
        question: "Customer Needs Assessment",
        answer:
          "Investigate customer needs and pain points within the [enter your niche] market segment. Utilize surveys, interviews, and market research tools to gain insights into consumer preferences, challenges, and unmet needs.",
      },
      {
        question: "Product Positioning",
        answer:
          "Identify and articulate the competitive advantages and unique selling propositions (USPs) of products or services in the [enter your niche] market. Determine how to position your offerings effectively to differentiate them from competitors and resonate with target customers.",
      },
      {
        question: "Market Entry Strategy",
        answer:
          "Develop a comprehensive market entry strategy for introducing a new product or service to the [enter your niche] market. Consider factors such as market readiness, competition, regulatory requirements, and distribution channels.",
      },
      {
        question: "Customer Segmentation",
        answer:
          "Segment the target market based for [enter your niche] on various criteria such as demographics, behavior, and psychographics. Tailor marketing strategies and product offerings to meet the specific needs and preferences of each segment.",
      },
      {
        question: "Opportunity Assessment",
        answer:
          "Identify and evaluate new business opportunities within the [enter your niche] market. Explore untapped market segments, niche markets, or emerging trends that align with the companys capabilities and strategic objectives.",
      },
    ],
  },
  {
    category: "Documentation",
    prompts: [
      {
        question: "Draft PRD",
        answer:
          "As the Product Manager for a [tool + niche, for example – AI marketing tool] aimed at [describe your target audience], create a comprehensive Product Requirements Document (PRD). Assist me in generating this document by covering the following areas: Introduction: Briefly explain the product’s vision, objectives, and scope. Target Audience: Detail the primary users and their needs. Functional Requirements: List the essential features and functionalities for MVP and future releases. Technical Specifications: Outline the technical architecture, data models, and third-party integrations required. UI/UX Requirements: Describe the user interface design, key user flows, and interaction models. Acceptance Criteria: Define what constitutes a ‘done’ feature or functionality. Metrics and KPIs: Identify key performance indicators to measure success. Compliance and Security: Explain any legal or security considerations. Timeline: Estimate the development timeline, including milestones.",
      },
      {
        question: "Refine PRD",
        answer:
          "Now that we have a draft PRD for our [tool], could you help refine it? I seek guidance on feature validation, technical feasibility, UI/UX refinements, and risk assessment. ",
      },
      {
        question: "PRD Template",
        answer:
          "I am looking to create a detailed Product Requirement Document for [describe your product at a high level]. Please give me a template and explain the purpose of each section.",
      },
      {
        question: "Release Notes",
        answer:
          "What are the essential elements of a well-written release note for [describe your product]? Please provide both best practices and examples for crafting notes that effectively communicate new changes and improvements to users.",
      },
      {
        question: "Product Announcement To Users",
        answer:
          "Please draft a product update announcement for our users. The release includes [describe release].",
      },
    ],
  },
  {
    category: "Frameworks",
    prompts: [
      {
        question: "AARRR",
        answer:
          "For {a music streaming app} what would the user journey look like using the AARRR framework? Also, tell the important metrics for each stage and opportunities for improvement. Give your answer in a tabular form.",
      },
      {
        question: "BJ Foggs",
        answer:
          "I am a product manager at {AirBNB}, can you give me some ideas to increase {transactions} by using the BJ Foggs model?",
      },
      {
        question: "Weighted Impact Scoring",
        answer:
          "Develop a weighted impact scoring model for prioritizing features in {a task management app}. Consider factors such as user impact, business value, and implementation effort. Describe how you would assign weights to each factor and calculate the overall score for each feature.",
      },
      {
        question: "RICE Prioritization",
        answer:
          "Apply the RICE prioritization framework to {a project management tool}. Identify a set of potential features or improvements and evaluate them based on reach, impact, confidence, and effort. Discuss how you would calculate the RICE score for each item and prioritize them accordingly.",
      },
      {
        question: "Design Sprint",
        answer:
          "Plan a design sprint for {an e-commerce website} aimed at improving the checkout process. Outline the key phases of the sprint, including understanding, diverging, converging, prototyping, and testing. Describe the activities involved in each phase and how they contribute to achieving the sprint goal.",
      },
      {
        question: "Customer Journey Map",
        answer:
          "Create a customer journey map for {a ride-sharing app} to identify pain points and opportunities for improvement. Map out the users journey from booking a ride to reaching their destination, including touchpoints, emotions, and pain points at each stage. Highlight areas where the experience can be enhanced to improve customer satisfaction.",
      },
      {
        question: "DACI (Driver, Approved, Contributor, Informed)",
        answer:
          "Implement the DACI framework for decision-making in {a collaboration platform}. Define the roles of the Driver, Approver, Contributors, and those who need to be Informed for a specific project or feature. Clarify the responsibilities of each role and how decisions will be made and communicated throughout the process.",
      },
      {
        question: "CIRCLES Method",
        answer:
          "Utilize the CIRCLES method to address a customer support challenge in {a social media management tool}. Define the problem statement and apply each step of the CIRCLES method – Clarify, Ideate, Refine, Choose, Launch, Evaluate, and Scale. Discuss how this iterative approach can lead to more effective problem-solving and continuous improvement.",
      },
    ],
  },
  {
    category: "userFeedback",
    prompts: [
      {
        question: "Feedback",
        answer:
          "Here is some feedback from our customers. Can you categorize them into Pricing issues, product issues, Usability issues, and some more categories? Also, tell me some action pointers to improve my product. {Paste feedback}",
      },
      {
        question: "Create FAQ",
        answer:
          "Here are the chat conversations between our support team and customers. Can you create some FAQs based on the same? {Paste chat here}",
      },
      {
        question: "Categorizing Customer Feedback",
        answer:
          "Given a set of customer feedback, categorize them into distinct categories such as Pricing issues, Product issues, Usability issues, and any additional relevant categories. Use keywords and themes within the feedback to determine the appropriate category for each item.",
      },
      {
        question: "Action Pointers for Improvement",
        answer:
          "Analyze the categorized customer feedback and identify actionable insights for product improvement. For each category (e.g., Pricing issues, Product issues, Usability issues), provide specific action pointers or recommendations to address the underlying concerns raised by customers. Consider prioritizing actions based on the frequency and severity of feedback within each category.",
      },
      {
        question: "Continuous Feedback Loop",
        answer:
          "Establish a framework for implementing a continuous feedback loop to gather, process, and act upon customer inputs in an iterative manner. Define the mechanisms for soliciting feedback from customers at different touchpoints throughout their journey with the product. Describe how feedback will be systematically captured, evaluated, and integrated into the product development roadmap to drive continuous improvement and customer satisfaction.",
      },
      {
        question: "Trend Analysis and Insights",
        answer:
          "Conduct a trend analysis of the customer feedback to identify recurring themes and patterns across different categories. Summarize the key insights gleaned from the analysis, highlighting common pain points, emerging trends, and areas of opportunity for enhancing the product experience. Use visual aids such as charts or graphs to present the findings effectively.",
      },
    ],
  },
  {
    category: "userOnboarding",
    prompts: [
      {
        question: "User Onboarding Audit",
        answer:
          "Conduct a comprehensive audit of the current user onboarding process for [Product Name / Description]. Identify strengths, weaknesses, and areas for improvement based on user feedback, analytics data, and usability testing results. Provide recommendations for streamlining the onboarding flow, reducing friction points, and enhancing the overall user experience.",
      },
      {
        question: "Enhance User Experience",
        answer:
          "As a product manager, tell me how I can enhance the user onboarding experience for [Product Name / Description], making it easier, more engaging, and personalized, thereby increasing user engagement and product adoption. Consider factors like automated assistance, personalized walkthroughs, user experience testing, interpreting user feedback, and creating interactive training materials.",
      },
      {
        question: "Onboarding Checklist",
        answer:
          "Develop a comprehensive onboarding checklist for [Product Name / Description], outlining each step users need to take to get started, along with helpful resources and tips for success.",
      },
      {
        question: "Onboarding Email",
        answer:
          "Utilize personalized email campaigns to welcome new users to [Product Name / Description], provide them with helpful tips and resources, and encourage them to complete key onboarding tasks.",
      },
      {
        question: "Gamify Onboarding",
        answer:
          "Gamify the onboarding experience within [Product Name / Description] by incorporating achievements, badges, or rewards for completing key tasks or reaching certain milestones.",
      },
      {
        question: "Personalise Onboarding",
        answer:
          "Personalize the onboarding journey for each user based on their preferences, goals, and usage patterns within [Product Name / Description], offering tailored recommendations and content.",
      },
    ],
  },
  {
    category: "userPersona",
    prompts: [
      {
        question: "User Persona",
        answer:
          "Act as a Product Manager. I am building a {marketing automation software} that will be used by {marketing executives, as well as junior email marketers and senior digital marketing managers.} Create a user persona for these three users.",
      },
      {
        question: "Identify Demographic",
        answer:
          "Identify the key demographic information for each user persona, including age, gender, education level, job title, industry experience, and any other relevant details.",
      },
      {
        question: "Challenges And Pain Points ",
        answer:
          "Describe the unique challenges and pain points faced by each user persona in their day-to-day work, and how the {marketing automation software} can help address these challenges and streamline their workflows.",
      },
      {
        question: "Features By Persona",
        answer:
          "Delve into the specific features, functionality, and capabilities of the {marketing automation software} that are most relevant and valuable to each user persona, and how these align with their unique needs and preferences.",
      },
      {
        question: "Use-Cases By Persona",
        answer:
          "Explore potential user scenarios or use cases for each user persona, illustrating how they would interact with the {marketing automation software} in different situations and contexts.",
      },
      {
        question: "Sample Persona",
        answer:
          "Compile the insights gathered from creating the user personas into comprehensive profiles, including a name, photo, background information, key characteristics, pain points, goals, and preferred features, to serve as a reference for product development and decision-making.",
      },
    ],
  },
  {
    category: "productStrategy",
    prompts: [
      {
        question: "Product Roadmap",
        answer:
          "Create a comprehensive, step-by-step guide that explains the process of crafting a successful product roadmap for [specify product]. This guide should effectively incorporate best practices, utilize optimum tools, and suggest effective communication strategies.",
      },
      {
        question: "Product Discovery And Competitive Analysis",
        answer:
          "Perform [specify framework: SWOT, PESTLE, Porter’s 5 force] analysis on [specify competitor’s name or describe their product experience if it’s a less well-known brand].",
      },
      {
        question: "Identifying Relevant KPIs",
        answer:
          "Propose 10 unique KPIs to measure our products market performance. The product is [describe product].",
      },
      {
        question: "Metrics for Product Release",
        answer:
          "Suggest a set of metrics to measure the success of our recent release. The release includes [describe release].",
      },
      {
        question: "User engagement improvements",
        answer:
          "Propose a set of A/B tests to improve user engagement. The product is [describe product].",
      },
      {
        question: "Pricing Strategy",
        answer:
          "Propose 3 alternative pricing strategies for our new product. The product is [describe product].",
      },
    ],
  },
  {
    category: "userExperirnce",
    prompts: [
      {
        question: "Usability Improvement",
        answer:
          "Identify 10 areas of usability improvement in our user interface. The product is [describe product].",
      },
      {
        question: "Accessibility Improvement",
        answer:
          "Propose a feature set to improve the accessibility of our product. The product is [describe product]. [Upload screenshot of the website or app]",
      },
      {
        question: "Collaborate With Designers",
        answer:
          "Please provide best practices for collaborating with a design team on [describe your product]. [You can also specify anything relevant about your product team, the design team, the tools either team uses, and any relevant processes (e.g. lean or agile methodology, SAFe, waterfall.]",
      },
      {
        question: "Landing Page Design",
        answer:
          "Create a list of must-have visual elements and design principles for an effective landing page for [describe your product]. The page should advance [specify customer experience goals] and be based on these [list key branding guidelines].",
      },
    ],
  },
  {
    category: "User Feedback",
    prompts: [
      {
        question: "User Research Strategy",
        answer:
          "Please create a strategy for conducting effective user research and gathering valuable feedback for [describe your product]. Considering these methods and tools: [specify methods and tools you’re considering].",
      },
      {
        question: "User Interviews",
        answer:
          "Explain the process of designing and conducting a user interview for [describe your product], providing guidance on preparing interview questions, selecting participants, and managing the interview process.",
      },
      {
        question: "Survey Questions",
        answer:
          "Draft a survey to collect customer feedback on our latest release. The release includes [describe release].",
      },
      {
        question: "Talk to users - Social Media",
        answer:
          "Here’s some user feedback we got on social media: [paste message]. Draft a response to user feedback. [Include rough notes on anything you want to communicate to users, e.g. you plan to build what they are asking for, there’s already a way to do what they want to do, etc.]",
      },
      {
        question: "Bug Report",
        answer:
          "Here’s some user feedback: [paste message]. Draft a bug report based on user feedback.",
      },
    ],
  },
];

export const productList = {
  Research: [
    "Overall Research",
    "Analyze Market Segmentation",
    "Competitor Analysis",
    "Trend Identification",
    "SWOT Analysis",
    "Customer Needs Assessment",
    "Product Positioning",
    "Market Entry Strategy",
    "Customer Segmentation",
    "Opportunity Assessment",
  ],
  Documentation: [
    "Draft PRD",
    "Refine PRD",
    "PRD Template",
    "Release Notes",
    "Product Announcement To Users",
  ],
  Frameworks: [
    "AARRR",
    "BJ Foggs",
    "Weighted Impact Scoring",
    "RICE Prioritization",
    "Design Spring",
    "Customer Journey, Map",
    "DACI (Driver, Approved, Contributor, Informed)",
    "CIRCLES Method",
  ],
  userFeedback: [
    "Feedback",
    "Create FAQ",
    "Categorizing Customer Feedback",
    "Action Pointers for Improvement",
    "Continuous Feedback Loop",
    "Trend Analysis and Insights",
  ],
  userOnboarding: [
    "User Onboarding Audit",
    "Enhance User Experience",
    "Onboarding Checklist",
    "Onboarding Email",
    "Gamify Onboarding",
    "Personalise Onboarding",
  ],
  userPersona: [
    "User Persona",
    "Identify Demographic",
    "Challenges And Pain Points",
    "Features By Persona",
    "Use-Cases By Persona",
    "Sample Persona",
  ],
  productStrategy: [
    "Product Roadmap",
    "Product Discovery And Competitive Analysis",
    "Identifying Relevant KPIs",
    "Metrics for Product Release",
    "User engagement improvements",
    "Pricing Strategy",
  ],
  userExperirnce: [
    "Usability Improvement",
    "Accessibility Improvement",
    "Collaborate With Designers",
    "Landing Page Design",
  ],
};

export const industriesList = [
  "Technology (software, hardware, IT services)",
  "Healthcare (pharmaceuticals, medical devices, healthcare services)",
  "Finance (banking, investment services, insurance)",
  "Automotive (manufacturing, sales, services)",
  "Retail (online and brick-and-mortar stores)",
  "Energy (oil and gas, renewable energy, utilities)",
  "Consumer goods (FMCG, food and beverage, household products)",
  "Aerospace and Defense",
  "Construction and Engineering",
  "Telecommunications",
  "Entertainment and Media",
  "Agriculture and Agribusiness",
  "Education and Training",
  "Hospitality and Tourism",
  "Real Estate",
  "Transportation and Logistics",
  "Manufacturing (heavy machinery, electronics, consumer goods)",
  "Pharmaceuticals and Biotechnology",
  "Fashion and Apparel",
  "Professional Services (consulting, legal, accounting)",
];
