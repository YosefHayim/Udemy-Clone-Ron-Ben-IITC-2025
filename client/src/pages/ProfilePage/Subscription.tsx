
const Subscriptions = () => {
    return (<>
        {/* Main Content */}
        <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Subscriptions</h2>
                <p className="text-gray-600 mb-4">Manage your Udemy subscriptions</p>

                {/* Active Plans */}
                <div className="mb-10">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Active plans</h3>
                    <div className="w-full border border-dashed rounded-lg p-4 text-center bg-gray-50 text-gray-600">
                        You don't have any active subscriptions
                    </div>
                </div>

                {/* Subscription Plans Available */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Subscription plans available
                    </h3>
                    <div className="flex flex-col lg:flex-row items-start bg-gray-50 border rounded-lg p-6">
                        {/* Text Section */}
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-800">Personal Plan</h4>
                            <p className="text-gray-600 my-4">
                                New opportunities await. Sign up for Personal Plan to get all
                                this and more:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Access to 12,000+ top courses</li>
                                <li>Courses in tech, business, and more</li>
                                <li>Practice tests, exercises, and Q&A</li>
                            </ul>
                            <div className="mt-6">
                                <button className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4">
                                    Subscribe
                                </button>
                                <button className="px-6 py-2 border rounded-md shadow-md text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    Learn more
                                </button>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Starting at €66.67 per month after 7-day trial. Cancel anytime.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="mt-6 lg:mt-0 lg:ml-8">
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
