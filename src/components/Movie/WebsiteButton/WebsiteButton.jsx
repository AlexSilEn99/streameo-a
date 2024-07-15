function WebsiteButton(parameters) {
  return (
      <a className="d-flex text-decoration-none" href={parameters.parameters.homepage} target="_blank">
          <p role="button" className="text-danger"><i className="fa fa-right-to-bracket"></i></p>
          <p role="button" className="text-danger"><b className="h5">&nbsp;Go to website</b></p>
      </a>
  );
}

export default WebsiteButton;