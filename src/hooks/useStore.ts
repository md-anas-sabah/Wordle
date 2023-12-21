import { useState } from 'react';
import toast from 'react-hot-toast';
import dictionary from '../utility/dictionary.json';
import 'react-responsive-modal/styles.css';
import { green, unused, used, yellow } from '../utility/constants';
import { TileProps } from '../components/Board/Tile';

export const useStore = (solution: string) => {
    console.log({ solution });
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array<TileProps[]>(6)]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [keyboardEnable, setKeyboardEnable] = useState(true);
    const [history, setHistory] = useState<string[]>([]);
    const [usedKeys, setUsedKeys] = useState<{ [key: string]: string }>({});
    const [open, setOpen] = useState(false);
    const [shake, setShake] = useState(false);

    const activateShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 600);
    };

    const onOpenModal = () => {
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
    };

    const formatGuess = () => {
        const solArr: (string | null)[] = [...solution];
        const formattedGuess = [...currentGuess].map((letter) => ({ letter, color: unused }));
        // set green color for right guesses
        formattedGuess.forEach((item, i) => {
            if (solArr[i] === item.letter) {
                formattedGuess[i].color = green;
                solArr[i] = null;
            }
        });
        // set yellow for letters that are on wrong place and havent
        formattedGuess.forEach((item, i) => {
            if (solArr.includes(item.letter) && item.color !== green) {
                formattedGuess[i].color = yellow;
                solArr[solArr.indexOf(item.letter)] = null;
            }
        });
        return formattedGuess;
    };

    const addNewWord = (guess: string) => {
        const formattedGuess = formatGuess();
        setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
        setHistory((prev) => [...prev, guess]);
        setUsedKeys((prev) => {
            const newKeys = { ...prev };
            formattedGuess.forEach((item) => {
                const currentColor = newKeys[item.letter];

                if (item.color === green) {
                    newKeys[item.letter] = green;
                    return;
                }
                if (item.color === yellow && currentColor !== green) {
                    newKeys[item.letter] = yellow;
                    return;
                }
                if (item.color === unused && currentColor !== green && currentColor !== yellow) {
                    newKeys[item.letter] = used;
                    return;
                }
            });
            return newKeys;
        });
        // format currentGuess
        setCurrentGuess('');
        // increase turn after every try
        setTurn((prev) => prev + 1);
    };

    const checkSubmission = (guess: string) => {
        // if dictionary have this word then go forward
        if (dictionary.includes(guess)) {
            // if the word is same as solution
            if (solution === guess) {
                setIsCorrect(true);
                toast.success(solution, { duration: 2500 });
                setTimeout(() => setOpen(true), 3000);
            }
            // Don't do anything if word was guessed once before
            if (history.includes(guess)) {
                activateShake();
                toast('Word already guessed', { duration: 3000 });
                return;
            }
            // add new word in guesses, history, and colors to usedKeys for keyboard
            addNewWord(guess);

            // on last turn if the current guess is wrong
            if (turn === 5 && currentGuess !== solution) {
                toast.error(solution, { duration: 1000 });
                setTimeout(onOpenModal, 1000);
            }
        } else {
            // otherwise show toast the word doesn't exist in dictionary
            activateShake();
            toast.error('Word not found');
        }
    };

    const handleInput = (key: string) => {
        // if its backspace pop up the letter from current guess
        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }
        // if its enter then call word submit function
        else if (key === 'Enter') {
            if (currentGuess.length < 5) {
                // if less then 5 then show toast incomplete word or something
                activateShake();
                toast('Not enough letters');
            } else {
                checkSubmission(currentGuess);
                return;
            }
        }
        // if its a letter then set it in current guess
        else if (/^[a-zA-Z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => (prev + key).toLowerCase());
            }
        }
    };

    return {
        turn,
        open,
        shake,
        guesses,
        usedKeys,
        isCorrect,
        currentGuess,
        keyboardEnable,
        handleInput,
        onCloseModal,
        setKeyboardEnable,
    } as const;
};
