import {useState, useEffect} from "react";
import "./CSS/Tracks.css"
import Loading from "./Loading.jsx";
import TrackDetails from "./TrackDetails.jsx";

const PATH = 'http://127.0.0.1:8000/';

function Tracks() {
    const [trackData, setTrackData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://127.0.0.1:8000/tracks/')

            if (response.ok) {
                const data = await response.json();
                setTrackData(data);
                setLoading(null);
                setLoading(false);
            } else {
                setError("Unable to fetch data");
                setLoading(false);
            }
        } catch (e) {
            setError("Unable to connect to the server");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (track) => {
        setSelectedTrack(track);
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTrack(null);
    }

    return (
        <div className="cards-container">
            {loading ? <Loading size={"xl"}/>
                : trackData.map((track, index) => (
                        <div className="card"
                             key={index}
                            onClick={() => handleClick(track)}>
                            <div className="card-name">{track.name}</div>
                            <img className="card-image" src={`${PATH}${track.track_img}`}/>
                        </div>
                    ))}

            <TrackDetails
                track={selectedTrack}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    )
}

export default Tracks;