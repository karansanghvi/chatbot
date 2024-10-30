
const ServiceOptions = (props) => {
  const handleOptionClick = (service) => {
    props.actionProvider.handleServiceSelection(service);
  };

  return (
    <div className="options-container">
      <button onClick={() => handleOptionClick("Summarization")} className="option-button">Summarization</button>
      <button onClick={() => handleOptionClick("Categorization")} className="option-button">Categorization</button>
    </div>
  );
};

export default ServiceOptions;
