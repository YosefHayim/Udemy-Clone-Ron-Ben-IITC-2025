const Master = () => {
  return (
    <>
      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Master Services Agreement */}
        <h1 className="font-sans text-3xl font-extrabold">
          Master Services Agreement
        </h1>
        <p className="text-sm text-gray-500">
          This Agreement was last updated on June 1, 2023.
        </p>
        <p>
          This Master Services Agreement (this <strong>“Agreement”</strong>)
          governs the access and use of one of more Services (as defined in
          Section 1 below) purchased from Udemy, Inc., a Delaware corporation
          and/or its Affiliate(s) (collectively, <strong>“Udemy”</strong>). By
          accepting this agreement or by using the services, customer
          acknowledges it has read, understands, and has the authority to enter
          into this agreement.
        </p>

        {/* Section 1: Definitions */}
        <h2 className="text-2xl font-semibold">1. Definitions.</h2>
        <p>
          As used in this Agreement, the following terms have the meaning set
          forth below.
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong>“Affiliate”</strong> means any entity that directly or
            indirectly controls, is controlled by, or is under common control
            with a party to this Agreement.
          </li>
          <li>
            <strong>“Customer”</strong> means the party entering into this
            Agreement and/or an Order Form with Udemy.
          </li>
          <li>
            <strong>“Fees”</strong> means the amounts payable by Customer to
            Udemy for access to the Services.
          </li>
          <li>
            <strong>“Order Form”</strong> means the ordering document mutually
            executed by Udemy and Customer specifying: (i) the Service(s)
            purchased, (ii) the number of licenses purchased, (iii) Fees payable
            by Customer to Udemy for provision of the Services, (iv) the
            subscription period of the Services to be provided by Udemy to
            Customer, (v) billing and payment information, and (vi) any other
            applicable quantity specifications regarding Customer’s purchase of
            the Services.
          </li>
          <li>
            <strong>“Personal Data”</strong> means any data that Customer
            submits into the Services relating to an identified or identifiable
            natural person protected under data protection laws.
          </li>
          <li>
            <strong>“Services”</strong> means a platform that allows Customer to
            access online courses (<strong>“Courses”</strong>) and any related
            services offered by Udemy that may be purchased by Customer and is
            set forth in the Order Form signed between parties.
          </li>
          <li>
            <strong>“Subscription Period”</strong> means the term agreed between
            the Parties as detailed in the Order Form.
          </li>
          <li>
            <strong>“Udemy”</strong> means Udemy, Inc., one of its Affiliates.
          </li>
          <li>
            <strong>“Users”</strong> means the employees and contractors that
            Customer authorizes to access and use the Services.
          </li>
        </ul>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 2: Provision of the Services */}
        <h2 className="text-2xl font-semibold">
          2. Provision of the Services.
        </h2>
        <p>
          Udemy agrees to make the Services available to Customer and its Users
          pursuant to the terms of this Agreement, and as specified in an Order
          Form. Where an Affiliate of Customer wishes to access or use the
          Services, such Affiliate must request Affiliate status and enter into
          its own separate Order Form governed by this Agreement, and then for
          purposes of that Order Form, the Affiliate shall be deemed the
          “Customer,” responsible for its performance and all obligations to
          Udemy thereunder; provided, however, Customer shall be and remain
          responsible for the acts and omissions of any of its Affiliates. For
          certain Services, additional Service-specific terms may apply, which
          can be found at{" "}
          <a
            href="https://www.udemy.com/terms/ub/"
            className="text-blue-600 hover:underline"
          >
            https://www.udemy.com/terms/ub/
          </a>{" "}
          and/or will be attached to Customer’s Order Form.
        </p>

        {/* Section 3: Terms of Use */}
        <h2 className="text-2xl font-semibold">3. Terms of Use.</h2>
        <ol className="ml-6 list-decimal space-y-3">
          <li>
            Customer shall not, nor shall it permit its Users to: (i) use the
            Services in any manner that is unlawful or that infringes the rights
            of others; (ii) copy, distribute, resell, create derivative works
            from, hack, modify, or interfere with, including through the
            introduction of any computer code, file, or program that may cause
            damage to, the proper working of the Services, any of the Courses,
            or any third-party system made available through the Services; (iii)
            input any infringing, racist, hateful, sexist, pornographic,
            harassing, defamatory, libelous, or other similar inappropriate
            content into the Services or instruct Udemy to include any such
            content in the Services; (iv) scrape, spider, or utilize other
            automated means of any kind to access the Services, including, but
            not limited to, accessing API endpoints for which Customer or its
            Users have not been provided authorization by Udemy; (v) use the
            Services to build a competitive product to the Services; (vi) share
            login access to the Services among multiple individuals, transfer a
            User license (except in connection with a termination of
            employment), or otherwise permit any person other than the Users to
            use the Services; (vii) use Udemy’s APIs in violation of the API
            License Agreement, which can be found at{" "}
            <a
              href="https://www.udemy.com/terms/api/"
              className="text-blue-600 hover:underline"
            >
              https://www.udemy.com/terms/api/
            </a>
            , nor instruct a third party to access Udemy’s APIs; (viii) use the
            Services for any purpose other than as a platform for supplementing
            learning and training of Users; or (ix) permit any individual who is
            legally incapable of giving consent for the use of online services
            or the collection and processing of their personal data to use the
            Services (e.g., individuals under 13 years old in the U.S.).
          </li>
          <li>
            Customer represents and warrants that neither it nor its Users are
            (i) located in, or a resident of, any country that is subject to
            applicable U.S. trade sanctions or embargoes, or (ii) a person or
            entity who is named on any U.S. government specially designated
            national or denied-party list. Customer shall not permit any User to
            access or use the Services in a U.S. embargoed country or in
            violation of any U.S. export law or regulation.
          </li>
        </ol>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 4: Violations of Restrictions */}
        <h2 className="text-2xl font-semibold">
          4. Violations of Restrictions.
        </h2>
        <p>
          If Udemy determines that Customer or any of its Users has violated the
          restrictions set forth in Section 3 above (collectively, the{" "}
          <strong>“Terms of Use”</strong>), and if such violation is remediable
          Udemy shall notify Customer of such violation. If Customer fails to
          cure such violation within ten (10) days, then Udemy may terminate or
          suspend access to the Services for Customer or the relevant Users.
          Separately, Udemy may remove or edit inappropriate content or activity
          identified by or reported to Udemy.
        </p>

        {/* Section 5: Fees */}
        <h2 className="text-2xl font-semibold">5. Fees.</h2>
        <p>
          Customer will pay the Fees as set forth in one or more Order Forms.
          Unless stated otherwise in an Order Form, all fees are payable in US
          dollars. Any future incremental add-on or renewal orders after the
          initial subscription period (as set forth in an Order Form) shall be
          subject to the subscription standard price in effect at time of
          purchase. In the event that Customer is late in making payments, Udemy
          reserves the right to charge the greater of 1.5% interest per month or
          the maximum interest permitted by law, and Customer will be liable for
          all third-party collection costs.
        </p>

        {/* Section 6: Taxes */}
        <h2 className="text-2xl font-semibold">6. Taxes.</h2>
        <p>
          The Fees are stated exclusive of all federal, state, local, and
          foreign taxes, levies, and assessments of any nature, including
          value-added, use, or withholding taxes. Customer agrees to bear and be
          responsible for the payment of all such taxes, levies and assessments
          imposed on Customer arising out of this Agreement, excluding any tax
          based on Udemy’s income, gross receipts, business and occupation tax,
          and employment-related taxes. If tax withholding is required, Customer
          will pay the required amount to the relevant governmental authority
          and produce a withholding tax certificate to Udemy while remitting the
          residual to Udemy.
        </p>

        {/* Section 7: Confidentiality */}
        <h2 className="text-2xl font-semibold">7. Confidentiality.</h2>
        <ol className="ml-6 list-decimal space-y-3">
          <li>
            Each party agrees that all code, inventions, know-how, or business,
            technical, and financial information disclosed to a party (the{" "}
            <strong>“Receiving Party”</strong>) by the disclosing party (the{" "}
            <strong>“Disclosing Party”</strong>), constitute the confidential
            information of the Disclosing Party (
            <strong>“Confidential Information”</strong>), provided that it is
            either identified as confidential at the time of disclosure, or
            should be reasonably known by the Receiving Party to be confidential
            due to the nature of the information disclosed. Confidential
            Information will not, however, include any information that: (i) was
            publicly known and made generally available in the public domain
            prior to the time of disclosure by the Disclosing Party, (ii)
            becomes publicly known and made generally available after disclosure
            by the Disclosing Party to the Receiving Party through no action or
            inaction of the Receiving Party, (iii) is already in the possession
            of the Receiving Party at the time of disclosure by the Discloser,
            (iv) is obtained by the Receiving Party from a third party without a
            known breach of the third party’s obligations of confidentiality, or
            (v) is independently developed by the Receiving Party without use of
            or reference to the Confidential Information. The Receiving Party
            may disclose the Disclosing Party’s Confidential Information if
            required by law provided that the Receiving Party will use
            reasonable efforts to seek confidential treatment for such
            Confidential Information, and if, and as permitted by law, will
            provide prior notice to the Discloser to allow the Discloser to seek
            protective or other court orders.
          </li>
          <li>
            Except as expressly authorized herein or as necessary to perform its
            obligations hereunder, the Receiving Party agrees: (i) not to
            disclose any Confidential Information to third parties, and (ii) not
            to use Confidential Information for any purpose other than as
            necessary to exercise its rights or perform its obligations
            hereunder.
          </li>
        </ol>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 8: Processing of Personal Data */}
        <h2 className="text-2xl font-semibold">
          8. Processing of Personal Data.
        </h2>
        <p>
          Customer agrees that Udemy may process Personal Data as necessary for:
          (i) storage and processing in accordance with the Agreement and
          applicable Order Form(s); (ii) processing initiated by Users in their
          use of the Services; and (iii) processing to comply with other
          documented reasonable instructions provided by User (e.g. via email or
          support tickets) where such instructions are consistent with the terms
          of the Agreement. To the extent that Customer is subject to data
          privacy law, then Customer agrees to request from Udemy a data
          protection agreement prior to providing any Personal Data to Udemy.
          Customer will have sole responsibility for the legality of Personal
          Data and the means by which Customer acquired Personal Data, including
          providing legally adequate notices to and obtaining any necessary
          consent from its employees, agents, or third parties to whom it
          extends the benefits of the Services.
        </p>

        {/* Section 9: Term and Termination */}
        <h2 className="text-2xl font-semibold">9. Term and Termination.</h2>
        <ol className="ml-6 list-decimal space-y-3">
          <li>
            <strong>Agreement Term.</strong> The Agreement will commence on the
            Effective Date, and will continue until all Order Forms hereunder
            have expired or have been terminated. The term of an Order Form will
            be specified as the Subscription Period therein and unless otherwise
            stated in such Order Form, the Subscription Period will renew
            automatically, unless terminated by either party by giving at least
            30 days written notice prior to the end of the Subscription Period.
          </li>
          <li>
            <strong>Termination for Material Breach.</strong> Either party may
            terminate this Agreement and any applicable Order Form(s) in the
            event that the other party materially breaches this Agreement, by
            providing 30 days’ written notice, unless such breach is cured
            during such 30-day notice period. In the event that Customer
            terminates this Agreement or any Order Form due to material breach
            by Udemy, then Customer will be entitled to receive a pro-rated
            refund for Services not rendered past the termination date. The
            parties agree that those provisions that by their nature are
            intended to survive the termination of this Agreement shall survive
            the termination notwithstanding the cause of termination.
          </li>
          <li>
            <strong>Immediate Termination.</strong> Irrespective of any cure
            periods stated in this Agreement, Udemy reserves the right in its
            sole discretion to terminate or suspend access to the Services for
            Customer or the relevant Users at any time if immediate action is
            required to prevent or protect against fraud or to address imminent
            potential harm or damages.
          </li>
        </ol>

        {/* Section 10: Trial Subscriptions */}
        <h2 className="text-2xl font-semibold">10. Trial Subscriptions.</h2>
        <p>
          Services may be made available on a trial basis (
          <strong>“Trial Subscription”</strong>) to Customer for a period of up
          to 14 days, or a longer period agreed between the parties (
          <strong>“Trial Period”</strong>). Trial Subscriptions are subject to
          the terms and conditions of this Agreement, except however that: (i)
          Trial Subscriptions may only be used to evaluate and facilitate
          Customer’s decision to purchase a subscription to Services; (ii) Trial
          Subscriptions are provided by Udemy on an AS IS and AS AVAILABLE basis
          without warranties of any kind and (iii) UDEMY’S AGGREGATE LIABILITY
          FOR ANY AND ALL CAUSES OF ACTIONS, CLAIMS AND DAMAGES IN CONNECTION
          WITH ANY TRIAL IS LIMITED TO ONE HUNDRED DOLLARS ($100.00). At the end
          of the Trial Period, Customer must sign an Order Form and pay the
          applicable Fees, and this Agreement terminates as related to the Trial
          Subscription. Customers continued use of the Services after a Trial
          Period is subject to this Agreement. If Customer provides Udemy with
          any feedback, Customer agrees that Udemy may use any such feedback
          without limitation, attribution or compensation, in any form, all
          feedback Customer provides. All such feedback shall be considered
          Udemy’s Confidential Information.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 11: Warranty Disclaimer */}
        <h2 className="text-2xl font-semibold">11. Warranty Disclaimer.</h2>
        <p>
          <strong>EXCEPT AS OTHERWISE AGREED BY THE PARTIES,</strong> UDEMY
          PROVIDES THE SERVICES AS-IS AND DISCLAIMS ALL REPRESENTATIONS,
          CONDITIONS, OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, RELATING TO
          THE SERVICES, THE COURSES, AND ANY THIRD-PARTY SYSTEMS OR PLATFORMS
          ACCESSIBLE THROUGH THE SERVICES, EXPRESS, OR IMPLIED, INCLUDING, BUT
          NOT LIMITED TO, ANY WARRANTIES RELATING TO MERCHANTABILITY, ACCURACY,
          FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, OR
          AVAILABILITY.
        </p>

        {/* Section 12: Limitation of Liabilities */}
        <h2 className="text-2xl font-semibold">
          12. Limitation of Liabilities.
        </h2>
        <ol className="ml-6 list-decimal space-y-3">
          <li>
            NEITHER PARTY WILL BE LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF
            THIS AGREEMENT OR RELATED TERMS AND CONDITIONS UNDER ANY THEORY OF
            CONTRACT, NEGLIGENCE, STRICT LIABILITY, OR OTHER THEORY FOR: (i) ANY
            INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OR (ii) IN
            THE AGGREGATE, ANY AMOUNTS IN EXCESS OF THE FEES PAID OR PAYABLE BY
            CUSTOMER TO UDEMY IN THE 12 MONTHS PRIOR TO THE DATE THE RELEVANT
            CLAIM AROSE.
          </li>
          <li>
            Notwithstanding the limitation of liability set forth above: (i) any
            indemnified liability and any liability arising from violation of
            the Terms of Use will not be limited, and (ii) each party’s
            liability arising from breach of its confidentiality obligations
            hereunder, will be limited to three times the Fees paid or payable
            by Customer to Udemy in the 12 months prior to the date the relevant
            claim arose.
          </li>
        </ol>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 13: Indemnification */}
        <h2 className="text-2xl font-semibold">13. Indemnification.</h2>
        <ol className="ml-6 list-decimal space-y-3">
          <li>
            <strong>Udemy's Indemnification Obligations.</strong> Udemy agrees
            to defend Customer for any third-party claim arising from an
            allegation that the Services infringe a third party’s intellectual
            property rights (<strong>“Claim Against Customer”</strong>), and
            indemnify Customer from any proven damages, reasonable attorney
            fees, and associated reasonable costs and expenses (
            <strong>“Losses”</strong>) incurred by Customer as a result of a
            Claim Against Customer. In the event that the Services become
            subject to a third-party intellectual property claim, or Udemy
            believes that the Services will become subject to such a claim, then
            Udemy may elect to: (i) modify the Services so that they are no
            longer allegedly infringing, (ii) obtain a license for Customer’s
            continued use of the Services, or (iii) terminate this Agreement or
            any applicable Order Forms, and provide Customer a pro-rated refund
            for Services not rendered past the termination date.
          </li>
          <li>
            <strong>Customer's Indemnification Obligations.</strong> Customer
            agrees to defend Udemy for any third-party claim arising from
            Customer’s or its Users’ violation of the Terms of Use (
            <strong>“Claim Against Udemy”</strong>), and indemnify Udemy from
            any Losses incurred by Udemy as a result of a Claim Against Udemy.
          </li>
          <li>
            <strong>Requirements for Indemnification.</strong> In order for the
            indemnification obligations hereunder to apply, the party seeking
            indemnification must: (i) promptly tender a claim for
            indemnification, (ii) allow the indemnifying party sole control of
            the defense or settlement of the underlying claim, and (iii)
            reasonably assist with any defense or settlement of the underlying
            claim at the indemnifying party’s request and expense.
            Notwithstanding the foregoing, a party may not consent to entry of
            any judgment or enter into any settlement that imposes liability or
            obligations on the other party or diminishes the other party’s
            rights without obtaining the other party’s express prior consent,
            such consent not to be unreasonably withheld or delayed.
          </li>
        </ol>

        {/* Section 14: Anti-Corruption */}
        <h2 className="text-2xl font-semibold">14. Anti-Corruption.</h2>
        <p>
          Neither party has received or been offered any illegal or improper
          bribe, kickback, payment, gift, or thing of value from an employee or
          agent of the other party in connection with this Agreement. Reasonable
          gifts and entertainment provided in the ordinary course of business do
          not violate the above restriction.
        </p>

        {/* Section 15: Publicity */}
        <h2 className="text-2xl font-semibold">15. Publicity.</h2>
        <p>
          Customer grants Udemy the right to use Customer’s company name and
          logo as a reference for marketing or promotional purposes on Udemy’s
          website and in other promotional materials.
        </p>

        {/* Section 16: Force Majeure */}
        <h2 className="text-2xl font-semibold">16. Force Majeure.</h2>
        <p>
          Neither party will be liable for any delay in the performance of its
          obligations hereunder during, and to the extent caused by, a condition
          that is beyond a party’s reasonable control, including but not limited
          to natural disaster, civil disturbance, acts of terrorism or war,
          labor conditions, interruption or failure by a third-party hosting or
          Internet provider or utility provider, governmental actions, or denial
          of service attacks.
        </p>

        {/* Section 17: Severability */}
        <h2 className="text-2xl font-semibold">17. Severability.</h2>
        <p>
          If any provision of this Agreement is held by a court of competent
          jurisdiction to be contrary to law, the provision shall be deemed null
          and void, and the remaining provisions of this Agreement shall remain
          in effect.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 18: Governing Law Venue, and Attorney's Fees */}
        <h2 className="text-2xl font-semibold">
          18. Governing Law Venue, and Attorney’s Fees.
        </h2>
        <p>
          This Agreement and any disputes arising under it will be governed by
          the laws of the State of California without regard to its conflict of
          laws provisions, and each party consents to the personal jurisdiction
          and venue of the state or federal courts located in San Francisco,
          California. In the event of any dispute between the parties regarding
          the terms of this Agreement, the party prevailing in such dispute
          shall be entitled to collect from the other party all costs incurred
          in such dispute, including reasonable attorneys’ fees.
        </p>

        {/* Section 19: Team Plan */}
        <h2 className="text-2xl font-semibold">19. Team Plan.</h2>
        <p>
          <strong>“Team Plan”</strong> means an online learning platform
          delivering on demand Courses for businesses and their employees
          available through self-service sign-up. For Customers purchasing Team
          Plan only, an electronic Order Form must be submitted online. Order
          Forms will renew automatically, unless terminated by either party by
          giving at least 30 days written notice prior to the end of the
          then-current term or by disabling auto-renewal within the Services.
        </p>

        {/* Section 20: Third Party Transactions */}
        <h2 className="text-2xl font-semibold">
          20. Third Party Transactions.
        </h2>
        <p>
          If Services are purchased by a customer of an authorized reseller of
          Udemy, this Agreement continues to apply, other than terms related to
          pricing, billing, invoicing and payment, and instead the terms of
          purchase shall be as agreed to between Customer and Reseller. If
          Services are purchased by a customer of a third party partner of
          Udemy, Sections 2 (Provision of the Services), 3 (Terms of Use), 4
          (Violations of Terms of Use), 8 (Processing of Personal Data), 11
          (Warranties and Disclaimers), 12 (Limitation of Liabilities), and 18
          (Governing Law, Venue, and Attorney’s Fee) of this Agreement applies.
        </p>

        {/* Section 21: Entire Agreement */}
        <h2 className="text-2xl font-semibold">21. Entire Agreement.</h2>
        <p>
          This Agreement constitutes the entire agreement between the parties
          pertaining to the subject matter hereof and supersedes all prior or
          contemporaneous oral or written communications, proposals, and
          representations with respect to its subject matter. This Agreement and
          any duly executed Order Forms shall apply in lieu of the terms or
          conditions in any purchase order or other documentation that Customer
          provides, and all such terms and conditions are null and void and
          superseded by this Agreement and any mutually executed Order Forms.
          Where Udemy has provided you with a translation of the English
          language version of this Agreement or any document referenced in this
          Agreement, the translation is provided for your convenience only and
          the English language versions of any such document, will control. This
          Agreement, or any part thereof, may be modified by Udemy at any time,
          including the addition or deletion of terms at any time, and such
          modifications, additions or deletions will be effective immediately
          upon posting.
        </p>

        {/* Section 22: Contracting Party, Governing Law, and Currency for Indian Customers */}
        <h2 className="text-2xl font-semibold">
          22. Contracting Party, Governing Law, and Currency for Indian
          Customers.
        </h2>
        <p>
          As of June 1, 2020, if Customer is located in India, then Customer is
          contracting with Udemy India LLP under this Agreement. In such case,
          notwithstanding Section 18 above, this Agreement and any disputes
          arising under it will be governed by the laws of India, and both
          parties consent to the exclusive jurisdiction and venue of courts in
          Delhi, India for all disputes arising out of this Agreement. In
          addition, if Customer is located in India, notwithstanding Section 18
          above, then any dispute, claim, or any non-payment (any of which shall
          be treated as a dispute) whatsoever between the parties under, arising
          out of, relating to or in connection with this Agreement shall be
          settled by mandatory arbitration in accordance with the provisions of
          the Arbitration and Conciliation Act, 1996 by a sole arbitrator
          mutually appointed by the parties and both parties consent to such
          mandatory arbitration. Either party may serve the other party with a
          notice in writing specifying the existence and nature of the dispute
          and the intention to refer the dispute to arbitration. If the parties
          are unable to agree on a sole arbitrator within 30 days of such
          notice, each Party shall appoint an arbitrator, and the arbitrators so
          appointed shall jointly appoint the third arbitrator. The award
          determined through arbitration shall be final and binding. The venue
          of such arbitration shall be in Delhi. The proceedings shall be
          conducted in English. Notwithstanding Section 5 above, if Customer is
          located in India, then all fees payable by Customer will be in Indian
          Rupees.
        </p>
      </div>
    </>
  );
};

export default Master;
