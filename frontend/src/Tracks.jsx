import {useState, useEffect} from "react";

function Tracks() {
    const [trackData, setTrackData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tracks/')

            if (response.ok) {
                const data = await response.json();
                setTrackData(data);
                console.log(data);
            }

        } catch (e) {

        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {trackData.map((item, index) => (
                <div key={index}>
                    {item.name}
                    <img src={item.track_img}/>
                    {console.log(item.track_img)}
                </div>
            ))}
        </div>
    )
}

export default Tracks;