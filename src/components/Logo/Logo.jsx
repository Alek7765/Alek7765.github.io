import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    href,
    logoImgSrc,
    loading = 'lazy',
  } = props

  const LogoTag = href ? 'a' : 'div'
  const linkProps = href && {
    href,
    title: title,
    target: '_blank',
  }
  const specificProps = !href && {
    role: 'img',
  }

  return (
    <LogoTag
      className={clsx('logo', className)}
      aria-label={title}
      {...linkProps}
      {...specificProps}
    >
      <img
        className="logo__image"
        src={logoImgSrc}
        alt=""
        width={64}
        height={64}
        loading={loading}
      />
    </LogoTag>
  )
}
