import React from 'react'
import Subtitle from '../components/Subtitle'

export default () => {
  return (
    <div>
      <Subtitle>
        I would be incredibly grateful if you have a moment for some feedback!
      </Subtitle>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfqn6RPwusBeu34fZf4BBHNLwb9_T5KdcczJrmsRCkoXieuFQ/viewform?embedded=true"
        width="760"
        height="1650"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Forms Survey"
      >
        Loading...
      </iframe>
    </div>
  )
}
