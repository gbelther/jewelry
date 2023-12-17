import ImageNext, { ImageProps } from 'next/image'
import React, { forwardRef } from 'react'

type Props = ImageProps

const Image = forwardRef<
  React.ElementRef<typeof ImageNext>,
  React.ComponentPropsWithoutRef<typeof ImageNext>
>((props: Props, ref) => {
  return <ImageNext {...props} ref={ref} />
})

export default Image
