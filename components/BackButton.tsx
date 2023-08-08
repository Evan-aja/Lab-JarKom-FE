import { useRouter } from 'next/router';

const BackButton = () => {
    const router = useRouter();

    const goBack = () => {
        if (router.asPath === router.pathname) {
            router.push('/');
        } else {
            router.back();
        }
    };

    return (
        <button onClick={goBack} className={'btn btn-primary normal-case font-medium font-poppins'}>Go Back</button>
    );
}

export default BackButton;