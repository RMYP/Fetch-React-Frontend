import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function EditCar() {
    const {id} = useParams()
    const [model, setModel] = useState('')
    const [rentPerDay, setRentPerDay] = useState('')
    const [year, setYear] = useState('')
    const [carSize, setCarSize] = useState('')
    const [manufacture, setManufacture] = useState('')
    const [capacity, setCapacity] = useState('')

    useEffect(() => {
        getUserById()
    },[])

    const navigate = useNavigate()
    const updateCar = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:8000/api/v1/car/${id}`, {
                model,
                rentPerDay,
                year,
                carSize,
                manufacture,
                capacity
            },{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const getUserById = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/car/${id}`)
            console.log(response.data)
            setCapacity(response.data.checkCar.capacity)
            setCarSize(response.data.checkCar.carSize)
            setManufacture(response.data.checkCar.manufacture)
            setRentPerDay(response.data.checkCar.rentPerDay)
            setModel(response.data.checkCar.model)
            setYear(response.data.checkCar.year)

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form className="container m-5 " onSubmit={updateCar}>
            <div className="mb-3">
                <label className="form-label">Input Model</label>
                <input type="text" className="form-control" value={model} onChange={(e) => setModel(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Input Rent Price</label>
                <input type="number" className="form-control" value={rentPerDay} onChange={(e) => setRentPerDay(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Input Car Year</label>
                <input type="number" className="form-control" value={year} onChange={(e) => setYear(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Input Manufacture</label>
                <input type="text" className="form-control" value={manufacture} onChange={(e) => setManufacture(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Input Capacity</label>
                <input type="number" className="form-control" value={capacity} onChange={(e) => setCapacity(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Input Car Size</label>
                <select className="form-select" aria-label="Default select example" value={carSize} onChange={(e) => setCarSize(e.target.value)}>
                    <option>Open this select menu</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}