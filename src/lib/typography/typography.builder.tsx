import { Typography } from './typography'
import {
  TypographyTypes,
  ITypographyBaseProps,
  RequiredTypographyBaseProps,
  ITypographyBuilderProps,
} from './typography.types'
import { ITypographyV2Props, TypographyV2 } from './typographyv2'

const builderOptions: ITypographyBuilderProps = {
  className: 'TANGLELABS_TYPOGRAPHY',
}
/**
 * exposing build method on singleton, to allow extensibility on our side.
 * ie. we add a TypographyV2, which props extends the BaseRequiredProps - it's plug and play
 * Consumer wouldn't know the backend has changed.
 */
class TypographyBuilder {
  Typography: any
  constructor(
    Typography: React.FunctionComponent<ITypographyBaseProps>
  ) {
    this.Typography = Typography
  }
  build<T extends string>(options: ITypographyBuilderProps | undefined = builderOptions) {
    const {className} = options;
    type JoinedTypes = TypographyTypes | T

    const AbstractedTypography = this.Typography
    return ({
      className: givenClassName,
      ...props
    }: ITypographyV2Props<JoinedTypes>) => (
      <AbstractedTypography
        className={[className, givenClassName].filter((e) => e).join(' ')}
        {...props}
      />
    )
  }
}

const typographyBuilder = new TypographyBuilder(Typography)
export { typographyBuilder, TypographyBuilder as _TypographyBuilder }
