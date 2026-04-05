import pxToRem from '@/utils/pxToRem'

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pxToRem(767)}rem)`),
  tablet: window.matchMedia(`(width <= ${pxToRem(1023)}rem)`),
}

export default MatchMedia
