import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import JobImage from "../../JobImage";

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <JobImage uri={item.employer_logo} style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard;