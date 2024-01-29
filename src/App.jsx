import { ArticleContainer } from './componets/ArticleContainer.jsx';
import { Header } from './componets/Header.jsx';
import { MainArticle } from './componets/MainArticle.jsx';
import { NewContainer } from './componets/NewContainer.jsx';

function App() {
  return (
    <main className='px-4 pt-6'>
      <Header />
      <div className='lg:flex lg:gap-x-8'>
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main>
  );
}

export default App;
