import React from "react";
import {
    Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";


const Rechart = ({ratings}) => {
    
  return (
   <div className="w-full h-[300px] mt-10">
     <h1 className="font-bold text-3xl">Ratings</h1>
    <ResponsiveContainer>
          
        <BarChart data={ratings} layout="vertical">
             
            <XAxis type="number"></XAxis>
            <YAxis dataKey='name' type="category" reversed></YAxis>
           
          
            <Bar dataKey='count' fill="#ff8811" barSize={35}></Bar>
        </BarChart>

    </ResponsiveContainer>
   </div>
  );
};

export default Rechart;
