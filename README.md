# Reddit Challenge
*Denifer Santiago*

## Diseño 
El diseño está basado en la aplicación real de Reddit que utiliza un diseño en forma de cartas para mostrar las publicaciones, la idea es demostrar la capacidad de crear diseños modernos con React Native.

## Código
Para mejor compresión del código debo destacar lo siguiente:
1. Utilizo una librería de componentes para aumentar la productividad y asegurarme de construir una interfaz moderna: [react-native-paper](https://github.com/callstack/react-native-paper).
2. Utilizo AsyncStorage para cachear algunos datos y mejorar la experiencia de usuario en la pequeña aplicación: [react-native-async-storage](https://github.com/react-native-async-storage/async-storage).
3. Utilizo redux para administrar el estado de la aplicación: [redux](https://github.com/reduxjs/redux).
4. Utilizo mi librería [react-native-auto-cacheable-image](https://github.com/DeniferSantiago/react-native-auto-cacheable-image) para cachear las imagenes haciendo que la aplicación tenga mejor experiencia de usuario mostrando un indicador de carga mientras aparece la imagen y brinda una mejor experiencia la siguiente vez que se debe mostrar la imagen.

### Caracteristicas en el código

- Llamo a **Post** a los datos obtenidos de la api de Reddit.
- Formateo las fechas de manera relativa al formato de twitter.
- Formateo las cantidades para convertirlas a un formato mas pequeño, clasico de las redes sociales.

## Test
`yarn test`

He agregado pruebas para funcionalidades especificas de la aplicacion:

- `TimeFormat.spec.js` Prueba la funcionalidad de formato de horas.
- `Helpers.spec.js` Prueba la funcionalidad de convertir los numeros a un formato minimizado.

## Instrucciones
1. Clonar repositorio: `git clone https://github.com/DeniferSantiago/reddit.git`
2. Instalar dependencias: `yarn`
3. Instalar Pods (Solo IOS en Mac): `cd ios`, `pod install`, `cd ..`.
4. Luego puede pasar a ejecutar la aplicacion o probarla como se describe en lo siguiente: 
   - Ejecutar aplicación: `yarn run android` o `yarn run ios`.
   - Ejecutar en modo *release* (recomendado): `yarn run android --variant=release` o `react-native run-ios --variant=release`.
   - Ejecutar Tests: `yarn test`

## Ayuda
Si tiene alguna duda o inconveniente puede contactarse conmigo para proveerle de asesoría o de un apk: [Enviar correo](mailto:deniferjose05@gmail.com)
