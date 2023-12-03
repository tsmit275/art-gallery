//imports 
import React, { useState, useEffect } from 'react'
import Gallery from './Components/Gallery'
import Buttons from './Components/Buttons'


//declaring the 'App' function 
function App() {
  //stateful variables
  //artId is initialized to 470521 & data is initialized to an empty object
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(12720)


//fetching our data with the useEffect
useEffect(() => {
  const fetchData = async () => {
  document.title='Welcome to the ArtWorld'
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
  const data = await response.json()
setData(data)
}

fetchData()   
},[artId])
//handleIterate function updates artId state after user chooses a button
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}
//if there is no primary img user will see the text in the h2 tag
const displayImage = () => {
  if(!data.primaryImage){
    return (
      <h2>Sorry, no image</h2>
    )
  }
  return (
    <Gallery objectImg={data.primaryImage} title={data.title} />
  )
}
  return (
  <div className="App">
    <h1>{data.title}</h1>
    <div style={{'width':'80%'}}>
       {displayImage()}
    </div>
    <Buttons handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
