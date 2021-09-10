import { extendTheme } from "@chakra-ui/react"
import colors from './colors'
import breakpoints from "./breakpoints"
import config from './theme'


const theme = extendTheme({ colors, breakpoints, config })

export default theme;