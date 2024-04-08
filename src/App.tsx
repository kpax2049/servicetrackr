import React, { useState } from 'react';
import LoginForm from 'views/login/LoginForm';
import './App.css';
import TemplateDemo from './views/timeline/TimelineDemo';

function App() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  return (
    <div className="App">
      {!signedIn ? <LoginForm {...{ setSignedIn }} /> : <TemplateDemo />}
    </div>
  );
}

export default App;
