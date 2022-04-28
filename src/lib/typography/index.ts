/* import for typographyBuilder */
import { Typography } from './typography'
import { TypographyBuilder } from './typography.builder'
import { ITypographyBaseProps } from './typography.types'

export const typographyBuilder = new TypographyBuilder<ITypographyBaseProps>(
  Typography
);

/* Experimental Export */
export {TypographyBuilder as _TypographyBuilder } from './typography.builder'

export type {
  TypographyTypes,
  ITypographyBaseProps,
  ITypographyBuilderProps,
} from './typography.types'

