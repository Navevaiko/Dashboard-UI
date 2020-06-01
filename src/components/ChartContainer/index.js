import React, { useMemo } from 'react';

import {
    MainContainer,
    TotalValue,
    Header,
    Growth,
    ChartTypes,
    ChartButton
} from './style';

import { AiOutlineRise, AiOutlineStock } from 'react-icons/ai';
import { FiBarChart2 } from 'react-icons/fi';

import { Chart } from 'react-charts';

export default function ChartContainer() {
    const data = useMemo(() => [
        {
            label: 'Series 1',
            data: [['Nov', 30000], ['Dec', 38000], ['Jan', 20000], ['Feb', 28000], ['Mar', 26000]]
        },
    ], []);

    const axes = React.useMemo(() => [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { type: 'linear', position: 'left' }
    ], []);

    return(
        <MainContainer>
                <Header>
                    <TotalValue> $ 29,800.65 </TotalValue>

                    <Growth>
                        +2.43%
                        <AiOutlineRise size='1.2em'/>
                    </Growth>

                    <ChartTypes>
                        <ChartButton>
                            <AiOutlineStock />
                        </ChartButton>

                        <ChartButton isSelected={true}>
                            <FiBarChart2 />
                        </ChartButton>
                    </ChartTypes>
                </Header>

                <Chart data={data} axes={axes}></Chart>
        </MainContainer>
    );
}