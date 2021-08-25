import React, { useState, useEffect } from "react";
import { Clock, Telephone, GeoAlt, Envelope } from "react-bootstrap-icons";
import Footer from "../components/Footer";
import NavbarInventoolyWebsite from "../components/NavbarInventoolyWebsite";
import "bootstrap/dist/css/bootstrap.min.css";
function TermsOfServices() {
  return (
    <>
      <header>
        <NavbarInventoolyWebsite />
      </header>
      <section id="terms-o-s">
        <div className="container mt-5 justify-content-centre">
          <h1>Terms &amp; Conditions</h1>
          <p>
            These Terms of Service (“Terms”) govern your access to and use of
            the services and Inventooly.com websites (the “Services”), and any
            information, text, graphics, or other materials uploaded,
            downloaded, or appearing on the Services (collectively referred to
            as “Content”). Your access to and use of the Services is conditioned
            on your acceptance of and compliance with these Terms. By accessing
            or using the Services you agree to be bound by these Terms.
          </p>
          <h1>Basic Terms</h1>
          <p>
            You are responsible for your use of the Services, for any data you
            provide to or as a result of the Services, verifying your Amazon,
            inventory &amp; other stats, inputting data or information to the
            Inventooly.com website, and for any consequences thereof. <br />{" "}
            <br />
            You may use the Services only if you can form a binding contract
            with Inventooly.com and are not a person barred from receiving
            services under the laws of the United States or other applicable
            jurisdictions. You may use the Services only in compliance with
            these Terms and all applicable local, state, national, and
            international laws, rules, and regulations. <br />
            <br />
            The Services that Inventooly.com provides are always evolving and
            the form and nature of the Services that Inventooly.com provides may
            change from time to time without prior notice to you. In addition,
            Inventooly.com may stop (permanently or temporarily) providing the
            Services (or any features within the Services) to you or users
            generally and may not be able to provide you with prior notice. We
            also retain the right to create limits on use and storage at our
            sole discretion at any time without prior notice to you. <br />
            <br />
            The Services may include advertisements, which may be targeted to
            the Content or information on the Services, queries made through the
            Services, or other information. The types and extent of advertising
            by Inventooly.com on the Services are subject to change. In
            consideration for Inventooly.com granting you access to and use of
            the Services, you agree that Inventooly.com and its third-party
            providers and partners may place such advertising on the Services or
            in connection with the display of Content or information from the
            Services whether submitted by you or others. <br />
          </p>
          <h1>Privacy </h1>
          <p>
            Any information that you provide to Inventooly.com is subject to our
            Privacy Policy, which governs our collection and use of your
            information. You understand that through your use of the Services
            you consent to the collection and use (as set forth in the Privacy
            Policy) of this information, including the transfer of this
            information to the United States and/or other countries for storage,
            processing, and use by Inventooly.com. As part of providing you the
            Services, we may need to provide you with certain communications,
            such as service announcements and administrative messages. These
            communications are considered part of the Services and your
            Inventooly.com account, which you may not be able to opt out from
            receiving.
          </p>
          <h1>Passwords </h1>
          <p>
            You are responsible for safeguarding the password that you use to
            access the Services and for any activities or actions under your
            password. We encourage you to use “strong” passwords (passwords that
            use a combination of upper and lower case letters, numbers, and
            symbols) with your account. Inventooly.com cannot and will not be
            liable for any loss or damage arising from your failure to comply
            with the above requirements.{" "}
          </p>
          <h1>Your Rights </h1>
          <p>
            You retain your rights to any Data you submit on or through the
            Services. You are responsible for your use of the Services, for any
            Data you provide, and for any consequences thereof. Inventooly.com
            will not be responsible or liable for any use of your Data by
            Inventooly.com in accordance with these Terms.{" "}
          </p>
          <h1>Inventooly.com Rights </h1>
          <p>
            All right, title, and interest in and to the Services are and will
            remain the exclusive property of Inventooly.com and its licensors.
            The Services are protected by copyright, trademark, and other laws
            of both the United States and foreign countries. Nothing in the
            Terms gives you a right to use the Inventooly.com name or any of the
            Inventooly.com trademarks, logos, domain names, and other
            distinctive brand features. Any feedback, comments, or suggestions
            you may provide regarding Inventooly.com, or the Services is
            entirely voluntary and we will be free to use such feedback,
            comments, or suggestions as we see fit and without any obligation to
            you. Inventooly reserves the right to remove any user, or account
            for any reason. <br />
            <br />
            Inventooly reserves the right to remove any user who does not abide
            by the Inventooly TOS, guidelines, or other standards listed on
            Inventooly.com.{" "}
          </p>
          <h1>API Clients &amp; Data Use </h1>
          <p>
            Inventooly leverages multiple APIs including Amazon.com &amp;
            Amazon.co.uk to gather &amp; utilize the information for this
            Service. The information will be refreshed daily to ensure no data
            is stored on our servers.{" "}
          </p>
          <h1>Payment, Refunds, Upgrading, &amp; Downgrading Terms </h1>
          <p></p>
          <ol>
            <li>
              The Service is billed in advance monthly or annually and is
              non-refundable. There will be no refunds or credits for partial
              months of service, upgrade/downgrade refunds, or refunds for
              months unused with an open account. In order to treat everyone
              equally, no exceptions will be made.{" "}
            </li>
            <li>
              All fees are exclusive of all taxes, levies, or duties imposed by
              taxing authorities, and you shall be responsible for payment of
              all such taxes, levies, or duties, excluding only United States
              (federal or state) taxes{" "}
            </li>
            <li>
              For any upgrade or downgrade in plan level, the credit card that
              you provided will automatically be charged the new rate on your
              next billing cycle. If you downgrade a credit will be provided to
              your account and applied exclusively to your future subscription
              costs. Downgrades only provide credits for subscription costs and
              the funds will not be refunded to the user’s credit card.{" "}
            </li>
            <li>
              Downgrading your Service may cause the loss of Data, features, or
              capacity of your Account. Inventooly does not accept any liability
              for such loss.{" "}
            </li>
          </ol>
          <p />
          <h1>Cancellation &amp; Termination </h1>
          <p></p>
          <ol>
            <li>
              Users are solely responsible for properly canceling their
              account(s). Contacting support (sending an email) via the help
              &amp; tutorial section, the contact us icon, or the help button in
              the lower right corner when logged in is the proper way to cancel
              your subscription.  Be sure to use the email subject line cancel
              account and state the owner email associated with the account you
              want to be canceled to ensure the proper account is closed.  At
              that time, a support representative will reply to you within 24-48
              hours to confirm your cancelation. If there are any follow-up
              questions from the support representative be sure to reply to the
              support representative ensuring your account is properly closed
              and your data is protected.{" "}
            </li>
            <li>
              All or part of your Data may be deleted from the Service upon
              cancellation. Any information deleted cannot be recovered once
              your account is canceled.{" "}
            </li>
            <li>
              Inventooly, in its sole discretion, has the right to suspend or
              terminate your account and refuse any and all current or future
              use of the Service, or any other Inventooly service, for any
              reason at any time. Such termination of the Service will result in
              the deactivation or deletion of your Account or your access to
              your Account, and the forfeiture and relinquishment of all Data in
              your Account. Inventooly reserves the right to refuse service to
              anyone for any reason at any time.{" "}
            </li>
          </ol>
          <p />
          <h1>Modifications To The Service &amp; Prices </h1>
          <p></p>
          <ol>
            <li>
              Users are solely responsible for properly canceling their
              accounts. An email or phone request to cancel your account is not
              considered cancellation. Users can close their account at any time
              using the link on the Update Subscriptions page under the Billing
              &amp; Subscriptions tab. If you cancel the Service before the end
              of your current paid-up month, your cancellation will take effect
              immediately and you will not be charged again.{" "}
            </li>
            <li>
              All or part of your Data may be deleted from the Service upon
              cancellation. Any information deleted cannot be recovered once
              your account is canceled.{" "}
            </li>
            <li>
              Inventooly, in its sole discretion, has the right to suspend or
              terminate your account and refuse any and all current or future
              use of the Service, or any other Inventooly service, for any
              reason at any time. Such termination of the Service will result in
              the deactivation or deletion of your Account or your access to
              your Account, and the forfeiture and relinquishment of all Data in
              your Account. Inventooly reserves the right to refuse service to
              anyone for any reason at any time.{" "}
            </li>
          </ol>
          <p />
          <h1>Restrictions on Content and Use of the Services </h1>
          <p>
            We reserve the right at all times (but will not have an obligation)
            to remove or refuse any Data and to terminate users or reclaim
            usernames on the Services. We also reserve the right to access,
            read, preserve, and disclose any information as we reasonably
            believe is necessary to (i) satisfy any applicable law, regulation,
            legal process or governmental request, (ii) enforce the Terms,
            including investigation of potential violations hereof, (iii)
            detect, prevent, or otherwise address fraud, security or technical
            issues, (iv) respond to user support requests, or (v) protect the
            rights, property or safety of Inventooly.com, its users and the
            public. <br />
            <br />
            You may not do any of the following while accessing or using the
            Services: (i) access, tamper with, or use non-public areas of the
            Services, Inventooly.com’s computer systems, or the technical
            delivery systems of Inventooly.com’s providers; (ii) probe, scan, or
            test the vulnerability of any system or network or breach or
            circumvent any security or authentication measures; (iii) access or
            search or attempt to access or search the Services by any means
            (automated or otherwise) other than through our currently available,
            published interfaces that are provided by Inventooly.com (and only
            pursuant to those terms and conditions), unless you have been
            specifically allowed to do so in a separate agreement with
            Inventooly.com (NOTE: crawling the Services is permissible if done
            in accordance with the provisions of the robots.txt file, however,
            scraping the Services without the prior consent of Inventooly.com is
            expressly prohibited); (iv) forge any TCP/IP packet header or any
            part of the header information in any email or posting, or in any
            way use the Services to send altered, deceptive or false
            source-identifying information; or (v) interfere with, or disrupt,
            (or attempt to do so), the access of any user, host or network,
            including, without limitation, sending a virus, overloading,
            flooding, spamming, mail-bombing the Services, or by scripting the
            creation of Data in such a manner as to interfere with or create an
            undue burden on the Services.{" "}
          </p>
          <h1>Copyright Policy </h1>
          <p>
            Inventooly.com respects the intellectual property rights of others
            and expects users of the Services to do the same. We will respond to
            notices of alleged copyright infringement that comply with
            applicable law and are properly provided to us. If you believe that
            your Data has been copied in a way that constitutes copyright
            infringement, please provide us with the following information: (i)
            a physical or electronic signature of the copyright owner or a
            person authorized to act on their behalf; (ii) identification of the
            copyrighted work claimed to have been infringed; (iii)
            identification of the material that is claimed to be infringing or
            to be the subject of infringing activity and that is to be removed
            or access to which is to be disabled, and information reasonably
            sufficient to permit us to locate the material; (iv) your contact
            information, including your address, telephone number, and an email
            address; (v) a statement by you that you have a good faith belief
            that use of the material in the manner complained of is not
            authorized by the copyright owner, its agent, or the law; and (vi) a
            statement that the information in the notification is accurate, and,
            under penalty of perjury, that you are authorized to act on behalf
            of the copyright owner. <br />
            <br />
            We reserve the right to remove Data alleged to be infringing without
            prior notice and at our sole discretion. In appropriate
            circumstances, Inventooly.com will also terminate a user’s account
            if the user is determined to be a repeat infringer. Our designated
            copyright agent for notice of alleged copyright infringement
            appearing on the Services is:
          </p>
          <ul>
            <li>Inventooly LLC </li>
            <li>490 Wheeler Road </li>
            <li>Suite#220 </li>
            <li>Hauppauge New York 11788 </li>
          </ul>
          <h1>DMCA Notice and Procedure for Copyright Infringement Claims </h1>
          <p>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our Copyright Agent with the
            following information in writing (see 17 U.S.C 512(c)(3) for further
            detail):
          </p>
          <ul>
            <li>
              an electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright’s interest;{" "}
            </li>
            <li>
              a description of the copyrighted work that you claim has been
              infringed, including the URL (i.e., web page address) of the
              location where the copyrighted work exists or a copy of the
              copyrighted work;{" "}
            </li>
            <li>
              identification of the URL or other specific location on the
              Service where the material that you claim is infringing is
              located;{" "}
            </li>
            <li>your address, telephone number, and email address; </li>
            <li>
              a statement by you that you have a good-faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law;{" "}
            </li>
            <li>
              a statement by you, made under penalty of perjury, that the above
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner’s
              behalf.
            </li>
          </ul>
          <h1>The Services are Available “AS-IS” </h1>
          <p>
            Your access to and use of the Services or any Data is at your own
            risk. You understand and agree that the Services is provided to you
            on an “AS IS” and “AS AVAILABLE” basis. Without limiting the
            foregoing, INVENTOOLY.COM AND ITS PARTNERS DISCLAIM ANY WARRANTIES,
            EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, OR NON-INFRINGEMENT. We make no warranty and disclaim all
            responsibility and liability for the completeness, accuracy,
            availability, timeliness, security or reliability of the Services or
            any data thereon. Inventooly.com will not be responsible or liable
            for any harm to your computer system, loss of data, or other harm
            that results from your access to or use of the Services, or any
            Data. You also agree that Inventooly.com has no responsibility or
            liability for the deletion of, or the failure to store or to
            transmit, any Data and other communications maintained by the
            Services. We make no warranty that the Services will meet your
            requirements or be available on an uninterrupted, secure, or
            error-free basis. No advice or information, whether oral or written,
            obtained from Inventooly.com or through the Services, will create
            any warranty not expressly made herein.{" "}
          </p>
          <h1>Links </h1>
          <p>
            The Services may contain links to third-party websites or resources.
            You acknowledge and agree that we are not responsible or liable for:
            (i) the availability or accuracy of such websites or resources; or
            (ii) the content, products, or services on or available from such
            websites or resources. Links to such websites or resources do not
            imply any endorsement by Inventooly.com of such websites or
            resources or the content, products, or services available from such
            websites or resources. You acknowledge sole responsibility for and
            assume all risk arising from your use of any such websites or
            resources.{" "}
          </p>
          <h1>Limitation of Liability </h1>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INVENTOOLY.COM
            AND ITS SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS,
            PARTNERS AND LICENSORS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING
            WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOOD-WILL, OR OTHER
            INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR
            INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT
            OF ANY THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION,
            ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD
            PARTIES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; AND (iv)
            UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR
            CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
            NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT INVENTOOLY.COM
            HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A
            REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL
            PURPOSE.{" "}
          </p>
          <h1>Exclusions </h1>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties
            or the exclusion or limitation of liability for consequential or
            incidental damages, so the limitations above may not apply to you.{" "}
          </p>
          <h1>Waiver and Severability </h1>
          <p>
            The failure of Inventooly.com to enforce any right or provision of
            these Terms will not be deemed a waiver of such right or provision.
            In the event that any provision of these Terms is held to be invalid
            or unenforceable, the remaining provisions of these Terms will
            remain in full force and effect.{" "}
          </p>
          <h1>Controlling Law and Jurisdiction </h1>
          <p>
            These Terms and any action related thereto will be governed by the
            laws of the State of Minnesota without regard to or application of
            its conflict of law provisions or your state or country of
            residence. All claims, legal proceedings or litigation arising in
            connection with the Services will be brought solely in Hennepin
            County, Minnesota, and you consent to the jurisdiction of and venue
            in such courts and waive any objection as to inconvenient forum. If
            you are accepting these Terms on behalf of a United States federal
            government entity that is legally unable to accept the controlling
            law, jurisdiction or venue clauses above, then those clauses do not
            apply to you but instead these Terms and any action related thereto
            will be will be governed by the laws of the United States of America
            (without reference to conflict of laws) and, in the absence of
            federal law and to the extent permitted under federal law, the laws
            of the State of Minnesota (excluding choice of law).{" "}
          </p>
          <h1>Entire Agreement </h1>
          <p>
            These Terms, the Inventooly.com Rules and our Privacy Policy are the
            entire and exclusive agreement between Inventooly.com and you
            regarding the Services (excluding any services for which you have a
            separate agreement with Inventooly.com that is explicitly in
            addition or in place of these Terms), and these Terms supersede and
            replace any prior agreements between Inventooly.com and you
            regarding the Services. <br />
            <br />
            We may revise these Terms from time to time, the most current
            version will always be in the footer of Inventooly.com. If the
            revision, in our sole discretion, is material we will notify you via
            an @Inventooly.com update or e-mail to the email associated with
            your account. By continuing to access or use the Services after
            those revisions become effective, you agree to be bound by the
            revised Terms.
            <br />
            <br />
            These Services are operated and provided by Inventooly 490 Wheeler
            Road Suite#220, Hauppauge New York 11788. If you have any questions
            about these Terms, please contact us. <br />
            <br />
            <i>
              {" "}
              Effective: 1<sup>st</sup> January 2021
            </i>
          </p>
        </div>
      </section>
      <section
        id="Contact"
        style={{
          background: "#fff",
          padding: "60px 0px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              color: "#072371",
              fontSize: "48px",
              fontWeight: 700,
            }}
          >
            Contact Us
          </p>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div
                    className="info-box"
                    style={{
                      color: "#444444",
                      background: "#fafbff",
                      padding: "20px",
                      textAlign: "left",
                    }}
                  >
                    <GeoAlt
                      style={{
                        color: "#4154f1",
                        lineHeight: "0px",
                        fontSize: "38px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#012970",
                        fontWeight: "700",
                        margin: "20px 0 10px 0",
                      }}
                    >
                      Address
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#57646b",
                      }}
                    >
                      490 Wheeler Road Suite#220, <br />
                      Hauppauge New York, NY 535022 US.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className=" info-box"
                    style={{
                      color: "#444444",
                      background: "#fafbff",
                      padding: "20px",
                      textAlign: "left",
                    }}
                  >
                    <Telephone
                      style={{
                        color: "#4154f1",
                        lineHeight: "0px",
                        fontSize: "38px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#012970",
                        fontWeight: "700",
                        margin: "20px 0 10px 0",
                      }}
                    >
                      Call Us
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#57646b",
                      }}
                    >
                      {" "}
                      +1 631-993-8899
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{ marginTop: "20px" }}>
                  <div
                    className=" info-box"
                    style={{
                      color: "#444444",
                      background: "#fafbff",
                      padding: "20px",
                      textAlign: "left",
                    }}
                  >
                    <Envelope
                      style={{
                        color: "#4154f1",
                        lineHeight: "0px",
                        fontSize: "38px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#012970",
                        fontWeight: "700",
                        margin: "20px 0 10px 0",
                      }}
                    >
                      Email
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#57646b",
                      }}
                    >
                      support@inventooly.com
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{ marginTop: "20px" }}>
                  <div
                    className=" info-box"
                    style={{
                      color: "#444444",
                      background: "#fafbff",
                      padding: "20px",
                      textAlign: "left",
                    }}
                  >
                    <Clock
                      className="bi bi-envelope"
                      style={{
                        color: "#4154f1",
                        lineHeight: "0px",
                        fontSize: "38px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "20px",
                        color: "#012970",
                        fontWeight: "700",
                        margin: "20px 0 10px 0",
                      }}
                    >
                      Open Hours
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#57646b",
                      }}
                    >
                      Monday - Friday <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 contact"
              style={{
                background: "rgb(250, 251, 255)",
                color: "#444444",
                padding: "30px",
              }}
            >
              <form action method="POST" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-12" style={{ marginTop: "20px" }}>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-md-12" style={{ marginTop: "20px" }}>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        height: "163px",
                      }}
                      defaultValue={""}
                    />
                  </div>
                  <div
                    className="col-md-12 text-center"
                    style={{ marginTop: "20px" }}
                  >
                    <button
                      type="submit"
                      style={{
                        background: "#4154f1",
                        border: "0",
                        padding: "10px 30px",
                        color: "#fff",
                        transition: "0.4s",
                        borderRadius: "4px",
                      }}
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TermsOfServices;
