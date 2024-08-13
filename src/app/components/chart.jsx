import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CurvedLineChart = () => {
  const data = [
    { name: 'January', revenue: 2 },
    { name: 'February', revenue: 2 },
    { name: 'March', revenue: 1 },
    { name: 'April', revenue: 5 },
    { name: 'May', revenue: 15 },
    { name: 'June', revenue: 23 },
  ];

  return (
    <ResponsiveContainer width="100%" height={200} >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurvedLineChart;

