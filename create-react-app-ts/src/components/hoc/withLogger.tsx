import React from "react";

const withLogger = (prefix: string) => (
  WrappedComponent: React.FunctionComponent
) => {
  const WithLogger = (props: any) => {
    console.log(`${prefix}[Props]:`, props);
    return <WrappedComponent {...props} />;
  };
  return WithLogger;
};
export default withLogger;
