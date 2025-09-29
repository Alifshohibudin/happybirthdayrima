
import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import type {
  IEventProps,
  IFlipSetting
} from 'react-pageflip/build/html-flip-book/settings'

// IProps coming from react-pageflip/build/html-flip-book/index.d.ts
interface IProps extends IFlipSetting, IEventProps {
  className: string
  style: React.CSSProperties
  children: React.ReactNode
  renderOnlyPageLengthChange?: boolean
}

type RequiredFlipBookKeys = 'width' | 'height' | 'children'
type OptionalFlipBookProps = Partial<Omit<IProps, RequiredFlipBookKeys>>
type RequiredFlipBookProps = Required<Pick<IProps, RequiredFlipBookKeys>>

interface FlipBookProps extends OptionalFlipBookProps, RequiredFlipBookProps {}
export type FlipBookRef = React.ComponentRef<typeof HTMLFlipBook>

const FlipBook = React.forwardRef<FlipBookRef, FlipBookProps>(
  ({children, height, width, ...rest}, ref) => (
    <HTMLFlipBook
      height={height}
      width={width}
      ref={ref}
      {...(rest as Omit<IProps, RequiredFlipBookKeys>)}
    >
      {children}
    </HTMLFlipBook>
  )
)
FlipBook.displayName = 'FlipBook'

export default FlipBook