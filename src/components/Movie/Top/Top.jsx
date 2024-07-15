function Top(parameters) {
  return (
      <div>
          <p className="mb-0"><b className="h1">{parameters.parameters.title}</b> <b className="text-muted">({parameters.parameters.releaseDate?.slice(0, 4)})</b></p>
          <div className="d-flex justify-content-center">
              <p className="text-muted">{parameters.parameters.genre}</p>

          </div>
          <div className="d-flex justify-content-center">
              {parameters.parameters.rating}
          </div>
      </div>
  );
}

export default Top;