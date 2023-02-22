import "../Stylesheets/ArticleCard.css"
import { useNavigate } from "react-router-dom"

export default function ArticleCard({ article }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${article.id}`, {
      state: {
        content: article
      }
    })
  }

  return (
    <li className="list-item" onClick={handleClick}>
      <h5>{article.title}</h5>
    </li>
  )
}