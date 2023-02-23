import '../Stylesheets/Home.css';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { sectionsList } from '../sections';

export default function Home({ articles, section }) {
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
    <div className="article-card-wrapper">
      <h2 className="section-label">{sectionsList[section]}</h2>
      <ul className="article-card-list">
        {articleCards}
      </ul>
    </div>
  )
}