import React from "react";
import renderer from "react-test-renderer";
import TopRectangleCard from "./TopRectangleCard";

it("renders when there are no points", () => {
  const item = {
    title: "Title 2",
    image: "https://i.imgur.com/AzdYlDM.jpg",
  };
  const tree = renderer.create(<TopRectangleCard props={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders when there are 99999 points", () => {
  const item = {
    title: "Title 2",
    image: "https://i.imgur.com/AzdYlDM.jpg",
    points: 99999,
  };
  const tree = renderer.create(<TopRectangleCard props={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
