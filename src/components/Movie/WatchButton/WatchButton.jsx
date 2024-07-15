function WatchButton(parameters) {
    const saveToHistory = (movieId, url) => {
        let historyList = localStorage.getItem("historyList");
        if (historyList != null && historyList != "") {
            if (!historyList.slice(",").includes(movieId))
            {
                localStorage.setItem("historyList", historyList += (movieId + ","))
            }
            else {
                let newList = historyList.replace(movieId + ",", "");
                localStorage.setItem("historyList", newList += (movieId + ","))
            }
        } else {
            localStorage.setItem("historyList", [movieId + ","]);
        }
        window.open(url, "_blank");
    }
  return (
      <div className="text-start mb-4">
          <button className="btn btn-danger btn-lg" style={{ backgroundColor: "#d62828" }} onClick={()=> saveToHistory(parameters.parameters.id, "https://www.youtube.com/watch_popup?v=" + parameters.parameters.trailerKey)}>
              <i className="fa fa-play m-2"></i>
              Watch Now
          </button>
      </div>
  );
}

export default WatchButton;