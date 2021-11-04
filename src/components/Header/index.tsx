import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import LogoSvg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto';

import { style } from './styles';

export function Header(){

  const {user,signOut} = useAuth();

  return (
    <View style={style.container}>

      <LogoSvg/>
      
      <View style={style.logoutButton}>
        {
          user &&
          <TouchableOpacity onPress={signOut}>
            <Text style={style.logoutText}>
              Sair
            </Text>
          </TouchableOpacity>
        }
        <UserPhoto
          imageUri={user?.avatar_url}
          
        />
      </View>

        
    </View>
  );
}