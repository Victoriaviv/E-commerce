import React from "react";
import blog1 from "../assets/blog1.webp"
import blog2 from "../assets/blog2.webp"
const Blog = () => {
  const Blog = [
    {
      date:"july18,2021",
      title:"Sed magna dui, dignissim id felis vitae, consectetur",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image:blog1,
    },
    {
      date:"july18,2021",
      title:"Sed magna dui, dignissim id felis vitae, consectetur",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image:blog2,
    }
  ]
  return (
    <div className="blog-list">
      <div className="blog-container">
        {blog1.map((index) =>(
          <div key={index} className="blog-card">

          </div>
        )
      )}
      </div> 
      
    </div>
  );
};

export default Blog;