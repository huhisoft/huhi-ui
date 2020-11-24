import { ThemedStyledProps } from 'styled-components'

export default interface IThemeProps {
  name: string,
  palette: { [key: string]: string }
  color: {
    contextMenuBackground: string
    contextMenuForeground: string
    contextMenuHoverBackground: string
    contextMenuHoverForeground: string
    brandHuhi: string
    brandHuhiInteracting: string
    brandHuhiActive: string
    brandHuhiLight: string
    brandBat: string
    brandBatInteracting: string
    brandBatActive: string
    detailDescription: string
    disabled: string
    disabledResourceBlocked: string
    primaryBackground: string
    secondaryBackground: string
    modalOverlayBackground: string
    defaultControl: string
    defaultControlInteracting: string
    defaultControlActive: string
    warn: string
    warnInteracting: string
    warnActive: string
    subtle: string
    subtleBackground: string
    subtleExclude: string
    subtleInteracting: string
    subtleActive: string
    text: string
    panelBackground: string
    panelBackgroundSecondary: string
    lionLogo: string
    inputBorder: string
    separatorLine: string
  }
  fontFamily: {
    heading: string
    body: string
    system: string
  }
}

export type HuhiThemedStyledProps<T> = ThemedStyledProps<T, IThemeProps>
