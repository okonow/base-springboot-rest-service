import { DonutChart } from '@mantine/charts';
import { useState } from 'react';

interface User {
    id: string;
    title: string;
    description: string;
    IsFinished: boolean;
  }

const MonthGraph = () => {

    const [users, setUsers] = useState<User[]>([]); 



    return <>


    </>;
}

export default MonthGraph;

//<DonutChart withLabelsLine withLabels data={users} />;