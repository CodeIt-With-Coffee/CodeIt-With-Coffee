import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as Styles from './styles';

export default function Error() {
    const history = useHistory();

    useEffect(() => {
        const defaultTitle = document.title;
        document.title = '404 Page not found';
        return () => {
            document.title = defaultTitle;
        };
    }, []);

    const onBackToHomeButtonClick = () => {
        setTimeout(() => history.push('/'), 500);
    };

    return (
        <Styles.Wrapper>
            <Styles.Text>
                4<span>0</span>4
            </Styles.Text>
            <Styles.Button onClick={onBackToHomeButtonClick}>
                Back to Home
            </Styles.Button>
        </Styles.Wrapper>
    );
}
