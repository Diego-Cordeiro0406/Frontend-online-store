import PaymentForm from './PaymentForm';

function PaymentSection() {
  return (
    <div
      className="
      summary-container
      flex
      flex-col
      items-center"
    >
      <h3
        className="
          w-full
          font-bold
          mb-10
          text-xl
          pl-4"
      >
        Pagamento
      </h3>
      <PaymentForm />
    </div>
  );
}
export default PaymentSection;
