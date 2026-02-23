
function Main() {
    return (
        <>
            <section className="main">
                <div className="main-container">
                    <div className="main-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p class="jumbo-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="main-button">Reserve a Table</button>
                    </div>
                    <div className="main-image">
                        <img src={require('../assets/restauranfood.jpg')} alt="Restaurant Food" id="logo-jumbo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;