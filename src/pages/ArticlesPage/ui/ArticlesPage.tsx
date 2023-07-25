import React from 'react'
import ArticleList from 'entities/Article/ui/ArticleList/ArticleList'

interface ArticlesPageProps {

}

const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  return (
    <ArticleList articles={[]} />
  )
}

export default ArticlesPage
