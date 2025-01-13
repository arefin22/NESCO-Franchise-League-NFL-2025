/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div>
      <div className="card bg-white text-slate-900 shadow-xl">
        <figure>
          <img
          className="max-h-36 w-full"
            src={props.image}
            alt={props.name}
          />
        </figure>
        {/* name={selectedPlayer.name} image={selectedPlayer.image} designation={selectedPlayer.designation} office={selectedPlayer.office} specialty={selectedPlayer.speciality} basePrice={selectedPlayer.basePrice}  */}
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>Specialty: {props.specialty}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
