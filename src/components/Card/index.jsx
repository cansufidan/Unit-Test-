const Card = ({scoop,basket,setBasket}) => {

  const found = basket.filter((item) => item.name === scoop.name)
  const amount = found.length

  const handleReset = () => {
    const clear = basket.filter((item) => item.name !== scoop.name);

    setBasket(clear);
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: '150px' }}
    >
      <img alt="çeşit" className="img-fluid" src={scoop.imagePath} />
      <label className="lead">{scoop.name}</label>

      <div className="d-flex align-items-center gap-2 mt-2">
        <button className="btn btn-danger" onClick={handleReset}>
          Sıfırla
        </button>
        <span className="fs-2">{amount}</span>
        <button
          className="btn btn-success"
          onClick={() => setBasket([...basket, scoop])}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};


export default Card