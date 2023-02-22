import { useLocation, Link } from "react-router-dom"

export default function DetailView() {
  const location = useLocation()
  const article = location.state.content

  const getDate = (rawDate) => {
    const date = new Date(rawDate)

    return date.toLocaleDateString()
  }

  return (
    <div>
      <h4>{article.title}</h4>
      <h5>{article.abstract}</h5>
      <p>{article.byline}, {getDate(article.created_date)}</p>
      <Link to={article.short_url}>Read the full story here.</Link>
    </div>
  )
}