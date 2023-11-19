import CategoriesBar from '../components/CategoriesBar';
import Header from '../components/Header';

function MainScreen() {
  return (
    <main>
      <Header />
      <CategoriesBar />
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </main>
  );
}

export default MainScreen;
