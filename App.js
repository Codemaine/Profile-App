import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, Path } from 'react-native-svg'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      school: "The Lawrenceville School",
      email_address: "danielrozar@gmail.com",
      name: "Daniel Rozar",
      nickname: "r.daniel",
      contact: "+1-987654321"
    }
  }

  render() {
    return (
      <SafeAreaView>
        {/* Navbar Start */}
        <View style={styles.navbar}>
          <Svg style={styles.navbarIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <Path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </Svg>
          <Text style={styles.navbarTitle}>Edit Profile</Text>
          <TouchableOpacity style={{ display: "none" }}><Text>LogOut</Text></TouchableOpacity>
        </View>
        {/* Navbar End */}
        <View style={styles.main}>
          <View style={styles.avatarDiv}>
            <Image style={styles.avatar} source={require('./assets/user.png')} />
            <TouchableOpacity style={styles.avatarButton}>
              <Svg style={styles.avatarIcon} xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <View style={styles.inputDiv}>
              <Text style={styles.label}>School</Text>
              <TextInput style={styles.activeInput} value={this.state.school} />
            </View>
          </View>
          <View style={styles.inputDiv}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.activeInput} value={this.state.email_address} />
          </View>
          <View style={styles.inputDiv}>
            <Text style={styles.activeLabel}>Name</Text>
            <TextInput style={styles.activeInput} value={this.state.name} />
          </View>
          <View style={styles.inputDiv}>
            <Text style={styles.activeLabel}>Nickname</Text>
            <TextInput style={styles.activeInput} value={this.state.nickname} />
          </View>
          <View style={styles.inputDiv}>
            <Text style={styles.activeLabel}>Emergency Contact</Text>
            <View style={styles.iconInput}>
              <TextInput style={styles.activeInput} value={this.state.contact} />
              <Svg style={styles.callIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </Svg>
            </View>
          </View>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>UPDATE CONTACT</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  // navbar styling
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#F7F7F7"
  },
  navbarIcon: {
    color: "black",
    height: 20,
    width: 20,

  },
  navbarTitle: {
    fontSize: 18
  },
  // main content styling
  main: {
    marginVertical: 20,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarDiv: {},
  avatar: {
    height: 200,
    width: 200
  },
  avatarButton: {
    position: "absolute",
    right: 12,
    bottom: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#2EB3E9"
  },
  avatarIcon: {
    color: "white"
  },
  label: {
    color: "silver"
  },
  activeLabel: {
    color: "#79A9FF"
  },
  activeInput: {
    paddingVertical: 10,
    fontSize: 20,
    width: 300
  },
  inputDiv: {
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3"
  },
  callIcon: { 
    position: 'absolute',
     color: "silver", 
     right: 10, 
     height: 20, 
     width: 20 
  },
  iconInput: {
    justifyContent: 'center'
  },
  button: {
    marginTop: 10,
    padding: 15,
    width: 300,
    borderRadius: 50,
    backgroundColor: "#30B4E9"
  },
  buttonText: { 
    color: "white", 
    fontSize: 18, 
    textAlign: "center"
  }
});
