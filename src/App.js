import React from 'react';
import Global from './style/global';

import LeftSidebar from './components/LeftSidebar/index';
import RightSidebar from './components/RightSidebar/index';
import SearchBar from './components/SearchBar';
import ContentContainer from './components/ContentContainer';
import ChartContainer from './components/ChartContainer';

function App() {
  return(
    <>
      <Global />
      <LeftSidebar />
      <ContentContainer>
        <SearchBar />
        <ChartContainer />
      </ContentContainer>
      <RightSidebar />
    </>
  );
}

export default App;
