import React from 'react'

const Card = ({
  article
}) => {
  return (
    <div className="card card-hover">
      <img src={article.urlToImage} alt="Avatar" className="card-image"></img>
      <a href={article.url} target="_blank" className="card-url card-hover">
        {article.title}
      </a>
    </div>

  )
}

export default Card
