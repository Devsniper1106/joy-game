import { PRIVACY_POLICY_LINK_PATH } from '@/lib/config'
import '@styles/globals.css'

const page = () => {
  return (
    <iframe
      src={PRIVACY_POLICY_LINK_PATH}
      className="fullScreenIFrameWithHeaderSpacing"
    />
  )
}

export default page
