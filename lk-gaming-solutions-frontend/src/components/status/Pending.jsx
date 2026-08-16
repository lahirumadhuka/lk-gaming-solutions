const Pending = ({ minHeight }) => {
  return (
    <>
      <style>
        {`
            /* Loader */
            .loader-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .loader {
                width: 70px;
                height: 70px;
                border: 8px dotted transparent;
                border-left-color: #BD9B52;
                border-top-color: #BD9B52;
                border-right-color: #BD9B52;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
        `}
      </style>

      <div className="loader-container" style={{ minHeight: minHeight }}>
        <div className="loader"></div>
      </div>
    </>
  );
};

export default Pending;
