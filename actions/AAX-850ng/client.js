function(properties, context) {
  const arr = properties.properties;
  const metadata = arr.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  if (properties.isOnce) {
      posthog.people.set_once(metadata)
    
  } else {
    posthog.people.set(metadata)
  }
}