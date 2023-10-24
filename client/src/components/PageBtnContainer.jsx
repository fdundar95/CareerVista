import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const PageBtnContainer = () => {
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <section className='h-24 mt-8 flex items-center justify-end flex-wrap gap-4'>
      <button
        className='w-20 h-11 p-1 bg-white border-transparent rounded text-primary-500 capitalize tracking-wider flex items-center content-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-white'
        onClick={prevPage}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='bg-primary-100 rounded'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              key={pageNumber}
              onClick={() => {
                dispatch(changePage(pageNumber));
              }}
              className={
                pageNumber === page
                  ? 'bg-transparent border-transparent w-12 h-11 font-bold text-xl rounded cursor-pointer transition-all duration-300 ease-in-out bg-primary-400 text-white'
                  : 'bg-transparent border-transparent w-12 h-11 font-bold text-xl rounded cursor-pointer transition-all duration-300 ease-in-out text-primary-500 hover:bg-primary-200'
              }
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className='w-20 h-11 p-1 bg-white border-transparent rounded text-primary-500 capitalize tracking-wider flex items-center content-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-white'
        onClick={nextPage}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </section>
  );
};
export default PageBtnContainer;
