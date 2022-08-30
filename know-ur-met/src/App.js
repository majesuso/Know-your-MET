import './App.css';
import { useState, useEffect } from "react";

function App() {


  const [objectsID, setObjectsID] = useState([]);
  const [objectsData, setObjectsData] = useState([]);

  useEffect(() => {

    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
      .then(response => response.json())
      .then(data => setObjectsID(data))
      .catch(e => console.error(e.message));

  }, []);

  useEffect(() => {

    fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
      .then(response => response.json())
      .then(data => setObjectsData(data))
      .catch(e => console.error(e.message));

  }, []);

  //console.log(objectsID);
  console.log(objectsData.departments);

  const departmentName = objectsData.departments.map(function (department) {
    return (
      <li>{department.displayName}</li>
    )
  });


  return (
    <div className="App">
      <p> hola Señoras bienvenidas al metmuseum </p>
      <p> Selecciona el depto</p>
      <ul>
          {departmentName}
      </ul>
    </div>
  );
}




export default App;
