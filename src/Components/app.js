import React ,{useState} from 'react'
import Searchber from './searchber';
import VideoList from './videoList';
import VideoDetails from './videodetails';
import youtube  from '../apis/youtube';



const App = ()=>{

    const [Videos ,setVideos] = useState([])
    const [selectedVideo,setselectedVideo] = useState(null)

    const onTermSubmit = async (term)=>{
        //console.log(term)
        const response =  await youtube.get('/search',{
            params : {
                q : term
            }
        })
        //console.log(response)//it is the response object we are going to get back for the api call

        setVideos(response.data.items);
    }


    const OnVideoSelect = (video)=>{
        setselectedVideo(video);
        //console.log('Form the app',video)
    }

    return(
        <div className = "ui container">
            <Searchber onsubmit = {onTermSubmit}/>
            <div>

            <VideoDetails video = {selectedVideo}/>
            </div>
            <VideoList OnVideoSelect = {OnVideoSelect} videos ={Videos}/>

        {/* <div>
            <h1>App{Videos.length}</h1>          
        </div> */}
        </div>
        
    )
}


export default App;