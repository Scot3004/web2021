/** @jsx jsx */
import { jsx } from 'theme-ui'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Star } from '@emotion-icons/material-twotone'
import TimelineElement from './timelineElement'

import { useThemeUI } from 'theme-ui'

const Timeline = ({ data }) => {
  const { theme } = useThemeUI()

  // TODO: Gatsby build: window.matchMedia('(prefers-reduced-motion: no-preference)').matches === true
  const animationsEnabled = true
  return (
    <VerticalTimeline
      animate={animationsEnabled}
      sx={{
        '&::before': {
          background: theme.colors.primary,
          width: 4,
        },
        '.vertical-timeline-element-icon': {
          boxShadow: '0 4px 40px 0 rgba(0,0,0,0.07)',
        },
      }}
    >
      {data.map((item, index) => (
        <TimelineElement item={item} key={index} />
      ))}
      <VerticalTimelineElement
        iconStyle={{
          background: theme.colors.timeline.previousWorkBG,
          color: theme.colors.timeline.iconColor
        }}
        icon={<Star />}
      ></VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Timeline
