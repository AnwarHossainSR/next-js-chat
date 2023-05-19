const loading = () => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-brand-main   rounded-full';

  return (
    <div
      className="flex justify-center items-center h-full w-fu
    "
    >
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
        <div className={`${circleCommonClasses} animate-bounce400`} />
      </div>
    </div>
  );
};

export default loading;
