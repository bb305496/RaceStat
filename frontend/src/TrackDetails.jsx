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
                <div className="track-details-name">{track.name}</div>
                <div><img className="track-details-image-size" src={`${PATH}${track.track_img}`}/></div>
                <div className="track-details-details">
                    <div className="track-title-info">Track info</div>
                    <div><div>Length:</div> {track.track_length}km</div>
                    <div><div>Country:</div> {track.country}</div>
                    <div><div>Best time:</div> {track.best_time}</div>
                    <div><div>Car:</div> {track.car}</div>
                    <div><div>Date:</div> {track.date}</div>
                    <div><div>Driver:</div> {track.driver}</div>
                </div>
            </div>
        </div>
    )

}

export default TrackDetails;