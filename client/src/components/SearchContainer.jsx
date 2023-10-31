import { Form, Link, useSubmit } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import { useEffect, useMemo, useState } from 'react';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { useAllJobsContext } from '../pages/dashboard/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

  return (
    <section className='rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl'>
      <Form className='w-full max-w-full'>
        <h3 className='-mt-7 mb-2 md:my-0'>Search Form</h3>
        <div className='grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3'>
          {/* search position */}
          <FormRow
            type='text'
            name='search'
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='job status'
            name='jobStatus'
            defaultValue={jobStatus}
            list={['all', ...Object.values(JOB_STATUS)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          {/* search by type */}
          <FormRowSelect
            labelText=' job type'
            name='jobType'
            defaultValue={jobType}
            list={['all', ...Object.values(JOB_TYPE)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          {/* <div className='gap-x-4 self-end mt-2 lg:mt-0'>
            <SubmitBtn text={'Search'} />
          </div> */}
          <Link
            to='/dashboard/all-jobs'
            className='btn text-center h-9 self-end mt-4 bg-red-200 text-gray-800 lg:mt-0 hover:bg-red-300'
          >
            Reset Search Values
          </Link>
        </div>
      </Form>
    </section>
  );
};
export default SearchContainer;
