import React from 'react'

const Photo = ({ id, title, thumbnailUrl }) => (
    <div>
        <figure className="figure">
            <img src={thumbnailUrl} alt=""  />
            <figcaption className="figure-caption">
                {id + ": "}
                {title}
            </figcaption>
        </figure>
    </div>
)

export default Photo