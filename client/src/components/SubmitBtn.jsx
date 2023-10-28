import { useNavigation } from 'react-router-dom';
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type='submit'
      className={`btn bg-primary-500 text-white w-full mt-4 h-9 hover:bg-primary-700`}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Please Wait...' : text}
    </button>
  );
};
export default SubmitBtn;
