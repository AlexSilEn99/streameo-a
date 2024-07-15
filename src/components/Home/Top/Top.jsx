import logo from '../../.././assets/logo.svg'
function Top() {
  return (
      <div>
          <div>
                <img src={logo} className="logo" alt="React logo" />
          </div>
          <h1 className="title text-uppercase pt-4 silkscreen-regular">Streameo</h1>
          <h1 className="subtitle">Stream the way you want, whenever you want</h1>
      </div>
  );
}

export default Top;