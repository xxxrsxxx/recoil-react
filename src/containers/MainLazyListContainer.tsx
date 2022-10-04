import React, { useState, useEffect } from "react";
import useIntersectionObserver from "@src/hooks/utils/useInterSectionObserver";

const fakeFetch = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay));

const ListItem = ({ number }: any) => (
  <div className="ListItem" style={{ height: "50px" }}>
    <span>{number}</span>
  </div>
);
function MainLazyListContainer() {
  const [state, setState] = useState({ itemCount: 0, isLoading: false });
  const { itemCount, isLoading } = state;

  const fetchItems = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await fakeFetch();
    setState((prev) => ({
      itemCount: prev.itemCount + 10,
      isLoading: false,
    }));
  };
  useEffect(() => {
    fetchItems().then((r) => r);
  }, []);

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting && !isLoading) await fetchItems();
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  if (!itemCount) return null;
  return (
    <>
      {[...Array(itemCount)].map((_, i) => {
        return <ListItem key={i} number={i} />;
      })}
      <div ref={setTarget} style={{ height: "100px" }}>
        {isLoading && "Loading..."}
      </div>
    </>
  );
}

export default MainLazyListContainer;
