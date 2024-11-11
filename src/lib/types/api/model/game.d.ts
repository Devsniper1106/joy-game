export type TGameItemDto = {
  id: string
  /** The name of the game */
  name: string
  /** The url of the game package */
  link_url: string
  /** The url of the game icon image */
  icon_url: string
  /** When true, the icon image shoult be shown in large size */
  is_hot?: boolean
  created_at: string
  updated_at: string
}
