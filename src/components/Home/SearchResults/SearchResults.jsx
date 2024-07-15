import Item from "../Item/Item";

function SearchResults(parameters) {
    if (parameters.parameters.length > 0) return (
        <div className="justify-content-center d-flex">
            <div className="w-50">
                <div className="custom-scrollbar-css" style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "40vh" }}>
                    {
                        parameters.parameters.slice(0, 10).map((movie) => {
                            return (
                                <div  key={movie.id}>
                                    <Item  parameters={{ movieId: movie.id }} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchResults;