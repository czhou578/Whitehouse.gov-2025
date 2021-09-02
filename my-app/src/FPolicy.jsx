import React from 'react';
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Foreign-Policy Report - May',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Foreign-Policy Report - June',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Foreign-Policy Report - July',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
  
]

const CardExampleGroupProps = () => <Card.Group items={items} itemsPerRow={7}/>

export default CardExampleGroupProps