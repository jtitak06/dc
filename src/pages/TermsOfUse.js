import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import "./TermsOfUse.css";

export default function TermsOfUse() {
    return (
      <>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <h1 className="terms-title">Terms of Use Agreement</h1>
        <div className="terms-page">
          <div className="privacy-policy-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="terms-content">
            <p className="terms-paragraph">
              This Terms of Use Agreement (“Agreement”) constitutes a legally
              binding agreement made between you, whether personally or on
              behalf of an entity (“user” or “you”) and DriveChicago.com and its
              affiliated companies (collectively, “Company” or “we” or “us” or
              “our”), concerning your access to and use of the
              https://www.drivechicago.com website as well as any other media
              form, media channel, mobile website or mobile application related
              or connected thereto (collectively, the “Website”). The Website
              provides the following service: Provide information on passenger
              vehicles for sale in the Chicago, Illinois, area. Provide
              information for the purposes of research on vehicles. (“Company
              Services”). Supplemental terms and conditions or documents that
              may be posted on the Website from time to time, are hereby
              expressly incorporated into this Agreement by reference.
            </p>
            <p className="terms-paragraph">
              {" "}
              Company makes no representation that the Website is appropriate or
              available in other locations other than where it is operated by
              Company. The information provided on the Website is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject Company to
              any registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Website from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
            <p className="terms-paragraph">
              All users who are minors in the jurisdiction in which they reside
              (generally under the age of 18) must have the permission of, and
              be directly supervised by, their parent or guardian to use the
              Website. If you are a minor, you must have your parent or guardian
              read and agree to this Agreement prior to you using the Website.
              Persons under the age of 13 are not permitted to register for the
              Website or use the Company Services.
            </p>
            <p className="terms-paragraph">
              YOU ACCEPT AND AGREE TO BE BOUND BY THIS AGREEMENT BY
              ACKNOWLEDGING SUCH ACCEPTANCE DURING THE REGISTRATION PROCESS (IF
              APPLICABLE) AND ALSO BY CONTINUING TO USE THE WEBSITE. IF YOU DO
              NOT AGREE TO ABIDE BY THIS AGREEMENT, OR TO MODIFICATIONS THAT
              COMPANY MAY MAKE TO THIS AGREEMENT IN THE FUTURE, DO NOT USE OR
              ACCESS OR CONTINUE TO USE OR ACCESS THE COMPANY SERVICES OR THE
              WEBSITE.
            </p>
            <h3 className="terms-section-title">User Representations</h3>
            <h5 className="terms-section-subtitle">
              Regarding Your Registration
            </h5>
            <p className="terms-paragraph">
              By using the Company Services, you represent and warrant that:{" "}
            </p>
            <p className="terms-paragraph">
              A. all registration information you submit is truthful and
              accurate;
            </p>
            <p className="terms-paragraph">
              B. you will maintain the accuracy of such information;
            </p>
            <p className="terms-paragraph">
              C. you will keep your password confidential and will be
              responsible for all use of your password and account;
            </p>
            <p className="terms-paragraph">
              D. you are not a minor in the jurisdiction in which you reside, or
              if a minor, you have received parental permission to use this
              Website; and
            </p>
            <p className="terms-paragraph">
              E. your use of the Company Services does not violate any
              applicable law or regulation.
            </p>
            <p className="terms-paragraph">
              You also agree to: (a) provide true, accurate, current and
              complete information about yourself as prompted by the Website’s
              registration form and (b) maintain and promptly update
              registration data to keep it true, accurate, current and complete.
              If you provide any information that is untrue, inaccurate, not
              current or incomplete, or Company has reasonable grounds to
              suspect that such information is untrue, inaccurate, not current
              or incomplete, Company has the right to suspend or terminate your
              account and refuse any and all current or future use of the
              Website (or any portion thereof).
            </p>
            <p className="terms-paragraph">
              We reserve the right to remove or reclaim or change a user name
              you select if we determine appropriate in our discretion, such as
              when the user name is obscene or otherwise objectionable or when a
              trademark owner complains about a username that does not closely
              relate to a user's actual name.
            </p>
            <h3 className="terms-section-title">Submissions</h3>
            <p className="terms-paragraph">
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback or other information about the
              Website or the Company Services ("Submissions") provided by you to
              Company are non-confidential and Company (as well as any designee
              of Company) shall be entitled to the unrestricted use and
              dissemination of these Submissions for any purpose, commercial or
              otherwise, without acknowledgment or compensation to you.
            </p>
            <h5 className="terms-section-subtitle">Prohibited Activites</h5>
            <p className="terms-paragraph">
              You may not access or use the Website for any other purpose other
              than that for which Company makes it available. The Website may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by Company.
              Prohibited activity includes, but is not limited to:
            </p>
            <p className="terms-paragraph">
              A. attempting to bypass any measures of the Website designed to
              prevent or restrict access to the Website, or any portion of the
              Website
            </p>
            <p className="terms-paragraph">
              B. attempting to impersonate another user or person or using the
              username of another user
            </p>
            <p className="terms-paragraph">C. criminal or tortious activity</p>
            <p className="terms-paragraph">
              D. deciphering, decompiling, disassembling or reverse engineering
              any of the software comprising or in any way making up a part of
              the Website
            </p>
            <p className="terms-paragraph">
              E. deleting the copyright or other proprietary rights notice from
              any Website content
            </p>
            <p className="terms-paragraph">
              F. engaging in any automated use of the system, such as using any
              data mining, robots or similar data gathering and extraction tools
            </p>
            <p className="terms-paragraph">
              G. except as may be the result of standard search engine or
              Internet browser usage, using or launching, developing or
              distributing any automated system, including, without limitation,
              any spider, robot (or "bot"), cheat utility, scraper or offline
              reader that accesses the Website, or using or launching any
              unauthorized script or other software
            </p>
            <p className="terms-paragraph">
              H. interfering with, disrupting, or creating an undue burden on
              the Website or the networks or services connected to the Website
            </p>
            <p className="terms-paragraph">
              I. making any unauthorized use of the Company Services, including
              collecting usernames and/or email addresses of users by electronic
              or other means for the purpose of sending unsolicited email, or
              creating user accounts by automated means or under false pretenses
            </p>
            <p className="terms-paragraph">
              J. systematic retrieval of data or other content from the Website
              to create or compile, directly or indirectly, a collection,
              compilation, database or directory without written permission from
              Company
            </p>
            <p className="terms-paragraph">
              K. using the Website in a manner inconsistent with any and all
              applicable laws and regulations{" "}
            </p>
            <h5 className="terms-section-subtitle">
              Intellectual Property Rights
            </h5>
            <p className="terms-paragraph">
              The content on the Website (“Company Content”) and the trademarks,
              service marks and logos contained therein (“Marks”) are owned by
              or licensed to Company, and are subject to copyright and other
              intellectual property rights under United States and foreign laws
              and international conventions. Company Content, includes, without
              limitation, all source code, databases, functionality, software,
              website designs, audio, video, text, photographs and graphics. All
              Company graphics, logos, designs, page headers, button icons,
              scripts and service names are registered trademarks, common law
              trademarks or trade dress of Company in the United States and/or
              other countries. Company's trademarks and trade dress may not be
              used, including as part of trademarks and/or as part of domain
              names, in connection with any product or service in any manner
              that is likely to cause confusion and may not be copied, imitated,
              or used, in whole or in part, without the prior written permission
              of the Company.
            </p>
            <p className="terms-paragraph">
              Company Content on the Website is provided to you “AS IS” for your
              information and personal use only and may not be used, copied,
              reproduced, aggregated, distributed, transmitted, broadcast,
              displayed, sold, licensed, or otherwise exploited for any other
              purposes whatsoever without the prior written consent of the
              respective owners. Provided that you are eligible to use the
              Website, you are granted a limited license to access and use the
              Website and the Company Content and to download or print a copy of
              any portion of the Company Content to which you have properly
              gained access solely for your personal, non-commercial use.
              Company reserves all rights not expressly granted to you in and to
              the Website and Company Content and Marks.
            </p>
            <h5 className="terms-section-subtitle">
              Third Party Websites and Content
            </h5>
            <p className="terms-paragraph">
              DriveChicago.com utilizes Google Maps API(s). Users of
              DriveChicago.com are also bound by{" "}
              <Link
                className="terms-link"
                to="https://policies.google.com/terms?hl=en"
              >
                Google’s Terms of Service
              </Link>{" "}
              and subject to the{" "}
              <Link
                className="terms-link"
                to="https://policies.google.com/privacy"
              >
                Google Privacy Policy
              </Link>
              .
            </p>
            <p className="terms-paragraph">
              The Website contains (or you may be sent through the Website or
              the Company Services) links to other websites ("Third Party
              Websites") as well as articles, photographs, text, graphics,
              pictures, designs, music, sound, video, information, applications,
              software and other content or items belonging to or originating
              from third parties (the "Third Party Content"). Such Third Party
              Websites and Third Party Content are not investigated, monitored
              or checked for accuracy, appropriateness, or completeness by us,
              and we are not responsible for any Third Party Websites accessed
              through the Website or any Third Party Content posted on,
              available through or installed from the Website, including the
              content, accuracy, offensiveness, opinions, reliability, privacy
              practices or other policies of or contained in the Third Party
              Websites or the Third Party Content. Inclusion of, linking to or
              permitting the use or installation of any Third Party Website or
              any Third Party Content does not imply approval or endorsement
              thereof by us. If you decide to leave the Website and access the
              Third Party Websites or to use or install any Third Party Content,
              you do so at your own risk and you should be aware that our terms
              and policies no longer govern. You should review the applicable
              terms and policies, including privacy and data gathering
              practices, of any website to which you navigate from the Website
              or relating to any applications you use or install from the
              Website. Any purchases you make through Third Party Websites will
              be through other websites and from other companies, and Company
              takes no responsibility whatsoever in relation to such purchases
              which are exclusively between you and the applicable third party.
            </p>
            <h5 className="terms-section-subtitle">Site Management</h5>
            <p className="terms-paragraph">
              Company reserves the right but does not have the obligation to:
            </p>
            <p className="terms-paragraph">
              A. monitor the Website for violations of this Agreement;
            </p>
            <p className="terms-paragraph">
              B. take appropriate legal action against anyone who, in Company’s
              sole discretion, violates this Agreement, including without
              limitation, reporting such user to law enforcement authorities;
            </p>
            <p className="terms-paragraph">
              C. in Company’s sole discretion and without limitation, refuse,
              restrict access to or availability of, or disable (to the extent
              technologically feasible) any user’s contribution or any portion
              thereof that may violate this Agreement or any Company policy;
            </p>
            <p className="terms-paragraph">
              D. in Company’s sole discretion and without limitation, notice or
              liability to remove from the Website or otherwise disable all
              files and content that are excessive in size or are in any way
              burdensome to Company’s systems;
            </p>
            <p className="terms-paragraph">
              E. otherwise manage the Website in a manner designed to protect
              the rights and property of Company and others and to facilitate
              the proper functioning of the Website.
            </p>
            <h5 className="terms-section-subtitle">Privacy Policy</h5>
            <p className="terms-paragraph">
              We care about the privacy of our users. Please review the Company
              Privacy Policy. By using the Website or Company Services, you are
              consenting to have your personal data transferred to and processed
              in the United States. By using the Website or the Company
              Services, you are consenting to the terms of our Privacy Policy.
            </p>
            <h5 className="terms-section-subtitle">Term and Termination</h5>
            <p className="terms-paragraph">
              This Agreement shall remain in full force and effect while you use
              the Website or are otherwise a user or member of the Website, as
              applicable. You may terminate your use or participation at any
              time, for any reason, by following the instructions for
              terminating user accounts in your account settings, if available,
              or by contacting us using the contact information below.
            </p>
            <p className="terms-paragraph">
              WITHOUT LIMITING ANY OTHER PROVISION OF THIS AGREEMENT, COMPANY
              RESERVES THE RIGHT TO, IN COMPANY’S SOLE DISCRETION AND WITHOUT
              NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE WEBSITE AND THE
              COMPANY SERVICES, TO ANY PERSON FOR ANY REASON OR FOR NO REASON AT
              ALL, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
              REPRESENTATION, WARRANTY OR COVENANT CONTAINED IN THIS AGREEMENT,
              OR OF ANY APPLICABLE LAW OR REGULATION, AND COMPANY MAY TERMINATE
              YOUR USE OR PARTICIPATION IN THE WEBSITE AND THE COMPANY SERVICES,
              DELETE YOUR PROFILE AND ANY CONTENT OR INFORMATION THAT YOU HAVE
              POSTED AT ANY TIME, WITHOUT WARNING, IN COMPANY’S SOLE DISCRETION.
            </p>
            <p className="terms-paragraph">
              In order to protect the integrity of the Website and Company
              Services, Company reserves the right at any time in its sole
              discretion to block certain IP addresses from accessing the
              Website and Company Services.
            </p>
            <p className="terms-paragraph">
              Any provisions of this Agreement that, in order to fulfill the
              purposes of such provisions, need to survive the termination or
              expiration of this Agreement, shall be deemed to survive for as
              long as necessary to fulfill such purposes.
            </p>
            <p className="terms-paragraph">
              YOU UNDERSTAND THAT CERTAIN STATES ALLOW YOU TO CANCEL THIS
              AGREEMENT, WITHOUT ANY PENALTY OR OBLIGATION, AT ANY TIME PRIOR TO
              MIDNIGHT OF COMPANY’S THIRD BUSINESS DAY FOLLOWING THE DATE OF
              THIS AGREEMENT, EXCLUDING SUNDAYS AND HOLIDAYS. TO CANCEL, CALL A
              COMPANY CUSTOMER CARE REPRESENTATIVE DURING NORMAL BUSINESS HOURS
              USING THE CONTACT INFORMATION LISTING BELOW IN THIS AGREEMENT OR
              BY ACCESSING YOUR ACCOUNT SETTINGS. THIS SECTION APPLIES ONLY TO
              INDIVIDUALS RESIDING IN STATES WITH SUCH LAWS.
            </p>
            <p className="terms-paragraph">
              If Company terminates or suspends your account for any reason, you
              are prohibited from registering and creating a new account under
              your name, a fake or borrowed name, or the name of any third
              party, even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, Company
              reserves the right to take appropriate legal action, including
              without limitation pursuing civil, criminal, and injunctive
              redress.
            </p>
            <h5 className="terms-section-subtitle">Modifications</h5>
            <p className="terms-paragraph italic">To Agreement</p>
            <p className="terms-paragraph">
              Company may modify this Agreement from time to time. Any and all
              changes to this Agreement will be posted on the Website and
              revisions will be indicated by date. You agree to be bound to any
              changes to this Agreement when you use the Company Services after
              any such modification becomes effective. Company may also, in its
              discretion, choose to alert all users with whom it maintains email
              information of such modifications by means of an email to their
              most recently provided email address. It is therefore important
              that you regularly review this Agreement and keep your contact
              information current in your account settings to ensure you are
              informed of changes. You agree that you will periodically check
              the Website for updates to this Agreement and you will read the
              messages we send you to inform you of any changes. Modifications
              to this Agreement shall be effective after posting.
            </p>
            <p className="terms-paragraph italic">To Services</p>
            <p className="terms-paragraph">
              Company reserves the right at any time to modify or discontinue,
              temporarily or permanently, the Company Services (or any part
              thereof) with or without notice. You agree that Company shall not
              be liable to you or to any third party for any modification,
              suspension or discontinuance of the Company Services.
            </p>
            <h5 className="terms-section-subtitle">Disputes</h5>
            <p className="terms-paragraph italic">Between Users</p>
            <p className="terms-paragraph">
              If there is a dispute between users of the Website, or between
              users and any third party, you understand and agree that Company
              is under no obligation to become involved. In the event that you
              have a dispute with one or more other users, you hereby release
              Company, its officers, employees, agents and successors in rights
              from claims, demands and damages (actual and consequential) of
              every kind or nature, known or unknown, suspected and unsuspected,
              disclosed and undisclosed, arising out of or in any way related to
              such disputes and/or the Company Services.
            </p>
            <p className="terms-paragraph italic">With Company</p>
            <p className="terms-paragraph">
              All questions of law, rights, and remedies regarding any act,
              event or occurrence undertaken pursuant or relating to this
              Website or the Company Services shall be governed and construed by
              the laws of the State of Illinois, excluding such state’s
              conflicts of law rules. Any legal action of whatever nature by or
              against Company arising out of or related in any respect to this
              Website and the Company Services shall be brought solely in either
              the applicable federal or state courts located in or with
              jurisdiction over Cook County, State of Illinois; subject,
              however, to the right of Company, at the Company's sole
              discretion, to bring an action to seek injunctive relief to
              enforce this Agreement or to stop or prevent an infringement of
              proprietary or other third party rights (or any similar cause of
              action) in any applicable court in any jurisdiction where
              jurisdiction exists with regard to a user. You hereby consent to
              (and waive any challenge or objection to) personal jurisdiction
              and venue in the above-referenced courts. Application of the
              United Nations Convention on Contracts for the International Sale
              of Goods is excluded from this Agreement. Additionally,
              application of the Uniform Computer Information Transaction Act
              (UCITA) is excluded from this Agreement. In no event shall any
              claim, action or proceeding by you related in any way to the
              Website and/or the Company Services (including your visit to or
              use of the Website and/or the Company Services) be instituted more
              than two (2) years after the cause of action arose. You will be
              liable for any attorneys' fees and costs if we have to take any
              legal action to enforce this Agreement.
            </p>
            <h5 className="terms-section-subtitle">Corrections</h5>
            <p className="terms-paragraph">
              Occasionally there may be information on the Website that contains
              typographical errors, inaccuracies or omissions that may relate to
              service descriptions, pricing, availability, and various other
              information. Company reserves the right to correct any errors,
              inaccuracies or omissions and to change or update the information
              at any time, without prior notice.
            </p>
            <h5 className="terms-section-subtitle">Disclaimers</h5>
            <p className="terms-paragraph">
              Company cannot control the nature of all of the content available
              on the Website. By operating the Website, Company does not
              represent or imply that Company endorses any blogs, contributions
              or other content available on or linked to by the Website,
              including without limitation content hosted on third party
              websites or provided by third party applications, or that Company
              believes contributions, blogs or other content to be accurate,
              useful or non-harmful. We do not control and are not responsible
              for unlawful or otherwise objectionable content you may encounter
              on the Website or in connection with any contributions. The
              Company is not responsible for the conduct, whether online or
              offline, of any user of the Website or Company Services.
            </p>
            <p className="terms-paragraph">
              YOU AGREE THAT YOUR USE OF THE WEBSITE AND COMPANY SERVICES WILL
              BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
              COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM
              ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE
              AND THE COMPANY SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
              LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE AND NON-INFRINGEMENT. COMPANY MAKES NO
              WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS
              OF THE WEBSITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO
              THIS WEBSITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY
              (A) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE, (C) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (D) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE WEBSITE OR COMPANY SERVICES, (E) ANY BUGS, VIRUSES,
              TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH
              THE WEBSITE BY ANY THIRD PARTY, AND/OR (F) ANY ERRORS OR OMISSIONS
              IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
              INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
              TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE. COMPANY
              DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
              ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
              THROUGH THE WEBSITE OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY
              BANNER OR OTHER ADVERTISING, AND COMPANY WILL NOT BE A PARTY TO OR
              IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
              YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            </p>
            <h5 className="terms-section-subtitle">Limitations of Liability</h5>
            <p className="terms-paragraph">
              IN NO EVENT SHALL COMPANY OR ITS DIRECTORS, EMPLOYEES, OR AGENTS
              BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES,
              INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA OR OTHER DAMAGES
              ARISING FROM YOUR USE OF THE WEBSITE OR COMPANY SERVICES, EVEN IF
              COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN,
              COMPANY’S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
              OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
              AMOUNT PAID, IF ANY, BY YOU TO COMPANY FOR THE COMPANY SERVICES
              DURING THE PERIOD OF THREE (3) MONTHS PRIOR TO ANY CAUSE OF ACTION
              ARISING.
            </p>
            <p className="terms-paragraph">
              CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES
              OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS
              APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS
              MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
            </p>
            <p className="terms-paragraph">
              IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE
              SECTION 1542, WHICH SAYS: "A GENERAL RELEASE DOES NOT EXTEND TO
              CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS
              FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM
              MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR."
            </p>
            <h5 className="terms-section-subtitle">Indemnity</h5>
            <p className="terms-paragraph">
              You agree to defend, indemnify and hold Company, its subsidiaries,
              and affiliates, and their respective officers, agents, partners
              and employees, harmless from and against, any loss, damage,
              liability, claim, or demand, including reasonable attorneys’ fees
              and expenses, made by any third party due to or arising out of
              your contributed content, use of the Company Services, and/or
              arising from a breach of this Agreement and/or any breach of your
              representations and warranties set forth above. Notwithstanding
              the foregoing, Company reserves the right, at your expense, to
              assume the exclusive defense and control of any matter for which
              you are required to indemnify Company, and you agree to cooperate,
              at your expense, with Company’s defense of such claims. Company
              will use reasonable efforts to notify you of any such claim,
              action, or proceeding which is subject to this indemnification
              upon becoming aware of it.
            </p>
            <h5 className="terms-section-subtitle">Notices</h5>
            <p className="terms-paragraph">
              Except as explicitly stated otherwise, any notices given to
              Company shall be given by email to the address listed in the
              contact information below. Any notices given to you shall be given
              to the email address you provided during the registration process,
              or such other address as each party may specify. Notice shall be
              deemed to be given twenty-four (24) hours after the email is sent,
              unless the sending party is notified that the email address is
              invalid. We may also choose to send notices by regular mail.
            </p>
            <h5 className="terms-section-subtitle">User Data</h5>
            <p className="terms-paragraph">
              Our Website will maintain certain data that you transfer to the
              Website for the purpose of the performance of the Company
              Services, as well as data relating to your use of the Company
              Services. Although we perform regular routine backups of data, you
              are primarily responsible for all data that you have transferred
              or that relates to any activity you have undertaken using the
              Company Services. You agree that Company shall have no liability
              to you for any loss or corruption of any such data, and you hereby
              waive any right of action against Company arising from any such
              loss or corruption of such data.
            </p>
            <h5 className="terms-section-subtitle">Electronic Contracting</h5>
            <p className="terms-paragraph">
              Your use of the Company Services includes the ability to enter
              into agreements and/or to make transactions electronically. YOU
              ACKNOWLEDGE THAT YOUR ELECTRONIC SUBMISSIONS CONSTITUTE YOUR
              AGREEMENT AND INTENT TO BE BOUND BY FOR SUCH AGREEMENTS AND
              TRANSACTIONS. YOUR AGREEMENT AND INTENT TO BE BOUND BY ELECTRONIC
              SUBMISSIONS APPLIES TO ALL RECORDS RELATING TO ALL TRANSACTIONS
              YOU ENTER INTO RELATING TO THE COMPANY SERVICES, INCLUDING NOTICES
              OF CANCELLATION, POLICIES, CONTRACTS, AND APPLICATIONS. In order
              to access and retain your electronic records, you may be required
              to have certain hardware and software, which are your sole
              responsibility.
            </p>
            <h5 className="terms-section-subtitle">Miscellaneous</h5>
            <p className="terms-paragraph">
              This Agreement constitutes the entire agreement between you and
              Company regarding the use of the Company Services. The failure of
              Company to exercise or enforce any right or provision of this
              Agreement shall not operate as a waiver of such right or
              provision. The section titles in this Agreement are for
              convenience only and have no legal or contractual effect. This
              Agreement operates to the fullest extent permissible by law. This
              Agreement and your account may not be assigned by you without our
              express written consent. Company may assign any or all of its
              rights and obligations to others at any time. Company shall not be
              responsible or liable for any loss, damage, delay or failure to
              act caused by any cause beyond Company's reasonable control. If
              any provision or part of a provision of this Agreement is
              unlawful, void or unenforceable, that provision or part of the
              provision is deemed severable from this Agreement and does not
              affect the validity and enforceability of any remaining
              provisions. There is no joint venture, partnership, employment or
              agency relationship created between you and Company as a result of
              this Agreement or use of the Website and Company Services. Upon
              Company’s request, you will furnish Company any documentation,
              substantiation or releases necessary to verify your compliance
              with this Agreement. You agree that this Agreement will not be
              construed against Company by virtue of having drafted them. You
              hereby waive any and all defenses you may have based on the
              electronic form of this Agreement and the lack of signing by the
              parties hereto to execute this Agreement.
            </p>
            <h5 className="terms-section-subtitle">Contact Us</h5>
            <p className="terms-paragraph">
              In order to resolve a complaint regarding the Company Services or
              to receive further information regarding use of the Company
              Services, please contact Company as set forth below or, if any
              complaint with us is not satisfactorily resolved, and you are a
              California resident, you can contact the Complaint Assistance Unit
              of the Division of Consumer Services of the Department of Consumer
              Affairs in writing at 400 "R" Street, Sacramento, California 95814
              or by telephone at 1-916-445-1254.
            </p>
            <p className="terms-paragraph">DriveChicago.com</p>
            <p className="terms-paragraph">18W200 Butterfield Rd.</p>
            <p className="terms-paragraph">Oakbrook Terrace, IL 60181</p>
            <p className="terms-paragraph">Email: mbilek@drivechicago.com</p>
            <p className="terms-paragraph">Phone: (630) 495-2282</p>
            <h3 className="terms-section-title">General Instructions</h3>
            <h5 className="terms-section-subtitle">
              What is a Terms of Use Agreement?
            </h5>
            <p className="terms-paragraph">
              A Terms of Use Agreement is a written set of rules and regulations
              between two parties, the User and the Company, that the User must
              agree to follow in order to use the Company’s website and
              services.
            </p>
            <h5 className="terms-section-subtitle">
              When is a Terms of Use Agreement needed?
            </h5>
            <p className="terms-paragraph">
              While Terms and Conditions are not required by law, any website,
              especially e-commerce or social networking websites or
              applications and any website or internet service provider that
              stores a User’s personal data, should consider having Terms and
              Conditions.
            </p>
            <p className="terms-paragraph">
              A written set of Terms and Conditions protects the Company and
              acts an instruction manual for its website. It allows the Company
              to explain things related to its service or product, including,
              among other things:
            </p>
            <ul className="terms-list">
                <li className="terms-list-item">
                    <p className="terms-paragraph">how purchases, payment, and returns are handled</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">ownership and use of content and intellectual property</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">how Users must conduct themselves, including any prohibited behavior</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">limitations on liability and disclaimers</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">the Company’s privacy policy</p>
                </li>
            </ul>
            <h5 className="terms-section-subtitle">Who needs a Terms of Use Agreement?</h5>
            <p className="terms-paragraph">Almost every website or application that provides a service or product has a Terms of Use Agreement.</p>
            <p className="terms-paragraph">Here are some examples of websites and apps that use a Terms of Use Agreement:</p>
            <ul className="terms-list">
                <li className="terms-list-item">
                    <p className="terms-paragraph"><span className="bold">E-Commerce Company</span> - Ebay, Amazon, Target, Gap</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph"><span className="bold">Social Media Website or Application</span> - Facebook, Instagram, Twitter, Snapchat</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph"><span className="bold">Search Engine</span> - Google, Yahoo, Bing</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph"><span className="bold">Website or Application Providing a Service or Product</span> - YouTube, Apple, Uber</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph"><span className="bold">Gaming Website or Application</span> - Playstation, Pokemon Go, Candy Crush</p>
                </li>
            </ul>
            <h5 className="terms-section-subtitle">What should be included in a Terms of Use?</h5>
            <p className="terms-paragraph">A simple Terms of Service should generally have at least the following:</p>
            <ul className="terms-list">
                <li className="terms-list-item">
                    <p className="terms-paragraph">Who is the Company providing the service or product</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">What is the service or product provided by the Company</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">Where is the Company’s website</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">When will the agreement terminate</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">Why might the User not be granted access to the website</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">How does the User agree to accept the Terms of Service</p>
                </li>
            </ul>
            <p className="terms-paragraph">The Company can tailor the rules and regulations, or “terms of use”, according to the service or product it provides and its specific needs. The Terms of Use Agreement can be posted on the Company’s website either as a browsewrap agreement or a clickwrap agreement.</p>
            <h5 className="terms-section-subtitle">Other Names</h5>
            <p className="terms-paragraph">As a reference, a Terms of Use Agreement is known by other names:</p>
            <ul className="terms-list">
                <li className="terms-list-item">
                    <p className="terms-paragraph">Terms of Service Agreement</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">Terms and Conditions</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">User Agreement</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">Statement of Rights and Responsibilities</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">Disclaimer</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">TOU</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">ToS</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">TOS</p>
                </li>
                <li className="terms-list-item">
                    <p className="terms-paragraph">TOC</p>
                </li>
            </ul>
          </div>
          <div className="terms-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
          </div>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={FordBanner}
              alt="placeholder"
            />
          </Link>
        </div>
      </>
    );
}