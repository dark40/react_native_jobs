import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import {checkImageURL} from '../../../../utils'

const PopularJobCard = ({ selectedJob, item, handleCardPress }) => {
  return (

    // Card Container
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >

      {/* Company Logo */}
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          // source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}
          source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Employer Name */}
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      {/* Job Title */}
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
      </View>

      <Text style={styles.location}>{item.job_country}</Text>

    </TouchableOpacity>
  )
}

export default PopularJobCard