import { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

interface CategoriesBarProps {
  sendRadioValue: (dados: string) => void;
  sendProductsRequest: (data: string) => Promise<void>
}

function CategoriesBar({ sendRadioValue, sendProductsRequest }: CategoriesBarProps) {
  const [valorInput, setvalorInput] = useState('');
  const [lastValorInput, setLastValorInput] = useState('');

  useEffect(() => {
    if (valorInput !== lastValorInput) {
      setLastValorInput(valorInput);
      if (valorInput) {
        sendProductsRequest(valorInput);
      }
    }
  }, [valorInput, sendProductsRequest, lastValorInput]);

  const context = useContext(Context);

  if (!context) return null;
  const { categories } = context;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setvalorInput(novoValor);
    sendRadioValue(novoValor);
  };

  const categoriesList = categories.map((category) => (
    <span
      key={ category.id }
      id="categories-list"
      className="flex justify-start w-full my-1"
    >
      <input
        className="appearance-none"
        name="categories"
        data-testid="category"
        value={ category.id }
        type="radio"
        id={ category.name }
        checked={ valorInput === category.id }
        onChange={ handleRadioChange }
      />
      <label
        className="hover:font-bold hover:underline text-lg font-medium"
        htmlFor={ category.name }
      >
        {category.name}
      </label>
    </span>
  ));

  return (
    <aside
      className="
      flex
      flex-col
      w-1/5
      justify-start
      items-center
      max-h-screen
      overflow-auto
      overscroll-contain
      shadow-xl
      "
    >
      <p className="w-full mt-6 text-xl font-bold">Categorias</p>
      <div className="w-full flex justify-start my-6">
        <span className="w-60 width" />
      </div>
      {categoriesList}
    </aside>
  );
}

export default CategoriesBar;
