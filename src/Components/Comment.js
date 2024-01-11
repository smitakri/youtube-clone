import React, { useState } from 'react'
import likeIcon from '../Images/like-icon.png'
import dislikeIcon from '../Images/dislike-icon.png'

const Comment = ({comment}) => {

    const [showReplies, setShowReplies]=useState(false);
    function convertTitle(title){
        if(title.length<=300)
        return title;
        else{
            return title.slice(0,300)+"...";
        }
    }
    if(comment?.snippet?.totalReplyCount>0){
      console.log(comment);
    }
    
  return (
  <div className="flex flex-col my-5">
    <div className="flex gap-2">
      <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}  className="w-8 h-8 rounded-full" alt='channel-icon' />
       <div className="flex flex-col items-start">
        <p className="font-semibold">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
        <p dangerouslySetInnerHTML={{__html:convertTitle(comment?.snippet?.topLevelComment?.snippet?.textDisplay)}} className="text-start"></p>
       </div>
    </div>
    <div className="flex gap-2 py-1 px-3 ms-7">
        <img src={likeIcon}  className=" w-6 h-6"alt='like-icon'/>
        <p className="text-[14px]" >{comment?.snippet?.topLevelComment?.snippet?.likeCount}</p>
        <img src={dislikeIcon}  className="w-6 h-6" alt='dislike-con'/>
        <p className="ms-4 font-semibold text-[6p]">Reply</p>
      </div>
      {
        comment?.snippet?.totalReplyCount>0?
        <div className="flex justify-start gap-1 items-center ml-[50px]">
          <svg fill="#0544ff" width="13px" height="13px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  stroke="#0544ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></g></svg>
          <span className="text-blue-600 font-semibold text-sm">{comment?.snippet?.totalReplyCount} </span>
          {
            comment?.snippet?.totalReplyCount>1?
            <span className="text-blue-600 font-semibold text-sm cursor-pointer "onClick={()=>{setShowReplies(!showReplies)}}  >Replies</span>:
            <span className="text-blue-600 font-semibold text-sm cursor-pointer " onClick={()=>{setShowReplies(!showReplies)}} >Reply</span>
          }
        </div>
        :<span></span>
      }
      {
        showReplies &&
          <div className="flex flex-col  gap-1 items-start ml-[50px] mt-2" >
            {
              comment.replies.comments.map((comment1)=>{
                return (
                  <>
                  <div className="flex gap-2">
                  <img src={comment1?.snippet?.authorProfileImageUrl}  className="w-8 h-8 rounded-full" alt='channel-icon' />
                  <div className="flex flex-col items-start">
                    <p className="font-semibold">{comment1?.snippet?.authorDisplayName}</p>
                    <p dangerouslySetInnerHTML={{__html:convertTitle(comment1?.snippet?.textDisplay)}} className="text-start"></p>
                  </div>
                </div>
                <div className="flex gap-2 py-1 px-3 ms-7">
                    <img src={likeIcon}  className=" w-6 h-6"alt='like-icon'/>
                    <p className="text-[14px]" >{comment1?.snippet?.likeCount}</p>
                    <img src={dislikeIcon}  className="w-6 h-6" alt='dislike-con'/>
                    <p className="ms-4 font-semibold text-[6p]">Reply</p>
                  </div>
                  </>
                )
              })
            }
          </div>
      }
  </div>
  )
}

export default Comment