import './App.css';
import { useState, useEffect } from "react";
//https://metmuseum.github.io/#search link api

function App() {


  const [objectIDs, setObjectIDs] = useState([]);
  const [objectsData, setObjectsData] = useState([]);
  const [departmentsData, setDepartmentsData] = useState([]);

  // trayendo ID objetos
  useEffect(() => {

    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
      .then(response => response.json())
      .then(data => setObjectIDs(data.objectIDs))
      .catch(e => console.error(e.message));

  }, []);

  //console.log(objectIDs);

  // trayendo data de los objetos(obras)
  useEffect(() => {

    
    objectIDs.forEach((id) =>  {
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    .then(response => response.json())
    .then(data => setObjectsData(objectsData.concat(data)))
    .catch(e => console.error(e.message))
    }
    )

  }, []);


  // trayendo departamentos de colecciones 
  useEffect(() => {

    fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
      .then(response => response.json())
      .then(data => setDepartmentsData(data.departments))
      .catch(e => console.error(e.message));

  }, []);


  const departmentName = departmentsData.map(function(department) {
    return (
      <li key={department.id}>{department.displayName}</li>
    )
  });


  return (
    <div className="App">
      <p> hola Señoras bienvenidas al metmuseum </p>
      <p> colecciones  || destacados ||  buscar </p> 
      <ul>
          {departmentName}
      </ul>
    </div>
  );
}




export default App;
