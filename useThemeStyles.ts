import { StyleSheet } from 'react-native';
import { useTheme } from './themeContext';
import { lightTheme, darkTheme } from './styles';

export const useThemeStyles = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.container.backgroundColor,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: theme.searchBar.backgroundColor,
      marginBottom: 10,
    },
    searchIcon: {
      marginTop: 10,
      flexDirection: 'row',
      marginLeft: 10,
      alignContent:'center',
    },
    themeIcon: {
      flexDirection: 'row',
       marginLeft: 50,
      alignItems: 'center',
       
        color: theme.themeIcon.color,
    },
    input: {
      flexDirection:'row',
      padding: 10,
      borderRadius: 8,
      fontSize: 15,
      color: theme.input.color,
      placeholderTextColor: theme.input.placeholderTextColor,
      backgroundColor: theme.input.backgroundColor, 
    },
    iconText:{
      
      flexDirection: 'row',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#c2c2d6',
      placeholderTextColor: '#000000',
      backgroundColor: theme.iconText.backgroundColor, 
    },
    countryContainer: {
      borderWidth: 1,
      borderColor: theme.countryContainer.borderColor,
      backgroundColor: theme.countryContainer.backgroundColor,
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    flag: {
      width: 40,
      height: 30,
      marginRight: 10,
    },
    countryName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.countryName.color,
    },
    detailsContainer: {},
    detailRow: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    detailTitle: {
      flex: 1,
      flexDirection: 'row',
      fontSize: 14,
      fontWeight: 'bold',
      color:theme.detailTitle.color,
    },
    detailText: {
      flex: 2,
      fontSize: 14,
      color: theme.detailText.color,
    },
  });

  return styles;
};
