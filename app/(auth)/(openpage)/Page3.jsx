import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OpenpageButton from '../../../components/OpenpageButton'
import { Link } from "expo-router";

export class Page1 extends Component {
  render() {
    return (
      <SafeAreaView>

        <View className="flex flex-row justify-between m-5">
            <Text>3/3</Text>
            <Link className="text-blue-600" href={"/siginin"}>
                <OpenpageButton title={"Skip" } containerStyles={"text-black-800"}></OpenpageButton>
            </Link>
        </View>

        <View>
            <Text className="text-4xl font-mbold" >Bid the Price</Text>
            <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
        </View>
        
        <View>
            <Link className="text-blue-600" href={"/Page2"}>
                <OpenpageButton title={"Prev"} containerStyles={"text-green font-semibold"}></OpenpageButton>
            </Link>
            <Link className="text-blue-600" href={"/signin"}>
                <OpenpageButton title={"Let's get Started"} containerStyles={"text-orange font-semibold"}></OpenpageButton>
            </Link>
        </View>
      </SafeAreaView>
    )
  }
}

export default Page1