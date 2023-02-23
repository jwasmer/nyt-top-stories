import '../Stylesheets/Search.css';
import { useState } from "react"

export default function Search({ data, setArticles, setSection }) {
  const [search, setSearch] = useState('')

  const clearSearch = () => {
    setSearch('')
    getSearchResults('', data, setArticles)
  }

  const getSearchResults = (search, data, setArticles) => {
    setArticles(() => {
      return data.filter(article => {
        const isMatch = article.title.includes(search)

        if (isMatch) {
          return article
        }
      })
    })
  }

  const handleChange = (event) => {
    if (event.target.id === "section-select") {
      setSection(event.target.value)
    } else {
    setSearch(event.target.value)
    }
  }

  const handleClick = () => {
    getSearchResults(search, data, setArticles)
  }

  return (
    <form className="search">
      <div className="search-wrapper">
        <input className="search-input" type="text" value={search} placeholder="Enter search..." onChange={(event) => {handleChange(event)}}></input>
        <button className="button" onClick={handleClick}>
          <span class="material-symbols-outlined">
            search
          </span>
        </button>
        <button className="button" onClick={clearSearch}>
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
      </div>
      <div className="menu-wrapper">
        <label htmlFor="section-select">Category:</label>
        <select className="menu" name="sections" id="section-select" defaultValue="home" onClick={(event) => {console.log(event.target)}} onChange={(event) => {handleChange(event)}}>
          <option value="arts">Arts</option>
          <option value="automobiles">Automobiles</option>
          <option value="books">Books</option>
          <option value="business">Business</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="home">Home</option>
          <option value="insider">Insider</option>
          <option value="magazine">Magazine</option>
          <option value="movies">Movies</option>
          <option value="nyregion">NY Region</option>
          <option value="obituaries">Obituaries</option>
          <option value="opinion">Opinion</option>
          <option value="politics">Politics</option>
          <option value="realestate">Real Estate</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="sundayreview">Sunday Review</option>
          <option value="technology">Technology</option>
          <option value="theater">Theater</option>
          <option value="t-magazine">T-Magazine</option>
          <option value="travel">Travel</option>
          <option value="upshot">Upshot</option>
          <option value="us">US</option>
          <option value="world">World</option>
        </select>
      </div>
    </form>
  )
}