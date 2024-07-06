
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import handleLogin from '../utils/Authentication/Login/authService';
import handleApiError from '../utils/handleApiError';
const Login = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [messagelocal, setMessage] = useState("");
  const [loginButtonClicked,setLoginButtonClicked]=useState(false)
  const [isError, setIsError]=useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("")
    setLoginButtonClicked(true);
    handleLogin(email, password,setMessage,setIsError,handleApiError,'/home');
  };
  return (
      <ScrollView className="min-h-full">
          <View className="flex-col justify-center items-center px-8 gap-4">
            <View className="w-full flex-col items-center mb-2 pt-3 gap-4">
              <View className="p-1 flex-row justify-center items-center">
                <Image source={require('../assets/images/Logo_redesigned.png')} style={{objectFit:'contain',width:60,height:60}}/>
              </View>
              <Text className="text-sm font-bold mb-4">Hi! Welcome back</Text>
            </View>
            <View className="w-full">
              <View className="w-full mb-4">
                  <View className="flex-row border-b-2 border-gray-300 py-2">
                      <TextInput className="flex-1"  placeholder="Enter your Email" onChangeText={(text) => setEmail(text)}/>
                      <FontAwesome name="user" size={20} color="gray" />
                  </View>
              </View>
              <View className="w-full">
                <View className="flex-row items-center border-b-2 border-gray-300 py-2">
                  <TextInput className="flex-1" placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
                  <FontAwesome name="eye-slash" size={20} color="gray" />
                </View>
              </View>
              {(messagelocal && !isError) && (<View className="w-full"><Text className='text-green-600 text-lg font-mRoboto'>{messagelocal}</Text></View>)}
              {(messagelocal && isError) && (<View className="w-full"><Text className='text-amber-700 text-lg font-mRoboto'>{messagelocal}</Text></View>)}
            </View>
            <TouchableOpacity className="w-full flex-row justify-end">
              <Text className="text-primary mb-4 underline">forgotton password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full bg-primary py-1 rounded-md font-mRoboto mb-4" onPress={handleSubmit}>
              <Text className="text-center text-white text-lg font-mRoboto ">Sign In</Text>
            </TouchableOpacity>
            <Text className='font-rRougeScript text-2xl'>Or</Text>
            <Text className="mb-4">sign in with</Text>
            <View className="flex-row justify-between w-full mb-6">
              <TouchableOpacity className="items-center bg-slate-300 p-2 rounded-full">
                <FontAwesome name="apple" size={20} color="white"/>
              </TouchableOpacity>
              <TouchableOpacity className="items-center bg-slate-300 p-2 rounded-full">
                <FontAwesome name="google" size={20} color="purple" />
              </TouchableOpacity>
              <TouchableOpacity className="items-center bg-slate-300 p-2 rounded-full">
                <FontAwesome name="facebook" size={20} color="blue" /> 
              </TouchableOpacity>
            </View>
            <TouchableOpacity className='w-full'>
              <Text className=" text-text">Don't have an account?&nbsp;&nbsp; 
                <Link href="/register" className=' text-primary underline'>Sign Up</Link>
              </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
  );
};

export default Login;