import { ITypographyBaseProps, TypographyTypes } from './typography.types'

export interface ITypographyV2Props<T extends string = "div"> extends ITypographyBaseProps<T> {
  primary?: boolean;
  type: T | TypographyTypes;
}
const defaults = {
  className: 'TANGLELABS_TYPOGRAPHY',
}
function TypographyV2<T extends string>({
  className: givenClassName = defaults.className,
  label,
  type,
  primary = false,
  ...props
}: ITypographyV2Props<T>) {
  const className = assembleClassName([
    givenClassName,
    type,
    primary ? '--primary' : '',
  ]);
  return (
    <div className={className} {...props}>
      {props.children ?? label}
    </div>
  )
}

function assembleClassName(classNames: string[]) {
  return [...classNames].filter((e) => e.length).join(' ')
}
export { TypographyV2 }
