import { sections, subSections } from './constants';

export const getSubSections = (section: sections | null) => {
  switch (section) {
    case sections.creative:
      return [subSections.body, subSections.visual, subSections.words];
    case sections.softwareEngineer:
      return [subSections.domio, subSections.clark, subSections.uptop];
    case sections.learner:
      return [subSections.relatedCourses, subSections.currentlyReading];
    default:
      return [];
  }
};