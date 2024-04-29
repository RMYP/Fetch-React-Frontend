import { useEffect, useState } from "react";
import { getCarData } from "../../http";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Dashboard(){
    const [isFetching, setIsFetching] = useState(false);
    const [isAvailable, setIsAvailable] = useState([]);
  
    useEffect(() => {
        getUser()
    }, []);

    const getUser = async () => {
        const response = await axios.get('http://localhost:8000/api/v1/car')
        setIsAvailable(response.data.carData)
    }

    const deleteCarData = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/car/${id}`)
            getUser();
        } catch (error) {
            console.log(error)
        }     
    }

    return(
        <div className="container mt-5">
            <button type="button" className="btn btn-success btn-lg mb-4">
            <Link to={"/create"} className="text-decoration-none" style={{color: "white"}}>
                    Create New Car
                </Link>
            </button>
            {isAvailable.length > 0 && (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {isAvailable.map((car) => (
                    <div className="col" key={car.id}>
                        <div className="card">
                            <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{car.manufacture} {car.model}</h5>
                                <ul>
                                    <li>
                                        {car.rentPerDay}
                                    </li>
                                    <li>
                                        {car.carSize}
                                    </li>
                                    <li>
                                        {car.capacity}
                                    </li>
                                </ul>
                                <button type="button" onClick={() => deleteCarData(car.id)}className="btn btn-danger mx-2">Delete</button>
                                <button type="button" className="btn btn-success">
                                <Link to={`/update/${car.id}`} className="text-decoration-none" style={{color: "white"}}>
                                    Update
                                </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
            )}
        </div>
    )
    
}