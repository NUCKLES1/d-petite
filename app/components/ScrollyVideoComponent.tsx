import { useEffect } from "react";
import ScrollyVideo from "scrolly-video";
const ScrollyVideoComponent = () => {
 useEffect(() => {
   const scrollyVideo = new ScrollyVideo({
     scrollyVideoContainer: "scrolly-video-container", // ID of the container
     src: "https://res.cloudinary.com/dbc4muo4t/video/upload/v1773791519/0317_3_sqxh4x.mp4", // Path to your video file
     cover: true, // Ensures the video covers the container
     sticky: true, // Makes the video sticky during scroll
     trackScroll: true, // Enables scroll-based playback
     transitionSpeed: 8, // Speed of transitions between frames
   });
   return () => scrollyVideo.destroy(); // Cleanup on unmount
 }, []);
 return <div id="scrolly-video-container" style={{ height: "100vh" }} />;
};
export default ScrollyVideoComponent;