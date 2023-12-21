import { Row } from './Row';
import { TileProps } from './Tile';

interface BoardProps {
    guesses: TileProps[][];
    turn: number;
    currentGuess: string;
    shake: boolean;
}

export const Board = ({ currentGuess, turn, guesses, shake }: BoardProps) => {
    console.log('[Board]');
    return (
        <section className='flex flex-col items-center gap-1 py-8 md:py-2'>
            {guesses.map((guess, i) => {
                if (turn === i) {
                    return <Row key={i} currentGuess={currentGuess} shake={shake} />;
                }

                return <Row key={i} guess={guess} />;
            })}
        </section>
    );
};
