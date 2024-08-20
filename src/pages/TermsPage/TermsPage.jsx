import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import style from './TermsPage.module.css';

export default function TermsPage({ title, text }) {
  const text1 = `
    Effective Date: [Insert Date]
    Welcome to CheatFusion! By accessing or using our website and purchasing our software and cheats for games, you agree to be bound by the following Terms of Use. Please read these terms carefully before using our services.

    1. Acceptance of Terms
    By using our website or purchasing any products from CheatFusion, you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please do not use our services.

    2. Eligibility
    You must be at least 18 years old or the age of majority in your jurisdiction to use our website and purchase our products. By using our website, you represent and warrant that you meet these eligibility requirements.

    3. License and Usage
    When you purchase software or cheats from CheatFusion, you are granted a limited, non-exclusive, non-transferable license to use the product for personal use only. You may not resell, distribute, share, or otherwise make the software or cheats available to third parties. Any unauthorized use, duplication, or distribution of our products is strictly prohibited and may result in the termination of your license and access to our services, without refund.

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

    13. Contact Information
    If you have any questions or concerns about these Terms of Use, please contact us at cheatfusion.sup@gmail.com.

    By using our website and purchasing our products, you agree to these Terms of Use. Thank you for choosing CheatFusion!
  `;
  console.log(text);

  const lines = text ? text.trim().split('\n') : text1.trim().split('\n');
  return (
    <div>
      <Header />
      <div className={style.content}>
        <h2>{title ? title : 'title'}</h2>
        <div className={style.textContent}>
          {lines &&
            lines.map((line, index) => {
              // Простейшее преобразование строки в элемент с заголовком
              if (/^\d+\./.test(line)) {
                return;
              } else {
                // Это абзац
                return (
                  <p className={style.p_container} key={index}>
                    {line}
                  </p>
                );
              }
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
