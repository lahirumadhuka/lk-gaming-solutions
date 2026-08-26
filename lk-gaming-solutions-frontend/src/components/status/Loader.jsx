import logo from "../../assets/logo.png";

const Loader = ({time}) => {
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
                width: 180px;
                height: 4px;
                overflow: hidden;
                position: relative;
                background: #BD9B52;
                border-radius: 5px;
            }

            .loader::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: #000000;
                border-radius: 5px;
                animation-name: loading;
                animation-timing-function: ease-in-out;
                animation-duration: ${time}ms;
                animation-iteration-count: 1;
            }

            @keyframes loading {
                0% {
                    left: 0%;
                }

                20% {
                    left: 10%;
                }

                50% {
                    left: 50%;
                }

                100% {
                    left: 100%;
                }
            }
        `}
      </style>
      
      <div className="loader-container flex-column min-vh-100">
        <img src={logo} className="img-fluid" style={{ width: "120px"}} />
        <div className="loader mt-3"></div>
      </div>
    </>
  );
};

export default Loader;
