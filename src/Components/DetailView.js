import '../Stylesheets/DetailView.css';
import { useLocation, Link } from "react-router-dom"

export default function DetailView() {
  const location = useLocation()
  const article = location.state.content

  const getDate = (rawDate) => {
    const date = new Date(rawDate)

    return date.toLocaleDateString()
  }

  return (
    <div className="details-wrapper">
      <h4 className="font">{article.title}</h4>
      <p className="font">{article.abstract}</p>
      <p className="font">{article.byline}, {getDate(article.created_date)}</p>
      <Link to={article.short_url}>Read the full story here.</Link>
    </div>
  )
}