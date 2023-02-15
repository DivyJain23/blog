import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            {error && <div> {error} </div>}
            {isPending && <div> ....Loading </div>}
            {data && (
             <articles>
               <h2>{ data.title }</h2>  
               <p>Written by { data.author } </p>
               <div>{ data.body }</div>
             </articles>
            )}
        </div>
    );
}

export default BlogDetails;