import React from 'react';

function Post(props) {
    const data = props.info;
    return (
        <figure className="container">
            <img src={data.image} alt="" />
            <figcaption>{data.title}</figcaption>
        </figure>
    )
}

export default Post;