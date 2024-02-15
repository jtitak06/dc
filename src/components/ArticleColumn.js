import ArticleSingle from "./ArticleSingle";
import "./ArticleColumn.css"

export default function ArticleColumn({ authorName, articles }) {

    return (
        <div className="column-container">
            <div className="column-title">
                {authorName}
            </div>
            <hr />

            <div className="article-row">
                {articles.map((articleGroup, index) => {
                    // Assuming each articleGroup is an array of articles
                    console.log("articleGroup:", articleGroup);
                    // Assuming each articleGroup contains at least one article
                    console.log("article Title:", articleGroup[0].articleTitle);

                    return (
                        <div key={index}>
                            {articleGroup.map((article, subIndex) => (
                                <ArticleSingle
                                    key={subIndex}
                                    articleMake={article.articleMake}
                                    articleModel={article.articleModel}
                                    articleYear={article.articleYear}
                                    articleTitle={article.articleTitle}
                                    thumbnailUrl={article.thumbnailUrl}
                                />
                            ))}
                             
                        </div>
                        
                    );
                })}
               
            </div>
        </div>
    );
}