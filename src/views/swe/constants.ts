export enum tech {
  React = 0,
  TypeScript,
  Bootstrap,
  JIRA,
  Meteor,
  Redux,
  Less,
  Sass,
  CSharp,
  Ruby,
  Rails,
  Python,
  Jest,
  Graphql, 
  ReactNative
}

export const techIconFiles = {
  [tech.React]: 'icon-react.png',
  [tech.TypeScript]: 'icon-typescript.png',
  [tech.Bootstrap]: 'icon-bootstrap.png',
  [tech.JIRA]: 'icon-jira.png',
  [tech.Meteor]: 'icon-meteor.png',
  [tech.Redux]: 'icon-redux.png',
  [tech.Less]: 'icon-less.png',
  [tech.Sass]: 'icon-sass.png',
  [tech.CSharp]: 'icon-csharp.png',
  [tech.Ruby]: 'icon-ruby.png',
  [tech.Rails]: 'icon-rails.png',
  [tech.Python]: 'icon-python.png',
  [tech.Jest]: 'icon-jest.png',
  [tech.Graphql]: 'icon-graphql.png',
  [tech.ReactNative]: 'icon-react-native.png',
};

export const techTitles = {
  [tech.React]: 'React',
  [tech.TypeScript]: 'Typescript',
  [tech.Bootstrap]: 'Bootstrap',
  [tech.JIRA]: 'JIRA',
  [tech.Meteor]: 'Meteor',
  [tech.Redux]: 'Redux',
  [tech.Less]: 'Less',
  [tech.Sass]: 'Sass',
  [tech.CSharp]: 'C#',
  [tech.Ruby]: 'Ruby',
  [tech.Rails]: 'Rails',
  [tech.Python]: 'Python',
  [tech.Jest]: 'Jest',
  [tech.Graphql]: 'GraphQL',
  [tech.ReactNative]: 'React Native',
};
export interface careerPage {
  companyUrl: string;
  companyLogo: string;
  companyName: string;
  title: string;
  techs: ReadonlyArray<tech>;
}
export interface careerContent extends careerPage {
  description: string;
}
export const uptopContent = {
  companyUrl: 'https://liveuptop.com/',
  companyLogo: 'logo-uptop.png',
  companyName: 'UpTop',
  title: 'Full-Stack Engineer',
  techs: [tech.TypeScript, tech.React, tech.Redux, tech.Bootstrap, tech.Less, tech.ReactNative, tech.CSharp],
  description: "Using the combination of typescript, react, and redux, the project I was mainly assigned to was creating from scratch the responsive website that landlords are now using, which includes over 15 views and over 20 modals.Communicated effectively with the product manager and product designer to ensure views were built out as intented with proper integration of features. Created standard variables to be used across our landlord and renter websites. Intercom and Mixpanel were also integrated to allow communication with and tracking of users. I had the opportunity to participate in onboarding landlords by noting user interactions with the web application, bugs, and feature requests, which of course helped personally as a developer understand the audience I'm buidling for, and I evidently would apply to conversations with the product manager and product designer and to how I developed. Eventually, I began to take on more of a full-stack role after given permission to perform back-end tasks."
}
export const clarkContent = {
  companyUrl: 'https://www.hiclark.com/',
  companyLogo: 'logo-clark.png',
  companyName: 'Clark',
  title: 'Full-Stack Engineer',
  techs: [tech.TypeScript, tech.React, tech.Redux, tech.Sass, tech.Jest, tech.Ruby, tech.Rails, tech.Graphql],
  description: "Led engineering on a North Star project which aimed to simplify and automate the matching process for shoppers. This entailed working closely with design and project management to plan, organize, and implement numerous releases with the engineering team. Implemented integrations with tools such as Segment, Autopilot, Zapier. Implemented a public API from which our GatsbyJS static site could handle payments, tracking, and matching using Ruby on Rails. Used code splitting to move toward having a mono-repo. Helped transition from using JSONAPI to using GraphQL in order to improve client load times"
}
export const domioContent = {
  companyUrl: 'https://www.staydomio.com/',
  companyLogo: 'logo-domio.png',
  companyName: 'Domio',
  title: 'Full-Stack Engineer',
  techs: [tech.TypeScript, tech.React, tech.Redux, tech.Sass, tech.ReactNative, tech.Python],
  description: "Made performance corrections on a front page of an internal site, such as reduced the number of calls from n^n (unnecessary repeated requests) to n (minimum necessary requests), worked on lazy loading due to the massive amount of data being loaded, and corrected other repeated hooks due to poor code design. Introduced stricter typing in project and pushed for more sustainable code, curbing tech debt in an already riddled code base. Contributed to company ui and utils react-native-first library.  Completed all backend tasks (completed with thorough tests) in Python with sqlAlchemy that were coupled with respective frontend work and created more efficient ways to get data"
}

