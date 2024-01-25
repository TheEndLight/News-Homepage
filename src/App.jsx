import { ArticleContainer } from './componets/ArticleContainer';
import { Header } from './componets/header';
import { MainArticle } from './componets/MainArticle';
import { NewContainer } from './componets/NewContainer';

function App() {
  return (
    <main className='px-4 pt-6'>
      <Header />
      <div className='lg:flex lg:gap-8'>
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main>
  );
}

export default App;
