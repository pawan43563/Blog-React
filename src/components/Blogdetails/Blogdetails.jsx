import React, { useEffect, useState } from 'react';
import { useRouteMatch,Link } from 'react-router-dom';
import apicall from '../../Apicall/apicall';
import styles from './Blogdetails.module.scss'
import moment from 'moment'
import { blogurl } from '../../Apicall/urls';



export default function Blogdetails(){

    let [blogdetails,setblogdetails]=useState({})

    let match=useRouteMatch()
    let {url}=match;
    useEffect(()=>{
        let obj={
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        }
        apicall({url:`${blogurl}${url}`,obj:obj})
        .then((data)=>{setblogdetails(data.data)})
        .catch((error)=>console.log(error))
    },[url])


    var momentDate=moment(blogdetails.createdAt)
    momentDate=momentDate.format("YYYY-MM-DD");
    return (
        <>
            {blogdetails ? 
            <div className={styles.BlogDetails} >
                <div className={styles.mainSection}>
                    <h1>{blogdetails.blogTitle}</h1>
                    <h3 className="fa fa-user"> 
                        <span>{blogdetails.author}</span>
                    </h3>
                    <h3 className="fa fa-clock"> 
                        <span>{momentDate}</span>
                    </h3>
                    <img src={blogdetails.blogImage} alt="Blog " />
                    <p>{blogdetails.blogContent}</p>
                </div>
                <div className={styles.RelatedLinks}>
                    <h3>Related Links</h3>
                {blogdetails.relatedLinks?
                            blogdetails.relatedLinks.map((e,i)=>(
                                <Link to={`/blogs/${e.linkId}`} key={i}>
                                    {e.title}
                                </Link>   
                            ))           
                            :
                            <h5>None</h5>
                        }
                    
                </div>
            </div>
            :
            <h2>None</h2>
            }
        </>
        
    )
}