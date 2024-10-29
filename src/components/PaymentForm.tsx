import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function PaymentForm() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div>
      <Cards
        number={ state.number }
        expiry={ state.expiry }
        cvc={ state.cvc }
        name={ state.name }
        focused={ state.focus }
      />
      <form className="flex flex-col">
        <input
          className="mt-4  border border-px border-[#CECECE] rounded-[7px] w-full h-12 pl-3"
          type="number"
          name="number"
          placeholder="Card Number"
          value={ state.number }
          onChange={ handleInputChange }
          onFocus={ handleInputFocus }
        />
        <input
          className="mt-4  border border-px border-[#CECECE] rounded-[7px] w-full h-12 pl-3"
          type="text"
          name="name"
          placeholder="Name"
          value={ state.name }
          onChange={ handleInputChange }
          onFocus={ handleInputFocus }
        />
        <div className="mt-4 flex w-full justify-between">
          <input
            className="cardInput h-12 border border-px border-[#CECECE] rounded-[7px] pl-3"
            type="text"
            name="expiry"
            placeholder="Expiry"
            value={ state.expiry }
            onChange={ handleInputChange }
            onFocus={ handleInputFocus }
          />
          <input
            className="cardInput h-12 border border-px border-[#CECECE] rounded-[7px] pl-3"
            type="number"
            name="cvv"
            placeholder="cvc"
            value={ state.cvc }
            onChange={ handleInputChange }
            onFocus={ handleInputFocus }
          />
        </div>

      </form>
    </div>
  );
}

export default PaymentForm;
