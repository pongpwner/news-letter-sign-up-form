import Image from 'next/image'
export default function ListItem({ image, children }: ListItemProps) {
  return (
    <li className="flex gap-1">
      <Image src={image} alt="O"></Image>
      <span className="text-sm">{children}</span>
    </li>
  )
}
type ListItemProps = {
  image: HTMLImageElement
  children: String
}
