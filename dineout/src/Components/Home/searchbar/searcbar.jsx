import "./searchbar.css";

function SearchBar() {
    return (
        <div>
            <section className="background-image">
                <h1>It's Now Safe To <span>Crave!</span></h1>
                <div className="search-bar-home">
                    <i className="fa-solid fa-magnifying-glass glass-icon"></i>
                    <input type="text" placeholder="Search for Restaurants, Cuisines, Location..." />
                    <button>Search</button>
                </div>
            </section>
        </div>
    )
}

export default SearchBar;