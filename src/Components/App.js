import '../Stylesheets/App.css';
import { getData } from '../api-calls';
import { useState, useEffect } from 'react';
import { Route, useNavigate } from "react-router-dom"
import ArticleCard from './ArticleCard';

function App() {
  const apiKey = process.env.REACT_APP_NYT_KEY
  console.log(process.env.REACT_APP_NYT_KEY)

  const [data, setData] = useState(null)
  const [articles, setArticles] = useState(null)
  const [section, setSection] = useState('home')
  const [url, setUrl] = useState(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)

  useEffect(() => {
    let count = 1
    getData(url)
      .then(data => {
        setArticles(() => {
          data.results.map(result => {
            return {count: result}
            count ++
          })
        })
        setData(data)
        })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Route 
        path="/"
        element={<Home articles={ articles } />}
      />
      <Route
        path="/:id"
        element={<DetailView 
        articles={articles}
        />}
      />
    </>
  );
}

export default App;
