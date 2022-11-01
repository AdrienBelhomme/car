const addCarForm = () => (
  <div className="grid flex-row place-content-center auto-rows-auto">
    <h1 className="text-justify text-2xl">Add a Car for Rent</h1>

    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/" method="post">

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Car Title</label>
        <input type="text" id="name" placeholder="Your Title" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Car Brand</label>
        <input type="text" id="last" placeholder="Brand Name" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Rent Price</label>
        <input type="number" id="last" placeholder="Price in dollars" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Capacity</label>
        <input type="number" id="last" placeholder="Capacity in persons" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Car Type</label>
        <input type="text" id="last" placeholder="Car Type" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Location</label>
        <input type="text" id="last" placeholder="Select your city" />

      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

);

export default addCarForm;
