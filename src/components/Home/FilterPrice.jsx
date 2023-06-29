import "./styles/filterPrice.css";

const FilterPrice = () => {
  return (
    <article className="price">
      <h3 className="price__name">Price</h3>
      <form className="price__form">
        <div className="price__containerInput">
          <label className="price__label" htmlFor="from">From</label>
          <input className="price__input" type="text" id="from"/>
        </div>
        <div className="price__containerInput">
          <label className="price__label" htmlFor="to">To</label>
          <input className="price__input" type="text" id="to"/>
        </div>
        <button className="price__btn">Filter price</button>
      </form>
    </article>
  );
};

export default FilterPrice;
