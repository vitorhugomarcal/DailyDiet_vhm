import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'

import { Nunito_400Regular, Nunito_500Medium, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito'

import theme from '@theme/index';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      { fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
