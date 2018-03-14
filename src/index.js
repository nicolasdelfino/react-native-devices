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
const DEVICE_IS_X = () => verifyProfile(1125, 2436)
const DEVICE_IS_PLUS_6_6S_7_8 = () => verifyProfile(1242, 2208)
const DEVICE_IS_6_6S_7_8 = () => verifyProfile(750, 1334)
const DEVICE_IS_5_5S_5C_SE = () => verifyProfile(640, 1136)
const DEVICE_IS_4_4S = () => verifyProfile(640, 960)
const DEVICE_IS_2G_3G_3GS = () => verifyProfile(320, 480)

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
const DEVICE_IS_IPAD_MINI = () => verifyProfile(1536, 2048)
const DEVICE_IS_IPAD = () => verifyProfile(768, 1024)
const DEVICE_IS_IPAD_PRO = () => verifyProfile(2048, 2732)
const DEVICE_IS_IPAD_AIR = () => verifyProfile(1536, 2048)
const DEVICE_IS_IPAD_RETINA = () => verifyProfile(1536, 2048)

const DEVICE_IF_TABLET = (a, b) => (DEVICE_IS_TABLET() ? a : b)
const DEVICE_IF_IPAD_MINI = (a, b) => (DEVICE_IS_IPAD_MINI() ? a : b)
const DEVICE_IF_IPAD = (a, b) => (DEVICE_IS_IPAD() ? a : b)
const DEVICE_IF_IPAD_PRO = (a, b) => (DEVICE_IS_IPAD_PRO() ? a : b)
const DEVICE_IF_IPAD_AIR = (a, b) => (DEVICE_IS_IPAD_AIR() ? a : b)
const DEVICE_IF_IPAD_RETINA = (a, b) => (DEVICE_IS_IPAD_RETINA() ? a : b)

/*
  VERIFY PIXEL PROFILE (portrait / landscape)
*/
const verifyProfile = (a, b) => (w === a && h === b) || (h === a && w === b)

export const devices = {
  IF_X: (a, b) => DEVICE_IF_X(a, b),
  IF_PLUS_6_6S_7_8: (a, b) => DEVICE_IF_PLUS_6_6S_7_8(a, b),
  IF_6_6S_7_8: (a, b) => DEVICE_IF_6_6S_7_8(a, b),
  IF_5_5S_5C_SE: (a, b) => DEVICE_IF_5_5S_5C_SE(a, b),
  IF_4_4S: (a, b) => DEVICE_IF_4_4S(a, b),
  IF_2G_3G_3GS: (a, b) => DEVICE_IF_2G_3G_3GS(a, b),
  IF_TABLET: (a, b) => DEVICE_IF_TABLET(a, b),
  IF_IPAD_MINI: (a, b) => DEVICE_IF_IPAD_MINI(a, b),
  IF_IPAD: (a, b) => DEVICE_IF_IPAD(a, b),
  IF_IPAD_PRO: (a, b) => DEVICE_IF_IPAD_PRO(a, b),
  IF_IPAD_AIR: (a, b) => DEVICE_IF_IPAD_AIR(a, b),
  IF_IPAD_RETINA: (a, b) => DEVICE_IF_IPAD_RETINA(a, b),
  IS_X: DEVICE_IS_X(),
  IS_PLUS_6_6S_7_8: DEVICE_IS_PLUS_6_6S_7_8(),
  IS_6_6S_7_8: DEVICE_IS_6_6S_7_8(),
  IS_5_5S_5C_SE: DEVICE_IS_5_5S_5C_SE(),
  IS_4_4S: DEVICE_IS_4_4S(),
  IS_2G_3G_3GS: DEVICE_IS_2G_3G_3GS(),
  IS_TABLET: DEVICE_IS_TABLET(),
  IS_IPAD_MINI: DEVICE_IS_IPAD_MINI(),
  IS_IPAD: DEVICE_IS_IPAD(),
  IS_IPAD_PRO: DEVICE_IS_IPAD_PRO(),
  IS_IPAD_AIR: DEVICE_IS_IPAD_AIR(),
  IS_IPAD_RETINA: DEVICE_IS_IPAD_RETINA()
}
