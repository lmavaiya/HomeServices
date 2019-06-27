import React from "react";
import {
<<<<<<< HEAD
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
} from "react-native";
import { Button } from 'react-native-elements';

export default class SignUp extends React.Component {
    state = {
        name: "",
        password: "",
        email: "",
        phone_number: "",
        confirmpassword: "",
        address: "",
        gender: "",
        profilepic: ""
    };
    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };
    //   signUp = async () => {
    //     const { username, password, email, phone_number } = this.state;
    //     try {
    //       // here place your signup logic
    //       console.log("user successfully signed up!: ", success);
    //     } catch (err) {
    //       console.log("error signing up: ", err);
    //     }
    //   };



    static navigationOptions = {
        title: 'SignUp',
        headerStyle: {
            display: 'none',
        },
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("name", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Gender"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("gender", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("email", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("password", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("confirmpassword", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("phone_number", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("address", val)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Profile Picture"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText("profilepic", val)}
                    />


                    <Button title="Signup" buttonStyle={styles.button}></Button>
                    <Text style={styles.goToLogin} onPress={() => navigate({ routeName: "Login" })}>Already have an Account? Login</Text>


                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        marginVertical: 50,
    },
    input: {
        width: 300,
        borderRadius: 25,
        alignSelf: "center",
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 16,
        backgroundColor: 'grey',
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    goToLogin: {
        fontWeight: '500',
        alignSelf: "center",
    },


=======
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class SignUp extends React.Component {
  state = {
    name: "",
    password: "",
    email: "",
    phone_number: "",
    confirmpassword: "",
    address: "",
    gender: "",
    profilepic: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  //   signUp = async () => {
  //     const { username, password, email, phone_number } = this.state;
  //     try {
  //       // here place your signup logic
  //       console.log("user successfully signed up!: ", success);
  //     } catch (err) {
  //       console.log("error signing up: ", err);
  //     }
  //   };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("name", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Gender"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("gender", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("email", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("password", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("confirmpassword", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("phone_number", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("address", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Profile Picture"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText("profilepic", val)}
        />
        <Button
          title="Register"
          // onPress={this.signUp}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate({ routeName: "Login" })}
        >
          <Text> Already have an Account?Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    // padding: 10,
    fontWeight: "bold",
    paddingBottom: 20
  }
>>>>>>> 26df462dbe2890f65ded92f7ad43aba67c72a446
});
