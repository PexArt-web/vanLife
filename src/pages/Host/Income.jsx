import { useLoaderData } from "react-router-dom"


const Income = () => {
  const element = useLoaderData()
  return (
    <div>
   {element}
    </div>
  )
}

export default Income
