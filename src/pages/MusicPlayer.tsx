import React, {useEffect, useState} from 'react';
import TrackPlayer, {useTrackPlayerEvents} from 'react-native-track-player';
import {StyleSheet} from 'react-native';
import {Card, Title, Paragraph, Button, Text} from 'react-native-paper';

const tracks = [
  {
    id: '0',
    url: require('../tracks/blues.wav'),
    title: 'Blues',
    artist: 'Music Bassted',
  },
  {
    id: '1',
    url: require('../tracks/country.mp3'),
    title: 'Aşk Kitabı',
    artist: 'Hayko Cepkin',
  },
  {
    id: '2',
    url: require('../tracks/ölüyorum.mp3'),
    title: 'Ölüyorum',
    artist: 'Hayko Cepkin',
  },
  {
    id: '3',
    url: require('../tracks/merhametinedön.mp3'),
    title: 'Merhametine Dön',
    artist: 'Sagopa Kajmer',
  },
  {
    id: '4',
    url: require('../tracks/ykalsın.mp3'),
    title: 'Yanlız Kalsın',
    artist: 'Hayko Cepkin',
  },
  {
    id: '5',
    url: require('../tracks/farkettim.mp3'),
    title: 'Fark Ettim',
    artist: 'Semicenk',
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const playPauseToggle = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();
  }, []);

  // Şarkı değişikliği dinleme
  useTrackPlayerEvents(['playback-track-changed'], async event => {
    const {nextTrack} = event;
    if (nextTrack !== null) {
      setCurrentTrackIndex(parseInt(nextTrack));
    }
  });

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{tracks[currentTrackIndex].artist}</Title>
        <Paragraph>{tracks[currentTrackIndex].title}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.controls}>
        <Button onPress={skipToPrevious}>
          <Text>Geri</Text>
        </Button>
        <Button onPress={playPauseToggle}>
          {isPlaying ? <Text>Duraklat</Text> : <Text>Başlat</Text>}
        </Button>
        <Button onPress={skipToNext}>
          <Text>İleri</Text>
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 10,
  },
  controls: {
    justifyContent: 'space-around',
  },
});

export default MusicPlayer;
