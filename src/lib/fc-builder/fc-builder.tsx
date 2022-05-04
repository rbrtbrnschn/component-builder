import React from 'react'
import {
  TypographyTypes,
  ITypographyBuilderProps,
} from '../typography/typography.types'

const builderOptions = {
  className: 'TYPOGRPAHY',
}
interface IFCBuilder {
  build: <T extends any>(
    options: Partial<typeof builderOptions> | undefined
  ) => React.FunctionComponent<any>
}

/**
 * exposing build method on singleton, to allow extensibility on our side.
 * ie. we add a TypographyV2, which props extends the BaseRequiredProps - it's plug and play
 * Consumer wouldn't know the backend has changed.
 */
class FCBuilder<
  IProps extends React.HTMLAttributes<HTMLElement> = React.HTMLAttributes<HTMLElement>
> implements IFCBuilder
{
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

    //type JoinedTypes = T | TypographyTypes
    //type JoinedTypesProps = Pick<IProps, Exclude<keyof IProps, 'type'>> & {
    //  type: JoinedTypes
    //}
    return ({ className: givenClassName, ...props }: IProps) => (
      <AbstractedComponent
        className={[className, givenClassName].filter((e) => e).join(' ')}
        {...props}
      />
    )
  }
}

export { FCBuilder }
