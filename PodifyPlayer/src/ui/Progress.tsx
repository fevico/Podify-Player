import colors from '@utils/colors';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    progress: number
}

const Progress: FC<Props> = ({progress}) =>{
    return <>
        <Text style={styles.title}>{`${progress}%`}</Text>
        <View style={[styles.progressBar, {width: `${progress}%`}]}/>
    </>
};

const styles = StyleSheet.create({
    title:{
        color: colors.CONSTRACT,
        paddingVertical: 2,
        alignSelf: 'flex-end',
    },
    progressBar:{
        height: 10,
        backgroundColor: colors.CONSTRACT,
        borderRadius: 5
    }
  });

export default Progress;