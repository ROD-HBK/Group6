import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View className="relative flex-1 pl-2">
      <TouchableOpacity onPress={toggleMenu} className="p-2">
         {!menuVisible && (
            <FontAwesome name="ellipsis-v" size={20} color="black" />
         )}
         {menuVisible && (
            <FontAwesome name="times" size={20} color="#7454f4" />
         )}
      </TouchableOpacity>

      {menuVisible && (  
              <View className="absolute border-2 border-zinc-300 top-12 -left-72 -right-2 w-96 z-10 py-10 bg-bgsecondary pl-5 pr-11" style={{zIndex:1000,height:'8rem'}}>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/profile" className=''>
                    <FontAwesome name="user-o" size={20} className='text-center font-Roboto text-xl' />
                    <Text className='text-center font-Roboto text-xl'>  profile</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/notification">
                    <FontAwesome name="bell-o" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> Notification</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/about">
                    <FontAwesome name="info-circle" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> About</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/home">
                    <FontAwesome name="home" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> Home</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/ContactUs">
                    <FontAwesome name="phone" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> Contact Us</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/notification">
                    <FontAwesome name="question-circle-o" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> Help</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/notification">
                    <FontAwesome name="cog" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> Settings</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-10 flex-row justify-center border-b-2 border-b-slate-200 pb-2">
                  <Link href="/faqs">
                    <FontAwesome name="book" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> FAQs</Text>
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity className="mb-5 flex-row justify-center border-b-2 border-b-slate-200 pb-2 opacity-25">
                  <Link href="/">
                    <FontAwesome name="sign-out" size={20} className='text-center font-Roboto text-xl'/>
                    <Text className='text-center font-Roboto text-xl'> Logout</Text>
                  </Link>
                </TouchableOpacity>
              </View>
      )}
    </View>
  );
};

export default Menu;
