
import './App.css';
import React,{useState,useEffect} from "react"
import axios from "axios";
import Posts from './Posts';
import Pagination from './Pagination';

function App() {
  const [posts,setPosts]=useState([]);
  const[loading,setLoading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setpostsPerPage]=useState(10)
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

const indexOfLastPost=currentPage*postsPerPage
const indexofFirstPost= indexOfLastPost-postsPerPage
const currentPosts=posts.slice(indexofFirstPost,indexOfLastPost)

const paginate=(pageNumber)=>setCurrentPage(pageNumber)


  return (
    <div  className='container mt-5'>
      <h1 className='text-primary mb-3'>my app</h1>
      <Posts posts={currentPosts} loading={loading}/>
     < Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      
    </div>
  );
}

export default App;
