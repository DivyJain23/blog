

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, SetIsPending] = useState(true);

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  }

  useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            SetIsPending(false);
        });
    }, 1000)
  }, []);


  return (
    <div className="home">
      {isPending && <div> ....Loading </div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs!"}/>}
    </div>
  );
}
 
export default Home;