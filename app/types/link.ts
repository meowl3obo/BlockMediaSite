import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface ILink 
{ 
  text: string,
  link: string,
}

export interface IIconLink extends ILink
{ 
  icon: IconDefinition
}