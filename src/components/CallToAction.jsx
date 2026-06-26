const CallToAction = () => {
  return (
    <section className="bg-AlmostBlack text-AlmostWhite py-20 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Ready to simplify your workflow?
        </h2>
        <p className="mt-4 text-MediumGray max-w-lg mx-auto">
          Join thousands of teams already using Snap to collaborate smarter and
          ship faster.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-AlmostWhite text-AlmostBlack hover:opacity-80 px-8 py-3 rounded-2xl font-semibold transition-opacity duration-300">
            Get started for free
          </button>
          <button className="border border-AlmostWhite text-AlmostWhite hover:bg-AlmostWhite hover:text-AlmostBlack px-8 py-3 rounded-2xl font-semibold transition-colors duration-300">
            See a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
