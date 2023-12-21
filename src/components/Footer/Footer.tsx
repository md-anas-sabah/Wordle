import { ReactComponent as IconGitHub } from '../../assets/github.svg';

export const Footer = () => {
    return (
        <footer className='bg-violet-dark p-2 text-center text-white'>
            <p className='flex items-center justify-center'>
                Made by&nbsp;
                <a
                    className='flex items-center justify-center'
                    href='https://github.com/mritunjaysaha'
                >
                    Mritunjay&nbsp;
                    <span className='text-white-500 hover:underline'>
                        <IconGitHub className='fill-current h-5 w-5' />
                    </span>
                </a>
            </p>
        </footer>
    );
};
