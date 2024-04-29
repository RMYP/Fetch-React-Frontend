import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CreateCar() {

    const [model, setModel] = useState('')
    const [rentPerDay, setRentPerDay] = useState('')
    const [year, setYear] = useState('')
    const [carSize, setCarSize] = useState('')
    const [manufacture, setManufacture] = useState('')
    const [capacity, setCapacity] = useState('')

    const navigate = useNavigate()
    console.log(model, rentPerDay, year, carSize)
    const saveCar = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/v1/car/', {
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

    return(
        <form className="container m-5 " onSubmit={saveCar}>
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