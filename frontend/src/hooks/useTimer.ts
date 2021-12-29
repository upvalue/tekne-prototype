import React, { useEffect, useState } from "react";

let subscriptions: {
  [key: string]: () => void
} = {};

setInterval(() => {
  Object.keys(subscriptions).forEach(name => {
    subscriptions[name]();
  });
}, 3000);

export const useTimer = (name: string, callback: () => void, deps: React.DependencyList) => {
  useEffect(() => {
    subscriptions[name] = callback;
    return () => {
      delete subscriptions[name];
    }
    // eslint-disable-next-line
  }, [name, ...deps]);
}