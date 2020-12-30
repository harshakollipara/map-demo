import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { YellowBox } from 'react-native';
const API_KEY = 'AIzaSyAfDkN9CGZJnwWXA93dH1EUnLgDkA-ohKg';

function GooglePlacesInput({ navigation, route }) {

  YellowBox.ignoreWarnings([
    'Non-serializable values were found in the navigation state',
  ]);

  const pressHandler = (data, details = null) => {
    route.params.onPlaceChosen(route.params.id, details.formatted_address, details.geometry);
    navigation.goBack();
  };

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2}
      autoFocus
      returnKeyType="search"
      keyboardAppearance='light'
      listViewDisplayed='auto'
      fetchDetails
      renderDescription={row => row.description}
      onPress={pressHandler}

      getDefaultValue={() => ''}

      query={{
        key: API_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      nearbyPlacesAPI='GooglePlacesSearch'
      GoogleReverseGeocodingQuery={{
      }}
      GooglePlacesSearchQuery={{
        rankby: 'distance',
        type: 'cafe'
      }}

      GooglePlacesDetailsQuery={{
        fields: 'formatted_address,geometry',
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

      debounce={200}
    />
  );
}


export default GooglePlacesInput;