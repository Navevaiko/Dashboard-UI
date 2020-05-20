import React from 'react';
import Global from './style/global';

import LeftSidebar from './components/LeftSidebar/index';
import RightSidebar from './components/RightSidebar/index';

function App() {
  return(
    <>
      <Global />
      <LeftSidebar />
      <RightSidebar />
    </>
  );
}

export default App;
