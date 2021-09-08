import { useEffect } from "react";
import lottie from 'lottie-web';




const LottiePlayer = ({data, name}) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(`#lottieRef_${name}`),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: data,
      rendererSettings: {
        progressiveLoad: true,
      }
    });
    lottie.setQuality('low');
  }, [])



  return (
    <div id={`lottieRef_${name}`}>
    </div>
  )
}

export default LottiePlayer;