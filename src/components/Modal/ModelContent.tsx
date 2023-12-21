import React from 'react';

interface ModalContent {
    isCorrect: boolean;
    solution: string;
    turn: number;
}

export const ModalContent = ({ isCorrect, solution, turn }: ModalContent) => {
    return (
        <div className='text-center'>
            <h2 className='pt-2 pb-4 text-xl font-bold'>
                {isCorrect ? 'Congrats, You guessed it right!' : 'Aw! Better luck next time'}
            </h2>
            <p className=''>
                Right answer is <span className='font-bold text-green-700'>{solution}</span>
            </p>
            <p>{isCorrect && `You found answer in ${turn === 1 ? ' 1 turn' : `${turn} turns`}`}</p>
        </div>
    );
};
