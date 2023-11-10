import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import PageWrapper from "./PageWrapper";
import AboutTab from "./About";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import SkillTab from "./SkillTab";
import InterestsTab from "./InterestsTab";
import AwardsTab from "./AwardsTab";

function App() {
  return (
      <ChakraProvider>
          <Sidebar/>
          <Content>
              <PageWrapper id='about' label='About'>
                  <AboutTab/>
              </PageWrapper>
              <PageWrapper id='experience' label='Experience'>
                  <ExperienceTab/>
              </PageWrapper>
              <PageWrapper id='education' label='Education'>
                  <EducationTab/>
              </PageWrapper>
              <PageWrapper id='skills' label='Skills'>
                  <SkillTab/>
              </PageWrapper>
              <PageWrapper id='interests' label='Interests'>
                  <InterestsTab/>
              </PageWrapper>
              <PageWrapper id='awards' label='Awards'>
                  <AwardsTab/>
              </PageWrapper>
          </Content>
      </ChakraProvider>
  );
}

export default App;
