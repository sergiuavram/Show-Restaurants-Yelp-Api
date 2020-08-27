import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useResults from '../hooks/useResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const ScreenView = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => result.price === price);
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            {/* <Text>we have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Efective' />
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    },

});

export default ScreenView;