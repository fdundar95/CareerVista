import { useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <section>
      <div class='px-5 py-16 md:px-10 md:py-24 lg:py-32'>
        <div class='mx-auto flex w-full max-w-3xl flex-col items-center text-center'>
          <img
            src={img}
            alt='something wrong'
            class='mx-auto mb-8 inline-block h-56 w-56 flex-none object-cover rounded-full'
          />
          <h1 class='mb-4 text-4xl font-bold md:text-6xl'>
            Something went wrong...
          </h1>
          <p class='mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8'>
            Please try again.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ErrorElement;
