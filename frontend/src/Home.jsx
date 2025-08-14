import "./CSS/Home.css"
import {useState, useEffect} from "react";
import Loading from "./Loading.jsx";

function Home() {
    const [homeData, setHomeData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://127.0.0.1:8000/homepage/')

            if (response.ok) {
                const data = await response.json();
                setHomeData(data);
                setError(null);
                setLoading(false);
                console.log(data)
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Unable to connect to the server");
                setLoading(false);
            }

        } catch (e){
            setError("Unable to connect to the server");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])




    return(
        <div className="home-container">
            <div className="home-elements">
                {loading ? <Loading size={"xl"}/>
                    : error ? <div className="home-error">{error}</div>
                        : homeData.map((item, index) => (
                    <div className="home-content-title-container" key={index}>
                        <div className="home-title">{item.title}</div>
                        <div className="home-content">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;