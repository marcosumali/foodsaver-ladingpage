import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import LogoFB from '../../components/logo/logoFB';
import './privacy.css';

export default class Privacy extends Component {
  render() {
    return (
      <div className="Register-page">
        <Container className="Height-100cent">
          <Row>
            <Col md={12} className="Regisration-logo-box Container-nowrap-center">
              <LogoFB />
            </Col>
          </Row>
          <Row className="Container-nowrap-center">
            <Col md={12} className="Registration-box">
              <Row className="Max-box">
                <Col md={12}>
                  <div className="Registration-header" style={{ textAlign: 'center' }}>Privacy Policy</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-paragraphs">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or register from dishkon.co (the “Site”).</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">Personal information we collect</div>
                  <div className="Privacy-paragraphs">When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</div>
                  <div className="Privacy-paragraphs">
                    We collect Device Information using the following technologies:
                    <ul style={{ paddingLeft: '15px' }}>
                      <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org</a>.</li>
                      <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                      <li>“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.</li>
                    </ul>
                  </div>
                  <div className="Privacy-paragraphs">Additionally when you register yourself through the Site, we collect certain information from you, including your name, email address, phone number, gender, age, and city where you lived. We refer to this information as “Register Information”.</div>
                  <div className="Privacy-paragraphs">When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Register Information.</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">How do we use your personal information?</div>
                  <div className="Privacy-paragraphs">
                    We use the Register Information to:
                    <ul style={{ paddingLeft: '15px' }}>
                      <li>Communicate with you;</li>
                      <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                    </ul>
                  </div>
                  <div className="Privacy-paragraphs">We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">Sharing you personal Information</div>
                  <div className="Privacy-paragraphs">We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</div>
                  <div className="Privacy-paragraphs">Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">Behavioural advertising</div>
                  <div className="Privacy-paragraphs">As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.</div>
                  <div className="Privacy-paragraphs">
                    You can opt out of targeted advertising by using the links below:
                    <ul>
                      <li>Facebook: <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">https://www.facebook.com/settings/?tab=ads</a></li>
                      <li>Google: <a href="https://www.google.com/settings/ads/anonymous" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads/anonymous</a></li>
                      <li>Bing: <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank" rel="noopener noreferrer">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a></li>
                    </ul>
                  </div>
                  <div className="Privacy-paragraphs">Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">http://optout.aboutads.info/</a>.</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">Do not track</div>
                  <div className="Privacy-paragraphs">Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</div>
                </Col>
                {/* <Col md={12}>
                  <div className="Privacy-header">Your rights</div>
                  <div className="Privacy-paragraphs">If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</div>
                  <div className="Privacy-paragraphs">Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</div>
                </Col> */}
                <Col md={12}>
                  <div className="Privacy-header">Data retention</div>
                  <div className="Privacy-paragraphs">When you register through the Site, we will maintain your Register Information for our records unless and until you ask us to delete this information.</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">Changes</div>
                  <div className="Privacy-paragraphs">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</div>
                </Col>
                <Col md={12}>
                  <div className="Privacy-header">Contact us</div>
                  <div className="Privacy-paragraphs">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at <a href="mailto:support@dishkon.co" target="_blank" rel="noopener noreferrer">support@dishkon.co</a>.</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
