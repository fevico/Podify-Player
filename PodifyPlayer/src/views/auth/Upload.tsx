import CategorySelector from '@components/CategorySelector';
import FileSelector from '@components/FileSelector';
import AppButton from '@ui/AppButton';
import colors from '@utils/colors';
import {FC, useState} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}

const Upload: FC<Props> = props => {
  const [showCategoryModal, setShoeCategoryModal] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.fileSelectorContainer}>
        <FileSelector
          icon={
            <MaterialCommunityIcon
              name="image-outline"
              size={35}
              color={colors.SECONDARY}
            />
          }
          btnTitle="Select Poster"
        />

        <FileSelector
          icon={
            <MaterialCommunityIcon
              name="file-music-outline"
              size={35}
              color={colors.SECONDARY}
            />
          }
          btnTitle="Select Audio"
          style={{marginLeft: 20}}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          placeholderTextColor={colors.INACTIVE_CONSTRACT}
          placeholder="Title"
          style={styles.input} 
        />

        <TextInput
          placeholderTextColor={colors.INACTIVE_CONSTRACT}
          placeholder="About"
          style={styles.input}
          numberOfLines={10}
          multiline
        />

        <CategorySelector
          visible = {showCategoryModal}
          onRequestClose={() => {
            setShoeCategoryModal(false);
          }}
          title="Category"
          data={['Business']}
          renderItem={item => {
            return <Text style={styles.category}>{item}</Text>;
          }}
          onSelect={item => {
            console.log(item);
          }}
        />

        <AppButton bordeRadius={7} title="Submit" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fileSelectorContainer: {
    flexDirection: 'row',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.SECONDARY,
    borderRadius: 7,
    padding: 10,
    fontSize: 18,
    color: colors.CONSTRACT,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  category: {
    padding: 10,
  },
});

export default Upload;
