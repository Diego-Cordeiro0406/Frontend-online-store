import { useContext, useState } from 'react';
import CategoriesContext from '../context/CategoriesContext';

interface CategoriesBarProps {
  sendRadioValue: (dados: string) => void;
  sendProductsRequest: (data: string) => Promise<void>
}

function CategoriesBar({ sendRadioValue, sendProductsRequest }: CategoriesBarProps) {
  const categoriesContext = useContext(CategoriesContext);

  const [valorInput, setvalorInput] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setvalorInput(novoValor);
    sendRadioValue(novoValor);
  };

  const handleClick = async () => {
    // Use o valor do estado local diretamente
    if (valorInput) {
      await sendProductsRequest(valorInput);
    }
  };

  const categoriesList = categoriesContext.map((category) => (
    <span key={ category.id } id="categories-list">
      <input
        name="categories"
        value={ category.id }
        type="radio"
        id={ category.name }
        checked={ valorInput === category.id }
        onChange={ handleRadioChange }
        onClick={ handleClick }
      />
      <label
        data-testid="category"
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
