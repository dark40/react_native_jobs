import { View, Text, TouchableOpacity, Image } from 'react-native'

import {checkImageURL} from '../../../../utils'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (

    // Card Container
    <TouchableOpacity style={styles.container} onPress={handleNavigate}
    >

      {/* Company Logo */}
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}
          // source={{ uri: job.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Job Title */}
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
      </View>

      <Text style={styles.jobType}>{job.job_employment_type}</Text>

    </TouchableOpacity>
  )
}

export default NearbyJobCard