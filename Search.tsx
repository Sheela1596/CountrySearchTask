import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { lightTheme, darkTheme } from './styles';
import Icon  from 'react-native-vector-icons/FontAwesome' ;
import axios from 'axios';
import { useTheme } from './themeContext';
import { useThemeStyles } from './useThemeStyles';

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  currencies: { symbol: string; name: string }[];
  capital: string;
  population: number;
  area: number;
  timezones: string[];
  languages: { [key: string]: string };
}

const CountrySearchScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const { theme, toggleTheme, } = useTheme();
  const styles = useThemeStyles();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountries();
  }, []);


  
  useEffect(() => {
    if (searchText) {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  }, [searchText, countries]);

  const modeIconName = theme === lightTheme ? 'moon-o' : 'sun-o';

  return (
    <View style={{ ...styles.container, backgroundColor: theme.backgroundColor }}>
       
        
      
    <View style={styles.container}>
      <View style = {styles.searchBar}>
      <View style = {styles.iconText}>
        <Icon name= "search" size={18} color="#b3c6ff" style = {styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search for a country"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={() => {}}
        />
       </View>
       <TouchableOpacity  onPress={toggleTheme}>
        <Icon name = {modeIconName} size={20} color ="#b3cff" style= {styles.themeIcon}/> 
      </TouchableOpacity>
      </View>
      
      {filteredCountries.length ? (
        <FlatList
          data={filteredCountries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.countryContainer}>
              <View style={styles.header}>
                <Image style={styles.flag} source={{ uri: item.flags.png }} />
                <Text style={styles.countryName}>{item.name.common.toUpperCase()}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailTitle}>Capital:</Text>
                  <Text style={styles.detailText}>{item.capital}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailTitle}>Population:</Text>
                  <Text style={styles.detailText}>{item.population.toLocaleString()}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailTitle}>Area:</Text>
                  <Text style={styles.detailText}>{item.area} square miles</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailTitle}>Timezones:</Text>
                  <Text style={styles.detailText}>{item.timezones.join(', ')}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailTitle}>Languages:</Text>
                  <Text style={styles.detailText}>{Object.values(item.languages).join(', ')}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailTitle}>Currencies:</Text>
                  <Text style={styles.detailText}>{Object.values (item.currencies).map(currency =>  `${currency.symbol} ${currency.name}`).join(', ')}</Text>
                   
                </View>
              </View>
            </View>
          )}
        />
      ) : null}
    </View>
    </View>
  );
};

  
export default CountrySearchScreen;