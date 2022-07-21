import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ArticleGroup from './components/ArticleGroup';
import NewsData from '../data/news.json'
import NavItemsData from '../data/navItems.json'

function App() {
  const [navItems, setNavItems] = useState(NavItemsData)

  // Loop thru NewsData, each article is a dictionary with key-value pairs.
  const [articles, setArticles] = useState(NewsData.map((article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0] : null,
      created_date: article.created_date
    }
  }))


  return (
    <div className="App">
      <NavBar items={navItems} />

      {articles.map((article) => (
        <ArticleGroup key={article.id} article={article} />
      ))}
    </div>
  )
}

export default App