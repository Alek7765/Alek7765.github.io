import './Footer.scss'
import Button from "@/components/Button";

export default () => {
  const currentYear = new Date().getFullYear()

  const menuItems= [
    {
      label: 'Telegram',
      iconName: 'telegram',
      href: 'https://t.me/Leksandrdrdr',
    },
    {
      label: 'Mail',
      iconName: 'mail',
      href: 'mailto:alek7765@rambler.ru',
    },
    {
      label: 'GitHub',
      iconName: 'git-hub',
      href: 'https://github.com/Alek7765',
    },
  ]

  return (
    <footer className="footer container" id="footer">
      <div className="footer__inner">
        <div className="footer__info">
          <h2 className="footer__title">
            Contact <span>me</span>
          </h2>
          <div className="footer__description h5">
            I am in touch from Monday to Friday from 8 a.m. to 8 p.m. (GMT).
          </div>
        </div>
        <div className="footer__contacts">
          <ul className="footer__list">
            {menuItems.map(({ label, iconName, href} , index) => (
              <li className="footer__item" key={index}>
                <Button
                  className="footer__link"
                  href={href}
                  target="_blank"
                  label={label}
                  iconName={iconName}
                  hasFillIcon
                />
              </li>
            ))}
          </ul>
          <p className="h5">
            @ Aleksander Sokolov, <time dateTime={currentYear}>{currentYear}</time>
          </p>
        </div>
      </div>
    </footer>
  )
}
