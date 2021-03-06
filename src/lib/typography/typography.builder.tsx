import React from 'react'
import { Typography } from './typography'
import {
  TypographyTypes,
  ITypographyBaseProps,
  RequiredTypographyBaseProps,
  ITypographyBuilderProps,
} from './typography.types'

const builderOptions: ITypographyBuilderProps = {
  className: 'TYPOGRPAHY',
}
/**
 * exposing build method on singleton, to allow extensibility on our side.
 * ie. we add a TypographyV2, which props extends the BaseRequiredProps - it's plug and play
 * Consumer wouldn't know the backend has changed.
 */
class TypographyBuilder<
  IProps extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> {
  FC: any
  constructor(FunctionComponent: React.FunctionComponent<IProps>) {
    this.FC = FunctionComponent 
  }
  /**
   * builds component with custom types **T** from specified version **IProps**.
   * @param {ITypographyBuilderProps | undefined} options
   */
  build<T extends string>(
    options: ITypographyBuilderProps | undefined = builderOptions
  ) {
    const { className } = options
    const AbstractedComponent = this.FC

    type JoinedTypes = T | TypographyTypes
    type JoinedTypesProps = Pick<IProps, Exclude<keyof IProps, 'type'>> & {
      type: JoinedTypes
    }
    return ({ className: givenClassName, ...props }: JoinedTypesProps) => (
      <AbstractedComponent
        className={[className, givenClassName].filter((e) => e).join(' ')}
        {...props}
      />
    )
  }
}

export { TypographyBuilder };
