import './App.css';
import Formm from './components/form.js'
import React from 'react'


function App() {

  return (<div>
    <h1 className="title">Mindful Munching</h1>
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
    </div>
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
    </div>
    {/* <a style="position: fixed; bottom: 10px; right: 10px;color:#CCC" href="https://plus.google.com/111052275277622928148?rel=me">Google+</a> */}
    <Formm></Formm>
  </div>
  )


}

export default App;
