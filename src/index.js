/*
  react-native-devices
*/
import { Dimensions, PixelRatio } from 'react-native';
const r = PixelRatio.get()
const w = Dimensions.get('window').width * r
const h = Dimensions.get('window').height * r

/*
  IS
*/
const DEVICE_IS_X = () => w === 1125 && h === 2436
const DEVICE_IS_Plus_6_6s_7_8 = () => w === 1242 && h === 2208
const DEVICE_IS_6_6s_7_8 = () => w === 750 && h === 1334
const DEVICE_IS_5_5s_5c_SE = () => w === 640 && h === 1136
const DEVICE_IS_4_4s = () => w === 640 && h === 960
const DEVICE_IS_2G_3G_3GS = () => w === 320 && h === 480

/*
  IF
*/
const DEVICE_IF_X = (a, b) => DEVICE_IS_X() ? a : b
const DEVICE_IF_Plus_6_6s_7_8 = (a, b) => DEVICE_IS_Plus_6_6s_7_8() ? a : b
const DEVICE_IF_6_6s_7_8 = (a, b) => DEVICE_IS_6_6s_7_8() ? a : b
const DEVICE_IF_5_5s_5c_SE = (a, b) => DEVICE_IS_5_5s_5c_SE() ? a : b
const DEVICE_IF_4_4s = (a, b) => DEVICE_IS_4_4s() ? a : b
const DEVICE_IF_2G_3G_3GS = (a, b) => DEVICE_IS_2G_3G_3GS() ? a : b

export default {
  IF_X: DEVICE_IF_X(),
  IF_Plus_6_6s_7_8: DEVICE_IF_Plus_6_6s_7_8(),
  IF_6_6s_7_8: DEVICE_IF_6_6s_7_8(),
  IF_5_5s_5c_SE: DEVICE_IS_5_5s_5c_SE(),
  IF_4_4s: DEVICE_IS_4_4s(),
  IF_2G_3G_3GS: DEVICE_IS_2G_3G_3GS(),
  IS_X: DEVICE_IS_X(),
  IS_Plus_6_6s_7_8: DEVICE_IS_Plus_6_6s_7_8(),
  IS_6_6s_7_8: DEVICE_IS_6_6s_7_8(),
  IS_5_5s_5c_SE: DEVICE_IS_5_5s_5c_SE(),
  IS_4_4s: DEVICE_IS_4_4s(),
  IS_2G_3G_3GS: DEVICE_IS_2G_3G_3GS()
}