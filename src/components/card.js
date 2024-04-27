 import React from "react";
 import {FcLike, FcLikePlaceholder} from "react-icons/fc"
 import { toast } from 'react-toastify';

 const Card = (props) =>{
    let course = props.course;
    let likedCources = props.likedCources;
    let setLikedCources = props.setLikedCources;
    function clickHandler (){
        if(likedCources.includes(course.id))
        {
            //pehle se like hua opada hai 
            setLikedCources((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCources.length === 0) {
                setLikedCources([props.course.id]);
            }
            else {
                setLikedCources((prev) => [...prev, props.course.id]); //! ...prev means purana wala object copy karo 
            }
            toast.success("Liked Successfully");
        }
    }
    return(
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative '>
                <img src= {course.image.url} alt="not got "></img>

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                        {
                            !likedCources.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'> {course.title}</p>
                <p className='mt-2 text-white'>  {
                        props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
                    }
</p>
            </div>
            
        </div>
    )}
 

    export default Card