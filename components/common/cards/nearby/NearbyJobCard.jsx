import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import JobImage from "../../JobImage";

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <JobImage uri={job.employer_logo} style={styles.logoImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;