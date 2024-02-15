import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StatusCode } from "../utils/StatusCode";

export const articleController = new AbortController();

const initialStateArticle = {
    data: [],
    status: StatusCode.IDLE, 
    error: null, 
  };

  const articleSlice = createSlice({
    name: 'articles', 
    initialState: initialStateArticle, 
    reducers: {
      loadArticlesData : (state, action) => 
      {
        state.data = action.payload
      }
    }, 
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticleByAuthor.pending, (state, action) => {
          state.status = StatusCode.LOADING;
        })
        .addCase(fetchArticleByAuthor.fulfilled, (state, action) => {
          state.data = action.payload;
          state.status = StatusCode.IDLE;
        })
        .addCase(fetchArticleByAuthor.rejected, (state, action) => {
          state.status = StatusCode.ERROR;
          state.error = action.error.message;
        });
    },
});

  export const { loadArticlesData } = articleSlice.actions;
  export default articleSlice.reducer;

  export const fetchArticleByAuthor = createAsyncThunk(
    'articles/fetchByAuthor', // Unique action type
    async (authorNames, { dispatch }) => {
      // ... your existing logic
      try {
        const articlesByAuthor = {};

        await Promise.all(
          authorNames.map(async (authorName) => {
            let API_KEY = process.env.REACT_APP_PUBLIC_DRIVE_CHICAGO_API_KEY;
            let queryParams = `?name=${authorName}&apiKey=${API_KEY}`;

            const response = await fetch(
              `https://api.drivechicago.cloud/articles/byAuthor${queryParams}`);

              if (!response.ok) {
                throw new Error(`Failed to fetch articles for author: ${authorName}`);
              }

              const articles = await response.json();
              articlesByAuthor[authorName] = articles;

          })
       
        );
        return articlesByAuthor;

      } 
      catch (error) {
        console.log('Fetch Error:', error);
        throw new Error('Failed to fetch article');
      }
    }
  );

//  export const fetchArticleByAuthor = createAsyncThunk(
//    'articles/get', 
//    async (authorNames, { dispatch }) => {
//      try {
//        const articlesByAuthor = {};

//        await Promise.all(
//          authorNames.map(async (authorName) => {
//            let API_KEY = process.env.REACT_APP_PUBLIC_DRIVE_CHICAGO_API_KEY;
//            let queryParams = `?name=${authorName}&apiKey=${API_KEY}`;

//            const response = await fetch(
//              `https://api.drivechicago.cloud/articles/byAuthor${queryParams}`);

//              if (!response.ok) {
//                throw new Error(`Failed to fetch articles for author: ${authorName}`);
//              }

//              const articles = await response.json();
//              articlesByAuthor[authorName] = articles;

//          })
       
//        );
//        return articlesByAuthor;

//      } 
//      catch (error) {
//        console.log('Fetch Error:', error);
//        throw new Error('Failed to fetch article');
//      }
//    }
//  ); 

  /**
   * Grab the most recent articles
   */
  /* export const fetchRecentArticles = createAsyncThunk(
    'articles/fetchRecent', 
    async ({ dispatch }) => {
      try {
        const API_KEY = process.env.REACT_APP_PUBLIC_DRIVE_CHICAGO_API_KEY;
        const queryParams = `?rows=5&apiKey=${API_KEY}`;
  
        const response = await fetch(`https://api.drivechicago.cloud/articles/byYearMakeModel${queryParams}`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch articles.`);
        }
  
        const articles = await response.json();
  
        return articles;
      } 
      catch (error) {
        console.log('Fetch Error:', error);
        throw new Error('Failed to fetch articles');
      }
    }
  ); */
  