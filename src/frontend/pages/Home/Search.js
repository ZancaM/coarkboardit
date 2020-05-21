import React from 'react';
import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';

export default function Search(props) {
    return <StyledSearchBar placeholder="PushPin Search" />;
}

const StyledSearchBar = styled(SearchBar)`
    margin-top: 2rem;
    width: 100%;
`;
