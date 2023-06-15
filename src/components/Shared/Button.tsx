interface ButtonProps {
    text: string;
    onClick: any;
}

export const Button = (props: ButtonProps) => {
    return <button className='main-button' onClick={props.onClick}>{props.text}</button>
}