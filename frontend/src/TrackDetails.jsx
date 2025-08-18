import "./CSS/TrackDetails.css"

const PATH = 'http://127.0.0.1:8000/';

function TrackDetails({track, isOpen, onClose}) {
    if(!isOpen && !track) {
        return null;
    }

    const handelBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={"details-container"} onClick={handelBackdropClick}>
            <div className="track-details-container">
                <div>{track.name}</div>
                <div><img className="track-details-image-size" src={`${PATH}${track.track_img}`}/></div>
                <div>{track.track_length}</div>
                <div>{track.best_time}</div>
                <div>{track.car}</div>
                <div>{track.country}</div>
                <div>{track.date}</div>
                <div>{track.driver}</div>
            </div>
        </div>
    )

}

export default TrackDetails;