import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingSpinner = () => <CircularProgress />;

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) =>
  loading ? <LoadingSpinner /> : <Component {...props as P} />;

export default withLoading;
