import Link from 'next/link';
import { Button, CarCard, Sidebar } from '../components';

const Home = () => (
  <div className="flex">
    <Sidebar />
    <h1 className="text-3xl font-bold underline">
      Hello Team Web3
    </h1>
    <h2 className="text-light-400 font-jakarta">Color light 400, Jakarta Font</h2>
    <h2 className="text-light-400 font-jakarta font-bold">Color light 400, Jakarta Font Bold</h2>
    <h3 className="text-dark-600">Color dark 600</h3>
    <h3 className="text-dark-900">Color dark 900</h3>
    <h3 className="text-success-light-300">success-light-300</h3>
    <h3 className="text-information-light-400">information-light-400</h3>
    <Button text="Rent Now" bgColor="bg-btn-blue" color="text-white" />
    <Link color="text-red-600" href="/addCarForm">Add Car Page</Link>
    <div className="m-2">
      <CarCard />
    </div>
  </div>
);

export default Home;
