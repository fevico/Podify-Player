import {AudioData} from '@src/@types/audio';
import colors from '@utils/colors';
import {FC} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Text,
} from 'react-native';

interface Props {
  audio: AudioData;
  onPress?(): void;
}

const AudioListItems: FC<Props> = ({audio, onPress}) => {
  const getSource = (poster?: string) => {
    return poster ? {uri: poster} : require('../assets/music_small.png');
  };

  return (
    <Pressable onPress={onPress} style={styles.listItem}>
      <Image source={getSource(audio.poster)} style={styles.poster} />
      <ScrollView style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {audio.title}
        </Text>
        <Text style={styles.owner} numberOfLines={1} ellipsizeMode="tail">
          {audio.owner.name}
        </Text>
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  listItem: {
    flexDirection: 'row',
    backgroundColor: colors.OVERLAY,
    marginBottom: 15,
    borderRadius: 5,
  },
  poster: {
    width: 50,
    height: 50,
  },
  title: {
    color: colors.CONSTRACT,
    fontWeight: '700',
  },
  owner: {
    color: colors.SECONDARY,
    fontWeight: '700',
  },
  titleContainer: {
    flex: 1,
    padding: 5,
  },
});

export default AudioListItems;
