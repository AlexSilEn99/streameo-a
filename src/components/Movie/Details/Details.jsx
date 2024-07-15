function Details(parameters) {
  return (
      <div className="d-flex">
          <div>
              <p className="text-start text-muted"><b className="h5">Production:</b> {parameters.parameters.production}</p>

          </div>
          <div>
              <p className="text-start text-muted"><b className="h5">&nbsp;&nbsp;Budget & Revenue:</b> {parameters.parameters.budgetRevenue} = <b>{parameters.parameters.budgetRevenueTotal}</b></p>

          </div>
      </div>
  );
}

export default Details;