import React, {useState, useEffect} from 'react';
  import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  function App(): React.JSX.Element {
    let ss: number = 0;
    let mm: number = 0;
    let hh: number = 0;

    const [botao, SetBotao] = useState ('Iniciar');
    const [ultimo, SetUltimo] = useState('00:00:000');
    const [fotmattedTime, setFormatted] = useState ('00:00:00');
    const [intervalId, setIntervalId] = useState <NodeJS.Timeout | null>(null);

    return(
      <View style={styles.container}>
         <Image 
         source={require('./src/assets/images/crono.png')}
         />

         <Text style={styles.timer}>{fotmattedTime}</Text>

         <View style={styles.btnArea}> 
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTexto}>{botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.areaTempo}>
            <Text style={styles.textoCorrida}>Último Tempo: 00:00:00</Text>
          </View>
         </View>
    );
  }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A4133C'
      },
      areaTempo: {
       marginTop: 40
      },
      textoCorrida: {
        fontSize:  25,
        fontWeight: 'bold',
        color: '#590D22',
        fontStyle: 'italic'
      },
      timer: {
        marginTop: -160,
        fontSize: 45, 
        fontWeight: 'bold',
        color: '#590D22'
      },
      btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        width: 17,
        borderRadius: 20
      },
      btnTexto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#A4133C'
      },
      btnArea: {
        flexDirection: 'row',
        marginTop: 130,
        height: 40
      }

    });

  export default App;