import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {Asset} from 'expo-asset';
import { SQLiteProvider } from 'expo-sqlite';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const loadDatabase = async () => {
  const dbName = "UtakPera.db";
  const dbAsset = require("./assets/UtakPera.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  } else {
    // Optionally, you can add logic to replace the existing database with the new one
    // if the asset has been updated. This can be done by comparing file sizes, hashes, etc.
    // For simplicity, we'll just replace the database every time the app starts.
    await FileSystem.deleteAsync(dbFilePath);
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

export default function App() {
  const [dbLoaded, setDbLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    const initializeDatabase = async () => {
      await loadDatabase();
      setDbLoaded(true);
    };

    initializeDatabase();
  }, []);

  if(!dbLoaded){  
    return (
    <View style={{flex: 1}}>
      <ActivityIndicator size={"large"} />
      <Text>Loading....</Text>
    </View>
    );
  }

  return (
    <NavigationContainer>
      <React.Suspense
        fallback={
          <View style={{flex: 1}}>
            <ActivityIndicator size={"large"} />
            <Text>Loading....</Text>
          </View>
        }
      >
        <SQLiteProvider
          databaseName='UtakPera.db'
          useSuspense      
          >
            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                  headerTitle: "UtakPera",
                  headerLargeTitle: true
                }}
                />
            </Stack.Navigator>
        </SQLiteProvider>
      </React.Suspense>
    </NavigationContainer>
  );
}


