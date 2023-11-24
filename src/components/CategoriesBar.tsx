import { useContext, useState, useEffect } from 'react';
import CategoriesContext from '../context/CategoriesContext';

interface CategoriesBarProps {
  sendRadioValue: (dados: string) => void;
  sendProductsRequest: (data: string) => Promise<void>
}

function CategoriesBar({ sendRadioValue, sendProductsRequest }: CategoriesBarProps) {
  const categoriesContext = useContext(CategoriesContext);

  const [valorInput, setvalorInput] = useState('');
  const [lastValorInput, setLastValorInput] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setvalorInput(novoValor);
    sendRadioValue(novoValor);
  };

  useEffect(() => {
    if (valorInput !== lastValorInput) {
      setLastValorInput(valorInput); // Atualiza o último valor
      if (valorInput) {
        sendProductsRequest(valorInput);
      }
    }
  }, [valorInput, sendProductsRequest, lastValorInput]);

  const categoriesList = categoriesContext.map((category) => (
    <span key={ category.id } id="categories-list">
      <input
        name="categories"
        data-testid="category"
        value={ category.id }
        type="radio"
        id={ category.name }
        checked={ valorInput === category.id }
        onChange={ handleRadioChange }
        // onClick={ handleClick }
      />
      <label
        htmlFor={ category.name }
      >
        {category.name}
      </label>
    </span>
  ));

  return (
    <aside>
      {categoriesList}
    </aside>
  );
}

export default CategoriesBar;
