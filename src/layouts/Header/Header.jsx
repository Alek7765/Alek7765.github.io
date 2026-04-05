import './Header.scss'
import clsx from 'clsx'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

const menuItems = [
  {
    label: 'About',
    href: '#hero',
  },
  {
    label: 'Skills',
    href: '#stack',
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    label: 'Work Experience',
    href: '#work-experience',
  },
  {
    label: 'Contacts',
    href: '/#footer',
  },
]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li
                  className="header__menu-item"
                  key={index}
                  data-js-overlay-menu-item=''
                >
                  <a
                    className="header__menu-link h5"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
