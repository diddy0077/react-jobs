const Hero = ({
  title = "Become a React Dev",
  subtitle = "Find the React job that fits your skill set",
}) => {
  return (
    <section className="bg-indigo-700 dark:bg-gray-900 py-20 mb-4 transition-colors duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white dark:text-gray-100 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white dark:text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
