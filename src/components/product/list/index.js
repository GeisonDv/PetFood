import "./styles.css";

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://www.petlove.com.br/images/products/225089/product/311733.jpg?1627721842"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>
              Ração Úmida Nesthe Purina Dog Chow Extra Life Sachê Carne para
              Cães Filhotes - 100 g
            </b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

//1:04

export default Product;
