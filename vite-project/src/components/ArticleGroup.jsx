import Article from "./Article";
import ArticleTeaser from "./ArticleTeaser";
import { useState } from 'react'

function ArticleGroup(props) {
    const { article } = props
    // Each Article Group has a showArticle state that determine whether to render image or not when title is clicked
    const [showArticle, setShowArticle] = useState(false)

    const renderIfShow = () => {
        if (showArticle) {
            return <Article {...article} />
        }
    }

    const HandleTitleClick = (article_id) => {
        console.log(article_id)
        setShowArticle(!showArticle)
    }

    // the spread operator seperates the data in article into individual pieces
    return (
        <div>
            <ArticleTeaser id={article.id} title={article.title} date={article.created_date} handleClick={HandleTitleClick} />
            {/* {renderIfShow()} */}
            {showArticle && <Article {...article} />}
            {/* {showArticle ? <Article {...article} /> : ''} */}
        </div>
    )

}

export default ArticleGroup;