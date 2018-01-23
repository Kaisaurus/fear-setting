import React from 'react'
// import Subtitle from '../components/Subtitle'
import PageWrapper from '../components/PageWrapper'
import styled from 'styled-components'
import layout_1 from '../img/fear-setting_layout-1.png'
import layout_2 from '../img/fear-setting_layout-2.png'
import layout_3 from '../img/fear-setting_layout-3.png'
import layout_4 from '../img/fear-setting_layout-4.png'
import layout_5 from '../img/fear-setting_layout-5.png'
import layout_6 from '../img/fear-setting_layout-6.png'

const LayoutImg = styled.img`
  margin: 2em;
`

export default () => {
  return (
    <PageWrapper>
      <LayoutImg alt="fear-setting initial rough design" src={layout_1} />
      <LayoutImg alt="fear-setting initial rough design" src={layout_2} />
      <LayoutImg alt="fear-setting initial rough design" src={layout_3} />
      <LayoutImg alt="fear-setting initial rough design" src={layout_4} />
      <LayoutImg alt="fear-setting initial rough design" src={layout_5} />
      <LayoutImg alt="fear-setting initial rough design" src={layout_6} />
    </PageWrapper>
  )
}
