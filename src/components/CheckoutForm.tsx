import { FaBarcode, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../images/elo.svg';

function CheckoutForm() {
  const navigate = useNavigate();
  return (
    <section className="">
      <section className="">
        <span className="">
          <h3
            className=""
          >
            Informações do comprador
          </h3>
        </span>
        <div className="">
          <input
            placeholder="Nome Completo"
            className=""
            type="text"
            required
          />
          <input
            placeholder="CPF"
            className=""
            type="text"
            required
          />
          <input
            placeholder="Email"
            className=""
            type="text"
            required
          />
          <input
            placeholder="Telefone"
            className=""
            type="text"
            required
          />
        </div>
        <div className="">
          <input
            placeholder="CEP"
            className=""
            type="text"
            required
          />
          <input
            placeholder="Endereço"
            className=""
            type="text"
            required
          />
        </div>
        <div
          className=""
        >
          <input
            placeholder="Complemento"
            className=""
            type="text"
          />
          <input
            placeholder="Número"
            className=""
            type="text"
            required
          />
        </div>
        <div className="">
          <input
            placeholder="Cidade"
            className=""
            type="text"
            required
          />
          <select className="">
            <option value="batata">teste</option>
          </select>
        </div>
      </section>
      <span className="">
        <h3 className="">
          Método de pagamento
        </h3>
      </span>
      <section className="">
        <div className="">
          <p>Boleto</p>
          <input className="" type="radio" />
          <FaBarcode size="2em" />
        </div>
        <div className="">
          <p>Cartão de Crédito</p>
          <input className="" type="radio" />
          <FaCcVisa size="2em" />
          <input className="" type="radio" />
          <FaCcMastercard size="2em" />
          <input className="" type="radio" />
          <img className="" src={ logo } alt="elo logo" />
        </div>
      </section>
      <span className="" />
      <button className="" onClick={ () => navigate('/') }>
        Comprar
      </button>
    </section>
  );
}

export default CheckoutForm;
