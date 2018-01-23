import React from 'react'
import Title from '../components/Title'

export default () => {
  return (
    <div>
      <Title>
        I would be incredibly grateful if you have a moment for a short
        feedback!
      </Title>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfqn6RPwusBeu34fZf4BBHNLwb9_T5KdcczJrmsRCkoXieuFQ/viewform?embedded=true"
        width="760"
        height="2000"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Google Forms Survey"
      >
        Loading...
      </iframe>
    </div>
  )
}
