import reactLogo from './assets/react.svg'

function Video (props) {
    const {title, channelName, img} = props;
    return(
        <>

        <div className='video'>
          <img className='video-img' src={img} alt='video image'/>
          <p>{title}</p>
          <p>{channelName}</p>
          <div className='video-footer'>
            <p>
              Like: 0
            </p>
            <button>Like</button>
          </div>
        
        </div>
        </>
    )
}

export default Video;