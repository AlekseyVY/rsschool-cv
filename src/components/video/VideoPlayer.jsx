import {Container, VideoPlay} from "./videoPlayer.styles";


const VideoPlayer = () => {
  return (
    <Container>
      <VideoPlay width="560" height="315" src="https://www.youtube.com/embed/lTHqknPoivk" title="YouTube video player"
  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>
    </Container>
  )
}

export default VideoPlayer;