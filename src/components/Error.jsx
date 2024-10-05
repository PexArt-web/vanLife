import { useRouteError } from "react-router-dom"


const Error = () => {
    const error = useRouteError()
    console.error(error, 'error')
    // alert(error)
  return (
    <div>
       <h1>Error: {error.message}</h1>
       <pre>{error.status}- {error.statusText}</pre>
       <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}

export default Error
