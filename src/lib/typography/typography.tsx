import { ITypographyBaseProps } from './typography.types'

function Typography<T extends string>({
  className: givenClassName,
  label,
  type,
  ...props
}: ITypographyBaseProps<T>) {
  const className = assembleClassName([givenClassName, type])
  return (
    <div className={className} {...props}>
      {props.children ?? label}
    </div>
  )
}

function assembleClassName(classNames: (string | undefined)[]) {
  return [...classNames].filter((e) => e && e.length).join(' ')
}
export { Typography }
