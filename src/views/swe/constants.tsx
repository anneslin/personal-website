import React from 'react';
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
  description: JSX.Element;
}
export const uptopContent = {
  companyUrl: 'https://liveuptop.com/',
  companyLogo: 'logo-uptop.png',
  companyName: 'UpTop',
  title: 'Full-Stack Engineer',
  techs: [tech.TypeScript, tech.React, tech.Redux, tech.Bootstrap, tech.Less, tech.ReactNative, tech.CSharp],
  description:
    <div className="blurb justified">
      As a freshly-graduated software engineer, I was tasked with scrapping the entire front-end that was originally built with HTML and CSS and building from the ground up what is now the website that one half of the client base uses: <a className="decoratedLink" href="https://manage.liveuptop.com/" target="_blank">the landlord portal.</a> This site was built in Typescript with React, managed with Redux, and styled with Bootstrap and Less CSS for custom styling.
    <br/>
    <br/>
    <div className="videoContainer">
      <div className="vidCard flex-column align-center overflow-hidden" >
        <video autoPlay loop muted playsInline style={{ width: '150%' }} src="https://liveuptop.com/video/paperwork-desktop.mp4"/>
        Built a dynamic rental application form such that landlords could customize what it would look like to applicants and had the ability to save templates for future use.
      </div>
      <div className="vidCard flex-column align-center overflow-hidden">
        <video autoPlay loop muted playsInline style={{ width: '150%' }} src="https://liveuptop.com/video/maintenance-desktop.mp4"/>
        Created a number of views and modals for this PMS (Product Management Service) that included tables, grids, and forms where landlords could manage listings, tenants, and payments. 
      </div>
    </div>
    <br/>
    I had the opportunity to participate in onboarding landlords to note user interactions with the web application, bugs, and feature requests, which of course helped personally as a developer understand the audience I was building for. Intercom and Mixpanel were also integrated to allow communication with and tracking of users to better understand the clients. I applied collected information in conversations with the product manager and product designer to ensure we were building and advocating for the users.
    <br/>
    <br/>
    Culturally, although the team was small (the engineering team never exceeded 4 heads, one of which was the CTO), I felt it important for knowledge to be centralized, so I encouraged the other engineers to pool and document resources to be shared as they came. Despite the structure of information being bare-boned, we were all able to make great use of this and found it incredibly useful.
  </div>
}
export const clarkContent = {
  companyUrl: 'https://www.hiclark.com/',
  companyLogo: 'logo-clark.png',
  companyName: 'Clark',
  title: 'Full-Stack Engineer',
  techs: [tech.TypeScript, tech.React, tech.Redux, tech.Sass, tech.Jest, tech.Ruby, tech.Rails, tech.Graphql],
  description:
  <div className="blurb justified">
    Clark will forever and always have a place in my heart, for the team was filled with the most pleasant and encouraging people I had had the pleasure of working with. The CTO entrusted me with the task to lead the engineering effort on a north star project which aimed to simplify and automate the matching process for shoppers (students and parents looking for tutors). This entailed working closely with design and project management to plan, organize, and implement numerous releases with the engineering team.
    <br/>
    <br/>
    <div className="videoContainer">
      <div className="vidCard flex-column align-center overflow-hidden">
        <video autoPlay loop muted playsInline style={{ width: '100%' }} src={require("../../assets/videos/clark-matching.mp4")}/>
        Maintained our GatsbyJs site with Contentful and built the flow to automate shopping for a tutor. This was completed with Calendly integrations and proper user tracking to enable re-engagement via Autopilot.
      </div>
    </div>
    <br/>
    I also implemented integrations with tools such as Segment, Autopilot, and Zapier to further bridge the gap between the team and the customers using tracking and communication as the vehicle. With Ruby on Rails, I created a public API from which our GatsbyJS static site could handle payments with Stripe, tracking, and matching.
    <br/>
    <br/>
    We had multiple projects separated across multiple repositories, and after some research, a teammate and I used code splitting to move toward having a mono-repo. This helped us reduce reusing code and increased visibility of existing work. We were able to achieve this by deploying with an env variable that was used at the entry point of the project to determine the proper respective routes to be lazy imported, therefore only loading files that are needed.
    <br/>
    <br/>
    Partook in the transition from using JSONAPI to using GraphQL for both front- and back-end in order to improve client load times.
  </div>
}
export const domioContent = {
  companyUrl: 'https://www.staydomio.com/',
  companyLogo: 'logo-domio.png',
  companyName: 'Domio',
  title: 'Full-Stack Engineer',
  techs: [tech.TypeScript, tech.React, tech.Redux, tech.Sass, tech.ReactNative, tech.Python],
  description: <div className="blurb justified">Made performance corrections on a front page of an internal site, such as reduced the number of calls from n^n (unnecessary repeated requests) to n (minimum necessary requests), worked on lazy loading due to the massive amount of data being loaded, and corrected other repeated hooks due to poor code design. Introduced stricter typing in project and pushed for more sustainable code, curbing tech debt in an already riddled code base. Contributed to company ui and utils react-native-first library.  Completed all backend tasks (completed with thorough tests) in Python with sqlAlchemy that were coupled with respective frontend work and created more efficient ways to get data</div>
}

