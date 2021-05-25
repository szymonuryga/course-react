import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

export const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Loged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);
