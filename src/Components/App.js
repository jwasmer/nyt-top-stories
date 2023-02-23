import '../Stylesheets/App.css';
import { getData } from '../api-calls';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import DetailView from './DetailView'
import Search from './Search';

export default function App() {
  const apiKey = process.env.REACT_APP_NYT_KEY

  const [data, setData] = useState(null)
  const [articles, setArticles] = useState(null)
  const [section, setSection] = useState('home')
  const [url, setUrl] = useState(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)

  useEffect(() => {
    let count = 0
    getData(url)
      .then(data => {
        data.results.forEach(result => {
          result.id = count
          count++
        })
        setData(data.results)
        setArticles(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      {articles && <Search
        data={ data }
        setArticles={ setArticles }
      />}
      <Routes>
        <Route 
          path="/"
          element={
            articles && <Home 
              articles={ articles } 
            />
          }
        />
        <Route
          path="/:id"
          element={
            <DetailView />
          }
        />
      </Routes>
    </>
  );
}
