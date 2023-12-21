import { ReactComponent as Backspace } from '../../assets/backspace.svg';

const keyboardLetters = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

interface KeypadProps {
    handleInput: (key: string) => void;
    keyboardEnable: boolean;
    usedKeys: { [key: string]: string };
}

export const Keypad = ({ usedKeys, keyboardEnable, handleInput }: KeypadProps) => {
    return (
        <section>
            {keyboardLetters.map((row, i) => {
                return (
                    <div key={i} className='flex justify-center gap-x-1 pb-1.5 md:gap-2 md:pb-2'>
                        {row.map((letter) => {
                            const color = usedKeys[letter];

                            return (
                                <button
                                    key={letter}
                                    className={`${
                                        color ? color : 'bg-grey-med'
                                    } border-grey-dark flex h-10 w-min items-center justify-center rounded-md border px-2.5 text-xs md:px-3 md:text-sm`}
                                    onClick={() => {
                                        if (keyboardEnable) {
                                            handleInput(letter);
                                        }
                                    }}
                                >
                                    {letter === 'Backspace' ? <Backspace /> : letter.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </section>
    );
};
