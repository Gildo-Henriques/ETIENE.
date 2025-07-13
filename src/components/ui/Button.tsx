type Props = {
    children: string;
    style: 1 | 2;
}
export default function ({children, style}:Props){
    return(
        <button className={`rounded-md px-7 py-2
            ${style === 1 && 'bg-black text-white'}
        ${style === 2 && 'bg-white border text-black shadow-md'}`}>
            {children}
        </button>
    )
}