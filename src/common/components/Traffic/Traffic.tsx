import {IData_TrafficItem} from '@/app/newsAPI.types.ts';

type Props={
    item:IData_TrafficItem
}

export const Traffic=({item}:Props)=>{
    const percent = Math.round(item.count * 100);

    return (
        <div>{`${item.value} ${percent}%`}</div>
    )
}