const Subscriptions = () => {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 font-sans text-2xl font-extrabold text-gray-800">Subscriptions</h2>
          <p className="mb-4 text-gray-600">Manage your Udemy subscriptions</p>

          {/* Active Plans */}
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Active plans</h3>
            <div className="w-full rounded-lg border border-dashed bg-gray-50 p-4 text-center text-gray-600">
              You don't have any active subscriptions
            </div>
          </div>

          {/* Subscription Plans Available */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Subscription plans available
            </h3>
            <div className="lg: flex flex-col items-start rounded-lg border bg-gray-50 p-6">
              {/* Text Section */}
              <div className="flex-1">
                <h4 className="font-sans text-xl font-extrabold text-gray-800">Personal Plan</h4>
                <p className="my-4 text-gray-600">
                  New opportunities await. Sign up for Personal Plan to get all this and more:
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Access to 12,000+ top courses</li>
                  <li>Courses in tech, business, and more</li>
                  <li>Practice tests, exercises, and Q&A</li>
                </ul>
                <div className="mt-6">
                  <button className="mr-4 rounded-md bg-purple-600 px-6 py-2 text-white shadow-md hover:bg-purple-700 focus:outline-none focus:outline-none focus:ring-2 focus:ring-purple-500">
                    Subscribe
                  </button>
                  <button className="rounded-md border px-6 py-2 text-purple-600 shadow-md hover:bg-purple-100 focus:outline-none focus:outline-none focus:ring-2 focus:ring-purple-500">
                    Learn more
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Starting at €66.67 per month after 7-day trial. Cancel anytime.
                </p>
              </div>

              {/* Image Section */}
              <div className="mt-6 lg:ml-8 lg:mt-0">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Subscription Plan Illustration"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Subscriptions;
