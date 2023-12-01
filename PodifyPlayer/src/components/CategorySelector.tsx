import colors from '@utils/colors';
import {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props<T> {
  data: T[];
  visible?: boolean;
  title?: string;
  renderItem(item: T): JSX.Element;
  onSelect(item: T, index: number): void
  onRequestClose?(): void
}
const CategorySelector = <T extends any>({
  data,
  title,
  visible = false,
  renderItem,
  onSelect,
  onRequestClose
}: Props<T>) => {

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const handleSelect = (item: T, index: number) =>{
        setSelectedIndex(index)
        onSelect(item, index);
        onRequestClose && onRequestClose()
    }

  return (
    <Modal onRequestClose={onRequestClose} visible={visible} transparent>

      <View style={styles.modelContainer}>
      <Pressable onPress={onRequestClose} style={styles.backdrop} />

        <View style={styles.model}>
          <Text style={styles.title}>{title}</Text>

          <ScrollView>
            {data.map((item, index) => {
              return (
                <Pressable onPress={()=> handleSelect(item, index)} key={index} style={styles.selectorContainer}>
                  {selectedIndex === index ? <MaterialCommunityIcon
                    name="radiobox-marked"
                    color={colors.SECONDARY}
                  />: 
                  <MaterialCommunityIcon
                  name="radiobox-blank"
                  color={colors.SECONDARY}
                /> }
                  {renderItem(item)}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.INACTIVE_CONSTRACT,
    zIndex: -1
  },
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparet',
    zIndex: 1
  },
  model: {
    width: '90%',
    maxHeight: '50%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.CONSTRACT,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.PRIMARY,
    paddingVertical: 10,
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CategorySelector;
