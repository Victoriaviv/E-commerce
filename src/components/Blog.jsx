import React from "react";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
import blog5 from "../assets/blog5.webp";
import blog6 from "../assets/blog6.webp";
import "../styles/Blog.css"
const Blog = () => {
  const blogData = [
    {
      date: "July 18, 2021",
      title: "Sed magna dui, dignissim id felis vitae, consectetur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: blog1,
    },
    {
      date: "July 18, 2021",
      title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: blog2,
    },
    {
      date: "July 18, 2021",
      title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: blog3,
    },
    
  ];
  const blogData1 =[
    {
      date: "July 18, 2021",
      title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: blog4,
    },
    {
      date: "July 18, 2021",
      title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: blog5,
    },
    {
      date: "July 18, 2021",
      title: "Duis lacinia convallis odio, quis efficitur dolor pulvinar nec",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: blog6,
    },
  ];

  return (
    <div className="blog-list">
      <h4>BLOG</h4>
      <div className="blog-container">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-list">
      
      <div className="blog-container">
        {blogData1.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </div>
    
    
  );
};

export default Blog;
