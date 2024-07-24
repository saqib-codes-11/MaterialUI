import React from 'react';
import Markdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import makeStyles from '@material-ui/styles/makeStyles';
import isMobile from 'is-mobile';
import CodeBlock from './CodeSyntax';

const useStyles = makeStyles({
    card: {
        margin: 10,
        padding: 10,
    },
    cardMobile: {
        margin: 5,
        padding: 10,
    }
});

const source = `
# MaterialUI Theme Generator
This simple web application was made to show how easy it is to customise material-ui with simply adding a theme. 

The application also demonstrates how react hooks can be used as a provider to dynamically adjust your theming.

\`\`\` javascript
import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const ThemeContext = React.createContext();

export function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState(createMuiTheme({ palette: { type: 'dark' } }));
    const [type, setType] = React.useState(true);
    const [primary, setPrimary] = React.useState(theme.palette.primary.main);
    const [secondary, setSecondary] = React.useState(theme.palette.secondary.main);
    const [error, setError] = React.useState(theme.palette.error.main);
    const value = React.useMemo(() => {
        return {
            theme, setTheme, type, setType, primary, setPrimary, secondary, setSecondary, error, setError
        };
    }, [theme, type]);

    React.useEffect(() => {
        setTheme(createMuiTheme({
            palette: {
                type: type ? 'dark' : 'light',
                primary: { main: primary },
                secondary: { main: secondary },
                error: { main: error }
            }
        }));
    }, [type, primary, secondary, error]);

    return <ThemeContext.Provider value={value} {...props} />;
}

export function useThemeContextProvider() {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useToolBarProvider must be used within a ToolBarProvider');
    }
    const {
        theme, setTheme, type, setType, primary, setPrimary, secondary, setSecondary, error, setError
    } = context;

    const getTheme = React.useCallback(() => theme, [theme]);

    const getType = React.useCallback(() => type, [type]);

    const getPrimary = React.useCallback(() => primary, [primary]);

    const getSecondary = React.useCallback(() => secondary, [secondary]);

    const getError = React.useCallback(() => error, [error]);

    const toggleType = React.useCallback(() => {
        setType(!type);
    }, [setType, type]);

    return {
        getTheme,
        setTheme,
        getType,
        toggleType,
        getPrimary,
        getSecondary,
        getError,
        setError,
        setSecondary,
        setPrimary,
    };
}

\`\`\`

`;

export default function About() {
    const classes = useStyles();
    return (
        <Card className={isMobile ? classes.cardMobile : classes.card}>
            <Markdown source={source} renderers={{code: CodeBlock}}/>
        </Card>
    );
}