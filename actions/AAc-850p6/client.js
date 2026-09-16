function(properties, context) {

  const arr = properties.properties;
  const metadata = arr.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  if (properties.isOnce) {
    posthog.register_once(metadata)
  } else {
    posthog.register(metadata)
  }
}