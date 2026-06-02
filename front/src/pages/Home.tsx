import heroImage from '../assets/hero.png'

const Home = () => {
    return (
        <>
            <div className='flex-1 flex flex-col'>
                <div className='h-2/4 flex  items-center justify-between gap-50'>
                    <div className='w-1/2 '>
                        <img
                            src={heroImage}
                            alt="Aditya"
                        />
                        Left
                    </div>
                    <div className='w-1/2'>
                        Myself Aditya
                        
                    </div>
                </div>

                <div className='h-1/2 items-center flex justify-center '>
                    how we doin
                </div>
            </div>

        </>

    )
}

export default Home
