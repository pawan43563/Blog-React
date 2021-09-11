import React, { useEffect, useState } from 'react';
import Blog from '../../components/Blog/Blog';
import apicall from '../../Apicall/apicall';
import {blogurl} from '../../Apicall/urls';
import styles from './Blogs.module.scss'

export default function Blogs(){

    const [blogs,setblog]=useState([])

    useEffect(()=>{
        fetchBlogs()
    },[])

    const fetchBlogs=async()=>{
        try{
            let obj={
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            }
            let response=await apicall({url:`${blogurl}/blogs`,obj:obj})
            setblog(response.data)
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className={styles.blogCard}>
            {
                blogs ? 
                blogs.map((blog)=>(
                    <Blog data={blog} key={blog.blogId} />
                )):
                <h2>None</h2>
            }
            
        </div>
    )

}