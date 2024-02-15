import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticleByAuthor, articleController } from "src/store/articleSlice";

import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";

import "./ReviewsPage.css";
import ArticleColumn from "../components/ArticleColumn"
import { authors } from "src/lists/Authors";
import "../lists/StringConstants"
import { reviewsTitle } from "../lists/StringConstants";

export default function ReviewsPage() {
  const [authorNames, setAuthorNames] = useState([]);
//  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const data = useSelector(state => { return state.articleSlice.data; });
 
  useEffect(() => {
    //get the authors 
    setAuthorNames(authors);
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authorNames.length > 0) {
          // Fetch articles for each author
          await dispatch(fetchArticleByAuthor(authorNames));
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          // The fetch operation was aborted, handle as needed
        } else {
          // Handle other errors
          console.error('Fetch Error:', error);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Abort the fetch operation if the component is unmounted
      articleController.abort();
    };
  }, [dispatch, authorNames]);

  const transformedArticles = Object.entries(data).map(([authorName, articles], index) => {
    const articlesArray = Array.isArray(articles) ? articles : [articles]

    console.log("Data:", data)
    console.log("Articles:", articles)
    console.log("Articles array:", articlesArray)

    return articlesArray.map((article) => {
        const authorId = article.author.id;
        const authorName = article.author.name;
        const authorBio = article.author.bio;
        const authorWebsite = article.author.website;
        const authorPic = article.author.pic;
        const authorByLine = article.author.byLine;
        const authorSortOrder = article.author.sortOrder;

        const singleArticles = article.articles.map((nestedArticle) =>
        {
          const articleId = nestedArticle.id;
          const articleYear = nestedArticle.year;
          const articleMake = nestedArticle.make;
          const articleModel = nestedArticle.model;
          const articleTitle = nestedArticle.title;
          const articleBody = nestedArticle.body;
          const thumbnailUrl = nestedArticle.thumbnailUrl;

        return {
          authorId,
          authorName,
          authorBio,
          authorWebsite,
          authorPic,
          authorByLine,
          authorSortOrder,
          articleId,
          articleYear,
          articleMake,
          articleModel,
          articleTitle,
          articleBody,
          thumbnailUrl
      };
          
        })

        return singleArticles;   
        
    });
});


  return (
    <>
      <div className="article-banner-ad-wrapper">
        <Link className="article-banner-ad" to="/">
          <img
            className="article-banner-ad-image"
            src={ToyotaBanner}
            alt="placeholder"
          />
        </Link>
      </div>
  
      <h1 className="article-home-title">{reviewsTitle}</h1>
  
      <div className="article-home-content-wrapper">
        <div className="article-home-vertical-ad-wrapper">
          <Link>
            <img src={ToyotaVertical} alt="ad" />
          </Link>
        </div>
  
        <div className="article-home-content">

  {transformedArticles.map((authorData, index) => {

    console.log("authorData: ", authorData);
    console.log("Author Name: " + authorData[0][0].authorName + ", ID:" + authorData[0][0].authorId );
    console.log("Articles? : " + authorData[0])

    return (
      <ArticleColumn 
        key={index} 
        authorName={authorData[0][0].authorName} 
        articles={authorData}
      /> 
    );
  })} 
</div>
  
        <div className="article-vertical-ad-wrapper">
          <Link>
            <img src={FordVertical} alt="ad" />
          </Link>
        </div>
      </div>
        
      <div className="article-banner-ad-wrapper">
        <Link className="article-banner-ad" to="/">
          <img
            className="article-banner-ad-image"
            src={FordBanner}
            alt="placeholder"
          />
        </Link>
      </div>
    </>
  ); 
}