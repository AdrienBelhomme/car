const Picker = () => {
  console.log('Picker');
  return (
    <div className="flex flex-col w-486 bg-white rounded-lg p-6">
      <div className="flex items-center mb-6">
        <span className="rounded-full w-3 h-3 bg-btn-blue mr-4 ml-2 shadow-dot-shadow" />
        <h4 className="font-jakarta font-semibold">Pick-Up</h4>
      </div>
      <div className="selectors flex justify-between">
        <div className="seletor border-r">
          <p>Location</p>
          <div>Selector</div>
        </div>
        <div className="seletor">
          <p>Location</p>
          <div>Selector</div>
        </div>
        <div className="seletor">
          <p>Location</p>
          <div>Selector</div>
        </div>
      </div>
    </div>
  );
};

export default Picker;
