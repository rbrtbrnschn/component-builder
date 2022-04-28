import { typographyBuilder,_TypographyBuilder } from './lib/typography';
import { TypographyV2 } from './lib/typography/typographyv2';

const MyTypography = typographyBuilder.build<'other' | 'andSoOn' | 'youGetIt'>({className: "myclassname"});
//const myBuilder = new _TypographyBuilder(TypographyV2);
//const OtherTypography = myBuilder.build<"Hi">();
export { MyTypography, 
 // OtherTypography 
}
