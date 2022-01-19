import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setindex]=useState(0);
  const{name,job,image,text}=people[index];
  const prevPerson=()=>{
  setindex((index)=>{
    checknumber(index);
    let newIndex=index+1;
    return checknumber(newIndex);
  })
  }
  const nextPerson=()=>{
    setindex((index)=>{
     
      let newIndex=index-1;
      return checknumber(newIndex);
    })
  }
  const checknumber=(number)=>{
    if(number>people.length-1)
    {
      return 0
    }
    else if(number<0){
      return people.length-1;}
    else{
      return number;}
  }
  const randomPerson=()=>{
      let s=Math.floor(Math.random() * (people.length -1) + 1);
      if(s===index)
      {
        s+=1;
      }
      setindex(checknumber(s));
  }
  
  
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>surprise Me</button>
    
  </article>;
};

export default Review;
 