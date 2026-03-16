function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My App</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">Login</a></li>
                    <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
                    <li><a href="#" className="hover:text-gray-300">Employees</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
