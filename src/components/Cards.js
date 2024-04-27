import React from 'react';
import Card from './card'; // Assuming Card component is imported
import { useState } from 'react';
const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const allCourses = [];
  const [likedCources,setLikedCources] = useState([]);
  // Return a list of all courses received from the API response
  const getCourses = () => {
    if(category == "All")
    {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }
    else{
      // only for specific category ka data array pass hoga 
      return courses[category];
    }
    
  }; 

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card course={course} likedCources = {likedCources} setLikedCources = {setLikedCources} />
      ))}
    </div>
  );
};

export default Cards;
