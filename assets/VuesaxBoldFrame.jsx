const VuesaxBoldFrame = (props) => {
    return (
      <div className="w-6 h-6 left-0 top-0 absolute">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 12 2 C 9.38 2 7.25 4.13 7.25 6.75 C 7.25 9.32 9.26 11.4 11.88 11.49 C 11.96 11.48 12.04 11.48 12.1 11.49 C 12.12 11.49 12.13 11.49 12.15 11.49 C 12.16 11.49 12.16 11.49 12.17 11.49 C 14.73 11.4 16.74 9.32 16.75 6.75 C 16.75 4.13 14.62 2 12 2 Z"
            fill="#A0B5FF"
           />
          <path
            d="M 17.08 14.15 C 14.29 12.29 9.74 12.29 6.93 14.15 C 5.66 15 4.96 16.15 4.96 17.38 C 4.96 18.61 5.66 19.75 6.92 20.59 C 8.32 21.53 10.16 22 12 22 C 13.84 22 15.68 21.53 17.08 20.59 C 18.34 19.74 19.04 18.6 19.04 17.36 C 19.03 16.13 18.34 14.99 17.08 14.15 Z"
            fill="#A0B5FF"
           />
        </svg>
      </div>
    );
  }
  
  VuesaxBoldFrame.defaultProps = {};
  
  export default VuesaxBoldFrame;