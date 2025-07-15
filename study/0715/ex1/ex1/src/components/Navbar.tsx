export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 text-white bg-gray-800">
            <div className="text-2xl font-bold">MySite</div>
            <ul className="flex space-x-6">
                <li>
                    <a href="#" className="text-blue-500 transition duration-200 hover:text-gray-300-colors">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-500 transition duration-200 hover:text-gray-300-colors">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="text-blue-500 transition-colors duration-200 hover:text-gray-300">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}