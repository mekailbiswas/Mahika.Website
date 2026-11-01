// Fixed width/height keep the aspect ratio and prevent layout shift.
export default function Image({ asset, eager = false, alt, className, sizes }) {
  return (
    <img
      className={className}
      src={asset.src}
      srcSet={asset.srcSet}
      sizes={sizes}
      width={asset.w}
      height={asset.h}
      alt={alt ?? asset.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
