import { useNavigate } from "react-router-dom"

export default function ArticleCard({ title, id }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${id}`)
  }

  return (
    <div id={id} onClick={handleClick}>
      {title}
    </div>
  )
}