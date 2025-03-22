import SideMenuPrivacy from "./SideMenuPrivacy";

const PrivacyStatement = () => {
  return (
    <>
      <SideMenuPrivacy />
      <div className="min-h-screen bg-gray-100 px-6 py-8 text-gray-800">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-8 shadow-md">
          <h1 className="mb-4 text-2xl font-extrabold">
            Udemy Business Privacy Statement
          </h1>
          <p className="mb-4 text-sm text-gray-700">
            This Udemy Business Privacy Statement was last updated on September
            4, 2024.
          </p>

          <p className="mb-6">
            This privacy statement describes how Udemy (“Udemy,” “we,” “us,” or
            “our”) collects, uses, and discloses personal data of customers and
            other users of the Udemy Business platform and services (“Customer
            Users”). By accessing or using the platform, you consent to the data
            handling practices described in this Privacy Statement.
          </p>

          <h2 className="mb-2 text-lg font-extrabold">
            Udemy Business Privacy Statement
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>Information about Users collected and stored by Udemy</li>
            <li>Purpose of User Data Processing and Retention Period</li>
            <li>Cookies and other Tracking Technologies</li>
            <li>Sharing User Information</li>
            <li>Cross-Border Processing of User Data</li>
            <li>Jurisdiction-Specific Information</li>
            <li>General</li>
          </ol>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">
            1. Information about Users collected and stored by Udemy
          </h3>
          <p className="mb-4">
            When a User logs on or is invited to use Udemy by a Customer, Udemy
            may collect and store certain data, including but not limited to:
          </p>
          <ul className="mb-6 ml-6 list-disc">
            <li>Full name, email address, and other profile data.</li>
            <li>Course enrollments and progress data.</li>
            <li>
              Other activities related to use of the platform (e.g., quiz
              scores, assignment submissions).
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">
            2. Purpose of User Data Processing and Retention Period
          </h3>
          <p className="mb-4">
            User data is processed for purposes such as managing course
            enrollments, facilitating customer support, and improving the
            platform.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">
            3. Cookies and other Tracking Technologies
          </h3>
          <p className="mb-4">
            Udemy uses cookies and similar technologies to analyze trends,
            administer the platform, and gather demographic data. Users can
            manage their cookie settings via the Cookie Settings link.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">
            4. Sharing User Information
          </h3>
          <p className="mb-4">
            Udemy shares data with service providers for business purposes and
            legal compliance. Any additional sharing is subject to
            customer-specific agreements.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">
            5. Cross-Border Processing of User Data
          </h3>
          <p className="mb-4">
            Data may be transferred to the United States for processing in
            accordance with applicable laws and customer agreements.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">
            6. Jurisdiction-Specific Information
          </h3>
          <p className="mb-4">
            <strong>Australia:</strong> If you are located in Australia, you may
            contact our privacy team at{" "}
            <a href="mailto:privacy@udemy.com" className="text-blue-500">
              privacy@udemy.com
            </a>{" "}
            for assistance.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-extrabold">7. General</h3>
          <p className="mb-4">
            In case of discrepancies, the English version of the Privacy
            Statement prevails.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyStatement;
