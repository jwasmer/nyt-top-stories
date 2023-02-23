import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';

export default function Home({ articles }) {
  const [articleCards, setArticleCards] = useState(null)

  const buildArticles = () => {
    setArticleCards(
      articles.map(article => {
        return (
          <ArticleCard
            key={ article.id }
            article={ article }
          />
        )
      })
    )
  }

  useEffect(() => {
    buildArticles()
  }, [articles])

  return (
    <div>
      {articleCards}
    </div>
  )
}