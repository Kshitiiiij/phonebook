const AlertBox = ({ onDialog, deleteItem, name }) => {
  const onDel = () => {
    onDialog(false);
    deleteItem(name);
  }
  return (
    <div className="alert-box" onClick={() => onDialog(false)}>
      <div className="alert-box-content" onClick={(e) => e.stopPropagation()}>
        <h3 stlye={{ color: "#111", fontSize: "16px" }}>
          Are you sure you want to delete this?
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="button-red" onClick={() => onDel()}>
            Yes
          </button>
          <button className="button-green" onClick={() => onDialog(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
