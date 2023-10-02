const JobInfo = ({ icon, text }) => {
  return (
      <div className="mt-2 flex items-center">
      <span className="text-base mr-4 flex items-center text-gray-400">
        {icon}
      </span>
        <span className="capitalize tracking-wider">{text}</span>
      </div>
  );
};

export default JobInfo;
