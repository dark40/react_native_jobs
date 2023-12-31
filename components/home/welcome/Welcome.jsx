import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"]


const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')


  return (
    <View>
      {/* this is the greeting part */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Freddie</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job.</Text>
      </View>

      {/* this is the search bar in a container*/}
      <View style={styles.searchContainer}>

        {/* this is the search input */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => { setSearchTerm(text) }}
            placeholder="What are you looking for?"
          />
        </View>

        {/* this is the search button icon */}
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* this is the employment type */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}

          keyExtractor={item => item} // similar to react map
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome