import { FontState } from "@/store/useFontStore"

const fonts = <FontState["font"][]>[
    {type: 'Sans Serif', value: 'inter'},
    {type: 'Serif', value: 'lora'},
    {type: 'Mono', value: 'inconsolata'}
]

export {
    fonts
}