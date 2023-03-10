import '../Stylesheets/DetailView.css';
import { useLocation, Link } from "react-router-dom"

export default function DetailView() {
  const location = useLocation()
  const article = location.state.content

  const getDate = (rawDate) => {
    const date = new Date(rawDate)

    return date.toLocaleDateString()
  }

  const displayImage = () => {
    console.log("article:", article.multimedia[0].url)
    if (article.multimedia[0]) {
      return <img className="image" src={article.multimedia[0].url} alt={article.multimedia[0].caption} />
    }
  }

  return (
    <div className="details-wrapper">
      <h4 className="font">{article.title}</h4>
      {displayImage()}
      <p className="font">{article.abstract}</p>
      <p className="font">{article.byline}, {getDate(article.created_date)}</p>
      <Link className="link" to={article.short_url}>Read the full story here.</Link>
      <Link className="link" to="/">Back</Link>
    </div>
  )
}