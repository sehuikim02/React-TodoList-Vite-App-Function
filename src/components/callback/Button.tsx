import React from "react"

// type ButtonProps = {
//   handleClick: (event) => void,
//   children: ReactNode
// };

function Button({handleClick, children}) {
  console.log(`Button 컴포넌트 ${children}`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);