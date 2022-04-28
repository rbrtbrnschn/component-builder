/**
 * Default **type** options
 * mocking dom element variety close as possible
 */
type TypographyTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
  | 'div'
  | 'strong'
  | 'small'

/**
 * Options for TypographyBuilder.#build() function
 */
interface ITypographyBuilderProps {
  /**
   * Prefixes each instance of your Typography Component with this here className
   * Defaults to: **"TYPOGRPAHY"**
   */
  className?: string
}

/**
 * Typography Base Props
 */
interface ITypographyBaseProps<T extends string = 'div'>
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text / HTML to be displayed
   */
  label?:
    | React.ReactChild
    | React.ReactNode
    | React.ReactChild[]
    | React.ReactNode[]
    | string
  /**
   * Typography type
   * ie. h1, span
   * allowing for customization of variants
   */
  type: TypographyTypes | T
}

/**
 * Get's required keys from interface.
 * Credit: https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object#answer-52991061
 */
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

/**
 * Required Keys from ITypographyBaseProps<T>
 */
export type RequiredTypographyBaseProps<T extends string = 'div'> =
  RequiredKeys<ITypographyBaseProps<T>>

export type { TypographyTypes, ITypographyBaseProps, ITypographyBuilderProps }
