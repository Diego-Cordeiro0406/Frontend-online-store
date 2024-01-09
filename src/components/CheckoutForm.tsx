import { FaBarcode, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../images/elo.svg';

function CheckoutForm() {
  const navigate = useNavigate();
  return (
    <section
      className="
        flex
        w-3/6
        flex-col
        justify-start
        items-center
        h-full
        pt-6
        "
    >
      <section className="flex flex-col justify-center items-center">
        <span className="w-80 h-8 my-4">
          <h3
            className="
            text-center
            font-mono
            text-base
            font-bold
            w-80
            text-lg
            "
          >
            Informações do comprador
          </h3>
        </span>
        <div className="flex flex-wrap justify-center items-center h-24 max-w-[40rem]">
          <input
            placeholder="Nome Completo"
            className="w-72 h-8 border border-[#94979D] pl-1"
            type="text"
            required
          />
          <input
            placeholder="CPF"
            className="w-72 h-8 border border-[#94979D] pl-1 ml-2"
            type="text"
            required
          />
          <input
            placeholder="Email"
            className="w-72 h-8 border border-[#94979D] pl-1"
            type="text"
            required
          />
          <input
            placeholder="Telefone"
            className="w-72 h-8 border border-[#94979D] pl-1 ml-2"
            type="text"
            required
          />
        </div>
        <div className="flex justify-evenly items-center h-8 w-[36.438rem] mt-2">
          <input
            placeholder="CEP"
            className="w-2/6 h-8 border border-[#94979D] pl-1"
            type="text"
            required
          />
          <input
            placeholder="Endereço"
            className="w-4/6 h-8 border border-[#94979D] pl-1 ml-2"
            type="text"
            required
          />
        </div>
        <div className="flex justify-evenly items-center h-8 w-[36.438rem] mt-4">
          <input
            placeholder="Complemento"
            className="w-4/6 h-8 border border-[#94979D] pl-1"
            type="text"
          />
          <input
            placeholder="Número"
            className="w-2/6 h-8 border border-[#94979D] pl-1  ml-2"
            type="text"
            required
          />
        </div>
        <div className="flex justify-evenly items-center h-8 w-[36.438rem] mt-4">
          <input
            placeholder="Cidade"
            className="w-4/6 h-8 border border-[#94979D] pl-1"
            type="text"
            required
          />
          <select className="w-2/6 h-8 border border-[#94979D] pl-1  ml-2">
            <option value="batata">teste</option>
          </select>
        </div>
      </section>
      <span className="w-80 h-8 my-4 mt-10">
        <h3
          className="
            text-center
            font-mono
            text-base
            font-bold
            w-80
            text-lg
            "
        >
          Método de pagamento
        </h3>
      </span>
      <section className="flex w-[36.438rem] justify-evenly mt-8">
        <div className="flex items-center">
          <p>Boleto</p>
          <input className="w-4 h-4 mx-2" type="radio" />
          <FaBarcode size="2em" />
        </div>
        <div className="flex items-center">
          <p>Cartão de Crédito</p>
          <input className="w-4 h-4 mx-2" type="radio" />
          <FaCcVisa size="2em" />
          <input className="w-4 h-4 mx-2" type="radio" />
          <FaCcMastercard size="2em" />
          <input className="w-4 h-4 mx-2" type="radio" />
          <img className="w-10 h-10" src={ logo } alt="elo logo" />
        </div>
      </section>
      <span className="w-[36rem] width my-4" />
      <button
        className="
          bg-green-400
          text-white
          font-mono
          w-44
          h-10
          p-2
          rounded
          hover:-translate-y-1
          hover:scale-110
          hover:bg-green-700
          duration-300
          "
        onClick={ () => navigate('/') }
      >
        Comprar
      </button>
    </section>
  );
}

export default CheckoutForm;
