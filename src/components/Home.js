import data from '../data.json'

function Home() {
    return(
        <>
        <div className="img-container">
            <picture>
                <source media="(max-width:768px)" srcSet={data.homes[1].image} />
                <source media="(max-width:999px)" srcSet={data.homes[2].image} />
                <img src={data.homes[0].image} alt=''/>
            </picture>
        </div>
            
        <main>
            <div>
                <div className="text-container">
                    <p className="top">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <p className="bottom">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
            </div>

            <div className="explore">
                <button className='explore-btn'>EXPLORE</button>
            </div>
            
        </main>
        </>
    )
}
export default Home