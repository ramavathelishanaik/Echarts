import Chart from './components/charts/chart1';

function App() {
  return (
    <div className='flex w-full h-[30vh]'>
      <div className='w-1/3  '>
        <Chart className='mt-20' />
      </div>

      <div className='bg-gray-300 w-1/3'>hello</div>
      <div className='bg-green-400 w-1/3'>naik</div>
    </div>
  );
}

export default App;
