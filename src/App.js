import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  const name = "Tin";
  const age = 22;
  const isMale = true;
  const colorList = ["red","green","blue"]
  const student = { name: "easy fe" }

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>  Xin chao {name} - {age} - {isMale ? "Male" : "Female"}  </p>
        <p>Tin dep trai day nee</p>
        {/* {isMale && (
          <>
          <p>helo ae</p>
          <p>Male 1</p>
          <p>Male2 </p>
          </>
        )}
        {!isMale && <p>Female</p>}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li key = {color} style={{color}}>{color}</li>
          ) )}
        </ul> */}
      </header>

      <TodoFeature/>
      <AlbumFeature />
    </div>
  );
}
export default App;