function(properties, context) {
  var props = AirPosthog.props(properties.properties);
  if (properties.isOnce) {
    posthog.setPersonProperties({}, props);
  } else {
    posthog.setPersonProperties(props);
  }
}
