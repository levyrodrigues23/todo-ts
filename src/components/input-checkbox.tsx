import { cva, VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";

export const InputChechboxWrapperVariants = cva(
    `inline-flex items-center justify-center  relative group`
    , {
        variants: {
            variant: {

            }
        }
    })

export const InputChechboxVariants = cva(`
    appearance-none  peer flex items-center justify-center border-2 border-solid transition cursor-pointer overflow-hidden border-green-base hover:border-green-dark hover>bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
    `, {
    variants: {
        size: {
            md: "w-5 h-5 rounded-sm"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false
    }
}

)


export const InputCheckboxIconVariants = cva(`
    absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block
`, {
    variants: {
        size: {
            md: "w-3 h-3"
        }
    },
    defaultVariants: {
        size: "md"
    }
})


interface InputCheckboxProps extends VariantProps<typeof InputChechboxVariants>, Omit<React.ComponentProps<"input">, "size" | "disabled"> {


}


export default function InputCheckbox({size, disabled, className, ...props}: InputCheckboxProps) {
    return <label className={InputChechboxWrapperVariants({className})}>
        <input className={InputChechboxVariants({size, disabled})} type="checkbox" {...props}/>
        <Icon svg={CheckIcon} className={InputCheckboxIconVariants({size})}/>

    </label>
}