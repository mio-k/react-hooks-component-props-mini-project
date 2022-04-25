import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    console.log("posts", posts)
    const articleList = posts.map((eachArticle) => (
    <Article key={eachArticle.title} 
    title={eachArticle.title} 
    date= {eachArticle.date} 
    preview={eachArticle.preview} />
    ));
    return (
        <main>
        {articleList}
        </main>
    )
}
export default ArticleList;