export enum sections {
  creative = 1,
  softwareEngineer,
  learner
}
export enum subSections {
  body = 1,
  words,
  domio,
  clark,
  uptop,
  relatedCourses,
  currentlyReading
}
export const sectionUrl = {
  [sections.creative]: "creative",
  [sections.softwareEngineer]: "swe",
  [sections.learner]: "learner"
};

export const sectionText = {
  [sections.creative]: "creative",
  [sections.softwareEngineer]: "software engineer",
  [sections.learner]: "learner"
};

export const subSectionUrl = {
  [subSections.body]: "body",
  [subSections.words]: "words",
  [subSections.domio]: "domio",
  [subSections.clark]: "clark",
  [subSections.uptop]: "uptop",
  [subSections.relatedCourses]: "coursework",
  [subSections.currentlyReading]: "reading"
}

export const subSectionText = {
  [subSections.body]: "body",
  [subSections.words]: "words",
  [subSections.domio]: "dōmio",
  [subSections.clark]: "clark",
  [subSections.uptop]: "uptop",
  [subSections.relatedCourses]: "related courses",
  [subSections.currentlyReading]: "currently reading"
}
