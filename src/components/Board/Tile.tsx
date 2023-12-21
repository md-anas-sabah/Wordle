export interface TileProps {
    letter: string;
    color?: string;
    animation?: string;
}

export const Tile = ({ letter, color, animation }: TileProps) => {
    return (
        <div
            className={`${
                color ? `${color} text-white` : 'border-grey-dark'
            } font-sm text-bold ${animation} flex h-12 w-12 items-center justify-center border-2 font-bold transition dark:text-white`}
        >
            {letter.toUpperCase()}
        </div>
    );
};
