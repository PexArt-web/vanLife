import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const VanDetails = () => {
    const {id} = useParams()
    console.log(id) 
    const [ van, setVan ] = useState()

    useEffect( ()=>{
        const vanDetail = async () =>{
            const response = await fetch('/api/vans/' + id)
            const data = await response.json()
            setVan(data.vans)
            console.log(data)
        }

        vanDetail()
    }, [id])
  return (

        <div className="van-detail-container">
    {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
    
  )
}

export default VanDetails
