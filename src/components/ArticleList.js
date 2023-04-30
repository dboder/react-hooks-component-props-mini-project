import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const postList = posts.map((post) => {
    return <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
  });
  return (
    <main>
      {postList}
    </main>
  );
}

export default ArticleList;
