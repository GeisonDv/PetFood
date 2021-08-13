import "./styles.css";

const Product = () => {
  return (
    <div className="product col-3">
      <img
        src="https://www.petlove.com.br/images/products/242837/product/2493027_Ra%C3%A7%C3%A3o_Affinity_PetCare_GranPlus_Choice_Frango_e_Carne_para_Gatos_Adultos_1.jpg?1628185779"
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary"> R$ 90,00</label>
      </h4>
      <small>
        <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15kg</b>
      </small>
    </div>
  );
};

export default Product;
