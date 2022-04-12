import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';
//import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 



function alarmList() {
   
    //variable creating to set date and time to the alarm
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    //variable creating to change the date
    const onChange = (event, selectedDate) =>{
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    //variable creating to use the Mode
    const showMode = (currentMode) =>{
      setShow(true);
      setMode(currentMode);
    };
  
    //create the variable Date Picker
    const showDatePicker = () =>{
      showMode('date');
    };
  
    //Create the variable time picker
    const showTimePicker = () => {
      showMode('time');
    };
    
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
        <View style={styles.btnTools}>
            <TouchableOpacity onPress={()=>alert('Pressionado!')}>
              <FontAwesome name="gears" size={24} color="white" />
            </TouchableOpacity>
        </View>

        <View>
              <View>
                  <Button onPress={showDatePicker} title="Show date picker!" />
              </View>
              
              <View>
                <Button onPress={showTimePicker} title="Show time picker!" />
              </View>
              
              
              {show && (
                  <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                  />
              )}
        </View>

        <View style={styles.title}>

            
            <Text style={styles.message}>Set your alarm List below</Text>
            
            <TouchableOpacity onPress={()=>alert('Pressionado!')}>
              <FontAwesome name="plus" size={24} color="white" style={{paddingLeft: 50, paddingTop: 5}}/>
            </TouchableOpacity>
          
        </View>

          
        <ScrollView style={styles.scToDoAlarms}> 
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 1</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 2</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 3</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 4</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 5</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 6</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
            <View style={styles.toDoAlarms}>
                <Text style={styles.toDo}>To Do List 7</Text>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>00</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>20</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Pressionado!')}><Text style={styles.btnSets}>60</Text></TouchableOpacity>
            </View>  
        </ScrollView>  
    
    </View>
      
    
  );
}

function Chronos() {

}

function Temporizer() {

}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName='Alarm'
        labeled = 'false'>
    
    <Tab.Screen name="Alarm" component={alarmList}
    options= {{
      tabBarLabel: 'Alarm',
    tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="alarm-note" size={26} color={color} />
    ),
    }}
    />

<Tab.Screen name="Chronometer" component={Chronos}
    options= {{
      tabBarLabel: 'Chronos',
    tabBarIcon: ({ color }) => (
      <Entypo name="back-in-time" size={26} color={color} />
    ),
    }}
    />

<Tab.Screen name="Temporizer" component={Temporizer}
    options= {{
      tabBarLabel: 'Temporizer',
    tabBarIcon: ({ color }) => (
      <Entypo name="time-slot" size={24} color={color} />
    ),
    }}
    />
  </Tab.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#475989', //#5020D8 e #FFFF00
    alignItems: 'center',
    justifyContent: 'center',
    height: '200%',
  },
  message: { //static text to help the user what to do
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    
  },
  toDoAlarms: { //to do List Alarm settings
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 5,
    borderColor: '#334063',
    backgroundColor: '#2A344F', //334063
  },
  btnSets: {
    fontSize: 15,
    color: '#ffffff',
    padding: 20,
    textAlign: 'center',
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    
  },
  title: {
    flex: .2, //I want the title 20% up the center
    flexDirection: 'row',
    padding: 20,
  },
  btnTools: { //Styles of the gear tool
    flex: .9,
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    paddingRight: 20,
  },
  toDo: { //text formats
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
    textAlignVertical: 'center',
    paddingRight: 60,
    marginTop: 0,
  },
  scToDoAlarms: { //creation of new alarm buttons
    flex: 1,
    width: '98%',
  },
});


//<Text>Selected: {date.toLocaleString()}</Text> 
