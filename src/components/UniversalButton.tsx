
type ButtonProps = {
    title: string;
    callback: () => void;
}

export const UniversalButton = ({title,callback}:ButtonProps) => {
    return (
    <button onClick={callback}>{title}</button>
    );
};

