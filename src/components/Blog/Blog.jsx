import React from 'react'
import styles from './Blog.module.scss'
import { Link } from 'react-router-dom'

const linkStyle = {
    textDecoration: "none",
    border:'2px solid white',
    padding:'8px',
    borderRadius:'20px',
    color:'white',
};

export default function Blog({data}){
    let {blogId,author,blogImage,blogTitle}=data
    return (
        <div className={styles.blogCard}>
            <img src={blogImage} alt="Blog "></img>
            <div className={styles.blogCardBody}>
                <h2>{blogTitle}</h2>
                <h3 className="fa fa-user"> 
                    <span>{author}</span>
                </h3>
                <Link to={`/blogs/${blogId}`}  style={linkStyle}>
                    Read more
                </Link>
            </div>

        </div>
    )

}