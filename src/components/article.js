import React from 'react';

const Article = (props) => {
    return (
        <div className="article">
            <h1 className="article-title">{props.title}</h1>
            <div>{props.children}</div>
        </div>
    );
};

export default Article;