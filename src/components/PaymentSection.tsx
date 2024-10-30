import { useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';

function PaymentSection() {
  const navigate = useNavigate();
  return (
    <div className="summary-container">
      <h3 className="w-full font-bold mb-10 text-xl">Pagamento</h3>
      <PaymentForm />
      <div className="mt-10 w-full flex justify-end">
        <button
          onClick={ () => navigate(-1) }
          className="
            rounded-[6px]
            border
            border-px
            border-black
            w-[15.25rem]
            h-16"
        >
          Voltar
        </button>
        <a href="https://youtu.be/xvFZjo5PgG0?si=Poi0lsPiF-RUk5AL">
          <button
            onClick={ () => navigate('/checkout/payment') }
            className="
              rounded-[6px]
              bg-black
              text-white
              w-[15.25rem]
              h-16
              ml-6"
          >
            Pagar
          </button>
        </a>
      </div>
    </div>
  );
}
export default PaymentSection;
