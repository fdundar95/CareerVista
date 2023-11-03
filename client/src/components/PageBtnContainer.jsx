import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useAllJobsContext } from '../pages/dashboard/AllJobs';
import { useLocation, useNavigate } from 'react-router-dom';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={
          activeClass
            ? 'bg-transparent border-transparent w-8 h-8 lg:w-12 lg:h-11 font-bold text-xl rounded cursor-pointer transition-all duration-300 ease-in-out bg-primary-600 text-primary-200'
            : 'bg-transparent border-transparent w-8 h-8 lg:w-12 lg:h-11 font-bold text-xl rounded cursor-pointer transition-all duration-300 ease-in-out text-primary-500 hover:bg-primary-200'
        }
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // Add first page button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );
    // Add dots if current page is more than 3 pages away from the first page
    if (currentPage > 3) {
      pageButtons.push(
        <span
          className='w-8 h-8 lg:w-12 lg:h-11 font-bold text-xl text-primary-500 rounded border-transparent grid place-items-center cursor-text'
          key='dots-1'
        >
          ...
        </span>
      );
    }
    // Add one page before the current page if it's not the first or second page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }
    // Add current page button
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }
    // Add one page after the current page if it's not the last or second last page
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }
    // Add dots if current page is more than 2 pages away from the last page
    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span
          className='w-8 h-8 lg:w-12 lg:h-11 font-bold text-xl text-primary-500 rounded border-transparent grid place-items-center cursor-text'
          key='dots+1'
        >
          ...
        </span>
      );
    }
    // Add last page button
    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );
    return pageButtons;
  };

  return (
    <section className='h-24 mt-8 flex items-center justify-end flex-wrap gap-1'>
      <button
        className='w-15 h-8 xl:w-20 xl:h-11 p-1 bg-slate-200 border-transparent rounded text-primary-500 capitalize tracking-wider flex items-center content-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-white'
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='flex rounded bg-slate-200'>{renderPageButtons()}</div>
      <button
        className='w-15 h-8 xl:w-20 xl:h-11 p-1 bg-slate-200 border-transparent rounded text-primary-500 capitalize tracking-wider flex items-center content-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-500 hover:text-white'
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </section>
  );
};
export default PageBtnContainer;
