import React, { useEffect, useState } from 'react'
import { useSearchParams,Link } from 'react-router-dom'
import RecommendVideo from './RecommendVideo';

const SearchResult = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [videos,setVideos]=useState([]);
  
  const fetchVideos=async ()=>{
    const data=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+searchParams.get('searchQuery')+"&regionCode=IN&relevanceLanguage=hi&key="+process.env.REACT_APP_API_KEY);
    const json=await data.json();
    console.log(json);
    setVideos(json.items);
  }
  
  useEffect( ()=>{
     fetchVideos();
  },[]);

  return (
    <div className="flex flex-col gap-1 m-4 p-2">
        {/* <RecommendVideo item={state}/> */}
        {
            videos.map((video,index)=>{
              return <Link to={"/watch?v="+video?.id?.videoId} state={{...video}} style={{ display: "flex"}}><RecommendVideo key={index} item={video}/></Link>
            })
        }
      </div>
  )
}

export default SearchResult