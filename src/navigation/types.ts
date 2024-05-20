import { ModalScreenType } from '@/screens/ModalScreen';
import { NewsPostScreenProps } from '@/screens/NewsPostScreen';

export type RootStackParamList = {
  Home: undefined;
  NewsPost: NewsPostScreenProps;
  AddNewPost: undefined;
  Modal: ModalScreenType;
};
