import LatestUploads from '@components/LatestUploads';
import {useFetchLatestAudios} from '@src/hooks/query';
import PulseAnimationCointainer from '@ui/PulseAnimationCointainer';
import {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {}

const Home: FC<Props> = () => {
  const {data, isLoading} = useFetchLatestAudios();

  if (isLoading)
    return (
      <PulseAnimationCointainer>
        <Text style={{color: 'white', fontSize: 25}}>Loading</Text>
      </PulseAnimationCointainer>
    );

  return (
    <View style={styles.container}>
      <LatestUploads/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});

export default Home;
