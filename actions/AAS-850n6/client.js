function(properties, context) {
  const arr = properties.properties;
  const metadata = arr.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
    console.log("memetadata", metadata);
    
  posthog.capture(properties.event_name, metadata);
}