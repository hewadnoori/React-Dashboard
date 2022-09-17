import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, ColumnSeries, DataLabel, Legend, Category } from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

import {Header} from '../../components'

const Bar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m04 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title='Olympic Medal Counts - RIO' />
      <div className='w-full'>
        <ChartComponent
          id='line-chart'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{border:{width:0}}}
          tooltip={{enable:true}}
          background={currentMode === "Dark" ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
          >
            <Inject services={[ColumnSeries, DataLabel, Category, Legend]}/>
            <SeriesCollectionDirective>
              {barCustomSeries.map((item, index)=><SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
      </div>
        
    </div>
  )
}
export default Bar