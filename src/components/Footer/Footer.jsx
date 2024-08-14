import style from './Footer.module.css'
import discord from '../../assets/icons/DiscordLogo.svg'
import telegram1 from '../../assets/icons/telegram1.svg'
import { NavLink, Outlet } from 'react-router-dom'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__container}>
          <div className={style.footer__CheatFusion}>
            <h5>CheatFusion</h5>
            <p className={style.footer__CheatFusion_p}>
              We're industry leaders in delivering undetected, high-quality game
              cheats. Trusted by over 35,000 gamers, our commitment shines
              through instant delivery and 24/7 dedicated support. Elevate your
              gaming with cheats crafted to perfection and experience unmatched
              excellence.
            </p>
            <div className={style.footer__community}>
              <div>Join our community</div>
              <div className={style.footer__community_icons}>
                <a
                  href="https://discord.gg/invitecode"
                  target="_blank"
                  aria-label="Join us on Discord"
                >
                  <img
                    className={style.footer__community_icon}
                    src={discord}
                    alt="discord"
                  />
                </a>
                <a
                  href="https://t.me/username"
                  target="_blank"
                  aria-label="Join us on Telegram"
                >
                  <img
                    className={style.footer__community_icon}
                    src={telegram1}
                    alt="telegram"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={style.footer__Explore}>
            <h5>Explore</h5>
            <nav className={style.footer__nav}>
              <NavLink to="/about">Store</NavLink>
              <NavLink to="/menu">Contact</NavLink>
              <NavLink to="/siout">Rewards</NavLink>
              <NavLink to="/siout">FAQ</NavLink>
            </nav>
          </div>
        </div>
        <div className={style.footer__border_liner}></div>
      </div>
    </footer>
  )
}
export default Footer
