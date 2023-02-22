import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';

export default function Home({ articles }) {
  const [articleCards, setArticleCards] = useState(null)

  const buildArticles = () => {
    setArticleCards(
      articles.map(article => {
        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            id={article.id}
          />
        )
      })
    )
  }

  useEffect(() => {
    buildArticles()
  }, [])

  return (
    <div>
      {articleCards}
    </div>
  )
}