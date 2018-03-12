import { Dimensions, Platform, PixelRatio } from 'react-native';
const r = PixelRatio.get()
const w = Dimensions.get('window').width * r
const h = Dimensions.get('window').height * r

const IS_X = () => w === 1125 && h === 2436
const IS_Plus_6_6s_7_8 = () => w === 1242 && h === 2208
const IS_6_6s_7_8 = () => w === 750 && h === 1334
const IS_5_5s_5c_SE = () => w === 640 && h === 1136
const IS_4_4s = () => w === 640 && h === 960
const IS_2G_3G_3GS = () => w === 320 && h === 480
const IF_X = (a, b) => IS_X() ? a : b
const IF_Plus_6_6s_7_8 = (a, b) => IS_Plus_6_6s_7_8() ? a : b
const IF_6_6s_7_8 = (a, b) => IS_6_6s_7_8() ? a : b
const IF_5_5s_5c_SE = (a, b) => IS_5_5s_5c_SE() ? a : b
const IF_4_4s = (a, b) => IS_4_4s() ? a : b
const IF_2G_3G_3GS = (a, b) => IS_2G_3G_3GS() ? a : b

export default {
  IF_X: IF_X(),
  IF_Plus_6_6s_7_8: IF_Plus_6_6s_7_8(),
  IF_6_6s_7_8: IF_6_6s_7_8(),
  IF_5_5s_5c_SE: IS_5_5s_5c_SE(),
  IF_4_4s: IS_4_4s(),
  IF_2G_3G_3GS: IS_2G_3G_3GS(),
  IS_X: IS_X(),
  IS_Plus_6_6s_7_8: IS_Plus_6_6s_7_8(),
  IS_6_6s_7_8: IS_6_6s_7_8(),
  IS_5_5s_5c_SE: IS_5_5s_5c_SE(),
  IS_4_4s: IS_4_4s(),
  IS_2G_3G_3GS: IS_2G_3G_3GS()
}