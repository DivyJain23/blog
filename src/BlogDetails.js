import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history= useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {error && <div> {error} </div>}
            {isPending && <div> ....Loading </div>}
            {data && (
             <articles>
               <h2>{ data.title }</h2>  
               <p>Written by { data.author } </p>
               <div>{ data.body }</div>
               <button onClick = {handleDelete}> Delete </button>
             </articles>
            )}
        </div>
    );
}

export default BlogDetails;