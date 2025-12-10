import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function LegalNotice(): ReactNode {
  return (
    <Layout title="Legal Notice" description="Legal Notice and Terms of Use">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{ marginBottom: '2rem' }}>
              <Link className="button button--primary button--lg" to="/">
                ← Back to Home
              </Link>
            </div>
            <h1>Legal Notice</h1>

            <h2>Information according to § 5 TMG</h2>
            <p>
              <strong>Tarik Sabanovic</strong>
              <br />
              DevSecOps Engineer
              <br />
              Email: tarik.sabanovic2@icloud.com
            </p>

            <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
            <p>
              Tarik Sabanovic
              <br />
              Email: tarik.sabanovic2@icloud.com
            </p>

            <h2>Disclaimer</h2>

            <h3>Liability for Contents</h3>
            <p>
              The contents of our pages have been created with the greatest care. However, we cannot
              guarantee the contents' accuracy, completeness or topicality. As service providers, we
              are liable for our own contents of these websites according to § 7, paragraph 1 German
              Telemedia Act (TMG). However, according to §§ 8 to 10 German Telemedia Act (TMG),
              service providers are not under obligation to permanently monitor submitted or stored
              information or to search for evidences that indicate illegal activities. Legal
              obligations to remove information or to block the use of information remain
              unchallenged. In this case, liability is only possible at the time of knowledge about
              a specific violation of law. Illegal contents will be removed immediately at the time
              we get knowledge of them.
            </p>

            <h3>Liability for Links</h3>
            <p>
              Our offer includes links to external websites of third parties on whose contents we
              have no influence. Therefore, we cannot assume any liability for these external
              contents. The respective provider or operator of the websites is always responsible
              for the contents of the linked websites. The linked websites had been checked for
              possible violations of law at the time of the establishment of the link. Illegal
              contents were not detected at the time of the linking. However, a permanent content
              control of the linked websites is not reasonable without specific indications that
              there has been a violation of law. Illegal links will be removed immediately at the
              time we get knowledge of them.
            </p>

            <h3>Copyright</h3>
            <p>
              Contents and compilations published on these websites by the providers are subject to
              German copyright laws. Reproduction, editing, distribution as well as the use of any
              kind outside the scope of the copyright law require a written permission of the author
              or originator. Downloads and copies of these websites are permitted for private use
              only. The commercial use of our contents without permission of the original author is
              prohibited. Copyright laws of third parties are respected as long as the contents on
              these websites do not originate from the provider. Contributions of third parties on
              this site are indicated as such. However, if you notice any violations of copyright
              law, please inform us. Such contents will be removed immediately.
            </p>

            <h3>Privacy Policy</h3>
            <p>
              The use of our website is usually possible without providing personal information. As
              far as personal data (such as name, address or email addresses) is collected on our
              pages, this is always done on a voluntary basis as far as possible. This data will not
              be passed on to third parties without your explicit consent.
            </p>
            <p>
              We point out that data transmission over the Internet (e.g. when communicating via
              email) may have security gaps. A complete protection of data against access by third
              parties is not possible.
            </p>
            <p>
              The use of published postal addresses, telephone or fax numbers and email addresses
              for marketing purposes is prohibited, offenders sending unwanted spam messages will be
              punished.
            </p>

            <p className="margin-top--lg">
              <em>Last updated: {new Date().getFullYear()}</em>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
