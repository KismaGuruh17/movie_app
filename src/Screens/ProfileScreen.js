import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const handleGithubLink = () => {
    Linking.openURL('https://github.com/KismaGuruh17');
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./path/to/profileImage.jpg')} style={styles.profileImage} /> */}
      <Text style={styles.name}>Kisma Guruh Harta Putra </Text>
      <Text style={styles.bio}>Deskripsi Diri</Text>
      <Text style={styles.bio}>Saya seorang mahasiswa semester tujuh di Universitas Yudharta Pasuruan
                Prodi Teknik Informatika yang tertarik dengan android
                pengembangan dan teknologi.
                Saya pernah bekerja di IT support selama 1 tahun lebih dan mulai
                tertarik pada pengembang perangkat lunak, Khususnya untuk
                Android. Akhirnya saya memutuskan untuk kuliah di jurusan
                informatika Teknik dan pelajari lebih lanjut tentang pengembang
                perangkat lunak khususnya Android.</Text>
      <Text style={styles.sectionTitle}>Portofolio:</Text>
      <Text style={styles.portfolioItem}>- Nama Proyek 1</Text>
      <Text style={styles.portfolioItem}>- Nama Proyek 2</Text>

      {/* Icon link GitHub */}
      <TouchableOpacity onPress={handleGithubLink}>
        <Icon name="github" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  portfolioItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;
