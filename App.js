import React from 'react';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from './themes';
import {Switch, Image,View, Text} from 'react-native';
import { Header } from 'react-native-elements';

const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 50px;
  color: ${props => props.theme.text};
  font-family: 'NothingYouCouldDo-Regular';
`;

function HomeScreen() {
  const theme = useTheme();
  return (
    <Container>
      
      <Image
        source={require('./Globe.png')}
        style={{width: 200, height: 200}}
      />
      <Title>Hello World</Title>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={'#ffff'}
        value={theme.mode === 'dark'}
        onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
        style={{transform: [{scaleX: 1.2}, {scaleY: 1.2}]}}
      />
    </Container>
  );
}

function App() {
  return (
    <ThemeManager>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={<Image
          source={require('./cover.png')}
          style={{width: 80, height: 30}}
        />}
        rightComponent={{icon: 'home', color: '#fff'}}
        backgroundColor="#161f27"
      />
      <HomeScreen />
      <View style={{position: 'absolute', 
      left: 0, 
      right: 0, 
      bottom: 0}}>
        <Text style={{textAlign: 'center',backgroundColor:'#161f27', color:'#fff', fontSize:15}}>
        copyright {'\u00A9'}2021 Hussain Saifuddin.
        </Text>
      </View>
    </ThemeManager>
  );
}

export default App;
