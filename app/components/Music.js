
import React from 'react'

import Section from './Section'

const style = {
  minHeight: 300,
}

export default () => (
  <Section id='music'>
    <div className='embed-responsive embed-responsive-16by9' style={style}>
      <iframe
        className='embed-responsive-item'
        style={style} 
        src="https://bandcamp.com/EmbeddedPlayer/album=448205632/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
        seamless
      >
        <a href="http://toreroband.bandcamp.com/album/torero-2">Torero (Self-Titled)</a>
      </iframe>
    </div>
  </Section>
)
