export async function getCarData(){
    const response =await fetch("http://localhost:8000/api/v1/car")
    const resData = await response.json()
    if(!response.ok) throw new Error("Failed to fetch data")
    return resData.carData
}

export async function getcarDataById(id) {
    const response = await fetch(`http://localhost:8000/api/v1/car/${id}`)
    const resData = await response.json()
    if(!response.ok) throw new Error("Failed to fetch data")
    return resData.checkCar
}

export async function deleteCarData(id) {
    const response = await fetch(`http://localhost:8000/api/v1/car/${id}`, {
        method: "DELETE"
    })
    const resData = await response.json()
    if(!response.ok) throw new Error("Failed to fetch data")
    return resData.checkCar
}

export async function createCarData(req) {
    const response = await fetch(`http://localhost:8000/api/v1/car/`, {
        method: 'POST',
        body: req
    })
}