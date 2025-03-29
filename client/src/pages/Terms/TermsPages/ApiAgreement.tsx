const ApiAgreement = () => {
  return (
    <>
      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Udemy API License Agreement */}
        <h1 className="font-sans text-3xl font-extrabold">Udemy API License Agreement</h1>
        <p className="text-sm text-gray-500">These API Terms were last updated on June 1, 2023.</p>
        <p>
          At Udemy, we believe in improving lives through learning. Whether you want to share what
          you know or learn something new, you’ve come to the right place. We also help
          organizations of all types and sizes prepare for the path ahead — wherever it leads. To
          achieve these goals, we offer development tools to enable our users to create applications
          that connect with the Udemy platform. Our hope is to create a thriving community of
          applications built around Udemy that balances the various needs around the protection of
          our systems, our learners, and our business.
        </p>
        <p>
          Please read the below agreement carefully. If you do not agree with these terms, please do
          not proceed.
        </p>

        {/* Section 1. Purpose */}
        <h2 className="text-2xl font-semibold">1. Purpose.</h2>
        <p>
          <strong>1.1 Parties.</strong> This API License Agreement (<strong>“Agreement”</strong>) is
          between Udemy, Inc. (<strong>“Udemy”</strong>, <strong>“us”</strong>, or{" "}
          <strong>“we”</strong>
          ), and you, or the individual, company, or other entity that you represent (
          <strong>“you”</strong>). By building applications that interact with Udemy’s products and
          services, including data related thereto (collectively the <strong>“Services”</strong>) or
          by accessing or using any application programming interfaces, developer tools, or other
          related documentation and materials (collectively <strong>“APIs”</strong>) made available
          by Udemy, you agree to be bound by this Agreement and any accompanying documentation that
          applies to your use of the APIs.
        </p>
        <p>
          <strong>1.2 Other Agreements.</strong> This Agreement governs your use of the Udemy APIs.
          If you are a customer, reseller, or value-added service partner of Udemy Business, you may
          be required to execute a separate agreement governing your access or right to license the
          Services.
        </p>
        <p>
          <strong>1.3 Use on Behalf of an Entity.</strong> If you are accepting this Agreement on
          behalf of your employer or another entity, you represent and warrant that: (i) you have
          full legal authority to bind your employer or such entity to this Agreement; (ii) you have
          read and understand this Agreement; and (iii) you agree to this Agreement on behalf of the
          party that you represent.
        </p>
        <p>
          <strong>1.4 Modification of Terms.</strong> We may modify this Agreement at any time with
          or without individual notice to you. Any modifications will be effective upon your
          continued use of the APIs. Please review this Agreement periodically and check the “Last
          Updated” date for any potential changes.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 2: Using the Udemy APIs */}
        <h2 className="text-2xl font-semibold">2. Using the Udemy APIs.</h2>

        <p>
          <strong>2.1 API License.</strong> Subject to this Agreement, Udemy grants you a limited
          worldwide, non-exclusive, non-sublicensable, non-transferable, revocable license to use
          and make calls to the APIs solely to facilitate the interoperability of the Services and
          the software applications, websites, or other tools using the APIs created by you (each,
          an <strong>“App”</strong>). You may use the APIs only as expressly permitted in this
          Agreement. Violation of this Agreement may result in the immediate suspension or
          termination of your use of the APIs.
        </p>
        <p>
          <strong>2.2 Obligations.</strong> You agree to comply and require all your users to comply
          with all applicable laws and regulations, including laws regarding the import or export of
          data or software and privacy laws, and any guidelines provided by Udemy.
        </p>
        <p>
          <strong>2.3 Monitoring.</strong> You agree that Udemy may monitor your use of the APIs to
          ensure quality, to improve Services, and to verify your compliance with the Agreement. You
          agree to assist Udemy with this monitoring by providing Udemy with information about your
          App. If you do not demonstrate full compliance with this Agreement, Udemy may restrict or
          terminate your access to the APIs without notice.
        </p>
        <p>
          <strong>2.4 Reservation of Certain Rights.</strong> At any point in the future, Udemy
          reserves the right to do any of the following: (1) offer or cease to offer support for the
          APIs; (2) modify the APIs and require you to use those subsequent versions; (3) require
          you to use the APIs in a different manner; (4) deprecate any API; or (5) independently
          develop products or services that may serve the same purpose as your App.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 3: Restrictions */}
        <h2 className="text-2xl font-semibold">3. Restrictions.</h2>
        <p>
          <strong>3.1 No Malicious Actions.</strong> You shall not and shall not direct, encourage
          or assist any party to: (a) use the APIs in a way that could impair, harm or damage Udemy,
          the APIs, any Services, or anyone’s use of the APIs or any Services; (b) launch or cause
          to be launched in connection with the APIs a malicious automated program or script,
          including web spiders, crawlers, robots, harvesters, bots, viruses or worms, or any
          program intended to overburden or hinder the operation and/or performance of the APIs; (c)
          attempt to circumvent the limitations Udemy sets on your use of the APIs; (d) engage in
          deceptive, misleading, illegal, or unethical activities, or activities that otherwise may
          be detrimental to the APIs, Udemy, our learners, or the public in our sole discretion and
          judgment.
        </p>
        <p>
          <strong>3.2 No Unauthorized Access.</strong> You shall not and shall not direct, encourage
          or assist any party to use the APIs to disrupt, interfere with, or attempt to gain
          unauthorized access to the Services, servers, devices, or networks connected to or which
          can be accessed via the APIs.
        </p>
        <p>
          <strong>3.3 No Removal of Legal Notice.</strong> You shall not remove any legal,
          copyright, trademark, or other proprietary rights notices contained in or on materials
          received or accessed by you pursuant to this Agreement.
        </p>
        <p>
          <strong>3.4 No Copying or Scraping.</strong> You shall not and shall not direct, encourage
          or assist any other party to: (a) copy or extract any features or functionality thereof;
          (b) parse or scrape any of Udemy’s data; (c) reformat, reverse-engineer, or otherwise
          modify the APIs or Services; (d) design or develop an App or service whose primary purpose
          is to redirect users from the Services; or (e) create an App that recreates a core
          functionality of or replaces any Udemy Services; unless expressly permitted by Udemy
          pursuant to a duly executed written agreement.
        </p>
        <p>
          <strong>3.5 No Competitive Benchmarking.</strong> You shall not and shall not direct,
          encourage or assist any other party to use the API to measure the availability,
          performance, functionality, or usage of the Services for competitive purposes.
        </p>
        <p>
          <strong>3.6 No Resell.</strong> You shall not redistribute or resell, or sublicense access
          to, the APIs, any data obtained using the APIs, or any Services accessed through the APIs,
          unless expressly permitted by Udemy pursuant to a separate duly executed written
          agreement.
        </p>

        {/* Section 4: Intellectual Property */}
        <h2 className="text-2xl font-semibold">4. Intellectual Property.</h2>
        <p>
          <strong>4.1 Ownership.</strong> You retain your ownership rights in your App and we own
          and will continue to own our APIs and Services, including all related intellectual
          property rights therein. All of our rights not expressly granted herein are hereby
          retained.
        </p>
        <p>
          <strong>4.2 Feedback.</strong> Any feedback, comments, or suggestions you may provide
          regarding the Udemy Services or the APIs are entirely voluntary and non-confidential and
          we will be free to use such feedback, comments, or suggestions as we see fit and without
          any obligation to you.
        </p>
        <p>
          <strong>4.3 Branding.</strong> Subject to this Agreement, Udemy grants you a limited,
          non-exclusive, non-transferable, non-assignable, non-sublicensable, worldwide revocable
          license to use the Udemy name and trademark (collectively <strong>“Udemy TMs”</strong>) to
          accurately promote or advertise your integration of the APIs with your App. Your use of
          the Udemy TMs must comply with the Udemy Trademark Usage Guidelines. You agree not to
          display the Udemy TMs: (a) in any way that violates applicable law, including laws
          regarding libel, slander, obscenity, and infringement; (b) in any way that is misleading,
          implies that your App is approved, created, or endorsed by Udemy (or otherwise
          misrepresents your relationship with Udemy); or (c) in a way that is otherwise
          objectionable to Udemy in its sole discretion. You must promptly cease any use of the
          Udemy TMs identified by Udemy as objectionable. You receive no other rights to Udemy TMs
          under this Agreement. All goodwill arising from use of Udemy TMs will inure to the benefit
          of Udemy.
        </p>
        <p>
          <strong>4.4 Your Trademarks.</strong> You grant Udemy a limited, non-exclusive,
          non-transferable, non-assignable, non-sublicensable, worldwide revocable license to use
          your name, trademarks, and logo (collectively <strong>“Your TMs”</strong>) to promote or
          advertise your use of the APIs in your App. Udemy shall use Your TMs in compliance with
          your trademark usage guidelines if such guidelines are communicated in writing directly to
          Udemy. Udemy shall not acquire any interest, right, or title in any Your TMs and all
          associated goodwill shall reside with you.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 5: User Data */}
        <h2 className="text-2xl font-semibold">5. User Data.</h2>
        <p>
          <strong>5.1 Privacy Laws and Regulations.</strong> You must comply with all applicable
          data privacy and cybersecurity laws and regulations. Your use of the APIs is conditioned
          upon you implementing and maintaining appropriate protections and measures for your App
          and that includes your responsibility to the data obtained through the use of the APIs.
        </p>
        <p>
          <strong>5.2 Collection and Use.</strong> You must provide all necessary notice and obtain
          all necessary rights, permissions, and consents from customers or users for your access,
          collection, storage, transmission, treatment, use, disclosure, sharing, and other
          processing of any user data, and will ensure that all such processing complies with all
          laws. If you use our APIs to retrieve user data directly from the Services, you must limit
          your access, processing, and use of such information to that (a) authorized by the
          customer or user or (b) necessary for the purposes of providing the functionality of your
          App.
        </p>

        {/* Section 6: Security */}
        <h2 className="text-2xl font-semibold">6. Security.</h2>
        <p>
          <strong>6.1 Developer Credentials.</strong> You will not share any passwords, keys,
          tokens, secret, or other access credentials that allow you to access the APIs or Services
          (<strong>“Developer Credentials”</strong>).
        </p>
        <p>
          <strong>6.2 Security Standards.</strong> You will always use and have in effect
          appropriate administrative, physical, and technical safeguards that (a) meet or exceed
          industry standards with respect to the sensitivity of the data you are accessing; (b) are
          compliant with applicable laws and regulations (including data security and privacy laws
          and regulations), and (c) are designed to prevent unauthorized access, use, processing,
          storage, destruction, loss, alteration, or disclosure of personal data.
        </p>
        <p>
          <strong>6.3 Security Incidents.</strong> You must immediately notify Udemy upon discovery
          or notice of any actual or suspected (a) unauthorized access, use, disclosure,
          modification, loss, or destruction of user data under your control; (b) security
          vulnerabilities of your App; or (c) issues involving your App that materially degrades the
          Services (collectively <strong>“Security Incidents”</strong>).
        </p>
        <p>
          <strong>6.4 Notification.</strong> In the event of a Security Incident, you will be solely
          responsible, at your own expense, for investigation, remediation, and your own
          notifications to affected users and regulatory authorities in accordance with applicable
          laws and industry standards. However, you must obtain our approval for any breach
          notification to users that refer, directly or indirectly, to Udemy.
        </p>

        {/* Section 7: Termination */}
        <h2 className="text-2xl font-semibold">7. Termination.</h2>
        <p>
          <strong>7.1 Right to Terminate.</strong> Udemy may suspend or immediately terminate this
          Agreement, any rights granted herein, and your license to the APIs, in our sole discretion
          at any time, for any reason. You may terminate this Agreement at any time by ceasing your
          access to the APIs.
        </p>
        <p>
          <strong>7.2 License Termination and Deletion of Data.</strong> Upon termination, all
          licenses granted under this Agreement will terminate immediately and you must immediately
          stop using the API. You must also return or delete any user data or comply with customer’s
          instructions to either return or delete user data accessed or obtained through the APIs.
          Neither party will be liable to the other for any damages resulting solely from
          termination of this Agreement.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 8: Disclaimers, Limitations of Liability, and Indemnification */}
        <h2 className="text-2xl font-semibold">
          8. Disclaimers, Limitations of Liability, and Indemnification.
        </h2>

        <p>
          <strong>8.1 Warranty Disclaimer.</strong> TO THE FULL EXTENT PERMITTED BY LAW, UDEMY MAKES
          NO WARRANTIES, EXPRESS OR IMPLIED, GUARANTEES OR CONDITIONS WITH RESPECT TO YOUR USE OF
          THE APIS. YOU UNDERSTAND THAT USE OF THE APIS IS AT YOUR OWN RISK AND THAT WE PROVIDE THE
          APIS ON AN "AS IS" BASIS "WITH ALL FAULTS" AND "AS AVAILABLE" TO THE EXTENT PERMITTED
          UNDER YOUR LOCAL LAW. WE EXCLUDE ANY IMPLIED WARRANTIES, INCLUDING FOR MERCHANTABILITY,
          SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, AND
          NON-INFRINGEMENT. YOU MAY HAVE CERTAIN RIGHTS UNDER YOUR LOCAL LAW. NOTHING IN THIS
          AGREEMENT IS INTENDED TO AFFECT THOSE RIGHTS, IF THEY ARE APPLICABLE. WE DO NOT GUARANTEE
          THE APIS WILL FUNCTION WITHOUT INTERRUPTION OR ERRORS IN FUNCTIONING. IN PARTICULAR, THE
          OPERATION OF THE APIS MAY BE INTERRUPTED DUE TO MAINTENANCE, UPDATES, OR SYSTEM OR NETWORK
          FAILURES. WE DISCLAIM ALL LIABILITY FOR DAMAGES CAUSED BY ANY SUCH INTERRUPTION, ERRORS IN
          FUNCTIONING, OR THAT DATA LOSS WILL NOT OCCUR.
        </p>

        <p>
          <strong>8.2 Limitation of Liability.</strong> IN NO EVENT WILL UDEMY BE LIABLE TO YOU OR
          ANY USERS FOR ANY INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL
          DAMAGES OR ANY LOSS OF OR DAMAGE TO USE, DATA, BUSINESS, GOODWILL, OR PROFITS ARISING OUT
          OF OR IN CONNECTION WITH THIS AGREEMENT. IN ANY CASE, UDEMY’S AGGREGATE LIABILITY FOR ANY
          AND ALL CLAIMS UNDER THIS AGREEMENT WILL NOT EXCEED $100.00 USD. THE FOREGOING
          LIMITATIONS, EXCLUSIONS AND DISCLAIMERS SHALL APPLY REGARDLESS OF WHETHER SUCH LIABILITY
          ARISES FROM ANY CLAIM BASED UPON CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), STRICT
          LIABILITY OR OTHERWISE, AND WHETHER OR NOT UDEMY HAS BEEN ADVISED OF THE POSSIBILITY OF
          SUCH LOSS OR DAMAGE. INSOFAR AS APPLICABLE LAW PROHIBITS ANY LIMITATION ON LIABILITY
          HEREIN, THE PARTIES AGREE THAT SUCH LIMITATION WILL BE AUTOMATICALLY MODIFIED, BUT ONLY TO
          THE EXTENT SO AS TO MAKE THE LIMITATION COMPLIANT WITH APPLICABLE LAW. THE PARTIES AGREE
          THAT THE LIMITATIONS ON LIABILITIES SET FORTH HEREIN ARE AGREED ALLOCATIONS OF RISK AND
          SUCH LIMITATIONS WILL APPLY NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE OF ANY
          LIMITED REMEDY.
        </p>

        <p>
          <strong>8.3 Indemnification.</strong> You shall defend Udemy against any and all actions,
          demands, claims and suits (including without limitation product liability claims), and
          indemnify and hold Udemy harmless from any and all liabilities, damages and costs
          (including without limitation reasonable attorneys’ fees) to the extent arising out of:
          (i) your use of the APIs or Services in any manner that is inconsistent with this
          Agreement or any applicable laws, rules, or regulations; or (ii) the performance,
          promotion, sale or distribution of your App. In the event Udemy seeks indemnification or
          defense from you under this provision, Udemy will promptly notify you in writing of the
          claim(s) brought against Udemy for which it seeks indemnification or defense. Udemy
          reserves the right, at its option and sole discretion, to assume full control of the
          defense of claims with legal counsel of its choice. You may not enter into any third-party
          agreement, which would, in any manner whatsoever, affect the rights of Udemy, constitute
          an admission of fault by Udemy, or bind Udemy in any manner, without the prior written
          consent of Udemy. In the event Udemy assumes control of the defense of such claim, Udemy
          shall not settle any such claim requiring payment from you without your prior written
          approval.
        </p>

        <p>
          <strong>8.4 No Injunctive Relief.</strong> In no event shall you seek or be entitled to
          rescission, injunctive or other equitable relief, or to enjoin or restrain the operation
          of the APIs, content, or other material used or displayed through the Services.
        </p>
      </div>

      <div className="space-y-6 bg-white p-8 text-gray-800">
        {/* Section 9: Confidentiality */}
        <h2 className="text-2xl font-semibold">9. Confidentiality.</h2>
        <p>
          <strong>9.1 Confidential Information.</strong> You may be given access to certain
          non-public information, software, and specifications relating to the APIs (
          <strong>“Confidential Information”</strong>), which is confidential and proprietary to
          Udemy. You may use Confidential Information only as necessary in exercising your rights
          granted under this Agreement. You must not disclose any Confidential Information to any
          third party without Udemy’s prior written consent. You agree that you will protect any
          Confidential Information from unauthorized use, access, or disclosure in the same manner
          that you would use to protect your own confidential and proprietary information.
        </p>

        {/* Section 10: Compliance With Laws */}
        <h2 className="text-2xl font-semibold">10. Compliance With Laws.</h2>
        <p>
          <strong>10.1 Legal Disclosures.</strong> Udemy reserves the right to disclose any
          information as necessary to satisfy any law, regulation, legal process, or governmental
          request.
        </p>
        <p>
          <strong>10.2 Sanctions.</strong> You represent and warrant that you (as an individual or
          as a representative of any entity on whose behalf you use the Services) aren’t located in,
          or a resident of, any country that is subject to applicable U.S. trade sanctions or
          embargoes. You also represent and warrant that you aren’t a person or entity who is named
          on any U.S. government specially designated national or denied-party list. You agree to
          comply with the sanctions programs administered by the Office of Foreign Assets Control
          (OFAC) of the US Department of the Treasury. You also agree not to directly or indirectly
          export, re-export, or transfer the APIs to prohibited countries or individuals nor permit
          use of the APIs by prohibited entities or individuals.
        </p>

        {/* Section 11: General Terms */}
        <h2 className="text-2xl font-semibold">11. General Terms.</h2>
        <p>
          <strong>11.1 Governing Law.</strong> This Agreement is governed by the laws of the State
          of California, USA without reference to its choice or conflicts of law principles. Both
          parties consent to the exclusive jurisdiction and venue of federal and state courts in San
          Francisco, California, USA.
        </p>
        <p>
          <strong>11.2 Language.</strong> Where Udemy has provided you with a translation of the
          English language version of this Agreement or any document referenced in this Agreement,
          you agree that the translation is provided for your convenience only and that the English
          language versions of any such document will control.
        </p>
        <p>
          <strong>11.3 Support.</strong> Because the APIs are provided "as is," we may not provide
          support services for them. You are solely responsible for the quality of your App and are
          solely responsible for providing support for your App. Any support we choose to provide
          will be in our sole discretion and may be discontinued at any time without notice or
          liability to you.
        </p>
        <p>
          <strong>11.4 Severability.</strong> If any part of this Agreement is found to be invalid
          or unenforceable, then that provision will be deemed superseded by a valid, enforceable
          provision that most closely matches the intent of the original provision and the remainder
          of this Agreement shall remain in effect.
        </p>
        <p>
          <strong>11.5 Survival.</strong> Sections of this Agreement that, by their terms, require
          performance after the termination of this Agreement will survive, such as, for example,
          the rights and requirements of section 6 (Security).
        </p>
        <p>
          <strong>11.6 Assignment.</strong> You may not assign or delegate any rights or obligations
          under this Agreement, including in connection with a change of control. Any purported
          assignment and delegation shall be ineffective. We may freely assign or delegate all
          rights and obligations under this Agreement, fully or partially without notice to you.
        </p>
        <p>
          <strong>11.7 No Waiver.</strong> Either party’s failure to act with respect to a breach of
          this Agreement does not waive either party’s right to act with respect to that breach or
          subsequent similar or other breaches.
        </p>
        <p>
          <strong>11.8 Notices.</strong> Notices must be in writing and will be deemed given when
          delivered. Udemy may provide notice to the email or physical address provided by you or
          through Udemy’s website. Your notices to Udemy must be given by registered or certified
          mail to Udemy, Inc., 600 Harrison St., 3rd Floor, San Francisco, CA 94107, USA, Attn:
          Legal Department.
        </p>
        <p>
          <strong>11.9 No Agency.</strong> This Agreement does not create any agency, partnership,
          or joint venture between the parties.
        </p>
        <p>
          <strong>11.10 Entire Agreement.</strong> This Agreement and any documents incorporated by
          reference, constitute the entire agreement between the parties regarding the APIs and
          supersede all prior agreements or understandings, whether written or oral, or whether
          established by custom, practice, policy, or precedent, with respect to the subject matter
          of this Agreement.
        </p>
      </div>
    </>
  );
};

export default ApiAgreement;
