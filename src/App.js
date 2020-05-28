import React from 'react';
import Global from './style/global';

import LeftSidebar from './components/LeftSidebar/index';
import RightSidebar from './components/RightSidebar/index';
import SearchBar from './components/SearchBar';

function App() {
  return(
    <>
      <Global />
      <LeftSidebar />
      <SearchBar />
      <RightSidebar />
    </>
  );
}

export default App;
