import { CustomInput } from '../components';

const addCarForm = () => (
  <div className="grid place-items-center flex-row place-content-center -mx-3 mb-6 bg-gray-background border-r-{10}">
    <h1 className="text-justify text-2xl text-secondinary-default">Add a Car for Rent</h1>

    <form className="place-content-center w-full md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 text-black bg-white flex flex-wrap" action="/" method="post">

      <CustomInput
        label="Car Name"
        type="text"
        id="last"
        placeholder="Car Title"
      />

      <CustomInput
        label="Car Brand"
        type="text"
        id="last"
        placeholder="Brand Name"
      />

      <CustomInput
        label="Rent Prices"
        type="number"
        id="last"
        placeholder="Price in dollars"
      />

      <CustomInput
        label="Capacity"
        type="number"
        id="last"
        placeholder="Capacity in persons"
      />

      <CustomInput
        label="Car Type"
        type="text"
        id="last"
        placeholder="Car Type"
      />

      <CustomInput
        label="Location"
        type="text"
        id="last"
        placeholder="Select your city"
      />

      <button type="submit">Submit</button>
    </form>
  </div>

);

export default addCarForm;
