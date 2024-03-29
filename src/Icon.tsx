/*
 * icons.tsx
 */

import * as icons from 'react-icons/fa'

export default function Icon({ name, outline }: { name: string, outline?: boolean }) {
  const iconName = `Fa${name}`
  const Component = icons[iconName]
  if (!Component)
    return <span>[INVALID ICON]</span>
  return <Component />
}
