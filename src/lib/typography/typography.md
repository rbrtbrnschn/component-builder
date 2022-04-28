type Types = "h1" | "h2" | "h3" | "h4" | "h5" |"h6" | "span" | "p" | "div" | "strong" | "whatNot";
type MyTypes = Types & "h7";

const MyTypography = createTypography<MyTypes>({className:"", classNamePrefix: "MY", })
export const {H1: TypographyH1,...otherTypographys} = MyTypography;

<MyTypography label=""/>
<MyTypography >label</MyTypography

<MyTypography.H1>Header</MyTypography.H1>
<MyTypography type="h1">Header</MyTypography>
<MyTypography type="h1" label="header" />

