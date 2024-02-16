import { useState, useEffect } from "react"

export const useFetchData = () => {

    const [cars, setCar] = useState([])

    const fetchCars = async () => {
        try {
            const response = await fetch('./src/JSON/cars.json')
            const data = await response.json()
            setCar(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchCars()
    }, [])


    return {
        cars,
        setCar
    }
}