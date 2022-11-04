const addCarForm = () => (
  <div className="grid place-items-center flex-row place-content-center -mx-3 mb-6 bg-gray-background border-r-{10}">
    <h1 className="text-justify text-2xl text-secondinary-default">Add a Car for Rent</h1>

    <form className="place-content-center w-full md:w-1/2 px-6 mb-6 md:mb-0 gap-x-3 text-black bg-white flex flex-wrap" action="/" method="post">

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-form-title-color">Car Title</label>
        <input className="bg-form-grey-background border-r-{10}" type="text" id="name" placeholder="Your Title" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Car Brand</label>
        <input className="bg-form-grey-background border-r-{10}" type="text" id="last" placeholder="Brand Name" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Rent Price</label>
        <input className="bg-form-grey-background border-r-{10}" type="number" id="last" placeholder="Price in dollars" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Capacity</label>
        <input className="bg-form-grey-background border-r-{10}" type="number" id="last" placeholder="Capacity in persons" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Car Type</label>
        <input className="bg-form-grey-background border-r-{10}" type="text" id="last" placeholder="Car Type" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Location</label>
        <input className="bg-form-grey-background border-r-{10}" type="text" id="last" placeholder="Select your city" />

      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

);

export default addCarForm;
