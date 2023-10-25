import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Space Curiosity | ${title}`
    }, [title])
};

export default useTitle;