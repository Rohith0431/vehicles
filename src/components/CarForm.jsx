import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => {
    return state.form.cost;
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Car Model</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="e.g. Toyota Corolla"
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              placeholder="e.g. 20000"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>

          <div className="field">
            <button className="button is-link">Add Car</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
