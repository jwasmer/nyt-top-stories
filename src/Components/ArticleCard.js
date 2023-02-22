import "../Stylesheets/ArticleCard.css"
import { useNavigate } from "react-router-dom"

export default function ArticleCard({ title, id }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${id}`)
  }

  return (
    <li className="list-item" onClick={handleClick}>
      <h5>{title}</h5>
    </li>
  )
}