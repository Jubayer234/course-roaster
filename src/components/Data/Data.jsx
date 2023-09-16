import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";

const Data = ({handleAddToCart}) => {
    const[data, SetData] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => SetData(data))
    } , [])

  return (
    <div className="grid md:grid-cols-3 gap-6">
        {
            data .map(blog => <Blog 
                key={blog.id}
                blog={blog}
                handleAddToCart={handleAddToCart}
                >
                </Blog>)
        }
    </div>
  );
};

export default Data