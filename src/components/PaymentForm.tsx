import { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { formatExpirationDate, limitarCaracteres } from '../utils';

interface FormData {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focused: 'number' | 'name' | 'expiry' | 'cvc' | '';
}

function PaymentForm() {
  const [state, setState] = useState<FormData>({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focused: '',
  });

  useEffect(() => {
    const input = document.getElementById('cvc-input') as HTMLInputElement;
    const maxLength = 3;

    input.addEventListener('input', () => limitarCaracteres(input, maxLength));
  }, []);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    let formattedValue = value;

    if (name === 'expiry') {
      formattedValue = formatExpirationDate(value);
    }

    setState((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    const name = evt.target.name as 'number' | 'name' | 'expiry' | 'cvc';
    setState((prev) => ({ ...prev, focused: name }));
  };

  return (
    <div>
      <Cards
        number={ state.number }
        expiry={ state.expiry }
        cvc={ state.cvc }
        name={ state.name }
        focused={ state.focused }
      />
      <form className="flex flex-col">
        <input
          className="
            mt-10
            border
            border-px
            border-[#CECECE]
            rounded-[7px]
            w-full
            h-12
            pl-3
            focus:outline-none
            focus:ring
            focus:ring-1
            focus:ring-[#848484]"
          type="number"
          name="number"
          placeholder="Card Number"
          value={ state.number }
          onChange={ handleInputChange }
          onFocus={ handleInputFocus }
        />
        <input
          className="
            mt-4
            border
            border-px
            border-[#CECECE]
            rounded-[7px]
            w-full
            h-12
            pl-3
            focus:outline-none
            focus:ring
            focus:ring-1
            focus:ring-[#848484]"
          type="text"
          name="name"
          placeholder="Name"
          value={ state.name }
          onChange={ handleInputChange }
          onFocus={ handleInputFocus }
        />
        <div className="mt-4 flex w-full justify-between">
          <input
            className="
              cardInput
              h-12
              border
              border-px
              border-[#CECECE]
              rounded-[7px]
              px-3
              focus:outline-none
              focus:ring
              focus:ring-1
              focus:ring-[#848484]"
            type="text"
            name="expiry"
            placeholder="Expiry"
            value={ state.expiry }
            onChange={ handleInputChange }
            onFocus={ handleInputFocus }
          />
          <input
            className="
              cardInput
              h-12
              border
              border-px
              border-[#CECECE]
              rounded-[7px]
              pl-3
              focus:outline-none
              focus:ring
              focus:ring-1
              focus:ring-[#848484]"
            id="cvc-input"
            type="number"
            name="cvc"
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
