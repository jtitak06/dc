import "./ArticleSingle.css"

export default function ArticleSingle({
    articleYear, 
    articleMake, 
    articleModel, 
    thumbnailUrl, 
    articleTitle})
{
    thumbnailUrl = "https://drivechicago.com".concat(thumbnailUrl);
    //console.log("IMAGE LINK TEST:", thumbnailUrl)
    return(
        <div id="article_holder">
    <div className="review_title">
    {articleYear} {articleMake} {articleModel}
    </div>
    <div className="review-details">
        <div className="image"> <img src= {thumbnailUrl} alt="car" className="article-image" /></div>
        <div className="text"><div className="article-description">{articleTitle}</div></div>
    </div>
    
</div>
    )

}