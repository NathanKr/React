import React from "react";
import { useFetchResources } from "./customHooks";

const ResourceListComponentUsingHooks = ({ resource }) => {
  const resources = useFetchResources(resource);
  const resourcesElements = (
    <ul>
      {resources.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{resource}</h2>
      {resourcesElements}
    </div>
  );
};

export default ResourceListComponentUsingHooks;
