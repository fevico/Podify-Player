import CategorySelector from '@components/CategorySelector';
import FileSelector from '@components/FileSelector';
import AppButton from '@ui/AppButton';
import { categories } from '@utils/category';
import colors from '@utils/colors';
import {FC, useState} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Text, Pressable} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {types} from 'react-native-document-picker'
import {DocumentPickerResponse} from 'react-native-document-picker';
import * as yup from 'yup';


interface FormField {
    title: string;
    category: string;
    about: string;
    file?: DocumentPickerResponse
    poster?: DocumentPickerResponse
}

const defaultForm: FormField = {
    title: '', 
    category: '', 
    about: '',
}

const audioInfoSchem = yup.object().shape({
    title: yup.string().trim().required('Title is missimg!'), 
    category: yup.string().oneOf(categories, "Category is missing!"), 
    about: yup.string().trim().required('About is missimg!'),
    file: yup.object().shape({
        uri:yup.string().required('Audio file is missimg!'),
        name:yup.string().required('Audio file is missimg!'),
        type:yup.string().required('Audio file is missimg!'),
        size:yup.number().required('Audio file is missimg!'),
    }),

    poster: yup.object().shape({
        uri:yup.string(),
        name:yup.string(),
        type:yup.string(),
        size:yup.number(),
    })
})

interface Props {}

const Upload: FC<Props> = props => {
  const [showCategoryModal, setShoeCategoryModal] = useState(false);
  const [audioInfo , setAudioInfo] = useState({ ...defaultForm });

  const handleUpload = async() =>{
    try {
      const data = await audioInfoSchem.validate(audioInfo);
      console.log(data)

    } catch (error) {
        if(error instanceof yup.ValidationError)
        console.log("validation error: ", error.message)
    
    else console.log(error)
    }
  }

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
          options={{type: [types.images]}}
          onSelect={(poster) => {
            setAudioInfo({...audioInfo, poster})
          }}
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
          options={{type: [types.audio]}}
          onSelect={(file) => {
            setAudioInfo({...audioInfo, file})
          }}

        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          placeholderTextColor={colors.INACTIVE_CONSTRACT}
          placeholder="Title"
          style={styles.input} 
          onChangeText={(text) => {
            setAudioInfo({...audioInfo, title: text})
          }}
        />

        <Pressable onPress={()=>{
            setShoeCategoryModal(true)
        }} style={styles.categorySelector}> 
            <Text style={styles.categorySelectorTitle}>Category</Text>
            <Text style={styles.selectedCategory}>{audioInfo.category}</Text>
        </Pressable>

        <TextInput
          placeholderTextColor={colors.INACTIVE_CONSTRACT}
          placeholder="About"
          style={styles.input}
          numberOfLines={10}
          multiline 
          onChangeText={(text) => {
            setAudioInfo({...audioInfo, about: text})
          }}
        />

        <CategorySelector
          visible = {showCategoryModal}
          onRequestClose={() => {
            setShoeCategoryModal(false);
          }}
          title="Category"
          data={categories}
          renderItem={item => {
            return <Text style={styles.category}>{item}</Text>;
          }}
          onSelect={item => {
            setAudioInfo({...audioInfo, category: item})
          }}
        />

        <View style={{marginBottom: 20}}/>

        <AppButton bordeRadius={7} title="Submit" onPress={handleUpload} />
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
    textAlignVertical: 'top',
  },
  category: {
    padding: 10,
    color:colors.PRIMARY
  },
  categorySelector:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  categorySelectorTitle:{
    color: colors.CONSTRACT
  },
  selectedCategory:{
    color: colors.SECONDARY,
    marginLeft: 5,
    fontStyle: 'italic'
  }
});

export default Upload;
