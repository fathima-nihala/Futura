'use client'
import { Card, Divider, Subtitle, Text } from "@tremor/react"
import CityPicker from '@/Components/CityPicker';

  

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 p-10 flex flex-col justify-center items-center ">
      <Card className="bg-white max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
      <Subtitle className="text-xl text-center">powerd by niha</Subtitle>
      <Divider className="my-10"/>
      <Card className="bg-gradient-to-br from-teal-600 to-teal-700">
        <CityPicker/>
      </Card>
      </Card>
    </div>
  );
}
