import TestimonialCard from "../card/TestimonialCard.vue";
import { Carousel, Slide } from "vue3-carousel";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./TestimonialSection.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'carousel'?: boolean; } &
{ 'carousel__slide'?: boolean; } &
{ 'carousel__viewport'?: boolean; } &
{ 'carousel__track'?: boolean; } &
{ 'carousel__slide--sliding'?: boolean; } &
{ 'carousel__slide'?: boolean; } &
{ 'carousel__slide--active'?: boolean; } &
{ 'carousel__slide'?: boolean; } &
{ 'carousel__slide--prev'?: boolean; } &
{ 'carousel__slide--next'?: boolean; } &
{ 'carousel__slide--active'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Carousel', typeof __VLS_localComponents, "Carousel", "Carousel", "Carousel"> &
__VLS_WithComponent<'Slide', typeof __VLS_localComponents, "Slide", "Slide", "Slide"> &
__VLS_WithComponent<'TestimonialCard', typeof __VLS_localComponents, "TestimonialCard", "testimonialCard", "testimonial-card">;
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.Carousel; __VLS_components.Carousel;
// @ts-ignore
[Carousel, Carousel,];
__VLS_components.Slide; __VLS_components.Slide;
// @ts-ignore
[Slide, Slide,];
__VLS_components.TestimonialCard; __VLS_components.TestimonialCard; __VLS_components.testimonialCard; __VLS_components.testimonialCard; __VLS_components["testimonial-card"]; __VLS_components["testimonial-card"];
// @ts-ignore
[TestimonialCard, TestimonialCard,];
__VLS_intrinsicElements.br;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.input;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["section"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("testimonial px-32 py-16"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("testimonial px-32 py-16"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("space-y-14"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("space-y-14"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["h2"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("text-center antialiased font-sans text-5xl font-bold capitalize text-slate-700 tracking-wide mb-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("text-center antialiased font-sans text-5xl font-bold capitalize text-slate-700 tracking-wide mb-10"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["p"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("mx-auto w-[800px] text-center text-xl font-normal text-slate-500 mb-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("mx-auto w-[800px] text-center text-xl font-normal text-slate-500 mb-10"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["span"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("font-bold text-green-500 py-0.5"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("font-bold text-green-500 py-0.5"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
let __VLS_25!: 'Carousel' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Carousel : (typeof __VLS_resolvedLocalAndGlobalComponents)['Carousel'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, autoplay: ((2000)), itemsToShow: ((3.95)), wrapAround: ((true)), transition: ((500)), }));
({} as { Carousel: typeof __VLS_25; }).Carousel;
({} as { Carousel: typeof __VLS_25; }).Carousel;
const __VLS_27 = __VLS_26({ ...{}, autoplay: ((2000)), itemsToShow: ((3.95)), wrapAround: ((true)), transition: ((500)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, autoplay: ((2000)), itemsToShow: ((3.95)), wrapAround: ((true)), transition: ((500)), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
for (const [review, index] of __VLS_getVForSourceType((__VLS_ctx.reviews)!)) {
{
let __VLS_30!: 'Slide' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slide : (typeof __VLS_resolvedLocalAndGlobalComponents)['Slide'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, key: ((index)), }));
({} as { Slide: typeof __VLS_30; }).Slide;
({} as { Slide: typeof __VLS_30; }).Slide;
const __VLS_32 = __VLS_31({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, key: ((index)), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
let __VLS_35!: 'TestimonialCard' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.TestimonialCard : 'testimonialCard' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.testimonialCard : 'testimonial-card' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['testimonial-card'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['TestimonialCard'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, review: ((review)), }));
({} as { TestimonialCard: typeof __VLS_35; }).TestimonialCard;
({} as { TestimonialCard: typeof __VLS_35; }).TestimonialCard;
const __VLS_37 = __VLS_36({ ...{}, review: ((review)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, review: ((review)), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
(__VLS_33.slots!).default;
}
// @ts-ignore
[reviews,];
}
(__VLS_28.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, class: ("space-y-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("space-y-12"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["h2"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{}, class: ("text-center text-4xl/10  font-bold uppercase tracking-wider text-slate-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("text-center text-4xl/10  font-bold uppercase tracking-wider text-slate-700"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
const __VLS_50 = __VLS_intrinsicElements["br"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
}
(__VLS_48.slots!).default;
}
{
const __VLS_55 = __VLS_intrinsicElements["p"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{}, class: ("text-center tracking-wide text-lg text-slate-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("text-center tracking-wide text-lg text-slate-600"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
(__VLS_58.slots!).default;
}
{
const __VLS_60 = __VLS_intrinsicElements["form"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, class: ("w-[75%] mx-auto"), action: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("w-[75%] mx-auto"), action: (""), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["div"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, class: ("border-y-2 h-24 grid grid-cols-3 border-slate-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("border-y-2 h-24 grid grid-cols-3 border-slate-700"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
{
const __VLS_70 = __VLS_intrinsicElements["div"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{}, class: ("col-span-2 flex items-center justify-center border-r-2 border-slate-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("col-span-2 flex items-center justify-center border-r-2 border-slate-700"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = __VLS_intrinsicElements["input"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
const __VLS_77 = __VLS_76({ ...{}, type: ("text"), class: ("bg-slate-200 w-[90%] h-14 px-5"), placeholder: ("Enter your Opinion"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, type: ("text"), class: ("bg-slate-200 w-[90%] h-14 px-5"), placeholder: ("Enter your Opinion"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
}
(__VLS_73.slots!).default;
}
{
const __VLS_80 = __VLS_intrinsicElements["div"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{}, class: ("flex items-center justify-center  border-slate-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-center  border-slate-700"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
{
const __VLS_85 = __VLS_intrinsicElements["button"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{}, class: ("bg-green-500 w-[80%] h-14 text-base uppercase text-slate-100 hover:bg-green-600 transition-all duration-200"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, class: ("bg-green-500 w-[80%] h-14 text-base uppercase text-slate-100 hover:bg-green-600 transition-all duration-200"), });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
(__VLS_88.slots!).default;
}
(__VLS_83.slots!).default;
}
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
(__VLS_43.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["testimonial"];
__VLS_styleScopedClasses["px-32"];
__VLS_styleScopedClasses["py-16"];
__VLS_styleScopedClasses["space-y-14"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["antialiased"];
__VLS_styleScopedClasses["font-sans"];
__VLS_styleScopedClasses["text-5xl"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["capitalize"];
__VLS_styleScopedClasses["text-slate-700"];
__VLS_styleScopedClasses["tracking-wide"];
__VLS_styleScopedClasses["mb-10"];
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["w-[800px]"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-xl"];
__VLS_styleScopedClasses["font-normal"];
__VLS_styleScopedClasses["text-slate-500"];
__VLS_styleScopedClasses["mb-10"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["text-green-500"];
__VLS_styleScopedClasses["py-0.5"];
__VLS_styleScopedClasses["space-y-12"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-4xl/10"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["uppercase"];
__VLS_styleScopedClasses["tracking-wider"];
__VLS_styleScopedClasses["text-slate-700"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["tracking-wide"];
__VLS_styleScopedClasses["text-lg"];
__VLS_styleScopedClasses["text-slate-600"];
__VLS_styleScopedClasses["w-[75%]"];
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["border-y-2"];
__VLS_styleScopedClasses["h-24"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["grid-cols-3"];
__VLS_styleScopedClasses["border-slate-700"];
__VLS_styleScopedClasses["col-span-2"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["border-r-2"];
__VLS_styleScopedClasses["border-slate-700"];
__VLS_styleScopedClasses["bg-slate-200"];
__VLS_styleScopedClasses["w-[90%]"];
__VLS_styleScopedClasses["h-14"];
__VLS_styleScopedClasses["px-5"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["border-slate-700"];
__VLS_styleScopedClasses["bg-green-500"];
__VLS_styleScopedClasses["w-[80%]"];
__VLS_styleScopedClasses["h-14"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["uppercase"];
__VLS_styleScopedClasses["text-slate-100"];
__VLS_styleScopedClasses["hover:bg-green-600"];
__VLS_styleScopedClasses["transition-all"];
__VLS_styleScopedClasses["duration-200"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
