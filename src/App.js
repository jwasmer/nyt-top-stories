import './App.css';
import { getData } from './api-calls';
import { useState, useEffect } from 'react';

function App() {
  const apiKey = process.env.REACT_APP_NYT_KEY

  const [data, setData] = useState(null)
  const [section, setSection] = useState('home')
  const [url, setUrl] = useState(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)

  useEffect(() => {
    console.log(url)
    getData(url)
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const buildHeadlineCards = (data) => {
    data.results.map(result => {
      <div>
        {result.title}
      </div>
    })
  }

  return (
    <>
      {data && buildHeadlineCards(data)}
    </>
  );
}

export default App;
