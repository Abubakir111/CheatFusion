import Links from './Links';
import NouRouting from '../pages/NoRouting/NouRouting';
import HomePage from '../pages/MainPage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import TermsPage from '../pages/TermsPage/TermsPage';
import FagPage from '../pages/FagPage/FagPage';
import RewardsPage from '../pages/RewardsPage/RewardsPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AcauntPage from '../pages/AccauntPage/AccauntPage';

const text1 = `Effective Date: [Insert Date]

Welcome to CheatFusion! By accessing or using our website and purchasing our software and cheats for games, you agree to be bound by the following Terms of Use. Please read these terms carefully before using our services.

1. Acceptance of Terms
By using our website or purchasing any products from CheatFusion, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use our services.

2. Eligibility
You must be at least 18 years old or the age of majority in your jurisdiction to use our website and purchase our products. By using our website, you represent and warrant that you meet these eligibility requirements.

3. License and Usage
When you purchase software or cheats from CheatFusion, you are granted a limited, non-exclusive, non-transferable license to use the product for personal use only. You may not resell, distribute, share, or otherwise make the software or cheats available to third parties.
Any unauthorized use, duplication, or distribution of our products is strictly prohibited and may result in the termination of your license and access to our services, without refund.

4. No Refund Policy
All sales are final. We do not offer refunds, returns, or exchanges on any of our products, as outlined in our Refund Policy(LINK). By making a purchase, you acknowledge and agree to this no refund policy.

5. Subscription Freezing During Updates
If our software or cheats require updates to remain functional, your subscription will be frozen during the update period. This means that the duration of the update will not count against your subscription time, and your subscription will resume once the update is complete and the product is confirmed to be working.

6. Product Functionality
While we strive to keep our software and cheats fully functional, you understand that games are frequently updated, which may affect the performance of our products. We are not liable for any temporary disruption in service due to these updates, but we will work diligently to restore functionality as soon as possible.

7. Prohibited Conduct
You agree not to use our products or services for any illegal or unauthorized purpose, including but not limited to cheating in games in a way that violates the terms of service of those games, or engaging in any activity that could cause harm to other users, players, or the game developers.

8. Intellectual Property
All content, products, and materials on our website, including but not limited to software, logos, and trademarks, are the property of CheatFusion and are protected by intellectual property laws. You agree not to infringe upon these rights or use our content without our express permission.

9. Disclaimer of Warranties
Our products are provided "as is" and without any warranties of any kind, either express or implied. We do not guarantee that our software or cheats will be error-free, uninterrupted, or fully functional at all times. Your use of our products is at your own risk.

10. Limitation of Liability
To the maximum extent permitted by law, CheatFusion shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our products, even if we have been advised of the possibility of such damages.

11. Modifications to Terms
We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any such changes constitutes your acceptance of the new terms.

12. Termination
We reserve the right to terminate your access to our website and products at our discretion, without notice, if you violate any of these Terms of Use or engage in any prohibited conduct.

14. Contact Information
If you have any questions or concerns about these Terms of Use, please contact us at cheatfusion.sup@gmail.com.
By using our website and purchasing our products, you agree to these Terms of Use. Thank you for choosing CheatFusion!`;
const text2 = `
Effective Date: [Insert Date]

At CheatFusion, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you visit our website and purchase our products.

1. Information We Collect
Personal Information: We may collect your name, email address, and other details when you register or make a purchase on our website.
Usage Data: We collect information about how you use our site, including your IP address, browser type, and pages visited, to improve our services.
Payment Information: Payments are processed by secure third-party providers. We do not collect or store your credit card details.

2. How We Use Your Information
Order Processing: We use your personal information to process orders and provide customer support.
Service Improvement: Usage data helps us enhance our website and products.
Communication: We may use your contact details to send updates, promotions, and important information about your account.

3. Protecting Your Information
Security Measures: We use encryption, firewalls, and secure servers to protect your data.
Payment Security: Payment processing is handled by third-party providers; we do not store your credit card information.

4. Sharing Information
Service Providers: We may share your information with trusted partners who assist in operating our website and processing payments.
Legal Compliance: We may disclose your data if required by law or to protect our rights and prevent fraud.

5. Cookies and Analytics
Cookies: We use cookies to enhance your experience and track site usage. You can disable cookies in your browser settings, but this may affect site functionality.
Analytics: We use third-party tools to analyze website usage and improve our services.

6. Your Rights
Access & Correction: You can access and update your personal information by contacting us.
Opt-Out: You can opt out of promotional communications at any time.
Data Deletion: You may request the deletion of your personal information, subject to legal requirements.

7. Children's Privacy
Our services are not intended for individuals under 18. We do not knowingly collect information from children.

8. Policy Updates
We may update this Privacy Policy periodically. Changes will be posted on this page, and your continued use of our site signifies acceptance of the updated policy.

9. Contact Us
For any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].
Thank you for choosing CheatFusion. Your privacy is our priority.
`;
const text3 = `
No Refunds Policy
Thank you for purchasing software and cheats from CheatFusion. Please read this refund policy carefully before making a purchase.

1. No Refunds
All sales are final. Due to the nature of our products (software and cheats for games), we do not offer refunds under any circumstances. Once a purchase is made, it is considered completed, and no refund, return, or exchange will be provided.

2. Subscription Freezing During Updates
We are committed to providing continuous and effective updates to ensure that our software and cheats remain functional. In the event that an update is required, your subscription will be frozen during the update period. This means that the time your subscription is frozen will be added back to your account, ensuring you do not lose any time from your active subscription while we work on the update.
Once the update is complete and the software is confirmed to be functional, your subscription will automatically resume.

3. Product Functionality

We strive to ensure that our software and cheats are fully functional and meet your needs. However, due to the dynamic nature of games and their continuous updates, there may be periods where the software may need adjustments or patches to work correctly. During such times, please be patient as we work on the necessary updates.

4. Customer Support

If you encounter any issues or have questions regarding our products, please contact our customer support team. While we do not offer refunds, we are committed to helping you resolve any issues and ensuring you get the best possible experience with our products.

5. Agreement to the Policy

By making a purchase on our website, you acknowledge that you have read, understood, and agreed to this refund policy.
Thank you for your understanding and for choosing CheatFusion. We appreciate your business and are dedicated to providing you with top-quality software and cheats.
`;

const publicRoutes = [
  {
    path: Links.Home,
    element: <HomePage />
  },
  {
    path: Links.product,
    element: <ProductPage />
  },
  {
    path: Links.Erorr404,
    element: <NouRouting />
  },

  {
    path: Links.Terms,
    element: <TermsPage title={'Terms of use'} text={text1} />
  },
  {
    path: Links.Privacy,
    element: <TermsPage title={'Privacy Policy'} text={text2} />
  },
  {
    path: Links.Refund,
    element: <TermsPage title={'Refund Policy'} text={text3} />
  },
  {
    path: Links.FAQ,
    element: <FagPage />
  },
  {
    path: Links.contact,
    element: <NouRouting />
  },
  {
    path: Links.Rewars,
    element: <RewardsPage />
  },
  {
    path: Links.Login,
    element: <LoginPage />
  },
  {
    path: Links.SignUp,
    element: <SignUpPage />
  },
  {
    path: Links.acaunt,
    element: <AcauntPage />
  }
];
export default publicRoutes;
