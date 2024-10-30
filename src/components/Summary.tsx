import productExample from '../images/product-example.png';

function Summary() {
  return (
    <div
      className="
        summary-container
        border
        border-px
        border-[#EBEBEB]
        rounded-[10px]
        flex
          flex-col
        items-center"
    >
      <h3 className="font-semibold w-11/12 py-6 text-xl">Resumo</h3>
      <span
        className="
          flex
          justify-between
          w-11/12
          h-[4.5rem]
          bg-[#F6F6F6]
          rounded-[13px]
          items-center
          px-5
          mb-4"
      >
        <div className="flex items-center">
          <img className="w-10 h-10" src={ productExample } alt="product-img" />
          <p className="ml-2 font-medium">Product name</p>
        </div>
        <p className="font-bold">R$ 4999</p>
      </span>
      <span
        className="
          flex
          justify-between
          w-11/12
          h-[4.5rem]
          bg-[#F6F6F6]
          rounded-[13px]
          items-center
          px-5
          mb-4"
      >
        <div className="flex items-center">
          <img className="w-10 h-10" src={ productExample } alt="product-img" />
          <p className="ml-2 font-medium">Product name</p>
        </div>
        <p className="font-bold">R$ 4999</p>
      </span>
      <span
        className="
          flex
          justify-between
          w-11/12
          h-[4.5rem]
          bg-[#F6F6F6]
          rounded-[13px]
          items-center
          px-5
          mb-4"
      >
        <div className="flex items-center">
          <img className="w-10 h-10" src={ productExample } alt="product-img" />
          <p className="ml-2 font-medium">Product name</p>
        </div>
        <p className="font-bold">R$ 4999</p>
      </span>
      <section className="w-11/12 h-3/6 flex flex-col justify-around">
        <span className="flex flex-col justify-evenly w-full h-3/6">
          <div>
            <h4 className="w-full text-[#545454]">Endereço</h4>
            <p className="w-full">1131 Dusty Townline, Jacksonville, TX 40322</p>
          </div>
          <div>
            <h4 className="w-full text-[#545454]">Método de envio</h4>
            <p className="w-full">Grátis</p>
          </div>
        </span>
        <span className="flex flex-col justify-evenly w-full h-3/6">
          <div className="flex justify-between items-center w-full">
            <h3 className="font-medium">Subtotal</h3>
            <p className="font-bold">5400</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[#545454]">Envio</h3>
            <p className="font-bold">R$ 0</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="font-medium">Total</h3>
            <p className="font-bold">5400</p>
          </div>
        </span>
      </section>
    </div>
  );
}
export default Summary;
