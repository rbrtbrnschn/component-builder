import { typographyBuilder,_TypographyBuilder } from './lib/typography';
import { ITypographyV2Props, TypographyV2 } from './lib/typography/typographyv2';

const MyTypography = typographyBuilder.build<'other' | 'andSoOn' | 'youGetIt'>({className: "myclassname"});
const myBuilder = new _TypographyBuilder<ITypographyV2Props>(TypographyV2);
const OtherTypography = myBuilder.build<"Hi">({className:"other-typography"});
export { MyTypography, 
 OtherTypography 
}
