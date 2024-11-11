import { TERMS_OF_SERVICE_LINK_PATH } from '@/lib/config'
import '@styles/globals.css'

const page = () => {
  return (
    <iframe
      src={TERMS_OF_SERVICE_LINK_PATH}
      className="fullScreenIFrameWithHeaderSpacing"
    />
  )
}

export default page
