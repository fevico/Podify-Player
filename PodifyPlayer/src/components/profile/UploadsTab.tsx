import {useFetchUploadsByProfile} from '@src/hooks/query';
import AudioListItems from '@ui/AudioListItems';
import AudioListLoadingUi from '@ui/AudioListLoadingUi';
import EmptyRecords from '@ui/EmptyRecords';
import {FC} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

interface Props {}

const UploadTab: FC<Props> = props => {
  const {data, isLoading} = useFetchUploadsByProfile();

  if(isLoading) return <AudioListLoadingUi/>

  if(!data?.length)
  return <EmptyRecords title='There is no Audio!'/>

  return (
    <View style={styles.container}>
      {data?.map(item => {
        return (
            <AudioListItems audio={item}/>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

});

export default UploadTab;
