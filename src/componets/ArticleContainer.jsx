import { Article } from './Article';
import img1 from '../assets/images/image-retro-pcs.jpg';
import img2 from '../assets/images/image-top-laptops.jpg';
import img3 from '../assets/images/image-gaming-growth.jpg';

export const ArticleContainer = () => {
  return (
    <section className='mt-6 md:flex md:flex-wrap md:gap-10'>
      <Article
        imgArticle={img1}
        numberArticle='01'
        titleArticle='Reviving Retro PCs'
        textArticle='What happens when old PCs are given modern upgrades?'
      />
      <Article
        imgArticle={img2}
        numberArticle='02'
        titleArticle='Top 10 Laptops of 2022'
        textArticle='Our best picks for various needs and budgets.'
      />
      <Article
        imgArticle={img3}
        numberArticle='03'
        titleArticle='The Growth of Gaming'
        textArticle='How the pandemic has sparked fresh opportunities.'
      />
    </section>
  );
};
