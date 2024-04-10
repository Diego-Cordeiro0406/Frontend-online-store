import { FaBarcode, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../images/elo.svg';

function CheckoutForm() {
  const navigate = useNavigate();
  return (
    <section
      className="
        flex
        laptop:w-3/6
        phone:h-3/6
        flex-col
        justify-start
        items-center
        laptop:h-full
        laptop:pt-6
        laptop:mt-0
        phone:mt-2
        "
    >
      <section className="flex flex-col justify-center items-center phone:w-full">
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
        <div className="flex flex-wrap justify-center items-center h-24 w-11/12">
          <input
            placeholder="Nome Completo"
            className="
              laptop:w-52
              phone:w-40
              tablet:w-64
              desktop:w-[18.75rem]
              h-8 border border-[#94979D] pl-1"
            type="text"
            required
          />
          <input
            placeholder="CPF"
            className="
              laptop:w-52
              phone:w-40
              tablet:w-64
              desktop:w-[18.75rem]
              h-8 border border-[#94979D] pl-1 ml-2"
            type="text"
            required
          />
          <input
            placeholder="Email"
            className="
              laptop:w-52
              phone:w-40
              tablet:w-64
              desktop:w-[18.75rem]
              h-8 border border-[#94979D] pl-1"
            type="text"
            required
          />
          <input
            placeholder="Telefone"
            className="
              laptop:w-52
              phone:w-40
              tablet:w-64
              desktop:w-[18.75rem]
              h-8 border border-[#94979D] pl-1 ml-2"
            type="text"
            required
          />
        </div>
        <div
          className="
            flex
            justify-evenly
            items-center
            h-8
            laptop:w-[26.5rem]
            phone:w-[20.568rem]
            tablet:w-[32.5rem]
            desktop:w-[38rem]
            mt-2
          "
        >
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
        <div
          className="
            flex
            justify-evenly
            items-center
            h-8
            laptop:w-[26.5rem]
            phone:w-[20.568rem]
            tablet:w-[32.5rem]
            desktop:w-[38rem]
            mt-4
          "
        >
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
        <div
          className="
            flex
            justify-evenly
            items-center
            h-8
            mt-4
            laptop:w-[26.5rem]
            phone:w-[20.568rem]
            tablet:w-[32.5rem]
            desktop:w-[38rem]
          "
        >
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
      <span className="w-80 h-8 my-4 laptop:mt-10">
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
      <section
        className="
          flex
          laptop:w-11/12
          phone:w-full
          phone:flex-col
          justify-evenly
          phone:items-center
          laptop:mt-8
        "
      >
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
      <span className="w-11/12 width laptop:my-4 phone:my-2" />
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
          phone:mb-4
          "
        onClick={ () => navigate('/') }
      >
        Comprar
      </button>
    </section>
  );
}

export default CheckoutForm;
