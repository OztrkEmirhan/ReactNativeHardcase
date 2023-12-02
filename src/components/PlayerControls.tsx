import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPauseToggle: () => void;
  onSkipToPrevious: () => void;
  onSkipToNext: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  onPlayPauseToggle,
  onSkipToPrevious,
  onSkipToNext,
}) => {
  return (
    <View style={styles.controls}>
      <Button onPress={onSkipToPrevious} style={{backgroundColor: '#6750A4'}}>
        <Text style={{color: '#FFF'}}>Geri</Text>
      </Button>
      <Button onPress={onPlayPauseToggle}>
        {isPlaying ? <Text>Duraklat</Text> : <Text>Başlat</Text>}
      </Button>
      <Button onPress={onSkipToNext} style={{backgroundColor: '#6750A4'}}>
        <Text style={{color: '#FFF'}}>İleri</Text>
      </Button>
    </View>
  );
};

const styles = {
  controls: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default PlayerControls;
