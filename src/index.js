/*
  react-native-devices
*/
import { Dimensions, PixelRatio } from 'react-native'

const r = PixelRatio.get()
const w = Dimensions.get('window').width * r
const h = Dimensions.get('window').height * r

/*
  PHONES
*/
const DEVICE_IS_X = () => w === 1125 && h === 2436
const DEVICE_IS_PLUS_6_6S_7_8 = () => w === 1242 && h === 2208
const DEVICE_IS_6_6S_7_8 = () => w === 750 && h === 1334
const DEVICE_IS_5_5S_5C_SE = () => w === 640 && h === 1136
const DEVICE_IS_4_4S = () => w === 640 && h === 960
const DEVICE_IS_2G_3G_3GS = () => w === 320 && h === 480

const DEVICE_IF_X = (a, b) => (DEVICE_IS_X() ? a : b)
const DEVICE_IF_PLUS_6_6S_7_8 = (a, b) => (DEVICE_IS_PLUS_6_6S_7_8() ? a : b)
const DEVICE_IF_6_6S_7_8 = (a, b) => (DEVICE_IS_6_6S_7_8() ? a : b)
const DEVICE_IF_5_5S_5C_SE = (a, b) => (DEVICE_IS_5_5S_5C_SE() ? a : b)
const DEVICE_IF_4_4S = (a, b) => (DEVICE_IS_4_4S() ? a : b)
const DEVICE_IF_2G_3G_3GS = (a, b) => (DEVICE_IS_2G_3G_3GS() ? a : b)

/*
  TABLETS
*/
const DEVICE_IS_TABLET = () =>
  (r < 2 && (w >= 1000 || h >= 1000)) || (r === 2 && (w >= 1920 || h >= 1920))
const DEVICE_IF_TABLET = (a, b) => (DEVICE_IS_TABLET() ? a : b)

export const devices = {
  IF_X: (a, b) => DEVICE_IF_X(a, b),
  IF_PLUS_6_6S_7_8: (a, b) => DEVICE_IF_PLUS_6_6S_7_8(a, b),
  IF_6_6S_7_8: (a, b) => DEVICE_IF_6_6S_7_8(a, b),
  IF_5_5S_5C_SE: (a, b) => DEVICE_IF_5_5S_5C_SE(a, b),
  IF_4_4S: (a, b) => DEVICE_IF_4_4S(a, b),
  IF_2G_3G_3GS: (a, b) => DEVICE_IF_2G_3G_3GS(a, b),
  IF_TABLET: (a, b) => DEVICE_IF_TABLET(a, b),
  IS_X: DEVICE_IS_X(),
  IS_PLUS_6_6S_7_8: DEVICE_IS_PLUS_6_6S_7_8(),
  IS_6_6S_7_8: DEVICE_IS_6_6S_7_8(),
  IS_5_5S_5C_SE: DEVICE_IS_5_5S_5C_SE(),
  IS_4_4S: DEVICE_IS_4_4S(),
  IS_2G_3G_3GS: DEVICE_IS_2G_3G_3GS(),
  IS_TABLET: DEVICE_IS_TABLET()
}
