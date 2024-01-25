export const Article = ({ imgArticle, numberArticle, titleArticle, textArticle }) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow '>
      <div className='w-[100px] flex-none'>
        <img src={imgArticle} alt='' />
      </div>
      <div className='pl-6'>
        <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{numberArticle}</p>
        <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{titleArticle}</h2>
        <p className='text-DarkGrayishBlue text-[16px]'>{textArticle}</p>
      </div>
    </article>
  );
};
