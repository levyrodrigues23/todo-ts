import React from "react"


interface IconsProps extends React.ComponentProps<"svg">{
    svg: React.FC<React.ComponentProps<"svg">>
} 


export default function Icon({svg: SvgComponent, ...props}: IconsProps){
    return(
        <SvgComponent {...props}/>
    )
}