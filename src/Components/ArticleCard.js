import "../Stylesheets/ArticleCard.css"
import { useNavigate } from "react-router-dom"

export default function ArticleCard({ article }) {
  const navigate = useNavigate()

  console.log(article)

  const handleClick = () => {
    navigate(`/${article.id}`, {
      state: {
        content: article
      }
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/${article.id}`, {
        state: {
          content: article
        }
      })
    }
  }

  return (
    <li tabIndex="0" className="list-item" onClick={handleClick} onKeyDown={handleKeyDown}>
      <h5 className="article-title">{article.title}</h5>
      <img className="thumbnail" src={article.multimedia[2].url} alt={article.multimedia[2].format} />
    </li>
  )
}       