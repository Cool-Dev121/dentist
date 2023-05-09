import { Link } from 'react-router-dom';
import logo from '../assets/images/dental_logo.jpg'

export default function LoginHeader({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img src={logo} className='w-14 h-14 text-[#008F9B]' alt="Your Alt Tag" />
            </div>
            <div className="mx-auto max-w-lg text-center">
                <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">{heading}</h1>
                <p className="mt-4 text-gray-500">
                {paragraph} {' '} 
                <Link to={linkUrl} className="font-medium text-[#00ADEF] hover:text-blue-500">
                    {linkName}
                </Link>
                </p>
            </div>
        </div>
    )
}