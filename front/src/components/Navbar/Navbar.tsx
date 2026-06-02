const Navbar = () => {
    return (
        <nav className='bg-white'>

            <div className='flex items-center justify-center '>
                <ul className='hidden gap-6 md:flex '>
                  
                    <li> <a href="/" className="bg-blue-400 rounded ">Home</a> </li>
                    <li><a href="project">Projects</a> </li>
                    <li><a href="resume">Resume</a> </li>
                    <li><a href="contact">Contact</a> </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
