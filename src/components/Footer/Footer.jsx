import style from './Footer.module.css';
import discord from '../../acsses/icons/DiscordLogo.svg';
import telegram1 from '../../acsses/icons/telegram1.svg';
import Links from '../../links/Links';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__container}>
          <div className={style.footer__CheatFusion}>
            <h5>CheatFusion</h5>
            <p className={style.footer__CheatFusion_p}>
              As a leading provider of premium, undetectable game cheats, we've earned the trust of over 1000 gamers.
              Our dedication is reflected in fast delivery and 24/7 support. Enhance your gaming with expertly crafted
              cheats and experience unparalleled performance.
            </p>
            <div className={style.footer__community}>
              <h5>Contacts</h5>
              <div className={style.footer__community_icons}>
                <a href='https://discord.gg/invitecode' target='_blank' aria-label='Join us on Discord'>
                  <img className={style.footer__community_icon} src={discord} alt='discord' />
                </a>
                <a href='https://t.me/username' target='_blank' aria-label='Join us on Telegram'>
                  <img className={style.footer__community_icon} src={telegram1} alt='telegram' />
                </a>

                <a href='mailto:upport@cheatfusion.org'>support@cheatfusion.org</a>
              </div>
            </div>
          </div>
          <div className={style.footer__Explore}>
            <h5>Navigation</h5>
            <nav className={style.footer__nav}>
              <div className={style.footer__colum1}>
                <NavLink to={Links.Home}>Store</NavLink>
                <NavLink to={Links.contact}>Contact</NavLink>
                <NavLink to={Links.Rewars}>Rewards</NavLink>
                <NavLink to={Links.FAQ}>FAQ</NavLink>
              </div>
              <div className={style.footer__colum1}>
                <NavLink to={Links.Terms}>Terms of use</NavLink>
                <NavLink to={Links.Privacy}>Privacy policy</NavLink>
                <NavLink to={Links.Refund}>Refund policy</NavLink>
              </div>
            </nav>
          </div>
        </div>
        <div className={style.footer__border_liner}></div>
        <div className={style.footer__border_reserved}>Ⓒ 2024 CheatFusion. All rights reserved.</div>
      </div>
    </footer>
  );
}
export default Footer;
