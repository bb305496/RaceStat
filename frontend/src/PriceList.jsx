import "./CSS/PriceList.css"
import {useState, useEffect} from 'react'

const PATH = 'http://127.0.0.1:8000/';

function PriceList() {
    const [cars, setCars] = useState([]);

    const fetchData = async () => {

        try{
            const response = await fetch('http://127.0.0.1:8000/pricelist/')

            if (response.ok){
                const data = await response.json();
                setCars(data);
                console.log(data)
            } else {

            }
        } catch (e) {

        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
      <div className="price-list-container">
          {cars.map((car, index) => (
              <div className="price-list-card" key={index}>
                  <div><img className="price-list-image" src={`${PATH}${car.image}`}/></div>
                  <div className="price-list-title">
                      <div>{car.brand} {car.model} {car.year}</div>
                  </div>
                  <div className="price-list-text">
                      <div>Capacity: {car.displacement} cm³</div>
                      <div>Power: {car.hp} HP</div>
                      <div>Torque: {car.torque} Nm</div>
                      <div>Top speed: {car.top_speed} km/h</div>
                      <div>0-100: {car.acceleration} s</div>
                      <div>Weight: {car.weight} kg</div>
                  </div>
                  <div className="price-list-text">
                    <div>Price (per day): {car.price}zł</div>
                  </div>
              </div>
          ))}
      </div>
    );
}

export default PriceList;