import { Typography } from './typography'
import {
  TypographyTypes,
  ITypographyBaseProps,
  RequiredTypographyBaseProps,
  ITypographyBuilderProps,
} from './typography.types'

const builderOptions: ITypographyBuilderProps = {
  className: 'TANGLELABS_TYPOGRAPHY',
}
/**
 * exposing build method on singleton, to allow extensibility on our side.
 * ie. we add a TypographyV2, which props extends the BaseRequiredProps - it's plug and play
 * Consumer wouldn't know the backend has changed.
 */
class TypographyBuilder<
  IProps extends ITypographyBaseProps = ITypographyBaseProps
> {
  Typography: any
  constructor(Typography: React.FunctionComponent<ITypographyBaseProps>) {
    this.Typography = Typography
  }
  /**
   * builds component with custom types **T** from specified version **IProps**.
   * @param {ITypographyBuilderProps | undefined} options
   */
  build<T extends string>(
    options: ITypographyBuilderProps | undefined = builderOptions
  ) {
    const { className } = options
    const AbstractedTypography = this.Typography

    type JoinedTypes = T | TypographyTypes
    type JoinedTypesProps = Pick<IProps, Exclude<keyof IProps, 'type'>> & {
      type: JoinedTypes
    }
    return ({ className: givenClassName, ...props }: JoinedTypesProps) => (
      <AbstractedTypography
        className={[className, givenClassName].filter((e) => e).join(' ')}
        {...props}
      />
    )
  }
}

export { TypographyBuilder };
