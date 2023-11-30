import colors from '@utils/colors';
import { FC, ReactNode } from 'react';
import {ViewStyle} from 'react-native';
import {View, StyleSheet, Pressable, Text, StyleProp} from 'react-native';


interface Props {
    icon?: ReactNode;
    btnTitle?: string;
    style?: StyleProp<ViewStyle>
}

const FileSelector: FC<Props> = ({icon, btnTitle, style}) =>{
    return  <Pressable style={[styles.btnContainer, style]}>
    <View style={styles.IconContainer}>{icon}</View>
    <Text style={styles.btnTitle}>{btnTitle}</Text>
  </Pressable>};

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      IconContainer: {
        height: 70,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: colors.SECONDARY,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnTitle: {
        color: colors.CONSTRACT,
        marginTop: 5,
      },  });

export default FileSelector;