/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "../global.css"
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Footer from './components/Footer'

export default function App(){
  return (
    <View className="flex-1 justify-end">
      <Footer/>
    </View>
  )
}
