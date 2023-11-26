import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';



const App1 = () => {
// step 1:fetch post state ok 
    const [posts,setPosts]=useState([]);

 //step 3
  const[loading,setLoading]=useState(false);

  const[currentPage,setCurrentPage]=useState(1)
//step:4
  const postsPerPage=10
 // const [postsPerPage,setpostsPerPage]=useState(10)
//step :2 fetch post
    useEffect(()=>{

        const fetchPosts=async()=>{
     setLoading(true);
     const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
     setPosts(res.data)
     console.log(posts)
     setLoading(false)
    
    
        }
        fetchPosts();
      },[])


      // step:5 making currentPosts

      const indexOfLastPost=currentPage*postsPerPage
      const indexofFirstPost= indexOfLastPost-postsPerPage
      const currentPosts=posts.slice(indexofFirstPost,indexOfLastPost)


      const pageNumbers = [];

       for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
        }
        console.log(pageNumbers)
        const paginate=(number)=>{setCurrentPage(number)}

const front=()=>{setCurrentPage((prevState) =>(prevState<10 ? prevState+ 1:prevState))}
const back=()=>{setCurrentPage((prevState) =>(prevState>1 ? prevState- 1:prevState))

}


if(loading){
  return<h2>loading..</h2>
}
  return (
    <div><div>{currentPosts.map((post)=>(<h1 key={post.id}>{post.title}</h1>))}</div>
     <ul className='pagination'>
    <button onClick={front}>front</button>
    
        {pageNumbers.map((number) => (
          <li key={number} >
            <a href="!#"  onClick={()=>paginate(number)}>{number}</a>
          </li>
          
        ))}
        <button onClick={back}>back</button>
      </ul>
    {/* <h1>{pageNumber}</h1> */}
    <h2> currentpage :{currentPage}</h2>
    </div>
  )
}

export default App1