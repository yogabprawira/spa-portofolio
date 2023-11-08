import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import PageWrapper from "./PageWrapper";
import HomeTab from "./HomeTab";

function App() {
  return (
      <ChakraProvider>
          <Sidebar/>
          <Content>
              <PageWrapper id='home' label='Home'>
                  <HomeTab/>
              </PageWrapper>
          </Content>
      </ChakraProvider>
  );
}

export default App;
