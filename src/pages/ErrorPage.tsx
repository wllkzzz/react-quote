import { Link } from "react-router-dom"


const ErrorPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Error 404</h1>
        <p className="text-lg text-gray-600 mb-8">Not Found</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go to the main page
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage