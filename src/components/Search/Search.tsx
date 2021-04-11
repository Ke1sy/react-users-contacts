import React, {FC, useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    iconButton: {
        padding: 4,
        color: theme.palette.primary.main
    },

    search: {
        position: 'relative',
        backgroundColor: '#4a6368',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        padding: 1,
        width: '100%',
        borderRadius: '19px',
        maxWidth: '100%',
    },

    input: {
        color: 'inherit',
        borderRadius: '19px',
        border: '1px solid #213b3c',
        backgroundColor: theme.palette.common.white,
        fontSize: "14px",
        height: "36px",
        width: '100%',
        '& input': {
            padding: '8px 34px 8px 13px',
            transition: theme.transitions.create('width'),
            width: '100%',
            '&::placeholder': {
                opacity: 1
            }
        }
    },

}));

type SearchType = {
    searchAction: (searchText: string) => void,
    placeholder: string,
    liveSearch: boolean
}

const Search: FC<SearchType> = ({searchAction, placeholder, liveSearch}) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const [typingTimeout, setTypingTimeout] = useState<any>(null);

    const handleLiveChange = ({target: {value}}: any) => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        setSearchValue(value);

        setTypingTimeout(setTimeout(() => {
            searchAction(value);
        }, 200));

    };

    const handleChange = ({target: {value}}: any) => {
        setSearchValue(value);
        searchAction(value);
    };

    const handleSubmit = (e: any) => {
        if (!searchValue) {
            return false
        }
        e.preventDefault();
        searchAction(searchValue);
    };

    const onChangeAction = liveSearch ? handleLiveChange : handleChange;

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.search}>
                <InputBase
                    onChange={onChangeAction}
                    className={classes.input}
                    placeholder={placeholder}
                    value={searchValue}
                />
                {liveSearch &&
                <IconButton type="submit" className={classes.iconButton} aria-label="search"
                            disabled={!searchValue}>
                  <SearchIcon/>
                </IconButton>
                }
            </div>
        </form>
    )
};

export default Search;
