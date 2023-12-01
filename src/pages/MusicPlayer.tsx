import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import TrackPlayer, {Track} from 'react-native-track-player';

const MusicPlayerScreen = () => {
  const [playingState, setPlayingState] = useState<{[key: string]: boolean}>(
    {},
  );
  const navigation = useNavigation();

  const musicData: Track[] = [
    {
      id: '1',
      url: 'https://youtu.be/u1c-9y9bqyw?si=1ufx_BtnEtoJyzt6',
      title: 'Seviyorsan İnanıyorsan',
      artist: 'Duman',
    },
    {
      id: '1',
      url: 'https://youtu.be/u1c-9y9bqyw?si=1ufx_BtnEtoJyzt6',
      title: 'Öyle Dertli',
      artist: 'Duman',
    },
  ];

  useEffect(() => {
    setupTrackPlayer();
  }, []);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(musicData);
  };

  const playOrPauseMusic = async (musicId: string) => {
    const isCurrentlyPlaying = playingState[musicId] || false;

    if (isCurrentlyPlaying) {
      await TrackPlayer.stop();
      console.log(`Müzik durduruldu: ${musicId}`);
    } else {
      await TrackPlayer.play();
      console.log(`Müzik başlatıldı: ${musicId}`);
    }

    setPlayingState({
      ...playingState,
      [musicId]: !isCurrentlyPlaying,
    });
  };

  const handleLogout = () => {
    // Handle logout logic here
    // For example, you can navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {musicData.map(music => (
        <Card key={music.id} style={styles.card}>
          <Card.Content>
            <Title>{music.title}</Title>
            <Paragraph>{music.artist}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => playOrPauseMusic(music.id)}>
              {playingState[music.id] ? 'Durdur' : 'Başlat'}
            </Button>
          </Card.Actions>
        </Card>
      ))}
      {/* Exit Button */}
      <View style={styles.exitButtonContainer}>
        <Button
          icon="exit-to-app" // You can replace this with your preferred exit icon
          mode="contained"
          onPress={handleLogout}>
          Çıkış
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  exitButtonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
});

export default MusicPlayerScreen;
