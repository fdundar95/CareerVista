import { FormRow, FormRowSelect } from '.';
import { useEffect, useMemo, useState } from 'react';

const SearchContainer = () => {
  return <div>SearchContainer</div>;
};

// const SearchContainer = () => {
//   const [localSearch, setLocalSearch] = useState('');

//   const debounce = () => {
//     let timeoutID;
//     return (e) => {
//       setLocalSearch(e.target.value);
//       clearTimeout(timeoutID);
//       timeoutID = setTimeout(() => {
//         dispatch(handleChange({ name: e.target.name, value: e.target.value }));
//       }, 1000);
//     };
//   };

//   const optimizedDebounce = useMemo(() => debounce(), []);

//   const handleSearch = (e) => {
//     dispatch(handleChange({ name: e.target.name, value: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLocalSearch('');
//     dispatch(clearFilters());
//   };

//   useEffect(() => {
//     return () => {
//       dispatch(clearFilters());
//     };
//   }, []);

//   return (
//     <section className='rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl'>
//       <form className='w-full max-w-full'>
//         <h3 className='-mt-7 mb-2 md:my-0'>Search Form</h3>
//         <div className='grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3'>
//           {/* search position */}
//           <FormRow
//             type='text'
//             name='search'
//             value={localSearch}
//             handleChange={optimizedDebounce}
//           />
//           {/* search by status */}
//           <FormRowSelect
//             labelText='status'
//             name='searchStatus'
//             value={searchStatus}
//             handleChange={handleSearch}
//             list={['all', ...statusOptions]}
//           />
//           {/* search by type */}
//           <FormRowSelect
//             labelText='type'
//             name='searchType'
//             value={searchType}
//             handleChange={handleSearch}
//             list={['all', ...jobTypeOptions]}
//           />
//           {/* sort */}
//           <FormRowSelect
//             name='sort'
//             value={sort}
//             handleChange={handleSearch}
//             list={sortOptions}
//           />
//           <button
//             className='btn h-9 self-end mt-4 bg-red-200 lg:mt-0 hover:bg-red-300'
//             disabled={isLoading}
//             onClick={handleSubmit}
//           >
//             Clear Filters
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };
export default SearchContainer;
