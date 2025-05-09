import {createTheme,} from '@rneui/themed';

// definir estilo dos componentes que pegamos prontos de bibliotecas

const theme = createTheme({
    components: {
      Button: {
        titleStyle: {
          fontFamily:'Bryndan Write_fix',
          fontWeight: '400',
          fontSize: 20
      },
         containerStyle:{
          justifyContent: 'center',
          alignItems: 'center', 
          zIndex: 2
          
      },
          buttonStyle:{
          borderRadius: 15,
          backgroundColor: '#5D17EB',
          width: 147, 
          height: 52,
              },      
      },
      Switch: {
        trackColor:{
          false: '#5D17EB',
          true: '#5D17EB',
        },
     style: {
      transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }]
     }
      }
    
    },
  }); export default theme;