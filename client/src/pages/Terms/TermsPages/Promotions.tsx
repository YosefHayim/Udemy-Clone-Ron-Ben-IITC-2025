import Logo from "@/components/Logo/Logo";
import { IoMdSearch } from "react-icons/io";

const Promotions = () => {
  return (
    <>
      <div className="px-[12.3rem]">
        {/* Navbar */}
        <nav className="border-b px-6 py-4">
          <ul className="flex items-center justify-between">
            <li>
              <a href="/" className="text-base font-bold text-black">
                Back to Udemy
              </a>
            </li>
            <li className="text-xl font-semibold">
              <Logo />
            </li>
            <div className="flex items-center space-x-4">
              <li>
                <button className="text-base font-semibold text-black focus:outline-none">
                  English (US)
                </button>
              </li>
              <li>
                <button className="rounded-none border border-black px-2 py-1 text-base font-semibold text-black focus:outline-none ">
                  Sign in
                </button>
              </li>
            </div>
          </ul>
        </nav>

        {/* Header */}
        <header className="border-b bg-white px-6 py-4">
          <div className="flex items-center justify-between text-base font-semibold">
            <nav className="text-[#5624D0]">
              <a href="/" className="text-[#5624D0]">
                Udemy
              </a>{" "}
              <span className="text-xl font-semibold text-[#6F7478]"> › </span>
              Selling & Promotion
              <span className="text-xl font-semibold text-[#6F7478]"> › </span>
              Legal Terms & Policies
            </nav>
            <div className="relative">
              <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-black" />
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-black bg-white py-2 pl-10 pr-4 text-sm focus:outline-none"
              />
            </div>
          </div>
          <h1 className="mt-12 text-4xl font-semibold text-[#4A4A4A]">
            Promotions Policy
          </h1>
        </header>

        {/* Main Content */}
        <div className="flex flex-col space-y-6 px-6 py-6 lg:flex-row lg:space-x-8 lg:space-y-0">
          {/* Main Section */}
          <main className="flex-1">
            <div className="bg-white px-8 py-6">
              {/* Header */}
              <p className="mb-4 text-base font-semibold italic text-gray-600">
                This Promotions Policy was last updated on 22nd December 2023.
              </p>
              <p className="mb-4 text-base font-semibold text-blackUdemy opacity-90">
                This Promotions Policy (
                <span className="font-semibold text-black">“Policy”</span>)
                includes information about methods that Udemy instructors can
                use to promote their content, including instructor coupons,
                course referral links, and Udemy’s optional marketing programs.
                This Policy is incorporated by reference into our{" "}
                <a href="#" className="text-[#5624D0] underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#5624D0] underline">
                  Instructor Terms
                </a>
                . Any capitalized terms that aren’t defined in this Policy are
                defined as specified in the Terms of Use or Instructor Terms.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                You can find translated versions of this Policy by following our{" "}
                <a href="#" className="text-[#5624D0] underline">
                  Help Center language instructions
                </a>
                . The following translations are also available for languages
                not supported by the Help Center:
              </p>
              {/* List of Languages */}
              <ul className="mb-6 list-inside list-disc text-base text-blackUdemy">
                <li>
                  Chinese - Traditional (
                  <a href="#" className="text-[#5624D0] underline">
                    保留政策
                  </a>
                  )
                </li>
                <li>
                  Chinese - Simplified (
                  <a href="#" className="text-[#5624D0] underline">
                    推广政策
                  </a>
                  )
                </li>
                <li>
                  Dutch (
                  <a href="#" className="text-[#5624D0] underline">
                    Promotiebeleid
                  </a>
                  )
                </li>
                <li>
                  Russian (
                  <a href="#" className="text-[#5624D0] underline">
                    Политика порядка проведения промоакций
                  </a>
                  )
                </li>
                <li>
                  Romanian (
                  <a href="#" className="text-[#5624D0] underline">
                    Politica de promoții
                  </a>
                  )
                </li>
                <li>
                  Indonesian (
                  <a href="#" className="text-[#5624D0] underline">
                    Kebijakan Promosi
                  </a>
                  )
                </li>
                <li>
                  Thai (
                  <a href="#" className="text-[#5624D0] underline">
                    นโยบายโปรโมชัน
                  </a>
                  )
                </li>
                <li>
                  Vietnamese (
                  <a href="#" className="text-[#5624D0] underline">
                    Chính sách khuyến mại
                  </a>
                  )
                </li>
              </ul>
              <p className="mb-6 text-base text-blackUdemy">
                Any version of this Policy in a language other than English is
                provided for convenience and you understand and agree that the
                English language will control if there is any conflict.
              </p>
              {/* Section Title */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                1. How the Promotional Programs Work
              </h2>
              <p className="mb-4 text-base text-blackUdemy">
                Udemy offers premium instructors the opportunity to participate
                in Promotional Programs, which you can opt into through the{" "}
                <a href="#" className="text-[#5624D0] underline">
                  Promotional Agreements page
                </a>{" "}
                of your instructor settings or by a written agreement (including
                by email) between you and Udemy for certain programs, as
                detailed below. The specific programs offered may change from
                time to time.
              </p>
              <p className="text-base text-blackUdemy">
                Not all deals or programs will be available in all geographic
                territories or for all Udemy content. Udemy has sole discretion
                to determine which content to offer as part of the Promotional
                Programs and to set or update sale prices. Udemy may remove any
                of your content from the Promotional Programs at any time and in
                its sole discretion, with or without notice to you.
              </p>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                2. Udemy Deals Program
              </h2>
              <p className="mb-4 text-base text-blackUdemy">
                The Udemy Deals Program helps increase your revenue potential by
                enabling Udemy to offer your content at a compelling discount as
                part of targeted promotions, as well as to optimize your list
                price. The Deals Program allows Udemy to offer your content to
                students at a discounted price or list price no lower than $9.99
                USD (or local equivalent), except in sales to Udemy’s resellers
                or distributors, where the price may be lower. For clarity,
                Udemy determines local equivalents of $9.99 USD using economic
                factors such as purchasing power, rather than employing a direct
                currency conversion. A table of minimum sales prices after
                discount in each of Udemy’s major markets can be found in our{" "}
                <a href="#" className="text-[#5624D0] underline">
                  Help Center article on pricing tiers
                </a>
                . We reserve the right to update this table and change base
                price tier options from time to time.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                Where a sale to a Udemy reseller or distributor results in a
                sale price for your content that is lower than permitted by this
                Policy, Udemy will calculate your revenue share based on a Gross
                Amount permitted by this Policy.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                Deals Program deals may be promoted through the Services, user
                communications, or third-party platforms, and the duration of
                the deals may vary.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                You can opt out of the Deals Program at any time. However, your
                content will remain subject to any applicable sales, campaigns,
                or promotions that are already active at the time you opt out,
                until those sales, campaigns, or promotions are completed.
              </p>

              {/* Section 3 */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                3. Udemy Business Program
              </h2>
              <p className="mb-4 text-base text-blackUdemy">
                Premium instructors may also participate in our subscription
                program (
                <span className="font-semibold">“Udemy Business Program”</span>
                ), subject to the additional terms in this section. The Udemy
                Business Program consists of Udemy’s subscription-based content
                collections available to individual consumers and business
                customers, including private, public, non-profit, and government
                organizations (
                <span className="font-semibold">“Subscription Customers”</span>
                ), featuring a select group of Udemy’s top content for
                professional and personal development skills.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                By opting into the Udemy Business Program, you agree to make all
                of your content eligible for inclusion in Udemy’s
                subscription-based content collections. We may elect whether to
                select your content for inclusion in any collection, including
                any add-on, variation, or subset of that collection, and may
                change the selection from time to time at our sole discretion.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                Because the collections are subscription-based, we may select
                sale prices and offer free trials at our discretion. While your
                content is included in a collection, you may not unpublish that
                content or make it private.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                If you’ve agreed to provide any Assessment Questions (as defined
                below), you are also subject to the additional terms in Section
                4 (Assessments).
              </p>
              <p className="text-base text-blackUdemy">
                Instructors who have previously opted into the “Udemy
                Subscription Program” are subject to the terms of this section.
              </p>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                3.1 Revenue Share
              </h2>
              <p className="mb-4 text-base text-blackUdemy">
                By participating in the Udemy Business Program, you agree that
                for each collection, your revenue share will be calculated as
                follows:
              </p>
              <ol className="mb-6 list-inside list-decimal space-y-2 text-base text-blackUdemy">
                <li>
                  Each month, Udemy will calculate the total monthly
                  subscription fees paid to Udemy on behalf of all current
                  Subscription Customers of such collection minus any applicable
                  Transaction Taxes, foreign exchange fees, and third-party
                  fees, such as reseller, promotion, distribution, or payment
                  processing fees.
                </li>
                <li>
                  Twenty percent (20%) of this amount will be allocated to
                  instructors participating in such collection (“Instructor
                  Revenue Pool”) as further described below. In 2025, the
                  revenue share will be 17.5%, and in 2026, the revenue share
                  will be 15%.
                </li>
                <li>
                  Each month, Udemy will calculate the total minutes of content
                  (including course videos, quizzes, practice tests, and coding
                  exercises) in such collection consumed by all current
                  Subscription Customers through their subscription to such
                  collection (
                  <span className="font-semibold">
                    "Total Minutes Consumed"
                  </span>
                  ). For clarity, the Total Minutes Consumed does not include
                  any consumption by access through a free trial.
                </li>
                <li>
                  Each month, Udemy will also calculate how many of the Total
                  Minutes Consumed are attributable to each of your items of
                  content that was included in such collection that month (
                  <span className="font-semibold">"Your Content Minutes"</span>
                  ).
                </li>
                <li>
                  To calculate your revenue share each month, Udemy will divide
                  the Instructor Revenue Pool by the Total Minutes Consumed,
                  then multiply that per-minute amount by Your Content Minutes.
                </li>
              </ol>
              <p className="mb-6 text-base text-blackUdemy">
                As Udemy makes additional types of content (such as assessments
                and labs) available through the collections, we may update
                subsection (3) above to specify additional types of content that
                will be included in the calculations to determine the Total
                Minutes Consumed and Your Content Minutes.
              </p>

              {/* Section 3.2 */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                3.2 Exclusivity
              </h2>
              <p className="mb-6 text-base text-blackUdemy">
                Except as otherwise provided for Assessment Questions below,
                once your content is included in a collection, you agree that
                you will not begin to offer any on-demand content, such as
                pre-recorded courses, that directly compete with or injure the
                sales of that content on any site or platform other than your
                own. For clarity, this doesn’t include literary works or
                in-person instructional trainings. If you choose to terminate
                your participation in the Udemy Business Program, you agree that
                this exclusivity provision will remain in place until we remove
                your content from all collections.
              </p>

              {/* Section 3.3 */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                3.3 Termination
              </h2>
              <p className="mb-4 text-base text-blackUdemy">
                You can choose to terminate your participation in the Udemy
                Business Program at any time by emailing{" "}
                <a
                  href="mailto:instructorsupport@udemy.com"
                  className="text-[#5624D0] underline"
                >
                  instructorsupport@udemy.com
                </a>
                . Udemy will remove your content from the collections within 12
                months of termination and will continue to pay you revenue share
                based on the then-current rates until your content is removed
                from the relevant collection.
              </p>
              <p className="text-base text-blackUdemy">
                Once your content is removed for any reason from a collection,
                Subscription Customers will no longer be able to enroll in your
                content and you will no longer earn revenue share from that
                collection. However, any individual end user who previously
                enrolled in your content will continue to be able to access that
                content for as long as they remain subscribed to the relevant
                collection.
              </p>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                4. Assessments
              </h2>
              <p className="mb-4 text-base text-blackUdemy">
                Udemy’s assessments (
                <span className="font-semibold">“Assessments”</span>) consist of
                question and answer pairs with explanations (each, an{" "}
                <span className="font-semibold">“Assessment Question”</span>) to
                measure proficiency and learning across certain topics, skills,
                domains, or occupations. Assessments are made available by Udemy
                as a standalone content type, separate from courses. For
                clarity, practice tests, quizzes, coding exercises, and labs are
                not considered Assessments or Assessment Questions.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                By providing an Assessment Question, as mutually agreed between
                us in writing (including by email), you agree to the terms in
                this section.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                We may elect whether to select your Assessment Question for
                inclusion on Udemy.com or in the Udemy Business Program, and may
                change that selection from time to time and at our sole
                discretion. If your Assessment Question is included in the Udemy
                Business Program, then you will be subject to the terms relevant
                to that program above.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                You agree that your Assessment Questions will comply with all
                criteria as may be agreed in writing (including by email) by you
                and Udemy, such as the topic, format, domain, difficulty level,
                and quantity.
              </p>
              <p className="mb-4 text-base text-blackUdemy">
                By providing your Assessment Question, you grant Udemy an
                exclusive license to use, copy, reproduce, distribute, display,
                publish, and prepare derivative works of your Assessment
                Question. You agree that you will not make your Assessment
                Question available to others (including through your own site or
                platform) or license or permit any third party to do so.
              </p>
              <p className="mb-6 text-base text-blackUdemy">
                You may choose to terminate your license of an Assessment
                Question at any time by emailing{" "}
                <a
                  href="mailto:instructorsupport@udemy.com"
                  className="text-[#5624D0] underline"
                >
                  instructorsupport@udemy.com
                </a>
                . Udemy will remove your Assessment Question from the Services
                within 12 months of termination and will continue to pay you any
                relevant revenue share based on the then-current rates until
                your Assessment Question is removed from the relevant portion of
                the Services.
              </p>

              {/* Section 5 */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                5. Modifications
              </h2>
              <p className="mb-6 text-base text-blackUdemy">
                We may update this Policy from time to time to clarify our
                practices or to reflect new or different practices. If we make
                any material change, we will notify you using prominent means
                such as by email notice sent to the email address specified in
                your account or by posting a notice through our Services.
                Modifications will become effective on the day they are posted
                unless stated otherwise.
              </p>

              {/* Section 6 */}
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                6. How to Contact Us
              </h2>
              <p className="mb-6 text-base text-blackUdemy">
                If you have any questions about this Policy, please contact our{" "}
                <a href="/support" className="text-[#5624D0] underline">
                  support team
                </a>
                .
              </p>

              {/* Feedback Section */}
              <div className="mt-6">
                <p className="mb-4 text-base font-semibold text-blackUdemy">
                  Was this article helpful?
                </p>
                <div className="flex space-x-4">
                  <button className="rounded-md border bg-gray-100 px-4 py-2 text-blackUdemy hover:bg-gray-200 focus:outline-none">
                    👍
                  </button>
                  <button className="rounded-md border bg-gray-100 px-4 py-2 text-blackUdemy hover:bg-gray-200 focus:outline-none">
                    👎
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <section className="w-full lg:w-1/5">
            <div className="space-y-8 font-medium">
              {/* Related Articles Section */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Related articles
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Instructor Promotional Agreements and Udemy Deals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Instructors: Udemy’s Pricing Tiers For Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Instructor Revenue Share
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Payment Methods on Udemy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      How to Become a Premium Instructor
                    </a>
                  </li>
                </ul>
              </div>

              {/* Instructor Topics Section */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Instructor Topics
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Instructor Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-bold text-purple-600 hover:underline"
                    >
                      Selling & Promotion
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Course Building
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Course Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#5624D0] hover:underline">
                      Trust & Safety
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div className="text-sm text-gray-600">
                <p>
                  By clicking to access Udemy’s support virtual assistant, you
                  are agreeing to Udemy’s{" "}
                  <a href="#" className="text-[#5624D0] hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#5624D0] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button className="mt-4 rounded bg-black px-6 py-2 text-sm font-bold text-white hover:bg-gray-800 focus:outline-none">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blackUdemy px-14 py-8 text-sm text-white">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Coluna 1 */}
          <div>
            <h4 className="mb-2 font-normal">Udemy Business</h4>
            <h4 className="mb-2 font-normal">Teach on Udemy</h4>
            <h4 className="mb-2 font-normal">Get the app</h4>
            <h4 className="mb-2 font-normal">About Us</h4>
            <h4 className="mb-2 font-normal">Contact Us</h4>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="mb-2 font-normal">Careers</h4>
            <h4 className="mb-2 font-normal">Blog</h4>
            <h4 className="mb-2 font-normal">Affiliate</h4>
            <h4 className="mb-2 font-normal">Investors</h4>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="mb-2 font-normal">Terms</h4>
            <h4 className="mb-2 font-normal">Privacy policy</h4>
            <h4 className="mb-2 font-normal">Cookie settings</h4>
            <h4 className="mb-2 font-normal">Sitemap</h4>
            <h4 className="mb-2 font-normal">Acessibility statement</h4>
          </div>

          {/* Seletor de Idioma */}
          <div className="mt-[-6.5rem] flex items-center justify-end">
            <button className="flex items-center space-x-2 rounded border border-gray-500 px-4 py-2 text-gray-400 hover:border-white hover:text-white focus:outline-none">
              <span className="material-icons-outlined"></span>
              <span>English (US)</span>
              <span className="material-icons-outlined"></span>
            </button>
          </div>
        </div>

        {/* Logo e Direitos Autorais */}
        <div className="my-10 flex items-center justify-between">
          <img
            src="/images/logo-udemy-inverted.svg"
            alt="Udemy Logo"
            className="h-9 w-auto"
          />
          <p className="text-white">© 2025 Udemy, Inc.</p>
        </div>
      </footer>
    </>
  );
};

export default Promotions;
