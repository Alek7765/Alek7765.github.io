import MatchMedia from "@/constants/MatchMedia"

class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    menuItem: '[data-js-overlay-menu-item]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.menuItemElements = this.rootElement.querySelectorAll(this.selectors.menuItem)
    this.bindEvents()
  }

  onMobileMatchMediaChange = (event) => {
    if (!event.matches && this.dialogElement.open) {
      this.closeMenu()
    }
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  onMenuItemClick = () => {
    if (this.dialogElement.open) {
      this.closeMenu()
    }
  }

  closeMenu = () => {
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
    this.dialogElement.open = false
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener('change', this.onMobileMatchMediaChange)
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    this.menuItemElements.forEach((item) => {
      item.addEventListener('click', this.onMenuItemClick)
    })
  }
}

export default OverlayMenu