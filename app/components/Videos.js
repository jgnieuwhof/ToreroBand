
import React from 'react'

import Section from './Section'

export default () => (
  <Section id='videos'>
    <div className='embed-responsive embed-responsive-16by9'>
      <iframe
        className='embed-responsive-item'
        src='https://www.youtube.com/embed/JyRG1YTkQBM'
        frameBorder='0'
        allowFullScreen
      />
    </div>
  </Section>
)
