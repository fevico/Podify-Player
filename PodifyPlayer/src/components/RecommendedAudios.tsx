import {useFetchRecommendedAudios} from '@src/hooks/query';
import GridView from '@ui/GridView';
import colors from '@utils/colors';
import {FC} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

interface Props {}

const RecommendedAudios: FC<Props> = props => {
  const {data, isLoading} = useFetchRecommendedAudios();

  const getPoster = (poster?: string) =>{
    return poster ? {uri: poster} : require('../assets/music.png');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Uploads</Text>
      <GridView col={3} data={data || []} renderItem={(item) =>{
        return <Pressable>
             <Image
                  source={getPoster(item.poster)}
                  style={styles.poster}
                />
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.audioTitle}>
                  {item.title}
                </Text>
        </Pressable>
      }} />
{/* 
      <View style={}>
        {data?.map(item => {
          return (
            <View style={{width: '33.3%'}} key={item.id}>
              <View style={{padding: 5}}>
               
              </View>
            </View>
          );
        })}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: colors.CONSTRACT,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  audioTitle: {
    color: colors.CONSTRACT,
    fontWeight: '500',
    fontSize: 16,
    marginTop: 5,
  },
  poster:{width: '100%', aspectRatio: 1, borderRadius: 7}
});

export default RecommendedAudios;
